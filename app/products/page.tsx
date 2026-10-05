import BudjLogo from '@/components/BudjLogo'
import IPhoneFrame from '@/components/IPhoneFrame'
import { pageMetadata } from '@/lib/metadata'
import Link from "next/link";
import AppleDownloadButton from "@/components/AppleDownloadButton";

export const metadata = pageMetadata({
  title: 'Products | Pragmtk',
  description: 'budj, an iPhone app by Pragmtk: smarter than automatic payments, built on your rules. Coming soon for iOS in New Zealand.',
  path: '/products',
})

const features = [
  {
    title: 'Rules that start when you say',
    body: 'A rule starts on what you choose, like money landing in one of your accounts. No dates to pick, no amounts to guess.',
  },
  {
    title: 'You approve every transfer',
    body: 'When a rule runs, budj works out each transfer and lets you know. Nothing moves until you approve it.',
  },
  {
    title: 'Every account, and what budj may do with it',
    body: 'See each account you have connected and whether budj may pay from it or into it. Stop budj paying from an account whenever you like.',
  },
  {
    title: 'Your rules at a glance',
    body: 'Home Screen widgets show how many rules are watching, anything waiting for you and, on the medium size, the last thing budj handled. Amounts stay off them unless you turn them on.',
  },
  {
    title: 'Siri and Shortcuts',
    body: "Ask budj to check your banks for new transactions from Siri or a Shortcut. You can approve a rule's waiting transfers there too - only after confirming what will move, and with Face ID, Touch ID or your passcode every time.",
  },
]

const sectionLabel = 'mb-0 font-mono text-[11px] font-medium tracking-[0.12em] text-fg-dim uppercase'

function Question({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <details className="group border-b border-border">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[16px] text-fg transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
        {question}
        <span aria-hidden className="font-mono text-[18px] leading-none text-fg-dim transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="pb-6 text-[15px] leading-[1.7] [&_li]:mb-2 [&_li]:text-fg-mid [&_ul]:mt-2 [&_ul]:pl-5">{children}</div>
    </details>
  )
}

