import Link from 'next/link'
import LegalPage from '@/components/LegalPage'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'Terms of use | Pragmtk',
  description: 'Terms of use for the Pragmtk website.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <LegalPage numbered>
      <h1>Website terms of use</h1>
      <p className="mb-12! font-mono text-[12px]! text-fg-dim!">Last updated 28 September 2026</p>

      <h2>Application of terms</h2>
      <ol>
        <li>These Terms apply to your use of the Website. By accessing and using the Website:
          <ol>
            <li>you agree to these Terms; and</li>
            <li>where your access and use is on behalf of another person (e.g. a company), you confirm that you are authorised to, and do in fact, agree to these Terms on that person&rsquo;s behalf and that, by agreeing to these Terms on that person&rsquo;s behalf, that person is bound by these Terms.</li>
          </ol>
        </li>
        <li>If you do not agree to these Terms, you are not authorised to access and use the Website, and you must immediately stop doing so.</li>
      </ol>

      <h2>Changes</h2>
      <ol>
        <li>We may change these Terms at any time by updating them on the Website. Unless stated otherwise, any change takes effect immediately. You are responsible for ensuring you are familiar with the latest Terms. By continuing to access and use the Website, you agree to be bound by the changed Terms.</li>
        <li>We may change, suspend, discontinue, or restrict access to, the Website without notice or liability.</li>
        <li><strong>These Terms were last updated on 28 September 2026.</strong></li>
      </ol>

      <h2>Definitions</h2>
      <p>In these Terms:</p>
      <dl>
        <dt>including</dt><dd>and similar words do not imply any limit</dd>
        <dt>Loss</dt><dd>includes loss of profits, savings, revenue or data, and any other claim, damage, loss, liability and cost, including legal costs on a solicitor and own client basis</dd>
        <dt>personal information</dt><dd>means information about an identifiable, living person</dd>
        <dt>Terms</dt><dd>means these terms and conditions titled <em>Website Terms of Use</em></dd>
        <dt>Underlying System</dt><dd>means any network, system, software, data or material that underlies or is connected to the Website</dd>
        <dt>User ID</dt><dd>means a unique name and/or password allocated to you to allow you to access certain parts of the Website</dd>
        <dt>We, us or our</dt><dd>means Pragmtk Limited</dd>
        <dt>Website</dt><dd>means <a href="https://pragmtk.com">https://pragmtk.com</a></dd>
        <dt>You</dt><dd>means you or, if clause 1.1b applies, both you and the other person on whose behalf you are acting.</dd>
      </dl>

      <h2>Your obligations</h2>
      <ol>
        <li>You must provide true, current and complete information in your dealings with us (including when setting up an account), and must promptly update that information as required so that the information remains true, current and complete.</li>
        <li>If you are given a User ID, you must keep your User ID secure and:
          <ol>
            <li>not permit any other person to use your User ID, including not disclosing or providing it to any other person; and</li>
            <li>immediately notify us if you become aware of any disclosure or unauthorised use of your User ID, by sending an email to <a href="mailto:hello@pragmtk.com">hello@pragmtk.com</a>.</li>
          </ol>
        </li>
        <li>You must:
          <ol>
            <li>not act in a way, or use or introduce anything (including any virus, worm, Trojan horse, timebomb, keystroke logger, spyware or other similar feature) that in any way compromises, or may compromise, the Website or any Underlying System, or otherwise attempt to damage or interfere with the Website or any Underlying System; and</li>
            <li>unless with our agreement, access the Website via standard web browsers only and not by any other method. Other methods include scraping, deep-linking, harvesting, data mining, use of a robot or spider, automation, or any similar data gathering, extraction or monitoring method.</li>
          </ol>
        </li>
        <li>You must obtain our written permission to establish a link to our Website. If you wish to do so, email your request to <a href="mailto:hello@pragmtk.com">hello@pragmtk.com</a>.</li>
        <li>You indemnify us against all Loss we suffer or incur as a direct or indirect result of your failure to comply with these Terms, including any failure of a person who accesses and uses our Website by using your User ID.</li>
      </ol>

      <h2>Intellectual property</h2>
      <p>We (and our licensors) own all proprietary and intellectual property rights in the Website (including all information, data, text, graphics, artwork, photographs, logos, icons, sound recordings, videos and <em>look and feel</em>), and the Underlying Systems.</p>

      <h2>Disclaimers</h2>
      <ol>
        <li>To the extent permitted by law, we and our licensors have no liability or responsibility to you or any other person for any Loss in connection with:
          <ol>
            <li>the Website being unavailable (in whole or in part) or performing slowly;</li>
            <li>any error in, or omission from, any information made available through the Website;</li>
            <li>any exposure to viruses or other forms of interference which may damage your computer system or expose you to fraud when you access or use the Website. To avoid doubt, you are responsible for ensuring the process by which you access and use the Website protects you from this; and</li>
            <li>any site linked from the Website. Any link on the Website to other sites does not imply any endorsement, approval or recommendation of, or responsibility for, those sites or their contents, operations, products or operators.</li>
          </ol>
        </li>
        <li>We make no representation or warranty that the Website is appropriate or available for use in all countries or that the content satisfies the laws of all countries. You are responsible for ensuring that your access to and use of the Website is not illegal or prohibited, and for your own compliance with applicable local laws.</li>
      </ol>

      <h2>Liability</h2>
      <ol>
        <li>To the maximum extent permitted by law:
          <ol>
            <li>you access and use the Website at your own risk; and</li>
            <li>we are not liable or responsible to you or any other person for any Loss under or in connection with these Terms, the Website, or your access and use of (or inability to access or use) the Website. This exclusion applies regardless of whether our liability or responsibility arises in contract, tort (including negligence), equity, breach of statutory duty, or otherwise.</li>
          </ol>
        </li>
        <li>Except to the extent permitted by law, nothing in these Terms has the effect of contracting out of the New Zealand Consumer Guarantees Act 1993 or any other consumer protection law that cannot be excluded. To the extent our liability cannot be excluded but can be limited, our liability is limited to NZD100.</li>
        <li>To the maximum extent permitted by law and only to the extent clauses 7.1 and 7.2 of these Terms do not apply, our total liability to you under or in connection with these Terms, or in connection with the Website, or your access and use of (or inability to access or use) the Website, must not exceed NZD100.</li>
      </ol>

      <h2>Privacy policy</h2>
      <p>When you provide personal information to us, we will comply with the New Zealand Privacy Act 2020. Our <Link href="/privacy">Privacy Policy</Link> explains how we collect, use, disclose and protect your personal information, including how we use cookies and analytics on the Website and how you can control them.</p>

      <h2>Suspension and termination</h2>
      <ol>
        <li>Without prejudice to any other right or remedy available to us, if we consider that you have breached these Terms or we otherwise consider it appropriate, we may immediately, and without notice, suspend or terminate your access to the Website (or any part of it).</li>
        <li>On suspension or termination, you must immediately cease using the Website and must not attempt to gain further access.</li>
      </ol>

      <h2>General</h2>
      <ol>
        <li>If we need to contact you, we may do so by email or by posting a notice on the Website. You agree that this satisfies all legal requirements in relation to written communications.</li>
        <li>These Terms, and any dispute relating to these Terms or the Website, are governed by and must be interpreted in accordance with the laws of New Zealand. Each party submits to the non-exclusive jurisdiction of the Courts of New Zealand in relation to any dispute connected with these Terms or the Website.</li>
        <li>For us to waive a right under these Terms, the waiver must be in writing.</li>
        <li>Clauses which, by their nature, are intended to survive termination of these Terms, including clauses 4.5, 5, 6, 7, 10.1, continue in force.</li>
        <li>If any part or provision of these Terms is or becomes illegal, unenforceable, or invalid, that part or provision is deemed to be modified to the extent required to remedy the illegality, unenforceability or invalidity. If a modification is not possible, the part or provision must be treated for all purposes as severed from these Terms. The remainder of these Terms will be binding on you.</li>
        <li>These Terms set out everything agreed by the parties relating to your use of the Website and supersede and cancel anything discussed, exchanged or agreed prior to you agreeing to these Terms. The parties have not relied on any representation, warranty or agreement relating to the Website that is not expressly set out in the Terms, and no such representation, warranty or agreement has any effect from the date you agreed to these Terms.</li>
      </ol>
    </LegalPage>
  )
}
