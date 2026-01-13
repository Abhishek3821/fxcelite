import React from "react";

/* =========================
   DATA
========================= */
const features = [
  {
    title: "Weekly Profit Payout",
    desc: "Receive up to 95% of your earnings as per our payout scaling plans.",
    icon: "🕒",
  },
  {
    title: "Never Risk Any Money",
    desc: "By demonstrating consistency, we will reward you steadily increasing your funded account size.",
    icon: "🚫",
  },
  {
    title: "Exceptional Flexibility",
    desc: "We permit overnight positions and trades during the weekend, as long as you adhere to our risk management rules.",
    icon: "📈",
  },
  {
    title: "Personal Support",
    desc: "We offer our funded traders an individual contact person, with whom they can ask questions and get immediate feedback.",
    icon: "🔄",
  },
  {
    title: "Instant Funded Virtual Account",
    desc: "Get paid real money from your virtual profits.",
    icon: "⚡",
  },
  {
    title: "$3M Upside Growth",
    desc: "After your third profit split, we will steadily increase your account balance until you reach $3 million.",
    icon: "💰",
  },
];

/* =========================
   COMPONENT
========================= */
export default function WhatMakesUsDifferent() {
  return (
    <section className="relative bg-gradient-to-b from-[#050617] via-[#070a2a] to-[#050617] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16">
          What Make Us Different
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* =========================
   FEATURE CARD
========================= */
function FeatureCard({ title, desc, icon }) {
  return (
    <div className="relative bg-gradient-to-br from-[#5a5ee6] to-[#4044c9] rounded-2xl p-8 min-h-[220px] border border-white/10 shadow-xl transition-transform duration-300 hover:-translate-y-1">

      {/* ICON */}
      <div className="absolute -top-6 left-6 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-2xl shadow-lg">
        {icon}
      </div>

      {/* CONTENT */}
      <h3 className="text-white text-xl font-bold mt-10 mb-3">
        {title}
      </h3>

      <p className="text-white/90 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
