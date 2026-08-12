'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n'
import { WhatsAppIcon } from './whatsapp-icon'

export function FloatingWhatsApp() {
  const { t, waLink } = useLanguage()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink(t.whatsappMessages.floating)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.floating}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group fixed bottom-5 right-5 z-50 flex items-center rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.6)] transition-all duration-300 hover:pr-5"
        >
          <span className="relative flex size-7 items-center justify-center">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/40" />
            <WhatsAppIcon className="relative size-7" />
          </span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-3 group-hover:max-w-[140px] group-hover:opacity-100">
            {t.floating}
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
