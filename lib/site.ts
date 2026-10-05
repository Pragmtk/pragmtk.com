export const SITE_URL = 'https://pragmtk.com'
export const SITE_NAME = 'Pragmtk'

export type NavLink = {
  href: string
  label: string
  // Opens the cookie consent banner instead of navigating (see CookieConsent).
  consentOpen?: boolean
}

export const primaryNav: NavLink[] = [
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/about#contact', label: 'Contact' },
]

export const footerNav: NavLink[] = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy#cookies', label: 'Cookies', consentOpen: true },
]
