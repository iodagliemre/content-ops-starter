import SubPage from './SubPage';
import ContactForm from './ContactForm';
import WhatsApp from '../svgs/whatsapp';
import Mail from '../svgs/mail';
import Instagram from '../svgs/instagram';
import { CONTACT_PATH, type Locale } from '../../../content/locale';
import type { Dict } from '../../../content/dict';
import type { ContactChannel, ContactContent } from '../../../content/contact';

/**
 * PAKET-P7 G1 (Emre #1, #7). /iletisim/ and /en/contact/. Desktop: left column H1 (300 48px) + subline +
 * four channel cards, right column the form. Mobile: heading, form, then the cards. Cards: dark, 1px border,
 * radius 12, monochrome white 20px icon that turns blue on hover — no WhatsApp green / Instagram pink.
 * Motion: only the form fades up once (.v2-fade-up). The heading is static: with everything starting at
 * opacity 0 Lighthouse found no LCP element (NO_LCP), the H1 is the page's LCP.
 */
const ICONS = { whatsapp: WhatsApp, email: Mail, instagram: Instagram } as const;

export default function ContactPage({ locale, dict, content }: { locale: Locale; dict: Dict; content: ContactContent }) {
    return (
        <SubPage locale={locale} dict={dict} paths={CONTACT_PATH} meta={content.meta}>
            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-20 pt-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-8 lg:gap-y-10 lg:pb-32 lg:pt-16">
                <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
                    <h1 className="text-[32px] font-light leading-[1.15] text-white lg:text-[48px]">{content.heading}</h1>
                    <p className="mt-4 max-w-[440px] text-[16px] font-normal leading-[1.6] text-v2-text-secondary lg:text-[18px]">{content.subline}</p>
                </div>

                <div className="v2-fade-up lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" style={{ animationDelay: '150ms' }}>
                    <ContactForm t={content.form} successHref="#whatsapp" />
                </div>

                <ul aria-label={content.channelsLabel} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:grid-cols-1 lg:self-start">
                    {content.channels.map((channel) => (
                        <li key={channel.id}>
                            <ChannelCard channel={channel} />
                        </li>
                    ))}
                </ul>
            </section>
        </SubPage>
    );
}

function ChannelCard({ channel }: { channel: ContactChannel }) {
    const Icon = ICONS[channel.kind];
    return (
        <a
            id={channel.id}
            href={channel.href}
            target={channel.external ? '_blank' : undefined}
            rel={channel.external ? 'noopener' : undefined}
            className="group flex scroll-mt-24 items-center gap-4 rounded-xl border border-v2-border bg-v2-bg-base px-5 py-4 transition-colors hover:border-v2-blue"
        >
            <Icon className="h-5 w-5 shrink-0 fill-current text-white transition-colors group-hover:text-v2-blue" />
            <span className="min-w-0">
                <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-v2-text-secondary">{channel.label}</span>
                <span className="mt-1 block truncate text-[16px] font-normal text-white">{channel.value}</span>
            </span>
        </a>
    );
}
