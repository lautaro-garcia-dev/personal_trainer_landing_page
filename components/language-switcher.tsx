'use client'

import { LANGUAGES, useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { Globe } from 'lucide-react'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-full border border-gold/20 bg-card/40 px-1.5 py-1 backdrop-blur-md',
        className,
      )}
      role="group"
      aria-label="Language selector"
    >
      <Globe className="ml-1.5 mr-0.5 size-3.5 text-gold/70" aria-hidden="true" />
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          aria-label={`Switch language to ${l.label}`}
          title={l.label}
          className={cn(
            'flex items-center justify-center rounded-full p-1 transition-all duration-300',
            lang === l.code
              ? 'ring-2 ring-gold ring-offset-1 ring-offset-background'
              : 'opacity-55 hover:opacity-100',
          )}
        >
          <img
            src={
              l.code === 'es'
                ? '/flag-es.png'
                : l.code === 'pt'
                  ? '/flag-br.png'
                  : `https://flagcdn.com/${l.flag.toLowerCase()}.svg`
            }
            alt={`${l.label} flag`}
            width={20}
            height={14}
            loading="lazy"
            className="block w-5 rounded-[2px] object-contain"
          />
        </button>
      ))}
    </div>
  )
}
