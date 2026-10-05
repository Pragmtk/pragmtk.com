'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavLink } from '@/lib/site'

type NavigationProps = {
  links: NavLink[]
  className?: string
  'aria-label'?: string
}

const linkClass = 'border-b border-transparent pb-[2px] hover:border-accent hover:text-accent hover:transition-all'

export default function Navigation({ links, className = 'flex gap-7', 'aria-label': ariaLabel }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={className} aria-label={ariaLabel}>
      {links.map((link) =>
        link.consentOpen ? (
          <a key={link.href} href={link.href} className={linkClass} data-consent-open>
            {link.label}
          </a>
        ) : (
          <Link key={link.href} href={link.href} className={link.href === pathname ? `${linkClass} font-medium text-fg` : linkClass}>
            {link.label}
          </Link>
        ),
      )}
    </nav>
  )
}
