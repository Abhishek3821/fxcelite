import React from "react";
import Image from "../assets/fx2.webp";
import Image1 from "../assets/fx5.webp";
import Image2 from "../assets/fx3.webp";
import Image3 from "../assets/fx4.webp";

export default function MarketsSection() {
  const markets = [
    { title: "Forex", image: Image, accent: "from-cyan-400 to-blue-600" },
    { title: "Commodities", image: Image1, accent: "from-amber-400 to-orange-600" },
    { title: "Indices", image: Image2, accent: "from-violet-400 to-purple-600" },
    { title: "Crypto", image: Image3, accent: "from-emerald-400 to-teal-600" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#050617] to-[#070A23] py-28 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Access the World’s Leading Markets
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Trade forex, commodities, indices, and crypto — the world’s most
            liquid assets, all from one powerful platform.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((market, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 text-center
                         transition-all duration-500 hover:-translate-y-2 hover:border-white/20
                         hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.6)]"
            >
              {/* ACCENT RING */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 
                            bg-gradient-to-br ${market.accent} blur-xl`}
              />

              {/* CONTENT */}
              <div className="relative z-10">
                {/* IMAGE */}
                <div className="mb-8 h-40 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <img
                    src={market.image}
                    alt={`${market.title} market`}
                    className="w-full h-full object-cover opacity-60 
                               transition duration-500 group-hover:opacity-100 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {market.title}
                </h3>

                {/* SUBTEXT */}
                <p className="text-sm text-slate-400">
                  Trade top global {market.title.toLowerCase()} instruments
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
