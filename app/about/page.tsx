import Link from 'next/link'
import { pageMetadata } from '@/lib/metadata'
import { sectionLabel } from '@/lib/styles'

export const metadata = pageMetadata({
  title: 'About | Pragmtk',
  description: 'Pragmtk Limited is a software company based in Wellington, New Zealand. It builds focused, pragmatic' +
    ' software products that are simple to use and honest about what they do with your data.',
  path: '/about',
})

const EMAIL = 'hello@pragmtk.com'

const inlineLink = 'font-sans text-[length:inherit] tracking-normal text-inherit underline underline-offset-4 hover:text-accent'

const details: { label: string; value: React.ReactNode }[] = [
  { label: 'Legal name', value: 'Pragmtk Limited' },
  { label: 'Based in', value: 'Wellington, New Zealand' },
  { label: 'Founder', value: 'Kyle Beattie' },
  {
    label: 'Products',
    value: (
      <Link href="/products" className={inlineLink}>
        budj
      </Link>
    ),
  },
  {
    label: 'Contact',
    value: (
      <a href={`mailto:${EMAIL}`} className={inlineLink}>
        {EMAIL}
      </a>
    ),
  },
]

const section = 'mt-24 mb-0 grid gap-10 border-t border-border pt-12 md:grid-cols-[1fr_2fr] md:gap-16'

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col py-16">
      <h1 className="mb-16 max-w-[700px] font-mono text-[length:clamp(28px,5vw,52px)] leading-[1.1] font-normal text-fg">About</h1>

      <div className="border-t border-border pt-12">
        <p className="mb-0 max-w-[760px] text-[length:clamp(24px,3.4vw,36px)] leading-[1.25] font-light text-fg">
          Pragmtk Limited is a software company based in Wellington, New Zealand. It builds focused, pragmatic software products for humans.
        </p>
      </div>

      <section className={section}>
        <h2 className={sectionLabel}>The company</h2>
        <div className="text-[16px] leading-[1.7]">
          <p>
            Pragmtk was set up to design, build and run its own software products, starting with <Link href="https://budj.nz" target="_blank" rel="noopener" className="text-fg underline decoration-border decoration-1 underline-offset-[10px] hover:text-accent hover:decoration-accent">budj</Link>, an iPhone app for automating payments between New Zealand bank accounts.
          </p>
          <p className="mt-8 mb-0 border-l-2 border-accent pl-5 text-[18px] text-fg">
            The aim is a small number of products that each do one job well, are simple to use, and are honest about what they do with your data.
          </p>
        </div>
      </section>

      {/*<section className={section}>*/}
      {/*  <h2 className={sectionLabel}>At a glance</h2>*/}
      {/*  <dl className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">*/}
      {/*    {details.map(({ label, value }) => (*/}
      {/*      <div key={label} className="bg-bg px-6 py-5 last:sm:col-span-2">*/}
      {/*        <dt className="mb-2 font-mono text-[11px] tracking-[0.12em] text-fg-dim uppercase">{label}</dt>*/}
      {/*        <dd className="text-[16px] text-fg">{value}</dd>*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </dl>*/}
      {/*</section>*/}

      <section className={section}>
        <h2 className={sectionLabel}>Founder</h2>
        <div className="grid items-start gap-8 sm:grid-cols-[auto_1fr]">
          <a href="https://kyle.thebeatties.co" className="w-50 p-4 bg-kb" aria-label="Kyle Beattie">
            <svg viewBox="0 0 164 166" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M27.308 15.9849C20.574 16.3519 14.823 16.8949 14.527 17.1909C14.231 17.4859 13.589 19.1259 13.099 20.8339C12.234 23.8479 12.316 23.9569 15.88 24.5539C25.774 26.2099 29.051 28.7149 29.051 34.6199C29.051 37.0009 8.37901 128.619 2.11501 154C1.64001 155.925 0.969999 158.749 0.625999 160.275L0 163.05L16.22 162.775L32.44 162.5L36.506 144.759C40.147 128.875 40.899 126.69 43.694 123.896L46.815 120.774L48.554 126.137C51.431 135.01 58.221 151.252 60.72 155.24C68.144 167.088 86.006 168.825 108.645 159.902C113.372 158.039 113.812 157.573 114.762 153.422C115.662 149.489 115.59 149.006 114.168 149.415C101.701 153.006 96.618 152.549 92.127 147.434C88.068 142.811 87.143 140.903 77.951 118.192C69.107 96.3388 69.161 97.9679 77.098 92.4669L80.974 89.7809L85.773 92.7338C92.504 96.8758 97.489 98.3079 103.242 97.7559C114.879 96.6369 121.958 84.3609 117.187 73.5739C113.409 65.0339 103.367 62.8639 92.099 68.1509C88.901 69.6519 80.917 76.9539 65.197 92.7579C52.902 105.118 43.102 114.392 43.418 113.366C44.38 110.243 53.927 68.7419 54.544 64.9999C54.861 63.0749 56.183 56.9999 57.481 51.4999C60.621 38.1909 61.338 33.4799 60.584 31.1039C59.925 29.0279 56.399 27.5799 49.343 26.4889C44.504 25.7409 43.581 24.1248 45.056 18.9839C45.603 17.0748 46.051 15.3979 46.051 15.2569C46.051 14.9749 45.205 15.0079 27.308 15.9849Z"
                    fill="white"/>
              <mask id="mask0_402_12" maskUnits="userSpaceOnUse" x="28" y="12" width="124"
                    height="146">
                <path
                  d="M52.0505 14.0002L49.0506 17.0001M54.0508 14L48.5506 19.5001M56.0505 14.0002L48.0508 22M58.0505 14.0002L49.4049 22.6458M60.0506 14.0001L50.5443 23.5064M62.0508 14L51.6836 24.3671M64.0508 14L52.823 25.2277M66.0508 14L53.9623 26.0884M68.0506 14.0002L55.1017 26.9491M70.0506 14.0002L56.241 27.8097M72.0506 14.0002L57.3804 28.6704M74.0508 14L58.5198 29.531M76.0508 14L59.6591 30.3917M78.0508 14L60.7985 31.2523M80.051 14L61.9378 32.113"
                  stroke="#5E9BAC" strokeWidth="0.5"/>
                <path
                  d="M96.5508 31.4998L28.8632 99.1874M96.0507 33.9999L30.4253 99.6253M95.5508 36.4999L31.9874 100.063M95.0508 38.9999L33.5494 100.501M94.5507 41.4999L35.1115 100.939M94.0507 43.9999L36.6736 101.377M93.5507 46.4999L38.2357 101.815M93.0507 48.9999L39.7978 102.253M92.5507 51.4999L41.3598 102.691M91.5508 54.4999L42.9219 103.129M91.0508 56.9999L44.484 103.567M90.5507 59.4999L46.0461 104.005M90.0507 61.9999L47.6081 104.443"
                  stroke="#5E9BAC" strokeWidth="0.5"/>
                <path
                  d="M82.3987 13.6525L34.2215 61.8297M84.3987 13.6525L35.6312 62.42M86.3987 13.6525L37.0409 63.0103M88.3987 13.6525L38.4506 63.6006M90.5513 13.5L39.8603 64.1909M92.5517 13.4995L41.27 64.7812M94.5517 13.4995L42.6797 65.3715M96.5517 13.4995L44.0894 65.9618M98.5517 13.4995L45.4991 66.5521M101.051 13L46.9088 67.1424M100.038 16.0137L48.3185 67.7327M99.5517 18.4995L49.7282 68.323M99.0517 20.9995L51.1379 68.9133M98.5517 23.4995L52.5476 69.5036M98.0517 25.9995L53.9573 70.0939M97.5513 28.5001L55.367 70.6842"
                  stroke="#5E9BAC" strokeWidth="0.5"/>
                <path
                  d="M114.051 63.9999L112.551 65.4999M116.051 63.9999L113.551 66.4999M118.051 63.9999L114.551 67.4999M119.807 64.2435L115.551 68.4999M121.363 64.6874L116.551 69.4999M123.051 64.9999L117.551 70.4999M125.051 64.9999L118.051 71.9999"
                  stroke="#5E9BAC" strokeWidth="0.5"/>
                <path
                  d="M146.051 77.9999L115.55 108.5M146.977 79.0739L115.55 110.5M147.55 80.4998L115.55 112.5M148.051 81.9998L115.55 114.5M149.05 82.9999L115.051 117M149.55 84.4999L114.551 119.5M150.011 86.039L114.051 122M150.551 87.4997L113.051 125M150.55 89.4998L112.551 127.5M151.05 90.9996L111.551 130.5M151.05 93L110.051 134M151.529 94.5214L108.55 137.5M151.529 96.5216L106.551 141.5M151.528 98.5215L104.051 146M151.529 100.522L103.05 149M151.529 102.522L106.05 148"
                  stroke="#5E9BAC" strokeWidth="0.5"/>
                <path
                  d="M128.232 63.8188L96.8146 95.2363M129.47 64.5808L98.0527 95.9983M130.708 65.3428L99.2907 96.7603M131.946 66.1048L100.529 97.5222M133.184 66.8668L101.767 98.2842M134.422 67.6288L103.005 99.0462M135.66 68.3908L104.243 99.8082M136.898 69.1527L105.481 100.57M138.136 69.9147L106.719 101.332M139.374 70.6767L107.957 102.094M140.612 71.4387L109.195 102.856M141.85 72.2007L110.433 103.618M143.088 72.9627L111.671 104.38M144.326 73.7247L112.909 105.142M145.564 74.4867L114.147 105.904M146.802 75.2487L115.385 106.666"
                  stroke="#5E9BAC" strokeWidth="0.5"/>
                <path
                  d="M151.052 105L108.052 148M151.051 107L110.051 148M150.551 109.5L112.051 148M150.051 112L113.551 148.5M149.551 114.5L115.051 149M149.051 117L116.551 149.5M148.551 119.5L117.551 150.5M147.551 122.5L117.051 153M146.551 125.5L116.051 156M145.051 129L116.551 157.5M143.551 132.5L119.05 157.001M141.551 136.5L122.257 155.794M138.051 142L125.551 154.5"
                  stroke="#5E9BAC" strokeWidth="0.5"/>
              </mask>
              <g mask="url(#mask0_402_12)">
                <path
                  d="M150.051 109.5C158.051 60.4999 112.051 64.4999 112.051 64.4999C112.051 64.4999 119.726 64.9999 122.051 80.4999C122.051 97.9999 114.746 90.4999 116.051 100.5C116.625 104.899 116.58 116.273 113.551 126C109.694 138.382 102.551 149 102.551 149C102.551 149 109.551 145.5 116.051 147.5C119.345 148.514 119.436 151.281 118.051 153.5C116.666 155.719 116.237 157.535 118.551 157C133.551 150.5 145.734 135.941 150.051 109.5Z"
                  fill="white"/>
                <path
                  d="M48.0508 21.4999L50.0508 14.9999L100.551 13.4999L89.0508 64.4999L48.5508 104.5C48.5508 104.5 64.0508 38.4999 65.0508 33.4999C66.0508 28.4999 63.5508 26.4999 59.5508 24.4999C55.5508 22.4999 49.0508 21.9999 49.0508 21.9999L48.0508 21.4999Z"
                  fill="white"/>
              </g>
            </svg>
          </a>
          <div>
            <h3 className="mb-4">
              <a href="https://kyle.thebeatties.co" className="text-[24px] font-light text-fg underline decoration-border decoration-1 underline-offset-[10px] hover:text-accent hover:decoration-accent" rel="noopener">
                Kyle Beattie
              </a>
            </h3>
            <p className="text-[16px] leading-[1.7]">
              Pragmtk was founded by Kyle Beattie, a software engineer with almost twenty years of experience building
              web and mobile applications for businesses in New Zealand and overseas, including work in financial
              services.
            </p>
            <a
              href="https://www.linkedin.com/in/kyleabeattie/"
              rel="noopener"
              className="inline-flex items-center gap-2 border-b border-border pb-[2px] hover:border-accent"
            >
              LinkedIn <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className={`${section} scroll-mt-8`}>
        <h2 className={sectionLabel}>Contact</h2>
        <div>
          <a
            href={`mailto:${EMAIL}`}
            className="font-sans text-[length:clamp(28px,5vw,48px)] leading-[1.1] font-light tracking-normal text-fg underline decoration-border decoration-1 underline-offset-[10px] hover:text-accent hover:decoration-accent"
          >
            {EMAIL}
          </a>
          <p className="mt-6 mb-0 font-mono text-[12px] text-fg-dim">Pragmtk Ltd - Wellington, New Zealand</p>
        </div>
      </section>
    </main>
  )
}
