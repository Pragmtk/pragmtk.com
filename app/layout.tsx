import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import Analytics from '@/components/Analytics'
import CookieConsent from '@/components/CookieConsent'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const plexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-plex-sans' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono' })
const metaor = localFont({ src: './fonts/MetaorAftershift-Regular.woff2', weight: '400', variable: '--font-metaor' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#0E0D0D',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable} ${metaor.variable} h-full`}>
      <body className="flex h-full min-h-screen flex-col bg-bg font-sans leading-[normal] font-light text-fg selection:bg-fg selection:text-bg">
        <Analytics />
        <JsonLd />
        <div className="mx-auto flex w-full max-w-[960px] flex-1 flex-col px-8 py-10 mobile:p-6">
          <Header />
          {children}
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  )
}
