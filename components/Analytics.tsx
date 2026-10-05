import Script from 'next/script'
import { GA_ID, consentBootstrap } from '@/lib/consent'

// Don't add Google's gtag.js snippet anywhere else as well.
export default function Analytics() {
  return (
    <>
      <Script id="consent-defaults" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: consentBootstrap }} />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    </>
  )
}
