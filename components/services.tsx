'use client'

import { Laptop, Dumbbell, ClipboardList, HeartHandshake, LineChart, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { Reveal } from './reveal'

const icons = [Laptop, Dumbbell, ClipboardList, HeartHandshake, LineChart]

export function Services() {
  const { t, waLink } = useLanguage()

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {t.services.label}
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {t.services.title}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{t.services.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            const featured = i === 0
            return (
              <Reveal
                key={item.title}
                delay={i}
                className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 ${
                  featured
                    ? 'border-gold/40 bg-gradient-to-br from-card to-background lg:row-span-1'
                    : 'border-border/60 bg-card/40 hover:border-gold/40'
                } hover:-translate-y-1`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gold/5 blur-2xl transition-opacity duration-500 group-hover:bg-gold/15" />
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground/40 transition-all duration-300 group-hover:text-gold" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.desc}</p>
              </Reveal>
            )
          })}
        </div>

        {/* CTA */}
        <Reveal delay={1} className="mt-12 flex justify-center">
          <a
            href={waLink(t.whatsappMessages.services)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-gold-bright"
          >
            {t.services.cta}
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
