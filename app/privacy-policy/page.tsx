import Link from "next/link";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export const metadata = {
  title: "Privacy Policy | CozyNest Finds",
  description: "Privacy Policy for CozyNest Finds",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f3] text-stone-950">
      <Header />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10">
          <h1 className="font-serif text-5xl leading-tight">Privacy Policy</h1>
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
              1. Introduction
            </h2>
            <p>
              CozyNest Finds ("we," "us," "our," or "Company") operates the
              website cozynestfinds.com (the "Site"). We are committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and otherwise handle your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              2. Information We Collect
            </h2>
            <p className="font-semibold">
              We may collect information about you in a variety of ways:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                <strong>Personal Information:</strong> When you visit our Site,
                we may collect information such as your name, email address, and
                other details you voluntarily provide.
              </li>
              <li>
                <strong>Device Information:</strong> We may collect information
                about the device you use to access the Site, including IP
                address, browser type, operating system, and device identifiers.
              </li>
              <li>
                <strong>Usage Information:</strong> We automatically collect
                information about your interactions with the Site, including
                pages visited, links clicked, time spent on pages, and referral
                sources.
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> We use
                cookies, web beacons, pixels, and similar tracking technologies
                to enhance your experience and understand how you use the Site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              3. How We Use Your Information
            </h2>
            <p className="font-semibold">
              We use the information we collect to:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>Provide, maintain, and improve the Site and its features</li>
              <li>Respond to your inquiries and customer service requests</li>
              <li>
                Send promotional emails and marketing communications (with your
                consent)
              </li>
              <li>Analyze usage patterns and improve user experience</li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Prevent fraudulent activities and enhance security</li>
              <li>Personalize your experience on the Site</li>
              <li>
                Show targeted advertisements through Google Ads and other
                advertising platforms
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              4. Third-Party Services
            </h2>
            <p className="font-semibold">
              We work with third-party service providers:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                <strong>Google Ads:</strong> We use Google Ads to display
                advertisements on our Site and across the internet. Google may
                use cookies to track your interactions and show you relevant
                ads.
              </li>
              <li>
                <strong>Analytics Providers:</strong> We may use Google
                Analytics and similar services to understand how visitors use
                our Site.
              </li>
              <li>
                <strong>Affiliate Links:</strong> We use Amazon affiliate links.
                When you click and purchase through these links, we may earn a
                commission.
              </li>
              <li>
                <strong>Payment Processors:</strong> We may use third-party
                payment processors to handle transactions.
              </li>
            </ul>
            <p className="mt-4">
              These third parties may collect and use your information according
              to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              5. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to collect
              information about your browsing activities and to remember your
              preferences. This helps us provide you with a better user
              experience and deliver targeted advertisements.
            </p>
            <p className="mt-4">
              <strong>Types of cookies we use:</strong>
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                <strong>Essential Cookies:</strong> Necessary for the Site to
                function properly.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how
                users interact with the Site.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used to track your activity
                and deliver personalized advertisements.
              </li>
            </ul>
            <p className="mt-4">
              You can control cookie preferences through your browser settings.
              Please note that disabling cookies may affect your experience on
              the Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              6. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to
              provide our services and fulfill the purposes outlined in this
              Privacy Policy. You may request deletion of your personal
              information at any time by contacting us at the email address
              below.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              7. Your Privacy Rights
            </h2>
            <p className="font-semibold">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                <strong>Access:</strong> You may request access to the personal
                information we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> You may request that we correct
                inaccurate or incomplete information.
              </li>
              <li>
                <strong>Deletion:</strong> You may request deletion of your
                personal information, subject to certain conditions.
              </li>
              <li>
                <strong>Opt-Out:</strong> You may opt out of receiving marketing
                communications from us.
              </li>
              <li>
                <strong>Data Portability:</strong> You may request a copy of
                your data in a portable format.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">8. Security</h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, disclosure, alteration, and destruction.
              However, no method of transmission over the internet is 100%
              secure. We cannot guarantee the absolute security of your
              information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              9. Links to Third-Party Websites
            </h2>
            <p>
              Our Site may contain links to third-party websites, including
              Amazon and other retailers. We are not responsible for the privacy
              practices of these external websites. We encourage you to review
              their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              10. Children's Privacy
            </h2>
            <p>
              Our Site is not intended for children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If we learn that we have collected personal information from a
              child under 13, we will promptly delete such information. Please
              contact us if you believe we have inadvertently collected
              information from a child.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              11. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, and legal requirements. We
              will notify you of significant changes by updating the "Last
              updated" date at the top of this page. Your continued use of the
              Site constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              12. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <div className="mt-4 rounded-lg bg-white p-4">
              <p>
                <strong>CozyNest Finds</strong>
              </p>
              <p>Email: privacy@cozynestfinds.com</p>
              <p>Website: cozynestfinds.com</p>
            </div>
          </section>
        </div>

        <div className="mt-12 rounded-xl border border-stone-200 bg-white p-6">
          <p className="text-sm text-stone-600">
            For information about how we use cookies, please see our{" "}
            <Link
              href="/cookies-policy"
              className="font-semibold text-[#5b3218] hover:underline"
            >
              Cookies Policy
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
