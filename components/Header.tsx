import Link from 'next/link'
import Logo from './Logo'
import Navigation from './Navigation'
import { SITE_NAME, primaryNav } from '@/lib/site'

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-6">
      <Link href="/" className="flex items-center gap-3 text-fg hover:text-accent focus:text-accent">
        <Logo />
        <span className="font-display text-[24px] font-medium tracking-[0.02em] text-current">{SITE_NAME}</span>
      </Link>
      <Navigation links={primaryNav} aria-label="Primary" />
    </header>
  )
}
