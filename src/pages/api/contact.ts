import type { NextApiRequest, NextApiResponse } from 'next';
import { HONEYPOT_FIELD } from '../../../content/contact';
import { contact as contactTr } from '../../../content/tr/contact';
import { contact as contactEn } from '../../../content/en/contact';

/**
 * PAKET-P7 G1. Contact form → e-mail to emre@doveify.io through the Resend REST API (no SDK: one fetch).
 * Env (Netlify, both set — Emre 05.11.2026): RESEND_API_KEY, RESEND_FROM (sender on the domain verified in
 * Resend); optional CONTACT_TO (default emre@doveify.io). The message is only e-mailed, nothing is stored
 * (privacy text §5/§7a); the Netlify Forms fallback was removed (P7 son). No key → 503, Resend error → 502;
 * the form shows its error line + WhatsApp link for both. Spam: honeypot field (filled → 200 without
 * sending) + a per-IP rate limit (5 requests / 10 minutes, in memory: best effort per function instance).
 */
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

const SECTORS = new Set([...contactTr.form.sectors, ...contactEn.form.sectors]);
const SERVICES = new Set([...contactTr.form.services, ...contactEn.form.services]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = { name: string; phone: string; email: string; business: string; sector: string; service: string; message: string; consent: boolean; locale: string };

const str = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '');
const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ');

export function validateContact(body: Record<string, unknown>): { fields: Fields; errors: string[] } {
    const fields: Fields = {
        name: oneLine(str(body.name, 100)),
        phone: oneLine(str(body.phone, 30)),
        email: oneLine(str(body.email, 120)),
        business: oneLine(str(body.business, 120)),
        sector: str(body.sector, 60),
        service: str(body.service, 60),
        message: str(body.message, 2000),
        consent: body.consent === true || body.consent === 'true' || body.consent === 'on',
        locale: body.locale === 'en' ? 'en' : 'tr'
    };
    const errors: string[] = [];
    if (fields.name.length < 2) errors.push('name');
    const digits = fields.phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 15) errors.push('phone');
    if (fields.email && !EMAIL_RE.test(fields.email)) errors.push('email');
    // P7 düzeltme: business / sector / service are optional; a sent sector or service must be one of the list.
    if (fields.sector && !SECTORS.has(fields.sector)) errors.push('sector');
    if (fields.service && !SERVICES.has(fields.service)) errors.push('service');
    if (!fields.consent) errors.push('consent');
    return { fields, errors };
}

function rateLimited(ip: string): boolean {
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
    recent.push(now);
    hits.set(ip, recent);
    return recent.length > RATE_LIMIT;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ ok: false });
    }
    const body = (typeof req.body === 'object' && req.body ? req.body : {}) as Record<string, unknown>;

    // Honeypot: bots fill every field. Answer like a success so they don't retry.
    if (str(body[HONEYPOT_FIELD], 200)) return res.status(200).json({ ok: true });

    const forwarded = req.headers['x-nf-client-connection-ip'] ?? req.headers['x-forwarded-for'];
    const ip = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(',')[0].trim() || req.socket.remoteAddress || 'unknown';
    if (rateLimited(ip)) return res.status(429).json({ ok: false, error: 'rate_limited' });

    const { fields, errors } = validateContact(body);
    if (errors.length) return res.status(400).json({ ok: false, error: 'invalid', fields: errors });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('contact: RESEND_API_KEY is not set');
        return res.status(503).json({ ok: false, error: 'not_configured' });
    }

    const dash = (value: string) => value || '—'; // empty optional field
    const text = [
        `Ad Soyad: ${fields.name}`,
        `Telefon: ${fields.phone}`,
        `E-posta: ${dash(fields.email)}`,
        `İşletme / Marka: ${dash(fields.business)}`,
        `Sektör: ${dash(fields.sector)}`,
        `İstenen çalışma: ${dash(fields.service)}`,
        `Dil: ${fields.locale.toUpperCase()}`,
        `KVKK onayı: evet`,
        '',
        'Projenizle ilgili kısaca bilgi:',
        dash(fields.message)
    ].join('\n');

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
                from: process.env.RESEND_FROM || 'Doveify Site <onboarding@resend.dev>',
                to: [process.env.CONTACT_TO || 'emre@doveify.io'],
                subject: `Yeni iletişim talebi — ${fields.business || fields.name}${fields.service ? ` (${fields.service})` : ''}`,
                text,
                ...(fields.email ? { reply_to: fields.email } : {})
            })
        });
        if (!response.ok) {
            console.error('contact: resend error', response.status, (await response.text()).slice(0, 300));
            return res.status(502).json({ ok: false, error: 'send_failed' });
        }
        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error('contact: resend request failed', error);
        return res.status(502).json({ ok: false, error: 'send_failed' });
    }
}
