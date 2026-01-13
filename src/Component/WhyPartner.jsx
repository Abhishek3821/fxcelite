import React from "react";

export default function WhyPartner() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#020316] via-[#04062a] to-[#020316]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-14">
          Why <span className="text-emerald-400">Partner</span> with Us?
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          <PartnerCard
            number="#1"
            title="Live Tracking Links"
            desc="For accurate performance tracking"
          />

          <PartnerCard
            number="#2"
            title="High-Converting Creatives"
            desc="To amplify your marketing effort"
          />

          <PartnerCard
            number="#3"
            title="Performance Analytics"
            desc="In-depth analytics for data-driven decision"
          />

          <PartnerCard
            number="#4"
            title="Promotional Material"
            desc="Exclusive for increased conversions"
          />

          <PartnerCard
            number="#5"
            title="Earn & Withdraw"
            desc="Reach $100 and cash out every day!"
          />

        </div>
      </div>
    </section>
  );
}

/* =========================
   CARD
========================= */
function PartnerCard({ number, title, desc }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#0b1025] to-[#050617] border border-white/10 px-6 py-8 shadow-xl hover:scale-[1.03] transition">

      <p className="text-emerald-400 font-extrabold text-lg mb-3">
        {number}
      </p>

      <h3 className="text-white font-bold mb-2 text-sm">
        {title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
