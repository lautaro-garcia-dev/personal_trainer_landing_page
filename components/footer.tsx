'use client'

import { Instagram } from 'lucide-react'
import { useLanguage, INSTAGRAM_URL } from '@/lib/i18n'
import { LanguageSwitcher } from './language-switcher'
import { WhatsAppIcon } from './whatsapp-icon'

export function Footer() {
  const { t, waLink } = useLanguage()

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#results', label: t.nav.results },
    { href: '#services', label: t.nav.services },
    { href: '#process', label: t.nav.process },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#faq', label: t.nav.faq },
  ]

  return (
    <footer className="relative border-t border-border/40 bg-card/20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-lg border border-gold/30 bg-card font-serif text-lg font-bold text-gradient-gold">
              LF
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg font-bold tracking-tight">Lucas Franco</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold/70">Coaching</span>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground text-pretty">
            {t.footer.tagline}
          </p>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">
            {t.footer.nav}
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">
            {t.footer.contact}
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={waLink(t.whatsappMessages.floating)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <WhatsAppIcon className="size-4 text-gold" />
              {t.footer.whatsapp} · +49 160 1766495
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <Instagram className="size-4 text-gold" />
              {t.footer.instagram} · @lucasfranco.coaching
            </a>
          </div>
          <div className="mt-6">
            <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">{t.footer.language}</p>
            <LanguageSwitcher className="self-start" />
          </div>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left lg:px-8">
          <p>© {new Date().getFullYear()} Lucas Franco Coaching. {t.footer.rights}</p>
          <div className="inline-flex items-center gap-2">
            <span>
              {t.footer.credit} <span className="font-medium text-foreground/80">Nexo Studio</span>
            </span>
            <a
              href={`https://wa.me/5493571569078?text=${encodeURIComponent(t.footer.creditMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Nexo Studio"
              className="transition-colors hover:text-gold"
            >
              <WhatsAppIcon className="size-4" />
            </a>
            <a
              href="https://www.instagram.com/nexostudio.io/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Nexo Studio"
              className="transition-colors hover:text-gold"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
