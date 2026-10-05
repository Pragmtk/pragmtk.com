import { pageMetadata } from '@/lib/metadata'
import Link from "next/link";
import BudjLogo from "@/components/BudjLogo";

export const metadata = pageMetadata({
  title: 'Pragmtk | Simple, pragmatic software products',
  description: 'Pragmtk builds simple, pragmatic software products from Wellington, New Zealand. Coming soon: budj, smarter banking automation for iOS.',
  path: '/',
})

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center py-16">
      <h1 className="mb-16 max-w-[700px] font-mono text-[length:clamp(28px,5vw,52px)] leading-[1.1] font-normal text-fg">
        Software products.<span className="text-fg-dim"> Simple.</span> <span className="text-fg-dim">Pragmatic.</span>
      </h1>

      <p className="mb-5 font-mono text-[11px] font-medium tracking-[0.12em] text-fg-dim uppercase">Products</p>
      <Link
        href="/products"
        className="group grid gap-8 border border-border p-8 font-sans text-[length:inherit] tracking-normal text-fg-mid transition-colors hover:border-fg-dim sm:grid-cols-[auto_1fr] sm:gap-10 mobile:p-6"
      >
        <div className="flex size-24 items-center justify-center rounded-[22px] border border-border bg-linear-to-b from-[#1a1919] to-bg">
          <BudjLogo className="w-11" />
        </div>
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-mono text-[18px] font-medium text-fg">budj</span>
            <span className="border border-border px-3 py-1 font-mono text-[11px] tracking-[0.06em] text-fg-dim uppercase">
              Coming soon for iPhone
            </span>
          </div>
          <p className="mb-4 max-w-none text-[length:clamp(20px,2.4vw,26px)] leading-[1.3] font-light text-fg">
            Smarter than automatic payments.
            <br />
            Built on your rules.
          </p>
          <p className="mb-6 max-w-[560px] text-[15px] leading-[1.6]">
            budj connects to your bank through open banking and runs rules - a trigger and actions - that split money the moment it lands.
          </p>
          <span className="inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.02em] text-fg transition-colors group-hover:text-accent">
            Learn more
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </main>
  )
}
