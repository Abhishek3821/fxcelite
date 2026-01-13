import React from "react";
import {
  DollarSign,
  Send,
  Target,
  Gem,
  Clock,
  BarChart3,
} from "lucide-react";

/* =========================
   DATA
========================= */
const reasons = [
  {
    title: "Exceptional Returns",
    desc: "Offering potential returns of over 20% compared to traditional investments' modest 7–8%, maximizing profitability in funded trading.",
    icon: DollarSign,
  },
  {
    title: "Proven Track Record",
    desc: "Showcasing impressive monthly returns of around 4.74%, reflecting the effectiveness of our funding program for substantial earnings.",
    icon: Send,
  },
  {
    title: "Lucrative Opportunities",
    desc: "Giving traders an average funded account size of $265,000 to capitalize on lucrative opportunities for substantial profits.",
    icon: Target,
  },
  {
    title: "Unique Proposition",
    desc: "Tap into the funded trading market's potential and join a dynamic company that's changing the industry.",
    icon: Gem,
  },
  {
    title: "Pioneer of Instant Funding",
    desc: "Recognized the potential of instant funding early on and have built a solid reputation as pioneers in the industry.",
    icon: Clock,
  },
  {
    title: "Riding the Wave of Growth",
    desc: "Recognized the potential of this industry early on and established ourselves as a force with a solid reputation.",
    icon: BarChart3,
  },
];

/* =========================
   COMPONENT
========================= */
export default function WhyInvestFundedTrading() {
  return (
    <section className="bg-gradient-to-b from-[#050617] via-[#070a2a] to-[#050617] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16">
          Why Invest into our{" "}
          <span className="text-emerald-400">Funded Trading</span> Model
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <ReasonCard key={i} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* =========================
   CARD
========================= */
function ReasonCard({ title, desc, icon: Icon }) {
  return (
    <div className="bg-gradient-to-br from-[#5a5ee6] to-[#4044c9] rounded-2xl p-8 min-h-[240px] border border-white/10 shadow-xl transition-transform duration-300 hover:-translate-y-1">

      {/* ICON */}
      <div className="mb-6 text-white">
        <Icon size={36} strokeWidth={1.6} />
      </div>

      {/* TITLE */}
      <h3 className="text-white text-xl font-bold mb-3">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-white/90 leading-relaxed text-sm md:text-base">
        {desc}
      </p>
    </div>
  );
}
