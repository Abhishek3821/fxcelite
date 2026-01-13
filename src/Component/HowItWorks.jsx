import React from "react";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white">
            How <span className="text-emerald-400">It Works.</span>
          </h2>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StepCard
            step="#1"
            title="Select Your Plan"
            description="Choose the plan that fits your trading style"
          />
          <StepCard
            step="#2"
            title="Secure Your Spot"
            description="Process the fees and sign the contract."
          />
          <StepCard
            step="#3"
            title="Start Trading"
            description="Get your Trading Account"
          />
          <StepCard
            step="#4"
            title="Get Paid Out"
            description="Earn up to 95% profit"
          />
        </div>

      </div>
    </section>
  );
}

/* =========================
   STEP CARD
========================= */
function StepCard({ step, title, description }) {
  return (
    <div className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-8 hover:bg-white/10 transition group">

      {/* STEP NUMBER */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-emerald-400 font-extrabold text-2xl">
          {step}
        </span>

        <ArrowRight className="text-white group-hover:translate-x-1 transition" />
      </div>

      {/* CONTENT */}
      <h3 className="text-xl font-bold text-white mb-4">
        {title}
      </h3>

      <p className="text-slate-300 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
