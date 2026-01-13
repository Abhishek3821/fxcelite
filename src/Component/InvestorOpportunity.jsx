import React from "react";
import img from "../assets/fx18.webp"
export default function InvestorOpportunity() {
  return (
    <section className="bg-gradient-to-b from-[#050617] via-[#070a2a] to-[#050617] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16">
          Your Opportunity to Invest into{" "}
          <span className="text-emerald-400">Funded Trading</span>
        </h2>

        {/* MAIN CARD */}
        <div className="relative bg-gradient-to-br from-[#0b0f1f] via-[#11162b] to-[#0b0f1f] border border-white/10 rounded-3xl p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">

          {/* LEFT VISUAL */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">

              {/* Dashboard mock */}
              <div className="rounded-2xl bg-black/40 border border-white/10 p-4 shadow-2xl">
                <img
                  src={img}
                  alt="Trading Dashboard"
                  className="rounded-xl"
                />
              </div>

              {/* TradingView badge */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-lg">TV</span>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-indigo-400 font-semibold mb-3">
              About Investor Relations
            </p>

            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Invest in Funded Trading
            </h3>

            <div className="space-y-4 text-white/85 leading-relaxed max-w-xl">
              <p>
                Our Investor Relations offers a unique opportunity to grow your
                wealth through our funded trading model.
              </p>

              <p>
                We provide investment options that outperform traditional
                returns by leveraging the expertise of top traders and advanced
                strategies.
              </p>

              <p>
                With annual returns exceeding{" "}
                <span className="text-white font-semibold">20%</span>, our
                investors consistently experience profitability beyond industry
                benchmarks, showcasing the transformative potential of funded
                trading.
              </p>
            </div>

            {/* CTA */}
            <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:scale-105 transition">
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
