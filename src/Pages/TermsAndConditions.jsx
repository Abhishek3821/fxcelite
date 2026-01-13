import React from "react";
    
export default function TermsAndConditions() {
  return (
    <section className="bg-gradient-to-b from-[#050617] via-[#070a2a] to-[#050617] py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
          Terms and Conditions
        </h1>

        {/* CONTENT */}
        <div className="space-y-8 text-white/90 text-sm md:text-base leading-relaxed">

          <p>
            By using our site and/or purchasing something from us, you participate
            in our <strong>“Service”</strong> and agree to be bound by the following
            terms and conditions (<strong>“Terms and Conditions”, “Terms”</strong>),
            as well as any other terms and conditions and policies linked herein
            and/or accessible through a hyperlink.
          </p>

          <p>
            These Terms and Conditions apply to all users of the site, including but
            not limited to browsers, vendors, affiliate partners, consumers,
            merchants, and/or content creators.
          </p>

          <p>
            Please carefully read these Terms and Conditions before accessing or
            using our website. By accessing or using any portion of the site, you
            agree to be bound by these Terms and Conditions. The Services are only
            available to individuals over the age of 18 and residing in countries
            where the Services are provided.
          </p>

          <p>
            Any new features or tools added to the existing site will also be
            subject to these Terms and Conditions. We reserve the right to update,
            amend, or replace any part of these Terms at any time. Continued use of
            the website constitutes acceptance of such changes.
          </p>

          {/* DISCLAIMER */}
          <div className="bg-black/40 border border-white/10 rounded-xl p-6 text-white font-semibold uppercase text-xs md:text-sm">
            In accordance with applicable laws, none of the services provided by
            FundYourFX constitute investment services or investment advice.
            Employees, staff, and representatives are not authorised to provide
            investment recommendations.
          </div>

          <p>
            FundYourFX provides Instant Demo live-Funded Accounts in a simulated
            trading environment using third-party brokers for educational purposes
            only. All accounts are simulated and do not involve real financial
            instruments.
          </p>

          <p>
            All payments are final and are strictly for evaluation purposes. Fees
            cover services including access to demo funded accounts and trader
            support.
          </p>

          <p>
            Participation allows traders to demonstrate trading capability in a
            simulated environment. Successful participation may result in
            compensation based on simulated profits, paid in real-world currency
            where applicable.
          </p>

          <p>
            FundYourFX shall supply trading facilities, risk monitoring services,
            and a Demo Live-Funded trading account.
          </p>

          {/* SECTION 1 */}
          <h2 className="text-xl font-bold text-white pt-6">
            Section 1 – Terms of Online Registration
          </h2>

          <p>
            By agreeing to these Terms, you confirm that you are of legal age and
            will not use the Service for any unlawful or unauthorised purpose.
            Violation of any Terms may result in immediate termination of Services.
          </p>

          {/* SECTION 2 */}
          <h2 className="text-xl font-bold text-white pt-6">
            Section 2 – General Conditions
          </h2>

          <p>
            We reserve the right to refuse service to anyone at any time. Content
            (excluding credit card information) may be transmitted unencrypted.
            Credit card data is always encrypted during transmission.
          </p>

          <p>
            You may not reproduce, duplicate, sell, or exploit any portion of the
            Service without express written permission.
          </p>

          {/* SECTION 3 */}
          <h2 className="text-xl font-bold text-white pt-6">
            Section 3 – Personal Information
          </h2>

          <p>
            Submission of personal information is governed by our Privacy Policy.
            <br />
            <a
              href="https://www.fundyourfx.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 underline"
            >
              Read our Privacy Policy
            </a>
          </p>

          {/* SECTION 4 */}
          <h2 className="text-xl font-bold text-white pt-6">
            Section 4 – Affiliate Program
          </h2>

          <p>
            Our Affiliate Program is governed by separate Affiliate Terms.
            <br />
            <a
              href="https://www.fundyourfx.com/affiliate-terms-of-use/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 underline"
            >
              Read Affiliate Terms
            </a>
          </p>

          {/* SECTION 5 */}
          <h2 className="text-xl font-bold text-white pt-6">
            Section 5 – Contact Information
          </h2>

          <p>
            For any questions regarding these Terms, please contact us at{" "}
            <a
              href="mailto:support@fundyourfx.com"
              className="text-emerald-400 underline"
            >
              support@fundyourfx.com
            </a>
            . We respond within one week.
          </p>

          {/* SECTION 6 */}
          <h2 className="text-xl font-bold text-white pt-6">
            Section 6 – Giveaway Policy
          </h2>

          <p>
            Traders are eligible for only one payout from a giveaway-funded
            account. After the first payout, no scaling or additional payouts are
            permitted. Standard trading rules apply.
          </p>

        </div>
      </div>
    </section>
  );
}
