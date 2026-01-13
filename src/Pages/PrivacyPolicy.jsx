import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="bg-gradient-to-b from-[#050617] via-[#070a2a] to-[#050617] py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
          Privacy Policy
        </h1>

        {/* CONTENT */}
        <div className="space-y-8 text-white/90 text-sm md:text-base leading-relaxed">

          <p>
            Your data and privacy are important to us. In line with the General
            Data Protection Regulation (GDPR) in Europe, we have updated this
            Privacy Policy to explain how we collect, use, disclose, transfer,
            and store your personal information.
          </p>

          {/* TRUST SECTION */}
          <h2 className="text-xl font-bold text-white pt-6">
            Your Information Is in Safe Hands
          </h2>

          <p>
            When you submit your information to FXCELITE  , our primary concern
            is storing it securely. From time to time, we may inform you about
            our services and promotional offers that we believe are relevant to
            you.
          </p>

          <p className="font-semibold">
            We do not sell your personal data to third parties.
          </p>

          <p>
            Your trust matters to us, and we respect your right to privacy.
            We are committed to doing the right thing when it comes to how we
            collect, use, and protect your personal data.
          </p>

          {/* POLICY PURPOSE */}
          <div className="bg-black/40 border border-white/10 rounded-xl p-6">
            <p className="font-semibold text-white mb-3">
              This Privacy Policy explains:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>The types of personal data we collect</li>
              <li>How we use your data</li>
              <li>How we protect your privacy</li>
              <li>Your rights and choices regarding your personal data</li>
            </ul>
          </div>

          {/* DATA COLLECTION */}
          <h2 className="text-xl font-bold text-white pt-6">
            What We Collect
          </h2>

          <p>We may collect the following information:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Name and date of birth</li>
            <li>Contact information, including email address</li>
            <li>Demographic information such as postcode, preferences, and interests</li>
            <li>Other information relevant to customer surveys or offers</li>
          </ul>

          {/* DISCLOSURE */}
          <h2 className="text-xl font-bold text-white pt-6">
            How We Disclose Your Information
          </h2>

          <p>
            We may disclose your information to provide our products and
            services and operate our business under the following conditions:
          </p>

          {/* DISCLOSURE ITEMS */}
          <div className="space-y-6">

            <DisclosureItem
              title="Product Communication"
              text="We use your data to communicate with you, improve our services, and periodically send promotional emails about  events,  awards, or other information you may find relevant."
            />

            <DisclosureItem
              title="Service Providers and Sub-Processors"
              text="We may share your information with carefully selected third parties that help us operate our services, including marketing, analytics, data storage, security, fraud prevention, and customer support."
            />

            <DisclosureItem
              title="Advertising"
              text="To show more relevant ads, we may allow service providers to match de-identified information (such as email addresses) to cookies or mobile ad identifiers."
            />

            <DisclosureItem
              title="Affiliates"
              text="We may share your information with trusted partners and affiliates to provide our services."
            />

            <DisclosureItem
              title="Transfer of Ownership"
              text="If FXCELITE undergoes a merger, acquisition, or sale of assets, your information may be transferred to the new owner under the terms of this Privacy Policy."
            />

            <DisclosureItem
              title="Legal Requirements"
              text="We may disclose information when required to comply with legal obligations, court orders, or to protect the safety of individuals, including minors."
            />

            <DisclosureItem
              title="Public Forums"
              text="Information shared in public forums or feedback areas is not private and may be publicly accessible or used in marketing materials."
            />

          </div>

          {/* FINAL NOTE */}
          <div className="bg-indigo-500/10 border border-indigo-400/30 rounded-xl p-6 mt-8">
            <p className="font-semibold text-white">
              Your Information and Your Rights
            </p>
            <p className="mt-2">
              The purposes described in this Privacy Policy align with how we
              use and disclose your information. We do not share your personal
              data with third parties for their own independent purposes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================
   DISCLOSURE ITEM
========================= */
function DisclosureItem({ title, text }) {
  return (
    <div>
      <p className="font-semibold text-white mb-1">
        {title}
      </p>
      <p className="text-white/85">
        {text}
      </p>
    </div>
  );
}
