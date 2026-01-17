import React from "react";
import { Check } from "lucide-react";

export default function GrowthPlan() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#3b3fb8] via-[#1d1f6b] to-[#06071f]">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Growth Plan
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-10">
            Discover the freedom to trade with ease through our flexible,
            user-friendly interface, making trading a pleasure, not a challenge.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-8">
            <Feature text="up to $3M in funding" />
            <Feature text="95% profit share" />
            <Feature text="Instant Funding and Evaluation accounts" />
          </div>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="relative">
          <div className="relative bg-gradient-to-br from-[#2a2f9e] to-[#0b0f3f] rounded-3xl p-8 border border-white/10 shadow-2xl">

            {/* BRAND */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded bg-indigo-500 flex items-center justify-center text-white font-bold">
                F
              </div>
              <span className="text-white font-semibold tracking-wide">
                FXCELITE
              </span>
            </div>

            {/* TITLE */}
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-6">
              FXCELITE <br />
              NEW GROWTH <br />
              PLAN SUMMARY
            </h3>

            {/* PROGRESS LINE */}
            <div className="h-1 w-24 bg-indigo-500 rounded-full mb-6" />

            {/* MOCK LAPTOP */}
            <div className="absolute -right-6 top-12 w-72 rotate-12 hidden md:block">
              <div className="bg-black rounded-xl shadow-xl p-2">
                <div className="h-40 rounded-lg bg-gradient-to-br from-indigo-500/40 to-indigo-800/40" />
              </div>
            </div>

            {/* PLAY ICON */}
            <div className="absolute right-12 bottom-12 w-20 h-20 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
              <div className="w-0 h-0 border-l-[18px] border-l-white border-y-[12px] border-y-transparent ml-1" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= FEATURE ITEM ================= */
function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-emerald-400 flex items-center justify-center text-black">
        <Check size={22} strokeWidth={3} />
      </div>
      <span className="text-white font-medium max-w-[200px]">
        {text}
      </span>
    </div>
  );
}
