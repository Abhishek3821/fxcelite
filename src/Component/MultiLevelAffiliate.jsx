import React from "react";

export default function MultiLevelAffiliate() {
  return (
    <section className="w-full py-28 bg-gradient-to-br from-[#020316] via-[#04062a] to-[#020316]">
      <div className="max-w-7xl mx-auto px-6">

        {/* GLASS CARD */}
        <div className="rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl px-8 md:px-20 py-20 shadow-2xl">

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10">
            Invite other Affiliates and{" "}
            <span className="text-emerald-400">
              Earn Commissions
            </span>{" "}
            from their Referrals.
          </h2>

          {/* CONTENT */}
          <div className="max-w-3xl mx-auto space-y-10 text-left">

            {/* PROGRAM DESCRIPTION */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                Our Multi-Level Affiliate Program
              </h3>

              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <li>
                  • Earn more from your team: Up to{" "}
                  <span className="text-white font-semibold">
                    8.75% extra
                  </span>{" "}
                  from sub-affiliates (Levels 2–4: 5% / 2.5% / 1.25%) — passive
                  income beyond your direct commissions.
                </li>
                <li>
                  • Turn traders into partners: All of your traders can become
                  affiliates under you, so your network (and overrides) grow
                  virally as they refer others.
                </li>
                <li>
                  • Hands-off scaling: Automatic enrollment and multi-tier
                  rewards let you grow by recruiting/mentoring, diversifying
                  income and smoothing monthly cash flow.
                </li>
              </ul>
            </div>

            {/* COMMISSION STRUCTURE */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                Multi-Level Affiliate Commission Structure
              </h3>

              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Level 2: <span className="text-white font-semibold">5%</span></li>
                <li>• Level 3: <span className="text-white font-semibold">2.5%</span></li>
                <li>• Level 4: <span className="text-white font-semibold">1.25%</span></li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div className="flex justify-center mt-14">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:opacity-90 transition shadow-xl shadow-emerald-500/30">
              Become an Affiliate Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
