/*
 * Google Analytics (GA4 Google tag) with Google Consent Mode v2.
 *
 * Everything is denied until the visitor accepts in the cookie banner; their
 * choice is kept in localStorage and can be changed from the "Cookies" link in
 * the footer (any element with `data-consent-open`).
 */
export const GA_ID = 'G-7RRSHWZB0J'
export const STORAGE_KEY = 'pragmtk-consent'

export type ConsentChoice = 'granted' | 'denied'

type Gtag = (...args: unknown[]) => void

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: Gtag
  }
}

export function readChoice(): ConsentChoice | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'granted' || stored === 'denied' ? stored : null
  } catch {
    return null
  }
}

function saveChoice(choice: ConsentChoice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice)
  } catch {}
}

// The site only uses analytics, so advertising signals always stay denied.
function consentState(choice: ConsentChoice) {
  return {
    analytics_storage: choice === 'granted' ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  }
}

// Remove Google Analytics cookies when consent is withdrawn.
function clearAnalyticsCookies() {
  const host = location.hostname
  const domains = ['', host, '.' + host, '.' + host.split('.').slice(-2).join('.')]
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim()
    if (name === '_ga' || name.indexOf('_ga_') === 0 || name === '_gid' || name === '_gat') {
      domains.forEach((domain) => {
        document.cookie = name + '=; Max-Age=0; path=/' + (domain ? '; domain=' + domain : '')
      })
    }
  })
}

export function setChoice(choice: ConsentChoice) {
  saveChoice(choice)
  window.gtag?.('consent', 'update', consentState(choice))
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'consent_update', analytics_consent: choice })
  if (choice === 'denied') clearAnalyticsCookies()
}

// Runs inline at the top of <head>, before the Google tag, so the consent
// defaults are in place before anything is measured.
export const consentBootstrap = `
(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', false);

  var stored = null;
  try { stored = localStorage.getItem('${STORAGE_KEY}'); } catch (e) {}
  if (stored === 'granted' || stored === 'denied') {
    gtag('consent', 'update', {
      analytics_storage: stored,
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }

  gtag('js', new Date());
  gtag('config', '${GA_ID}');
})();
`
