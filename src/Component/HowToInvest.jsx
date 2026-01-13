import React from "react";
import { ArrowRight } from "lucide-react";

export default function HowToInvest() {
  const steps = [
    {
      step: "#1",
      title: "Initial Inquiry & Consultation",
      description:
        "Reach out to our Investor Relations team, we will help you invest wisely.",
    },
    {
      step: "#2",
      title: "Investment Agreement",
      description:
        "Once you are ready to proceed, we will provide you with the investment agreement.",
    },
    {
      step: "#3",
      title: "Investment Funding",
      description:
        "After you sign and transfer your funds, you become an investor in FundYourX.",
    },
    {
      step: "#4",
      title: "Updates and Returns",
      description:
        "Investors regularly get updates on performance and returns.",
    },
  ];

  return (
    <section className="relative bg-[#050617] py-28 overflow-hidden">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f1345,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-16">
          How to Invest in{" "}
          <span className="text-emerald-400">Funded Trading</span>
        </h2>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-gradient-to-b from-[#11162c] to-[#070A23]
                         border border-white/10 backdrop-blur-xl p-8
                         transition-all duration-300 hover:-translate-y-2
                         hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.35)]"
            >
              {/* STEP + ARROW */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-emerald-400 text-2xl font-extrabold">
                  {item.step}
                </span>
                <ArrowRight className="text-white" size={22} />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-white mb-4 leading-snug">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
