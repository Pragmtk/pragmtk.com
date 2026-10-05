import { SITE_URL } from '@/lib/site'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Pragmtk',
      legalName: 'Pragmtk Limited',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.svg`,
      email: 'hello@pragmtk.com',
      description: 'Software products. Pragmatic. Simple.',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Pragmtk',
      url: `${SITE_URL}/`,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

export default function JsonLd() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
