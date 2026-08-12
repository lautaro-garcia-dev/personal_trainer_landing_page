'use client'

import { useLanguage } from '@/lib/i18n'
import { Reveal } from './reveal'

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="relative border-y border-border/40 bg-card/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {t.process.label}
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {t.process.title}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{t.process.subtitle}</p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* connector line */}
          <div className="absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent lg:block" />
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {t.process.steps.map((step, i) => (
              <Reveal key={step.title} delay={i} className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-full border border-gold/30 bg-background font-serif text-xl font-bold text-gradient-gold lg:mx-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
