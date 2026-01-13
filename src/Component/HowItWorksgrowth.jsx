import React from "react";
import { ArrowRight } from "lucide-react";

/* =========================
   DATA
========================= */
const steps = [
  {
    step: "#1",
    title: "Select Your Plan",
    desc: "Choose the plan that fits your trading style",
  },
  {
    step: "#2",
    title: "Secure Your Spot",
    desc: "Process the fees and sign the contract.",
  },
  {
    step: "#3",
    title: "Start Trading",
    desc: "Get your Trading Account",
  },
  {
    step: "#4",
    title: "Get Paid Out",
    desc: "Earn up to 95% profit",
  },
];

/* =========================
   COMPONENT
========================= */
export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-[#050617] via-[#070a2a] to-[#050617] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16">
          How <span className="text-emerald-400">It Works</span>.
        </h2>

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <StepCard key={i} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* =========================
   STEP CARD
========================= */
function StepCard({ step, title, desc }) {
  return (
    <div className="relative bg-gradient-to-br from-[#0b0f1f] to-[#0f1430] rounded-2xl p-8 min-h-[220px] border border-white/10 shadow-xl">

      {/* ARROW */}
      <div className="absolute top-6 right-6 text-white">
        <ArrowRight size={26} />
      </div>

      {/* STEP NUMBER */}
      <p className="text-emerald-400 text-3xl font-extrabold mb-4">
        {step}
      </p>

      {/* TITLE */}
      <h3 className="text-white text-xl font-bold mb-3">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-white/80 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
