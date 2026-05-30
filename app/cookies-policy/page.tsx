import Link from "next/link";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export const metadata = {
  title: "Cookies Policy | CozyNest Finds",
  description: "Cookies Policy for CozyNest Finds",
};

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f3] text-stone-950">
      <Header />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10">
          <h1 className="font-serif text-5xl leading-tight">Cookies Policy</h1>
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
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They are widely used to remember information
              about the user, such as preferences, login status, and browsing
              history. Cookies can be set by the website you are visiting or by
              third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              2. Why We Use Cookies
            </h2>
            <p>CozyNest Finds uses cookies for several important purposes:</p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                <strong>Functionality:</strong> To ensure the Site functions
                properly and remembers your preferences
              </li>
              <li>
                <strong>Performance:</strong> To analyze how you use the Site
                and improve user experience
              </li>
              <li>
                <strong>Analytics:</strong> To understand visitor behavior and
                Site usage patterns
              </li>
              <li>
                <strong>Marketing:</strong> To deliver personalized
                advertisements and track marketing effectiveness
              </li>
              <li>
                <strong>Security:</strong> To protect against fraud and enhance
                Site security
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              3. Types of Cookies We Use
            </h2>

            <h3 className="mt-6 font-semibold text-stone-950">
              3.1 Essential Cookies
            </h3>
            <p>
              These cookies are necessary for the Site to function and cannot be
              disabled. They include:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>Authentication cookies for user login and security</li>
              <li>Session cookies to maintain your session</li>
              <li>Load balancing cookies to distribute traffic</li>
            </ul>

            <h3 className="mt-6 font-semibold text-stone-950">
              3.2 Performance and Analytics Cookies
            </h3>
            <p>These cookies help us understand how you use the Site:</p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                <strong>Google Analytics:</strong> Tracks page views, user
                behavior, and engagement metrics
              </li>
              <li>
                <strong>Heatmap Cookies:</strong> Record how users interact with
                the Site
              </li>
              <li>
                <strong>Performance Monitoring:</strong> Track Site performance
                and uptime
              </li>
            </ul>

            <h3 className="mt-6 font-semibold text-stone-950">
              3.3 Marketing and Advertising Cookies
            </h3>
            <p>
              These cookies are used to show you relevant advertisements and
              track campaign performance:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                <strong>Google Ads Cookies:</strong> Enable personalized
                advertising and conversion tracking
              </li>
              <li>
                <strong>Facebook Pixel:</strong> Tracks conversions and enables
                targeting on Facebook
              </li>
              <li>
                <strong>Affiliate Cookies:</strong> Track affiliate link clicks
                and purchases for commission calculation
              </li>
              <li>
                <strong>Remarketing Cookies:</strong> Enable ads to be shown to
                you across other websites
              </li>
            </ul>

            <h3 className="mt-6 font-semibold text-stone-950">
              3.4 Preference Cookies
            </h3>
            <p>These cookies remember your preferences:</p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>Language preferences</li>
              <li>Display settings</li>
              <li>Search preferences</li>
              <li>Filter selections</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              4. Third-Party Cookies
            </h2>
            <p>
              Third-party service providers may also set cookies on your device
              when you use our Site:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                <strong>Google Analytics:</strong> For traffic analysis and user
                behavior tracking
              </li>
              <li>
                <strong>Google Ads:</strong> For personalized advertising and
                conversion tracking
              </li>
              <li>
                <strong>Amazon Affiliate Cookies:</strong> To track purchases
                through our affiliate links
              </li>
              <li>
                <strong>Facebook Pixel:</strong> For conversion tracking and
                audience building
              </li>
              <li>
                <strong>Other Ad Networks:</strong> For serving and optimizing
                advertisements
              </li>
            </ul>
            <p className="mt-4">
              These third parties have their own cookie policies and may collect
              and use your information according to their own practices.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              5. Cookie Duration
            </h2>
            <p>
              <strong>Session Cookies:</strong> These cookies are deleted when
              you close your browser. They are used for essential Site
              functionality.
            </p>
            <p className="mt-4">
              <strong>Persistent Cookies:</strong> These cookies remain on your
              device after you close your browser. They can last for a few days
              to several years, depending on their purpose.
            </p>
            <p className="mt-4">Typical cookie durations on our Site:</p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>Analytics cookies: 2 years</li>
              <li>Advertising cookies: 13 months</li>
              <li>Preference cookies: 1 year</li>
              <li>Essential cookies: Session or 1 year</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              6. Your Cookie Choices
            </h2>
            <p>
              <strong>
                Most web browsers allow you to control cookies through browser
                settings.
              </strong>
            </p>

            <h3 className="mt-6 font-semibold text-stone-950">
              How to Control Cookies:
            </h3>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and security →
                Cookies and other site data
              </li>
              <li>
                <strong>Firefox:</strong> Settings → Privacy & Security →
                Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Cookies and
                website data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Privacy, search, and services
                → Clear browsing data
              </li>
            </ul>

            <h3 className="mt-6 font-semibold text-stone-950">
              Cookie Management Options:
            </h3>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                <strong>Allow all cookies:</strong> All cookies will be stored
                on your device
              </li>
              <li>
                <strong>Block all cookies:</strong> No cookies will be stored
                (may affect Site functionality)
              </li>
              <li>
                <strong>Manage by category:</strong> Choose which types of
                cookies to allow or block
              </li>
            </ul>

            <h3 className="mt-6 font-semibold text-stone-950">
              Opt-Out Options:
            </h3>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                <strong>Google Analytics:</strong> Install the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="text-[#5b3218] hover:underline"
                >
                  Google Analytics Opt-Out Browser Add-On
                </a>
              </li>
              <li>
                <strong>Google Ads:</strong> Manage your ad preferences at{" "}
                <a
                  href="https://adssettings.google.com"
                  className="text-[#5b3218] hover:underline"
                >
                  Google Ads Settings
                </a>
              </li>
              <li>
                <strong>Facebook Ads:</strong> Control ad preferences in your{" "}
                <a
                  href="https://www.facebook.com/ads/preferences"
                  className="text-[#5b3218] hover:underline"
                >
                  Facebook Ad Preferences
                </a>
              </li>
              <li>
                <strong>Network Advertising:</strong> Visit{" "}
                <a
                  href="https://optout.networkadvertising.org"
                  className="text-[#5b3218] hover:underline"
                >
                  Network Advertising Initiative
                </a>{" "}
                for industry opt-out options
              </li>
            </ul>

            <p className="mt-4">
              <strong>Note:</strong> Disabling cookies may affect your
              experience on the Site. Some features may not work properly if
              essential cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              7. Do Not Track (DNT)
            </h2>
            <p>
              If you enable Do Not Track (DNT) in your browser settings, we will
              respect your preference and attempt to honor your request.
              However, not all third-party services may honor DNT signals.
            </p>
            <p className="mt-4">To enable DNT:</p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and security → Do
                Not Track
              </li>
              <li>
                <strong>Firefox:</strong> Settings → Privacy & Security →
                Enhanced Tracking Protection
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Prevent
                cross-site tracking
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              8. Cookies on Mobile Devices
            </h2>
            <p>
              Most mobile browsers have similar cookie control features. Check
              your device's settings or your browser's help documentation for
              information on managing cookies on mobile devices.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              9. Data Processing and Privacy
            </h2>
            <p>
              For information about how we collect, use, and protect your data,
              please refer to our Privacy Policy. Cookies may contain personal
              information that is subject to privacy laws and regulations.
            </p>
            <p className="mt-4">
              Our use of cookies and similar tracking technologies is conducted
              in accordance with applicable privacy laws, including GDPR, CCPA,
              and other regional regulations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              10. International Users
            </h2>
            <p>
              <strong>EU Users:</strong> If you are in the European Union, we
              obtain your consent before storing non-essential cookies on your
              device. You can withdraw consent at any time through your browser
              settings or our cookie banner.
            </p>
            <p className="mt-4">
              <strong>California Users:</strong> If you are a California
              resident, you have the right to know what cookies are being used
              and can request that we delete cookies. Please refer to our
              Privacy Policy for information on exercising your rights.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              11. Changes to This Cookie Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in our cookie practices, technology, and legal
              requirements. The "Last updated" date at the top of this page
              indicates when the policy was last revised. Your continued use of
              the Site constitutes your acceptance of any updates to this
              policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              12. Contact Us
            </h2>
            <p>
              If you have any questions about our use of cookies or this Cookie
              Policy, please contact us at:
            </p>
            <div className="mt-4 rounded-lg bg-white p-4">
              <p>
                <strong>CozyNest Finds</strong>
              </p>
              <p>Email: privacy@cozynestfinds.com</p>
              <p>Website: cozynestfinds.com</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-950">
              13. Additional Resources
            </h2>
            <p>For more information about cookies, visit:</p>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>
                <a
                  href="https://www.allaboutcookies.org"
                  className="text-[#5b3218] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  All About Cookies
                </a>
              </li>
              <li>
                <a
                  href="https://www.cookiebot.com"
                  className="text-[#5b3218] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookiebot
                </a>
              </li>
              <li>
                <a
                  href="https://www.iubenda.com"
                  className="text-[#5b3218] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Iubenda
                </a>
              </li>
              <li>
                <a
                  href="https://ec.europa.eu/info/cookies_en"
                  className="text-[#5b3218] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  European Commission on Cookies
                </a>
              </li>
            </ul>
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
