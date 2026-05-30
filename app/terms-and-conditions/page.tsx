import Link from "next/link";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export const metadata = {
  title: "Terms and Conditions | CozyNest Finds",
  description: "Terms and Conditions for CozyNest Finds",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f3] text-stone-950">
      <Header />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10">
          <h1 className="font-serif text-5xl leading-tight">
            Terms and Conditions
          </h1>
          <p className="mt-4 text-sm text-stone-600">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="prose prose-stone max-w-none space-y-8 text-stone-700">
          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using CozyNest Finds ("Site," "we," "us," "our,"
              or "Company"), you agree to be bound by these Terms and
              Conditions. If you do not agree to any part of these terms, please
              do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              2. Use License
            </h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to
              access and use the Site and its content for personal,
              non-commercial purposes. You agree not to:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                Modify, copy, distribute, or sell the Site's content without
                authorization
              </li>
              <li>Engage in any form of automated access or scraping</li>
              <li>Use the Site for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to the Site's systems</li>
              <li>Transmit viruses, malware, or any harmful code</li>
              <li>
                Post content that is defamatory, offensive, or violates others'
                rights
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              3. Intellectual Property Rights
            </h2>
            <p>
              All content on the Site, including text, graphics, logos, images,
              and software, is the property of CozyNest Finds or its content
              suppliers and is protected by international copyright laws.
              Unauthorized reproduction is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              4. Affiliate Links and Sponsored Content
            </h2>
            <p>
              CozyNest Finds uses affiliate links, primarily through Amazon
              Associates. When you click on these links and make a purchase, we
              may earn a commission at no additional cost to you. This helps
              support our curation efforts.
            </p>
            <p className="mt-4">
              <strong>Affiliate Disclaimer:</strong> All product recommendations
              are made in good faith and based on our genuine belief in the
              product's quality and value. We do not recommend products solely
              for commission purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              5. Third-Party Links and Content
            </h2>
            <p>
              Our Site may contain links to third-party websites and services.
              We are not responsible for the content, accuracy, or practices of
              these external sites. Your use of third-party links is at your own
              risk and subject to their terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              6. Disclaimer of Warranties
            </h2>
            <p>
              The Site and its content are provided on an "as-is" and
              "as-available" basis. We make no representations or warranties,
              express or implied, regarding:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>The accuracy or completeness of product information</li>
              <li>The quality or suitability of products for your needs</li>
              <li>The availability or uninterrupted access to the Site</li>
              <li>The absence of errors or defects</li>
            </ul>
            <p className="mt-4">
              We disclaim all warranties, including implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, CozyNest Finds shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, including lost profits, arising from your use of
              the Site or reliance on its content, even if we have been advised
              of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              8. Product Information and Pricing
            </h2>
            <p>
              While we strive to provide accurate product information and links,
              we are not responsible for:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>Errors or omissions in product descriptions</li>
              <li>Price changes or availability on third-party platforms</li>
              <li>Out-of-stock items or discontinued products</li>
              <li>The accuracy of product images</li>
            </ul>
            <p className="mt-4">
              We recommend verifying product details directly on the retailer's
              website before making a purchase.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              9. User-Generated Content
            </h2>
            <p>
              If you submit any comments, reviews, or other content to our Site,
              you grant us a worldwide, royalty-free license to use, modify, and
              distribute that content. You represent that you own or have the
              necessary rights to the content you submit.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              10. Prohibited Conduct
            </h2>
            <p>You agree not to engage in any of the following activities:</p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>Harassing, threatening, or abusing other users</li>
              <li>Posting spam, advertisements, or promotional content</li>
              <li>Impersonating any person or entity</li>
              <li>Accessing or interfering with the Site's security systems</li>
              <li>
                Collecting or storing personal information about other users
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              11. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless CozyNest Finds
              and its officers, directors, employees, and agents from any
              claims, damages, or costs (including legal fees) arising from your
              use of the Site or violation of these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              12. Termination
            </h2>
            <p>
              We reserve the right to terminate your access to the Site at any
              time, for any reason, without notice or liability. You may also
              discontinue your use of the Site at any time.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              13. Governing Law
            </h2>
            <p>
              These Terms and Conditions are governed by and construed in
              accordance with the laws of the jurisdiction in which CozyNest
              Finds operates, without regard to its conflict of laws principles.
              You agree to submit to the exclusive jurisdiction of the courts in
              that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              14. Severability
            </h2>
            <p>
              If any provision of these Terms and Conditions is found to be
              invalid or unenforceable, the remaining provisions shall continue
              in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              15. Entire Agreement
            </h2>
            <p>
              These Terms and Conditions, along with our Privacy Policy and
              Cookies Policy, constitute the entire agreement between you and
              CozyNest Finds regarding your use of the Site and supersede all
              prior and contemporaneous agreements, representations, and
              understandings.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              16. Changes to Terms
            </h2>
            <p>
              We may update these Terms and Conditions at any time. Changes will
              be effective immediately upon posting to the Site. Your continued
              use of the Site constitutes your acceptance of the updated Terms
              and Conditions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              17. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <div className="mt-4 rounded-lg bg-white p-4">
              <p>
                <strong>CozyNest Finds</strong>
              </p>
              <p>Email: legal@cozynestfinds.com</p>
              <p>Website: cozynestfinds.com</p>
            </div>
          </section>
        </div>

        <div className="mt-12 rounded-xl border border-stone-200 bg-white p-6">
          <p className="text-sm text-stone-600">
            Please also review our{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-[#5b3218] hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/disclaimer"
              className="font-semibold text-[#5b3218] hover:underline"
            >
              Disclaimer
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
