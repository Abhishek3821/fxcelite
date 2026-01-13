import React from "react";
import {
  ShieldCheck,
  Coins,
} from "lucide-react";

export default function KeyBenefitsSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#06071f] via-[#070a2a] to-[#06071f] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TOP CARD ================= */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

          <Benefit
            icon={<Coins size={34} />}
            title="Up to $3M in Funding"
          />

          <Benefit
            icon={<ShieldCheck size={34} />}
            title="Zero Lost Liability"
          />

        </div>

        {/* ================= DESCRIPTION ================= */}
        <p className="max-w-5xl mx-auto text-center text-lg md:text-xl text-white/90 leading-relaxed">
          Embrace unparalleled freedom to trade any strategy or style whenever
          you choose. We allow you to keep trades open overnight and over the
          weekend, and implement your own expert advisors (EAs) for optimal
          performance.
        </p>

      </div>
    </section>
  );
}

/* ================= BENEFIT ITEM ================= */
function Benefit({ icon, title }) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-14 h-14 rounded-xl border-2 border-emerald-400 text-emerald-400 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold">
        {title}
      </h3>
    </div>
  );
}
