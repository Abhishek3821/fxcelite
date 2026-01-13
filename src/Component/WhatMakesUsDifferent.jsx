import React from "react";
import { Check } from "lucide-react";

export default function WhatMakesUsDifferent() {
  const features = [
    {
      title: "Affiliate Bonuses",
      description:
        "Cash bonuses or milestone rewards for reaching higher referral numbers beyond the listed tiers.",
    },
    {
      title: "Exclusive Discounts",
      description:
        "Enjoy personalized discounts for your brand, with seamless tracking to monitor usage.",
    },
    {
      title: "Account Manager",
      description:
        "Receive support from a dedicated Account Manager to help you reach your milestones.",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-[#050617]">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1c1f5f,transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-16">
          What Makes Us{" "}
          <span className="text-emerald-400">Different</span>
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {features.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl bg-gradient-to-b from-indigo-500/40 to-indigo-700/40
                         border border-white/10 backdrop-blur-xl px-8 py-10
                         transition-all duration-300 hover:-translate-y-2
                         hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.6)]"
            >
              {/* CHECK ICON */}
              <div className="w-12 h-12 mx-auto mb-6 rounded-xl bg-emerald-400
                              flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Check className="text-black" size={22} strokeWidth={3} />
              </div>

              {/* TEXT */}
              <h3 className="text-lg font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="inline-flex items-center justify-center px-8 py-4 rounded-full
                           bg-gradient-to-r from-emerald-400 to-cyan-400
                           text-black font-semibold
                           hover:opacity-90 transition
                           shadow-lg shadow-emerald-500/30">
          Let’s Get Started
        </button>
      </div>
    </section>
  );
}
