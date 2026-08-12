'use client'

import Image from 'next/image'
import { Award, Target, UserCheck, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { Reveal } from './reveal'

const icons = [Award, Target, UserCheck, TrendingUp]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Image */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/15">
            <Image
              src="/lucas-trofeos.jpg"
              alt="Lucas Franco com troféus de campeonatos de fisiculturismo"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
          {/* Floating signature card */}
          <div className="glass absolute bottom-4 left-4 right-4 rounded-xl p-4 lg:left-6 lg:right-auto">
            <p className="font-serif text-sm font-semibold text-gradient-gold">{t.about.signature}</p>
          </div>
          <div className="pointer-events-none absolute -right-4 -top-4 -z-10 size-40 rounded-full bg-gold/10 blur-3xl" />
        </Reveal>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {t.about.label}
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-lg font-medium leading-relaxed text-foreground/90 text-pretty">
              {t.about.lead}
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{t.about.p1}</p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{t.about.p2}</p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {t.about.pillars.map((p, i) => {
              const Icon = icons[i]
              return (
                <Reveal key={p.title} delay={i} className="group rounded-xl border border-border/60 bg-card/40 p-5 transition-all duration-300 hover:border-gold/40 hover:bg-card">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-3.5 font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
