import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'About | Pragmtk',
  description: 'Pragmtk Limited is a software company based in Wellington, New Zealand. It builds focused software products for people who work for themselves.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col justify-center py-16">
      <h1 className="mb-16 max-w-[700px] font-mono text-[length:clamp(28px,5vw,52px)] leading-[1.1] font-normal text-fg">About</h1>

      <p className="mb-14 max-w-[640px] text-[18px] text-fg-mid">Pragmtk Limited is a software company based in Wellington, New Zealand. It builds focused software products for people who work for themselves.</p>

      <section>
        <h2>The company</h2>
        <p>Pragmtk was set up to design, build and run its own software products, starting with Budj, a mobile app for automating payments between New Zealand bank accounts.</p>
        <p>The aim is a small number of products that each do one job well, are simple to use, and are honest about what they do with your data.</p>
      </section>

      <section>
        <h2>Founder</h2>
        <p>Pragmtk was founded by Kyle Beattie, a software engineer with almost twenty years of experience building web and mobile applications for businesses in New Zealand and overseas, including work in financial services.</p>
        <p><a href="https://www.linkedin.com/in/kyleabeattie/" rel="noopener">LinkedIn</a></p>
      </section>
    </main>
  )
}
