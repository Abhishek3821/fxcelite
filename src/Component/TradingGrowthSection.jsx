import React from "react";

export default function TradingGrowthSection() {
  return (
    <section className="bg-gradient-to-b from-[#050617] via-[#070a2a] to-[#050617] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b0f1f] via-[#11162b] to-[#0b0f1f] border border-white/10 p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <p className="text-slate-400 text-lg mb-3">
              Scale your trading to <span className="text-white">$3,000,000</span>
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Trade at your own pace <br />
              towards your trading <br />
              success.
            </h2>

            <p className="text-slate-300 text-lg max-w-xl">
              Trade our capital with up to{" "}
              <span className="text-white font-semibold">$3,000,000</span> to
              accelerate your trading career.
            </p>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative h-[360px] flex items-end justify-center gap-6">

            {/* Bars */}
            {[
              "h-16",
              "h-28",
              "h-40",
              "h-56",
              "h-72",
              "h-80",
            ].map((height, i) => (
              <div
                key={i}
                className={`w-10 md:w-14 ${height} rounded-xl bg-gradient-to-t from-emerald-500 to-cyan-400 shadow-lg`}
              />
            ))}

            {/* Evaluation Card */}
            <div className="absolute left-0 bottom-24 bg-gradient-to-br from-[#5a5ee6] to-[#4044c9] rounded-xl px-6 py-4 border border-white/10 shadow-xl">
              <p className="text-white font-semibold text-sm mb-1">
                Evaluation Account
              </p>
              <p className="text-white/80 text-sm mb-1">
                1 Phase & 2 Phase
              </p>
              <p className="text-slate-300 text-sm">
                Scale up to
              </p>
              <p className="text-white text-xl font-bold">
                $600,000
              </p>
            </div>

            {/* Instant Funding Card */}
            <div className="absolute right-6 top-0 bg-gradient-to-br from-[#5a5ee6] to-[#4044c9] rounded-xl px-6 py-4 border border-white/10 shadow-xl">
              <p className="text-white font-semibold text-sm mb-1">
                Instant Funding
              </p>
              <p className="text-slate-300 text-sm">
                Scale up to
              </p>
              <p className="text-white text-xl font-bold">
                $3,000,000
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
