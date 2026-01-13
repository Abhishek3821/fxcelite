import React from "react";

export default function ZeroSpreadsSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#050617] to-[#070A23] py-32 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-20">
          Trade with <span className="text-emerald-400">Zero Spreads</span> and
          <br className="hidden sm:block" />
          Low Commissions
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* SPREADS CARD */}
          <div className="group relative rounded-2xl bg-gradient-to-br from-[#0B1028] to-[#0E1433] border border-white/10 p-12 transition-all duration-300 hover:scale-[1.02]">
            
            {/* Glow on hover */}
            <div className="absolute -inset-0.5 bg-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition pointer-events-none" />

            <p className="text-emerald-400 font-semibold tracking-widest mb-5 uppercase">
              Spreads
            </p>

            <p className="text-5xl font-extrabold text-white mb-5">$0</p>

            <p className="text-slate-300 text-lg">
              Raw spreads start from{" "}
              <span className="text-white font-semibold">zero</span>, giving you
              maximum edge on every trade.
            </p>
          </div>

          {/* COMMISSION CARD */}
          <div className="group relative rounded-2xl bg-gradient-to-br from-[#0B1028] to-[#0E1433] border border-white/10 p-12 transition-all duration-300 hover:scale-[1.02]">
            
            {/* Glow on hover */}
            <div className="absolute -inset-0.5 bg-indigo-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition pointer-events-none" />

            <p className="text-indigo-400 font-semibold tracking-widest mb-5 uppercase">
              Commissions
            </p>

            <p className="text-5xl font-extrabold text-white mb-2">
              $5<span className="text-xl font-medium"> / lot</span>
            </p>

            <p className="text-slate-400 mb-4">(round trip)</p>

            <p className="text-slate-300 text-lg">
              Flat, transparent pricing — no hidden fees, no surprises.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
