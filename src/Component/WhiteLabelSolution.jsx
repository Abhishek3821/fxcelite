import React from "react";
import { Check } from "lucide-react";

export default function WhiteLabelSolution() {
  return (
    <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN CARD */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0B0E2A] via-[#0E1433] to-[#0B0E2A] border border-white/10 p-12 md:p-16 text-center">

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-6">
            Introducing our{" "}
            <span className="text-emerald-400">White Label Solution</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-slate-300 max-w-4xl mx-auto text-lg leading-relaxed mb-16">
            Whether you’ve just started a prop trading firm or have been in the
            industry for some time, our unbranded white label solution provides
            the perfect blend of flexibility and customization. You can take
            advantage of our technology and liquidity without sacrificing your
            own brand and identity.
          </p>

          {/* KEY FEATURES */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12">
            Key Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <Feature text="Large volumes of available funds and industry-best spreads starting at 0 pips." />
            <Feature text="The most well-known trading platforms with your own custom branding." />
            <Feature text="Benefit from working with an established and reputable company like FundYourFX." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 max-w-4xl mx-auto">
            <Feature text="Establish a client-based payment structure that works for your company." />
            <Feature text="Adjust your terms of trade to suit the needs of your individual customers." />
          </div>

          {/* REQUIREMENTS */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Requirements
          </h3>

          <p className="text-slate-300 max-w-4xl mx-auto text-lg leading-relaxed">
            To be eligible for our complete unbranded white label solution, it is
            necessary to have a pre-existing customer base. However, if you’ve
            just started your prop trading firm, we can still work with you to
            explore suitable options based on your specific circumstances.
          </p>

        </div>

      </div>
    </section>
  );
}

/* =========================
   FEATURE ITEM
========================= */
function Feature({ text }) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center">
        <Check className="text-indigo-400" size={22} />
      </div>
      <p className="text-slate-200 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
