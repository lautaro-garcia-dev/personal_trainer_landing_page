import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lucas Franco | Premium Physique Transformation Coach',
  description:
    'Acompanhamento personalizado de elite para transformação física: emagrecimento, hipertrofia e recomposição corporal. Resultados reais, consistentes e duradouros.',
  keywords: [
    'personal trainer',
    'coaching fitness',
    'transformação física',
    'hipertrofia',
    'consultoria online',
    'Lucas Franco',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Lucas Franco | Premium Physique Transformation Coach',
    description:
      'Transforme seu físico. Transforme sua vida. Acompanhamento personalizado de elite.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
