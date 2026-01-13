import React from "react";

export default function AffiliatePayouts() {
  return (
    <section className="w-full py-28 bg-gradient-to-br from-[#020316] via-[#04062a] to-[#020316]">
      <div className="max-w-7xl mx-auto px-6">

        {/* GLASS CARD */}
        <div className="rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl px-8 md:px-20 py-20 shadow-2xl">

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
            The Affiliate Program that{" "}
            <span className="text-emerald-400">Pays Better</span>
          </h2>

          {/* CONTENT */}
          <div className="max-w-3xl mx-auto space-y-10 text-left">

            {/* HOW IT WORKS */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                How the Affiliate Payouts work:
              </h3>

              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <li>
                  • Commissions on a referral become payable after{" "}
                  <span className="text-white font-semibold">10 days</span>.
                </li>
                <li>
                  • Receive{" "}
                  <span className="text-white font-semibold">Daily payouts</span>{" "}
                  once your available balance is above{" "}
                  <span className="text-white font-semibold">$100</span>.
                </li>
                <li>
                  • Get Paid directly via{" "}
                  <span className="text-white font-semibold">
                    Crypto (USDT/BTC/ETH)
                  </span>{" "}
                  or Bank Transfer{" "}
                  <span className="text-white font-semibold">
                    (USD/EUR/GBP)
                  </span>.
                </li>
              </ul>
            </div>

            {/* NOTE */}
            <div className="flex gap-4 items-start">
              <div className="text-2xl">🚀</div>
              <div className="text-slate-300 text-sm leading-relaxed">
                <p className="mb-2">
                  <span className="text-white font-semibold">
                    Fast & Simple Withdrawals
                  </span>{" "}
                  – Once your referral bonus reaches{" "}
                  <span className="text-white font-semibold">$100</span>, you can
                  request a payout.
                </p>
                <p>
                  All payouts are processed{" "}
                  <span className="text-white font-semibold">every day</span>,
                  ensuring a smooth and timely withdrawal process.
                </p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:opacity-90 transition shadow-xl shadow-emerald-500/30">
              Become an Affiliate Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
