'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Trophy } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export function Hero() {
  const { t, waLink } = useLanguage()

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/lucas-stage.png"
          alt="Lucas Franco posando no palco de fisiculturismo"
          fill
          priority
          className="object-cover object-[60%_20%] lg:object-[75%_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,transparent_0%,var(--background)_85%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/25 bg-card/40 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-gold" />
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-3xl font-serif text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          {t.hero.title1}
          <span className="block text-gradient-gold">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={waLink(t.whatsappMessages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-pulse group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-gold-bright hover:shadow-[0_0_36px_-6px_var(--gold)]"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#results"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/30 bg-card/30 px-7 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:bg-card/60"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border/40 pt-8"
        >
          <Proof icon={<Users className="size-4 text-gold" />} label={t.hero.proofClients} />
          <Proof icon={<Trophy className="size-4 text-gold" />} label={t.hero.proofYears} />
          <Proof
            icon={
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-gold text-gold" />
                ))}
              </span>
            }
            label={t.hero.proofRating}
          />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

function Proof({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      {icon}
      <span className="text-sm font-medium text-foreground/80">{label}</span>
    </div>
  )
}
