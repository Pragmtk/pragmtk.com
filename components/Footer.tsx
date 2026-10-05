import Navigation from './Navigation'
import { footerNav } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-border py-6 mobile:flex-col mobile:items-start mobile:gap-2">
      <span className="font-mono text-[12px] text-fg-dim">Pragmtk Ltd - Wellington, New Zealand</span>
      <Navigation links={footerNav} className="flex gap-6" />
      <span className="font-mono text-[12px] text-fg-dim">© 2026</span>
    </footer>
  )
}
