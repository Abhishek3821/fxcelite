import React from "react";

export default function PartnerProgram() {
  return (
    <section className="w-full py-28 bg-gradient-to-b from-[#2f36a8] via-[#1a1f6b] to-[#020316]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TOP LABEL */}
        <p className="text-sm tracking-widest text-white/80 mb-4 uppercase">
          Become a Partner
        </p>

        {/* MAIN HEADING */}
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white mb-4">
          Partner with a Trusted
        </h2>
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-emerald-400 mb-6">
          Prop Trading Firm
        </h2>

        {/* SUBTEXT */}
        <p className="max-w-3xl mx-auto text-slate-200 leading-relaxed mb-10">
          Join the highest-paying Prop Trading Affiliate Program in the
          industry and earn up to <span className="font-semibold">33.75%</span>{" "}
          in commissions.
        </p>

        {/* CTA */}
        <div className="mb-20">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold text-lg hover:opacity-90 transition shadow-xl shadow-emerald-500/30">
            Join Now
          </button>
        </div>

        {/* PLANS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PartnerCard
            title="Standard"
            subtitle="from the Start"
            percent="15%"
          />

          <PartnerCard
            title="Premium"
            subtitle="from 50 referrals"
            percent="20%"
          />

          <PartnerCard
            title="Elite"
            subtitle="from 200 referrals"
            percent="25%"
          />
        </div>
      </div>
    </section>
  );
}

/* =========================
   PARTNER CARD
========================= */
function PartnerCard({ title, subtitle, percent }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#0b1025] to-[#050617] border border-white/10 px-8 py-10 text-left shadow-xl hover:scale-[1.02] transition">
      <h3 className="text-2xl font-bold text-white mb-2">
        {title}
      </h3>

      <p className="text-slate-400 mb-6">
        {subtitle}
      </p>

      <div className="flex items-end gap-3">
        <span className="text-3xl font-extrabold text-white">
          {percent}
        </span>
        <span className="text-slate-300 uppercase tracking-wide text-sm mb-1">
          Commission
        </span>
      </div>
    </div>
  );
}
