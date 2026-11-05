import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import classNames from 'classnames';
import ChevronDown from '../svgs/chevron-down';
import { useLocale } from './locale';
import { CONTACT_FORM_NAME, HONEYPOT_FIELD, whatsappHref, type ContactFormContent } from '../../../content/contact';

/**
 * PAKET-P7 G1. Contact form. POST /api/contact/ → Resend (RESEND_API_KEY + RESEND_FROM in Netlify). No other
 * channel: the Netlify Forms fallback was removed (Emre, P7 son) — site-form data is only e-mailed, never stored
 * (privacy text §5/§7a). Any failure (no key, Resend error, network, rate limit) shows the error line plus a
 * "WhatsApp'tan yazın" link. Validation runs in the browser first (same rules as the API route); errors are not
 * red: secondary text with a short blue line, and the field border turns blue. On success the form is replaced
 * by the confirmation and a link to the WhatsApp card.
 * P7 düzeltme (Emre): only Ad Soyad, Telefon and the KVKK consent are required; e-mail (format-checked when
 * filled), business, sector, service and message are optional. Native <option>s are dark-on-white (the OS
 * draws the open list, it can't be forced dark); the closed select shows its value in white, the empty
 * placeholder in secondary. Autofill colours are overridden in main.css (.v2-root :-webkit-autofill).
 */
type FieldName = 'name' | 'phone' | 'email' | 'business' | 'sector' | 'service' | 'message' | 'consent';
type Errors = Partial<Record<FieldName, string>>;
type Status = 'idle' | 'sending' | 'success' | 'error' | 'rate_limited';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ORDER: FieldName[] = ['name', 'phone', 'email', 'business', 'sector', 'service', 'message', 'consent'];

const FIELD_CLASS =
    'block w-full rounded-lg border bg-transparent px-4 text-[16px] font-normal text-white transition-colors placeholder:text-v2-text-secondary focus:border-v2-blue focus:outline-none';

function validate(data: FormData, t: ContactFormContent): Errors {
    const value = (key: string) => String(data.get(key) ?? '').trim();
    const errors: Errors = {};
    if (value('name').length < 2) errors.name = t.errors.required;
    const digits = value('phone').replace(/\D/g, '');
    if (!value('phone')) errors.phone = t.errors.required;
    else if (digits.length < 10 || digits.length > 15) errors.phone = t.errors.phone;
    if (value('email') && !EMAIL_RE.test(value('email'))) errors.email = t.errors.email;
    if (!data.get('consent')) errors.consent = t.errors.consent;
    return errors;
}

