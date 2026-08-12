'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { LanguageSwitcher } from './language-switcher'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { t, waLink } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#results', label: t.nav.results },
    { href: '#services', label: t.nav.services },
    { href: '#process', label: t.nav.process },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#faq', label: t.nav.faq },
  ]

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'glass-strong border-b border-gold/10 py-3'
            : 'border-b border-transparent py-5',
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#hero" className="group flex items-center gap-2.5" aria-label="Lucas Franco home">
            <span className="flex size-9 items-center justify-center rounded-lg border border-gold/30 bg-card font-serif text-lg font-bold text-gradient-gold">
              LF
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-base font-bold tracking-tight">Lucas Franco</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold/70">Coaching</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher />
            <a
              href={waLink(t.whatsappMessages.nav)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-gold-bright hover:shadow-[0_0_24px_-4px_var(--gold)]"
            >
              {t.nav.cta}
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex size-10 items-center justify-center rounded-lg border border-gold/20 bg-card/60 text-foreground"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-gold/15 bg-card px-6 py-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-gradient-gold">Lucas Franco</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex size-10 items-center justify-center rounded-lg border border-gold/20 text-foreground"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="border-b border-border/40 py-4 text-lg font-medium text-foreground/90 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-4 pt-8">
                <LanguageSwitcher className="self-start" />
                <a
                  href={waLink(t.whatsappMessages.nav)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-gold px-6 py-3.5 text-center text-base font-semibold text-primary-foreground"
                >
                  {t.nav.cta}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
