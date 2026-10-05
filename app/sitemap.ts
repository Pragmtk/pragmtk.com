import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

const pages = ['/', '/products', '/about', '/privacy', '/terms']

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified: '2026-10-05',
  }))
}
