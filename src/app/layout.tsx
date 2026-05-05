import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DemoBanner from '@/components/DemoBanner'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_INDEXED, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const BASE_URL = 'https://clinicago-web.vercel.app'

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Dentista y Ginecología en Madrid`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'clínica dental Madrid',
    'dentista Madrid Gaztambide',
    'ginecología Madrid',
    'ortodoncia Madrid',
    'implantes dentales Madrid',
    'clínica dental Chamberí',
    'dentista Islas Filipinas',
    'clínica Gaztambide 52',
  ],
  robots: {
    index: SITE_INDEXED,
    follow: SITE_INDEXED,
    googleBot: {
      index: SITE_INDEXED,
      follow: SITE_INDEXED,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} | Dentista y Ginecología en Madrid`,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    type: 'website',
    locale: 'es_ES',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Dentista y Ginecología en Madrid`,
    description: SITE_DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <DemoBanner />
      </body>
    </html>
  )
}
