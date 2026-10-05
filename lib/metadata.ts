import type { Metadata } from 'next'
import { SITE_NAME } from './site'

type PageMetadata = {
  title: string
  description: string
  path: string
}

// Next.js replaces (rather than merges) `openGraph` per page, so each page
// builds its full set of tags here.
export function pageMetadata({ title, description, path }: PageMetadata): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      images: [
        { url: '/logo-pragmtk.png', width: 1200, height: 630, alt: 'Pragmtk logo' },
      ],
    },
    twitter: { card: 'summary_large_image' },
  }
}
