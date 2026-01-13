import React from "react";

export default function RefundPolicy() {
  return (
    <section className="bg-gradient-to-b from-[#050617] via-[#070a2a] to-[#050617] py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
          Refund Policy
        </h1>

        {/* CONTENT */}
        <div className="space-y-8 text-white/90 text-sm md:text-base leading-relaxed">

          <p>
            By sending an email to{" "}
            <a
              href="mailto:support@fundyourfx.com"
              className="text-emerald-400 underline"
            >
              support@fundyourfx.com
            </a>
            , the Customer may request the termination of the Trading Account at
            any time. Such a request is considered a request to terminate the
            contract, resulting in the loss of access to all Services, including
            the Client Section and Trading Platform.
          </p>

          <p>
            Upon receipt of the termination request, the Provider will confirm
            via email. At that moment, the contractual relationship between the
            Customer and the Provider will be dissolved. In this situation, the
            Customer is not entitled to any refund of fees already paid or other
            expenditures incurred.
          </p>

          {/* IMPORTANT NOTICE */}
          <div className="bg-black/40 border border-white/10 rounded-xl p-6 text-white font-semibold uppercase text-xs md:text-sm">
            All fees paid are non-refundable once services have been activated or
            trading credentials have been issued.
          </div>

          <p>
            If the Customer breaches any trading rules and has been notified by
            the Provider, the Provider may immediately restrict or terminate
            access to all or part of the Services, including the Client Section
            and Trading Platform, without compensation. In such cases, no refund
            will be issued.
          </p>

          <p>
            After payment for a selected FundYourFX program, the Customer will
            receive login credentials for the Trading Platform via email or
            within the Client Section. The Trading Account is considered
            activated upon receipt of these credentials.
          </p>

          <p className="font-semibold uppercase">
            Consumer Notice
          </p>

          <p>
            If you are a consumer, by opening your first trade, you expressly
            request the Provider to complete the Services before the expiry of
            any statutory withdrawal period. This action affects and limits your
            right to withdraw from the contract.
          </p>

          <p>
            If the Customer does not activate their FundYourFX Trading Account
            within <strong>30 calendar days</strong> of the account being made
            available, access will be suspended. The Customer may request
            reactivation within <strong>3 days</strong> of suspension by
            contacting support. Failure to do so will result in termination of
            Services without any right to a refund.
          </p>

          <p>
            If the Customer files an unjustified complaint or disputes the paid
            fee with their bank or payment provider (including chargebacks or
            dispute services), the Provider reserves the right to immediately
            terminate all Services and deny any future access, at its sole
            discretion.
          </p>

          {/* REFUND EXCEPTION */}
          <div className="bg-indigo-500/10 border border-indigo-400/30 rounded-xl p-6">
            <p className="font-semibold text-white mb-2">
              Limited Refund Eligibility
            </p>
            <p>
              If trading credentials are not delivered within{" "}
              <strong>24 hours</strong> after registration, the Customer may
              request a refund. Once credentials have been issued, all fees
              become strictly non-refundable, including partial refunds.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
