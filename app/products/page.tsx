import BudjLogo from '@/components/BudjLogo'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'Products | Pragmtk',
  description: 'budj, an iPhone app by Pragmtk: smarter than automatic payments, built on your rules. Coming soon for iOS in New Zealand.',
  path: '/products',
})

export default function ProductsPage() {
  return (
    <main className="flex flex-1 flex-col justify-center py-16">
      <h1 className="mb-16 max-w-[700px] font-mono text-[length:clamp(28px,5vw,52px)] leading-[1.1] font-normal text-fg">Products</h1>


      <h2>budj</h2>

      <BudjLogo />

      <p className="mb-14 max-w-[640px] text-[18px] text-fg-mid">
        Smarter than a automatic payments. Built on your rules.
      </p>
      <p>
        budj is an iPhone app made by Pragmtk Limited, a New Zealand company. It connects to your bank through open banking and runs rules - a trigger and an action - that split money the moment it lands.
      </p>
      <p>
        New Zealand only - budj connects to New Zealand banks.
      </p>
      <p>
        An automatic payment only knows a date
      </p>
      <p>
        The automatic payments your bank offers need two things decided in advance: a date and an amount. On the day, the payment goes out - whether or not the money it depends on has arrived, and whatever else has happened in your account since you set it up.
      </p>
      <p>
        budj works the other way round. You write rules. A rule says what sets it off, like money landing in one of your accounts, and what should happen next.
      </p>
      <p>
        budj works out what would move and asks you first. Nothing leaves your account until you approve it.
      </p>
      <h3>What budj does</h3>
      <p>
        Rules that start when you say
        A rule starts on what you choose, like money landing in one of your accounts. No dates to pick, no amounts to guess.
      </p>
      <p>
        You approve every transfer
        When a rule runs, budj works out each transfer and lets you know. Nothing moves until you approve it.
      </p>
      <p>
        Every account, and what budj may do with it
        See each account you have connected and whether budj may pay from it or into it. Stop budj paying from an account whenever you like.
      </p>
      <p>
        Your rules at a glance
        Home Screen widgets show how many rules are watching, anything waiting for you and, on the medium size, the last thing budj handled. Amounts stay off them unless you turn them on.
      </p>
      <p>
        Siri and Shortcuts
        Ask budj to check your banks for new transactions from Siri or a Shortcut. You can approve a rule's waiting transfers there too - only after confirming what will move, and with Face ID, Touch ID or your passcode every time.
      </p>
      <h3>Questions</h3>

      <details>
        <summary>What can budj do with my money?</summary>
        <p>budj reads your accounts so it knows when one of your rules should run, and it can move money between
          your</p>
        own accounts when you approve it. You sign in with your bank, not with us.
        <ul>
          <li>
            budj reads your accounts, balances and transactions - and keeps none of them. They're read when a rule
            runs, then gone.
          </li>
          <li>It can move money between accounts you've connected. Never to anyone else.</li>
          <li>Every payment is one you approved. budj proposes, you decide.</li>
          <li>You set the limits when you connect, and your bank enforces them - not budj.</li>
          <li>You can revoke access at any time, from budj or from your bank.</li>
        </ul>
      </details>


      <details>
        <summary>Can budj move money without asking me?</summary>
        <p>No. When a rule runs, budj works out what each step would move and asks you. Nothing moves until you approve
         it, and it can only ever move money between accounts you connected yourself.</p>
      </details>
      <details>
        <summary>Which banks does it work with?</summary>
        <p>New Zealand banks, through open banking. budj connects through Akahu, a New Zealand open banking provider,
        and you authorise the connection with your bank directly - budj never sees your bank login. It will not work
        with an account held outside New Zealand.</p>
      </details>
      <details>
        <summary>What does it cost?</summary>
        <p>budj is a subscription, bought in the app through the App Store. Apple takes the payment, and the price and
        what each plan includes are shown in the app before you buy.</p>
      </details>
      <details>
        <summary>How do I cancel?</summary>
        <p>Cancel your subscription in your Apple account settings - budj cannot cancel it for you. Deleting your budj
        account does not cancel it either; they are two separate steps. The terms explain the subscription in full.</p>
      </details>
      <details>
        <summary>What happens to my data?</summary>
        <p>budj reads your balances and transactions when a rule checks them and keeps neither, and it neer. What it
        does keep about your bank accounts is what it needs to know which ones your rulescan use, such as each
        account's name and type. Deleting your account in the app removes what was stored, with one narrow exception
        for a payment already on its way. The privacy policy sets out exactly what is collected, why, and where it is
         held.</p>
      </details>
    </main>
  )
}
