import LegalPage from '@/components/LegalPage'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'Privacy policy | Pragmtk',
  description: 'How Pragmtk Limited collects, uses and protects personal information.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <LegalPage>
      <h1>Privacy policy</h1>
      <p className="mb-12! font-mono text-[12px]! text-fg-dim!">Last updated 28 September 2026</p>

      <h2>Introduction</h2>
      <p>Pragmtk Limited (<strong>we</strong>, <strong>us</strong>, <strong>our</strong>) complies with the New Zealand Privacy Act 2020 (the <strong>Act</strong>) when dealing with personal information. Personal information is information about an identifiable individual (a natural person).</p>
      <p>This policy sets out how we will collect, use, disclose and protect your personal information.</p>
      <p>This policy does not limit or exclude any of your rights under the Act. If you wish to seek further information on the Act, see <a href="https://www.privacy.org.nz">www.privacy.org.nz</a>.</p>

      <h2>Changes to this policy</h2>
      <p>We may change this policy by uploading a revised policy onto the website. The change will apply from the date that we upload the revised policy.</p>
      <p><strong>This policy was last updated on 28 September 2026.</strong></p>

      <h2>Who do we collect your personal information from</h2>
      <p>We collect personal information about you from:</p>
      <ul>
        <li>you, when you provide that personal information to us, including via the website and any related service, through any registration or subscription process, through any contact with us (e.g. telephone call or email), or when you buy or use our services and products</li>
        <li>your device, when you visit the website and have agreed to analytics cookies (see <a href="#cookies">Cookies and analytics</a> below)</li>
        <li>third parties where you have authorised this or the information is publicly available.</li>
      </ul>
      <p>If possible, we will collect personal information from you directly.</p>

      <h2>How we use your personal information</h2>
      <p>We will use your personal information:</p>
      <ul>
        <li>to verify your identity</li>
        <li>to provide services and products to you</li>
        <li>to market our services and products to you, including contacting you electronically (e.g. by text or email for this purpose)</li>
        <li>to improve the services and products that we provide to you</li>
        <li>to bill you and to collect money that you owe us, including authorising and processing credit card transactions</li>
        <li>to respond to communications from you, including a complaint</li>
        <li>to conduct research and statistical analysis (on an anonymised basis)</li>
        <li>to protect and/or enforce our legal rights and interests, including defending any claim</li>
        <li>for any other purpose authorised by you or the Act.</li>
      </ul>

      <h2>Disclosing your personal information</h2>
      <p>We may disclose your personal information to:</p>
      <ul>
        <li>any business that supports our services and products, including any person that hosts or maintains any underlying IT system or data centre that we use to provide the website or other services and products</li>
        <li>Google, which provides the analytics services we use on the website (see <a href="#cookies">Cookies and analytics</a> below)</li>
        <li>other third parties (for anonymised statistical information)</li>
        <li>a person who can require us to supply your personal information (e.g. a regulatory authority)</li>
        <li>any other person authorised by the Act or another law (e.g. a law enforcement agency)</li>
        <li>any other person authorised by you.</li>
      </ul>
      <p>A business that supports our services and products may be located outside New Zealand. This may mean your personal information is held and processed outside New Zealand.</p>
      <p>We may transfer your information in the case of a sale, merger, consolidation, liquidation, reorganisation or acquisition.</p>

      <h2 id="cookies">Cookies and analytics</h2>
      <p>We use Google Analytics, a service provided by Google LLC, to understand how people use the website so we can improve it. We use it only to measure use of the website, not for advertising.</p>
      <p>We only set analytics cookies if you choose <strong>Accept</strong> in the cookie banner. If you accept, Google Analytics sets cookies (named <code>_ga</code> and <code>_ga_</code> followed by an identifier) that last for up to two years and collects information such as the pages you visit, how you arrived at the website, how long you stay, your browser and device type, and your approximate location (derived from your IP address, which Google Analytics does not store). Google processes this information on our behalf, and it may be stored and processed on servers outside New Zealand, including in the United States. Google&rsquo;s use of this information is described at <a href="https://policies.google.com/technologies/partner-sites">policies.google.com/technologies/partner-sites</a>.</p>
      <p>If you choose <strong>Reject</strong>, or make no choice, no analytics cookies are set. The website uses Google&rsquo;s consent mode, which means Google Analytics still loads and may send Google limited information that does not use cookies or identify you, such as that a page was viewed, so we can understand overall use of the website.</p>
      <p>We store your choice in your browser&rsquo;s local storage so we do not have to ask you again. You can change your choice at any time using the <a href="/privacy#cookies" data-consent-open>Cookies</a> link at the bottom of every page. If you withdraw your consent, we remove the Google Analytics cookies. You can also block or delete cookies in your browser settings, or install the <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out browser add-on</a>.</p>

      <h2>Protecting your personal information</h2>
      <p>We will take reasonable steps to keep your personal information safe from loss, unauthorised activity, or other misuse.</p>

      <h2>Accessing and correcting your personal information</h2>
      <p>Subject to certain grounds for refusal set out in the Act, you have the right to access your readily retrievable personal information that we hold and to request a correction to your personal information. Before you exercise this right, we will need evidence to confirm that you are the individual to whom the personal information relates.</p>
      <p>In respect of a request for correction, if we think the correction is reasonable and we are reasonably able to change the personal information, we will make the correction. If we do not make the correction, we will take reasonable steps to note on the personal information that you requested the correction.</p>
      <p>If you want to exercise either of the above rights, email us at <a href="mailto:hello@pragmtk.com">hello@pragmtk.com</a>. Your email should provide evidence of who you are and set out the details of your request (e.g. the personal information, or the correction, that you are requesting).</p>
      <p>We may charge you our reasonable costs of providing to you copies of your personal information or correcting that information.</p>

      <h2>Internet use</h2>
      <p>While we take reasonable steps to maintain secure internet connections, if you provide us with personal information over the internet, the provision of that information is at your own risk.</p>
      <p>If you follow a link on our website to another site, the owner of that site will have its own privacy policy relating to your personal information. We suggest you review that site&rsquo;s privacy policy before you provide personal information.</p>

      <h2>Contacting us</h2>
      <p>If you have any questions about this privacy policy, our privacy practices, or if you would like to request access to, or correction of, your personal information, you can contact us at <a href="mailto:hello@pragmtk.com">hello@pragmtk.com</a>.</p>
    </LegalPage>
  )
}