export default function ContactForm({ t, successHref }: { t: ContactFormContent; successHref: string }) {
    const locale = useLocale();
    const formRef = useRef<HTMLFormElement>(null);
    const successRef = useRef<HTMLDivElement>(null);
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState<Status>('idle');

    // Move focus to the confirmation once it is in the DOM (a rAF after setStatus could run before the commit).
    useEffect(() => {
        if (status === 'success') successRef.current?.focus();
    }, [status]);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const nextErrors = validate(data, t);
        setErrors(nextErrors);
        const firstInvalid = ORDER.find((key) => nextErrors[key]);
        if (firstInvalid) {
            (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
            return;
        }

        setStatus('sending');
        const payload: Record<string, string | boolean> = { locale, consent: true };
        data.forEach((value, key) => {
            if (key !== 'consent') payload[key] = String(value);
        });

        let ok = false;
        try {
            const response = await fetch('/api/contact/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (response.status === 429) {
                setStatus('rate_limited');
                return;
            }
            // Success only when the route says so in JSON (`{ ok: true, id }`), never on a bare 2xx: an HTML page
            // or any other 200 must not show "Talebiniz alındı".
            const result = (await response.json().catch(() => null)) as { ok?: boolean } | null;
            ok = response.ok && result?.ok === true;
        } catch {
            ok = false;
        }

        setStatus(ok ? 'success' : 'error');
    }

    if (status === 'success') {
        return (
            <div ref={successRef} tabIndex={-1} role="status" className="rounded-xl border border-v2-border p-8 focus:outline-none lg:p-10">
                <span aria-hidden="true" className="block h-px w-10 bg-v2-blue" />
                <p className="mt-6 text-[24px] font-light leading-[1.3] text-white lg:text-[28px]">{t.success}</p>
                <a href={successHref} className="mt-6 inline-flex h-11 items-center text-[14px] font-medium text-v2-text-primary transition-colors hover:text-v2-blue">
                    {t.successLink} →
                </a>
            </div>
        );
    }

    const sending = status === 'sending';
    const errorText = status === 'error' ? t.errors.generic : status === 'rate_limited' ? t.errors.rateLimited : null;

    return (
        <form
            ref={formRef}
            name={CONTACT_FORM_NAME}
            method="POST"
            action="/api/contact/"
            noValidate
            onSubmit={onSubmit}
            className="rounded-xl border border-v2-border p-6 lg:p-8"
        >
            {/* Honeypot: display:none (not just off-screen) — browser autofill skips non-rendered fields, simple
                bots still fill it. Neutral name, no label text an autofill heuristic could match (P7 Resend fix). */}
            <div hidden aria-hidden="true">
                <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" data-lpignore="true" data-1p-ignore="" defaultValue="" />
            </div>

            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
                <Field id="name" label={t.name} required error={errors.name}>
                    <input id="name" name="name" type="text" autoComplete="name" maxLength={100} required {...fieldProps('name', errors)} />
                </Field>
                <Field id="phone" label={t.phone} required error={errors.phone}>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={30} required {...fieldProps('phone', errors)} />
                </Field>
                <Field id="email" label={t.email} error={errors.email}>
                    <input id="email" name="email" type="email" autoComplete="email" maxLength={120} {...fieldProps('email', errors)} />
                </Field>
                <Field id="business" label={t.business} error={errors.business}>
                    <input id="business" name="business" type="text" autoComplete="organization" maxLength={120} {...fieldProps('business', errors)} />
                </Field>
                <Field id="sector" label={t.sector} error={errors.sector}>
                    <Select id="sector" options={t.sectors} placeholder={t.selectPlaceholder} errors={errors} />
                </Field>
                <Field id="service" label={t.service} error={errors.service}>
                    <Select id="service" options={t.services} placeholder={t.selectPlaceholder} errors={errors} />
                </Field>
                <div className="sm:col-span-2">
                    <Field id="message" label={t.message} error={errors.message}>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            maxLength={2000}
                            className={classNames(FIELD_CLASS, 'resize-y py-3 leading-[1.6]', errors.message ? 'border-v2-blue' : 'border-v2-border')}
                        />
                    </Field>
                </div>
            </div>

            <div className="mt-6">
                <label htmlFor="consent" className="flex cursor-pointer items-start gap-3 text-[14px] font-normal leading-[1.6] text-v2-text-secondary">
                    <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        aria-invalid={errors.consent ? true : undefined}
                        aria-describedby={errors.consent ? 'consent-error' : undefined}
                        className="mt-[3px] h-[18px] w-[18px] shrink-0 cursor-pointer accent-v2-blue"
                    />
                    <span>
                        {t.consent.before}
                        <a href={t.consent.href} target="_blank" rel="noopener" className="text-white underline decoration-v2-border underline-offset-4 transition-colors hover:text-v2-blue">
                            {t.consent.link}
                        </a>
                        {t.consent.after}
                        <span aria-hidden="true"> *</span>
                    </span>
                </label>
                {errors.consent && <ErrorLine id="consent-error">{errors.consent}</ErrorLine>}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-v2-blue px-6 text-[13px] font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                    {sending ? t.sending : t.submit}
                </button>
            </div>
            <div aria-live="polite">
                {errorText && (
                    <ErrorLine>
                        {errorText}{' '}
                        <a href={whatsappHref(locale)} target="_blank" rel="noopener" className="font-medium text-white underline decoration-v2-border underline-offset-4 transition-colors hover:text-v2-blue">
                            {t.errors.whatsappLink}
                        </a>
                    </ErrorLine>
                )}
            </div>
        </form>
    );
}

function fieldProps(name: FieldName, errors: Errors) {
    return {
        'aria-invalid': errors[name] ? true : undefined,
        'aria-describedby': errors[name] ? `${name}-error` : undefined,
        className: classNames(FIELD_CLASS, 'h-12', errors[name] ? 'border-v2-blue' : 'border-v2-border')
    };
}

function Field({ id, label, required, error, children }: { id: FieldName; label: string; required?: boolean; error?: string; children: ReactNode }) {
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-[13px] font-medium text-v2-text-secondary">
                {label}
                {required && <span aria-hidden="true"> *</span>}
            </label>
            {children}
            {error && <ErrorLine id={`${id}-error`}>{error}</ErrorLine>}
        </div>
    );
}

// Open list: OS-drawn, so options get explicit dark text on white (#0B1220 / #fff) to stay readable.
const OPTION_CLASS = 'bg-white text-[#0B1220]';

function Select({ id, options, placeholder, errors }: { id: 'sector' | 'service'; options: string[]; placeholder: string; errors: Errors }) {
    const { className, ...aria } = fieldProps(id, errors);
    const [empty, setEmpty] = useState(true);
    return (
        <div className="relative">
            <select
                id={id}
                name={id}
                defaultValue=""
                onChange={(event: ChangeEvent<HTMLSelectElement>) => setEmpty(event.target.value === '')}
                {...aria}
                className={classNames(className, 'appearance-none pr-10')}
                // inline, not a class: FIELD_CLASS already sets text-white and two text-* utilities would race
                style={{ color: empty ? 'var(--color-v2-text-secondary)' : '#fff' }}
            >
                <option value="" className={OPTION_CLASS}>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option} value={option} className={OPTION_CLASS}>
                        {option}
                    </option>
                ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 fill-current text-v2-text-secondary" />
        </div>
    );
}

function ErrorLine({ id, children }: { id?: string; children: ReactNode }) {
    return (
        <p id={id} className="mt-2 flex items-center gap-2 text-[13px] font-normal text-v2-text-secondary">
            <span aria-hidden="true" className="h-px w-4 shrink-0 bg-v2-blue" />
            <span>{children}</span>
        </p>
    );
}
