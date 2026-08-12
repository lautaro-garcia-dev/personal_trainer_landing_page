'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n'
import { WhatsAppIcon } from './whatsapp-icon'

export function FinalCta() {
  const { t, waLink } = useLanguage()

  return (
    <section id="cta" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="/lucas-stage.png"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover object-[70%_15%] opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklch,var(--gold)_10%,transparent),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-gold"
        >
          {t.finalCta.label}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          {t.finalCta.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
        >
          {t.finalCta.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-9 flex flex-col items-center gap-4"
        >
          <a
            href={waLink(t.whatsappMessages.finalCta)}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-pulse group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-9 py-5 text-lg font-bold text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-gold-bright hover:shadow-[0_0_50px_-8px_var(--gold)]"
          >
            <WhatsAppIcon className="size-6" />
            {t.finalCta.button}
          </a>
          <p className="text-sm text-muted-foreground">{t.finalCta.micro}</p>
        </motion.div>
      </div>
    </section>
  )
}
