'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'
import { Reveal } from './reveal'
import { AnimatedCounter } from './animated-counter'

const pairs = [
  { before: '/before-1.jpg', after: '/after-1.jpg' },
  { before: '/before-2.jpg', after: '/after-2.jpg' },
  { before: '/before-3.jpg', after: '/after-3.jpg' },
  { before: '/before-4.jpg', after: '/after-4.jpg' },
  { before: '/before-5.jpg', after: '/after-5.jpg' },
  { before: '/before-6.jpg', after: '/after-6.jpg' },
]

export function Results() {
  const { t } = useLanguage()

  return (
    <section id="results" className="relative border-y border-border/40 bg-card/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {t.results.label}
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {t.results.title}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{t.results.subtitle}</p>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {t.results.stats.map((s, i) => (
            <Reveal key={s.label} delay={i} className="rounded-2xl border border-gold/15 bg-background/60 p-6 text-center">
              <div className="font-serif text-4xl font-bold text-gradient-gold lg:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>

        {/* Before / After gallery */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.results.transformations.map((tr, i) => (
            <Reveal
              key={tr.name}
              delay={i}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-background/60 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_20px_60px_-25px_var(--gold)]"
            >
              <div className="grid grid-cols-2">
                {[
                  { src: pairs[i].before, label: t.results.beforeLabel, tone: 'bg-muted/70 text-muted-foreground' },
                  { src: pairs[i].after, label: t.results.afterLabel, tone: 'bg-gold text-primary-foreground' },
                ].map((col, j) => (
                  <div key={j} className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={col.src}
                      alt={`${tr.name} - ${col.label}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <span className={`absolute left-2 top-2 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${col.tone}`}>
                      {col.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1}>
          <p className="mt-8 text-center text-xs text-muted-foreground/70">{t.results.disclaimer}</p>
        </Reveal>
      </div>
    </section>
  )
}
