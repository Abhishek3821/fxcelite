import React from "react";
import { TrendingUp, Hourglass } from "lucide-react";
import img1 from "../assets/fx1.webp"
export default function FlexibilitySection() {
  return (
    <section className="relative bg-gradient-to-b from-[#050617] to-[#070A23] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* =========================
              LEFT IMAGE
          ========================= */}
          <div className="relative flex justify-center lg:justify-start">
            <img
              src={img1}
              alt="Trading growth illustration"
              className="w-full max-w-md lg:max-w-lg object-contain"
            />

            {/* Soft Glow */}
            <div className="absolute -z-10 inset-0 bg-indigo-600/20 blur-3xl rounded-full" />
          </div>

          {/* =========================
              RIGHT CONTENT
          ========================= */}
          <div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-12">
              Real Flexibility for Long-Term Trading Goals
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Card 1 */}
              <FeatureCard
                icon={<TrendingUp />}
                title="Wide Options Of Trading Account"
                text="Since 2021, we have been offering Instant Funded Accounts, but now, we have decided to incorporate the evaluation model with 1 phase and 2 phase, becoming more flexible based on your trading needs."
              />

              {/* Card 2 */}
              <FeatureCard
                icon={<Hourglass />}
                title="Up to 10% Total Drawdown"
                text="Our 10% Total Drawdown provides the flexibility and support you need to stay in the game. We're here to help you focus on your growth with confidence and resilience."
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   FEATURE CARD
========================= */
function FeatureCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-8 hover:bg-white/10 transition">
      <div className="flex items-center gap-3 mb-4 text-indigo-400">
        {icon}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-slate-300 leading-relaxed text-sm">
        {text}
      </p>
    </div>
  );
}
