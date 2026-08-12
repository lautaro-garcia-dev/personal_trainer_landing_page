'use client'

import { Star, Quote } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { Reveal } from './reveal'

const initialsTone = ['bg-gold/15 text-gold', 'bg-gold/15 text-gold', 'bg-gold/15 text-gold']

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {t.testimonials.label}
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {t.testimonials.title}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{t.testimonials.subtitle}</p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i}
              className="relative flex flex-col rounded-2xl border border-border/60 bg-card/40 p-7 transition-all duration-500 hover:border-gold/40 hover:bg-card"
            >
              <Quote className="absolute right-6 top-6 size-8 text-gold/15" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-5 flex-1 leading-relaxed text-foreground/90">{`“${item.quote}”`}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-5">
                <div className={`flex size-11 items-center justify-center rounded-full font-serif font-bold ${initialsTone[i]}`}>
                  {item.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