export default function ProductsPage() {
  return (
    <main className="flex flex-1 flex-col py-16">
      <h1 className="mb-16 max-w-[700px] font-mono text-[length:clamp(28px,5vw,52px)] leading-[1.1] font-normal text-fg">Products</h1>

      <article>
        <header className="grid items-center gap-14 border-t border-border pt-12 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="mb-8">budj</h2>
            <p className="mb-8 max-w-[520px] text-[length:clamp(28px,4vw,40px)] leading-[1.15] font-light text-fg">
              Smarter than automatic payments. Built on your rules.
            </p>
            <p className="mb-8 max-w-[500px] text-[17px] leading-[1.6]">
              budj is an iPhone app that connects to your bank through open banking and runs rules - a trigger and actions - that split money the moment it lands.
            </p>
            <p className="mb-8 inline-flex items-center gap-2.5 border border-border px-4 py-2 font-mono text-[11px] tracking-[0.06em] text-fg-mid uppercase">
              New Zealand only - budj connects to New Zealand banks.
            </p>
            {/*<AppleDownloadButton />*/}

            <p className="mb-8 max-w-[500px] text-[17px] leading-[1.6]">
              budj will soon be available in the App Store. Sign up for updates and early access at <Link href="https://budj.nz" target="_blank" className="text-accent underline underline-offset-2">budj.nz</Link>.
            </p>
          </div>

          <div className="relative isolate justify-self-center md:mr-6">
            <div aria-hidden className="absolute top-1/4 -left-10 -z-10 size-56 rounded-full bg-budj-cyan/20 blur-3xl" />
            <div aria-hidden className="absolute -right-10 bottom-1/4 -z-10 size-56 rounded-full bg-budj-accent/15 blur-3xl" />
            <IPhoneFrame>
              <div className="flex size-full items-center justify-center bg-radial-[at_50%_45%] from-budj-cyan/10 to-transparent to-70%">
                <BudjLogo className="w-24" />
              </div>
            </IPhoneFrame>
          </div>
        </header>

        <section className="mt-24 mb-0 grid gap-10 border-t border-border pt-12 md:grid-cols-[2fr_3fr] md:gap-16">
          <h3 className="text-[length:clamp(26px,3.2vw,34px)] leading-[1.15] font-light text-fg">An automatic payment only knows a date</h3>
          <div className="text-[16px] leading-[1.7]">
            <p>
              The automatic payments your bank offers need two things decided in advance: a date and an amount. On the day, the payment goes out - whether or not the money it depends on has arrived, and whatever else has happened in your account since you set it up.
            </p>
            <p>
              budj works the other way round. You write rules. A rule says what sets it off, like money landing in one of your accounts, and what should happen next.
            </p>
            <p className="mt-8 mb-0 border-l-2 border-budj-accent pl-5 text-[18px] text-fg">
              budj works out what would move and asks you first. Nothing leaves your account until you approve it.
            </p>
          </div>
        </section>

        <section className="mt-24 mb-0 border-t border-border pt-12">
          <h3 className={`${sectionLabel} mb-8`}>What budj does</h3>
          <ol className="grid list-none gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {features.map((feature, i) => (
              <li key={feature.title} className="bg-bg p-7 last:sm:col-span-2">
                <span className="mb-6 block font-mono text-[12px] text-fg-dim">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="mb-3 text-[17px] font-normal text-fg">{feature.title}</h4>
                <p className="mb-0 text-[14px] leading-[1.65]">{feature.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-24 mb-0 grid gap-10 border-t border-border pt-12 md:grid-cols-[2fr_3fr] md:gap-16">
          <h3 className={sectionLabel}>Questions</h3>
          <div className="border-t border-border">
            <Question question="What can budj do with my money?">
              <p>
                budj reads your accounts so it knows when one of your rules should run, and it can move money between your own accounts when you approve it. You sign in with your bank, not with us.
              </p>
              <ul>
                <li>
                  budj reads your accounts, balances and transactions - and keeps none of them. They&apos;re read when a rule runs, then gone.
                </li>
                <li>It can move money between accounts you&apos;ve connected. Never to anyone else.</li>
                <li>Every payment is one you approved. budj proposes, you decide.</li>
                <li>You set the limits when you connect, and your bank enforces them - not budj.</li>
                <li>You can revoke access at any time, from budj or from your bank.</li>
              </ul>
            </Question>
            <Question question="Can budj move money without asking me?">
              <p>
                No. When a rule runs, budj works out what each step would move and asks you. Nothing moves until you approve it, and it can only ever move money between accounts you connected yourself.
              </p>
            </Question>
            <Question question="Which banks does it work with?">
              <p>
                New Zealand banks, through open banking. budj connects through <Link href="https://www.akahu.nz/" target="_blank">Akahu</Link>, a New Zealand open banking provider, and you authorise the connection with your bank directly - budj never sees your bank login. It will not work with an account held outside New Zealand.
              </p>
            </Question>
            {/*<Question question="What does it cost?">*/}
            {/*  <p>*/}
            {/*    budj is a subscription, bought in the app through the App Store. Apple takes the payment, and the price and what each plan includes are shown in the app before you buy.*/}
            {/*  </p>*/}
            {/*</Question>*/}
            <Question question="How do I cancel?">
              <p>
                Cancel your subscription in your Apple account settings - budj cannot cancel it for you. Deleting your budj account does not cancel it either; they are two separate steps. The terms explain the subscription in full.
              </p>
            </Question>
            <Question question="What happens to my data?">
              <p>
                budj reads your balances and transactions when a rule checks them and keeps neither, and it never stores an account number. What it does keep about your bank accounts is what it needs to know which ones your rules can use, such as each account’s name and type. Deleting your account in the app removes what was stored, with one narrow exception for a payment already on its way.
              </p>
            </Question>
          </div>
        </section>
      </article>
    </main>
  )
}
