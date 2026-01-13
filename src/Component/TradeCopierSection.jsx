import React from "react";
import { Play } from "lucide-react";

export default function TradeCopierSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#050617] to-[#070A23] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div>
            <p className="text-indigo-400 font-semibold tracking-widest mb-4">
              TRADE COPIER
            </p>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6">
              Trade with MT5,<br />
              Execute with Match-Trader
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
              Easily copy your trades from MT5, the industry's most popular
              platform, to Match-Trader. Instant, accurate, and reliable—built
              for traders who demand the best.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-6">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:opacity-90 transition shadow-lg shadow-emerald-500/30">
                Download File
              </button>

              <a
                href="#"
                className="text-emerald-400 font-semibold underline-offset-4 hover:underline transition"
              >
                Check Full Guide
              </a>
            </div>
          </div>

          {/* =========================
              RIGHT MEDIA CARD
          ========================= */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-700 to-indigo-900 border border-white/10">

              {/* Background image */}
              <img
                src="https://images.unsplash.com/photo-1642790106117-e829e14a795f"
                alt="MetaTrader 5"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />

              {/* Overlay */}
              <div className="relative z-10 p-10 flex flex-col items-center justify-center text-center min-h-[320px]">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  MetaTrader 5
                </h3>

                <div className="flex items-center gap-3 text-white/80 mb-6">
                  <span className="text-xl font-semibold">×</span>
                  <span className="text-xl font-semibold">Match-Trader</span>
                </div>

                {/* Play Button */}
                <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:scale-105 transition">
                  <Play className="text-white ml-1" size={26} />
                </button>

                <p className="text-sm text-white/70 mt-6">
                  Powered by <span className="font-semibold">Match-Trade Technologies</span>
                </p>
              </div>

              {/* Glow */}
              <div className="absolute -inset-10 bg-indigo-600/30 blur-3xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
