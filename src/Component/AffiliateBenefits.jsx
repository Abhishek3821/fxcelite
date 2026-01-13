import React from "react";

export default function AffiliateBenefits() {
  return (
    <section className="w-full py-28 bg-gradient-to-br from-[#020316] via-[#04062a] to-[#020316]">
      <div className="max-w-7xl mx-auto px-6">

        {/* GLASS CARD */}
        <div className="rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl px-8 md:px-20 py-20 shadow-2xl">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Rise to the Top and Earn
            </h2>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-400">
              Exclusive Benefits at Every Level
            </h2>
          </div>

          {/* CONTENT */}
          <div className="max-w-3xl mx-auto text-left space-y-12">

            {/* LEVEL 1 */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                <span className="text-emerald-400 mr-2">➔</span>
                Level 1: Standard Partner
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• 15% Lifetime Commissions</li>
                <li>• Up to 8.75% in Multi-Level Commissions</li>
              </ul>
            </div>

            {/* LEVEL 2 */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                <span className="text-emerald-400 mr-2">➔</span>
                Level 2: Premium Partner
              </h3>
              <p className="text-slate-400 text-sm mb-3">
                Starting from 50 referrals, you will receive:
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• 20% Lifetime Commissions</li>
                <li>• Up to 8.75% in Multi-Level Commissions</li>
                <li>• Receive a 5% marketing coupon for your audience</li>
                <li>• One Time Bonus: +50k 2-Step challenge for affiliate</li>
                <li>
                  • Monthly Giveaways: Free Monthly 5x 5k 2-Step challenges
                  giveaways
                </li>
              </ul>
            </div>

            {/* LEVEL 3 */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                <span className="text-emerald-400 mr-2">➔</span>
                Level 3: Elite Partner
              </h3>
              <p className="text-slate-400 text-sm mb-3">
                Starting from 200 referrals, you will receive:
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• 25% Lifetime Commissions</li>
                <li>• Up to 8.75% in Multi-Level Commissions</li>
                <li>• Requirement: Starting from 200 referrals</li>
                <li>• Receive a 10% marketing coupon for your audience</li>
                <li>• One Time Bonus: +100k 2-Step challenge for affiliate</li>
                <li>
                  • Monthly Giveaways: Free 5x 10k 2-Step challenges giveaways
                </li>
                <li>• VIP Contact for Faster Support</li>
                <li>• Dedicated Partner Landingpage</li>
              </ul>
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
