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
      <div className="flex max-w-[600px] flex-col gap-0 border-t border-border">
        <div className="flex items-center justify-between border-b border-border py-5 mobile:flex-col mobile:items-start mobile:gap-2">
          <Link href="/products" className="flex flex-row gap-4">
            <BudjLogo className="w-40"/>
            <div>
              <div className="font-mono text-[16px] font-medium text-current">budj</div>
              <p className="text-[14px] font-light text-fg-mid">
                <strong>Smarter than automatic payments.<br/>Built on your rules.</strong>
              </p>
              <p>
                budj connects to your bank through open banking and runs rules - a trigger and actions - that split money the moment it lands.
              </p>
            </div>
          </Link>
          <span className="ml-8 font-mono text-[11px] tracking-[0.06em] whitespace-nowrap text-fg-dim uppercase mobile:ml-0">Coming soon for iOS</span>
        </div>
      </div>
    </main>
  )
}
