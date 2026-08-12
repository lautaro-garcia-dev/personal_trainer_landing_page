'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLanguage } from '@/lib/i18n'
import { Reveal } from './reveal'

export function Faq() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {t.faq.label}
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {t.faq.title}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{t.faq.subtitle}</p>
          </Reveal>
        </div>

        <Reveal delay={1} className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {t.faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border/60 bg-card/40 px-5 transition-colors data-[state=open]:border-gold/40"
              >
                <AccordionTrigger className="py-5 text-left font-serif text-base font-semibold hover:no-underline hover:text-gold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
