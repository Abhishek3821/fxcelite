import React from "react";
import {
  LayoutGrid,
  ArrowLeftRight,
  PiggyBank,
  Gift,
  Calendar,
  AlertTriangle,
} from "lucide-react";

export default function InstantAccountBenefits() {
  const benefits = [
    {
      icon: <LayoutGrid />,
      title: "Multiple Choices",
      desc: "Find Your Perfect Path – Instant Funding, 1-Phase or 2-Phase Evaluation to Suit Your Trading Goals.",
    },
    {
      icon: <ArrowLeftRight />,
      title: "Up to 95% Profit Split",
      desc: "Earn up to 95% profit share, increasing with account growth.",
    },
    {
      icon: <PiggyBank />,
      title: "Funding Up to $3,000,000",
      desc: "Potential account growth up to $3,000,000.",
    },
    {
      icon: <Gift />,
      title: "Trade with confidence—Enjoy Profits & Refunds!",
      desc: "Unlock profits and receive full refunds during the scaling phase!",
    },
    {
      icon: <Calendar />,
      title: "Funding traders since 2021",
      desc: "Time, the most important metric to trust someone.",
    },
    {
      icon: <AlertTriangle />,
      title: "No Liability For Losses",
      desc: "Trade with zero risk, losses are not the trader’s responsibility.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-4">
            <span className="text-emerald-400">Get your Account Instantly</span>
            <br />
            Start Trading and Profit Faster.
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-md bg-gradient-to-br from-indigo-600/80 to-indigo-700/80 border border-white/10 p-8 text-white transition hover:scale-[1.02]"
            >
              {/* Glow */}
              <div className="absolute -inset-0.5 bg-indigo-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              {/* ICON */}
              <div className="mb-6 text-indigo-200">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold mb-3">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-indigo-100/90 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
