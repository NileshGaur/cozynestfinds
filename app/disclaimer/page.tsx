import Link from "next/link";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export const metadata = {
  title: "Disclaimer | CozyNest Finds",
  description: "Disclaimer for CozyNest Finds",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f3] text-stone-950">
      <Header />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10">
          <h1 className="font-serif text-5xl leading-tight">Disclaimer</h1>
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
              General Disclaimer
            </h2>
            <p>
              CozyNest Finds operates as a product curation and recommendation
              website. This disclaimer provides important information about how
              you should interpret and use the content on our Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              1. Product Information Disclaimer
            </h2>
            <p>
              <strong>We are not responsible for:</strong>
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                The accuracy, completeness, or timeliness of product information
                provided on our Site
              </li>
              <li>
                The quality, safety, or suitability of any products recommended
              </li>
              <li>
                Changes in product specifications, availability, or pricing on
                retailer websites
              </li>
              <li>
                Products that become discontinued or are no longer available
              </li>
              <li>
                Discrepancies between our descriptions and actual product
                features
              </li>
              <li>Incorrect or outdated product images</li>
            </ul>
            <p className="mt-4">
              <strong>We strongly recommend:</strong> Always verify product
              details, specifications, and pricing directly on the retailer's
              website before making a purchase. Read customer reviews and check
              the return policy before buying.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              2. Affiliate Link Disclaimer
            </h2>
            <p>
              CozyNest Finds uses affiliate links, including Amazon Associates
              and other affiliate programs. When you click on these links and
              make a purchase, we may earn a commission at no additional cost to
              you.
            </p>
            <p className="mt-4">
              <strong>Affiliate Statement:</strong> Despite earning commissions,
              all product recommendations are made in good faith based on our
              genuine belief in the product's quality and value for a cozy
              lifestyle. We do not recommend products solely for commission
              purposes.
            </p>
            <p className="mt-4">
              <strong>Note:</strong> Prices and availability are subject to
              change by the retailer. We are not responsible for price
              discrepancies or unavailable items.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              3. No Professional Advice
            </h2>
            <p>
              The content on our Site is provided for informational and
              entertainment purposes only. It does not constitute:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>Professional interior design advice</li>
              <li>Financial or investment advice</li>
              <li>Medical or health advice</li>
              <li>Legal advice</li>
              <li>Professional recommendations requiring expertise</li>
            </ul>
            <p className="mt-4">
              Before making significant purchases or decisions based on our
              recommendations, consult with appropriate professionals if
              necessary.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              4. Personal Suitability
            </h2>
            <p>
              What works for one person's space may not work for yours. Factors
              such as:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>Personal style and preferences</li>
              <li>Space dimensions and layout</li>
              <li>Lighting conditions</li>
              <li>Climate and environment</li>
              <li>Budget and lifestyle needs</li>
            </ul>
            <p className="mt-4">
              All play a role in whether a product is suitable for your needs.
              Our recommendations should serve as inspiration and guidance, not
              definitive choices.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              5. Third-Party Links Disclaimer
            </h2>
            <p>
              Our Site contains links to third-party websites and retailers,
              including Amazon. We are not responsible for:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>The accuracy or legality of third-party content</li>
              <li>Product quality or authenticity from third-party sellers</li>
              <li>The security or privacy practices of linked websites</li>
              <li>Your transactions or disputes with third parties</li>
              <li>
                Counterfeit or fraudulent products sold by unauthorized sellers
              </li>
            </ul>
            <p className="mt-4">
              When purchasing from third-party retailers, review their privacy
              policies and return policies before completing your transaction.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              6. Product Safety and Authenticity
            </h2>
            <p>
              While we curate products we believe are safe and authentic, we
              cannot guarantee:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>That all products sold are from authorized retailers</li>
              <li>That counterfeit or unauthorized products are not sold</li>
              <li>Compliance with all safety and quality standards</li>
              <li>The absence of recalls or safety issues</li>
            </ul>
            <p className="mt-4">
              Before purchasing, verify seller authenticity and check product
              reviews for any reported safety concerns.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              7. "As-Is" Basis
            </h2>
            <p>
              The Site and all content provided on it are offered on an "as-is"
              basis without any warranties, express or implied. We disclaim all
              warranties, including:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>Warranties of merchantability</li>
              <li>Warranties of fitness for a particular purpose</li>
              <li>Warranties of non-infringement</li>
              <li>Warranties of accuracy or completeness</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              8. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, CozyNest Finds shall not
              be liable for:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>Any direct, indirect, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Personal injury or property damage</li>
              <li>Errors or omissions in product information</li>
              <li>Your reliance on our recommendations or content</li>
              <li>
                Issues arising from purchases made through affiliate links
              </li>
            </ul>
            <p className="mt-4">
              This limitation applies even if CozyNest Finds has been advised of
              the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              9. User Responsibility
            </h2>
            <p>You assume all responsibility and risk for:</p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>Your use of the Site and its content</li>
              <li>Purchases made through links on our Site</li>
              <li>Verification of product information before purchase</li>
              <li>Assessing whether products meet your needs</li>
              <li>Compliance with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              10. Advertisements and Sponsored Content
            </h2>
            <p>
              Our Site displays advertisements from Google Ads and other ad
              networks. We are not responsible for:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>The content or accuracy of advertisements</li>
              <li>Your interactions or transactions with advertisers</li>
              <li>The quality of products or services advertised</li>
              <li>Claims made in sponsored content</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              11. Returns and Refunds
            </h2>
            <p>
              Return and refund policies are determined by individual retailers.
              CozyNest Finds has no responsibility for:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>Processing returns or refunds</li>
              <li>Resolving disputes with sellers</li>
              <li>Retailer return policies or procedures</li>
              <li>Customer service issues with third-party retailers</li>
            </ul>
            <p className="mt-4">
              Please contact the retailer directly for any return, refund, or
              customer service inquiries.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              12. Change of Content
            </h2>
            <p>CozyNest Finds reserves the right to:</p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                Add, remove, or modify product recommendations at any time
              </li>
              <li>Change, update, or discontinue content without notice</li>
              <li>Modify or discontinue the Site without liability</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              13. Acknowledgment
            </h2>
            <p>
              By using CozyNest Finds, you acknowledge that you have read this
              disclaimer, understand it, and agree to be bound by its terms. If
              you do not agree with any part of this disclaimer, please do not
              use our Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              14. Contact for Concerns
            </h2>
            <p>
              If you have questions or concerns about this disclaimer or believe
              a product poses a safety risk, please contact us:
            </p>
            <div className="mt-4 rounded-lg bg-white p-4">
              <p>
                <strong>CozyNest Finds</strong>
              </p>
              <p>Email: support@cozynestfinds.com</p>
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
              href="/terms-and-conditions"
              className="font-semibold text-[#5b3218] hover:underline"
            >
              Terms and Conditions
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
