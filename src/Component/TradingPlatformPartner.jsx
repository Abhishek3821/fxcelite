import React from "react";
import { Copy } from "lucide-react";
import Image from "../assets/fx6.webp";

export default function TradingPlatformPartner() {
  return (
    <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN CARD */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0B1028] via-[#0E1433] to-[#0B1028] border border-white/10 p-12">

          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-14">

            {/* LEFT IMAGE */}
            <div className="relative flex justify-center">
              <img
                src={Image}
                alt="Trading Platform"
                className="w-full max-w-md rounded-2xl opacity-90"
              />

              {/* TradingView badge */}
              <div className="absolute -bottom-6 right-6 bg-[#0E1433] border border-white/10 rounded-xl px-5 py-3 text-white text-sm font-semibold">
                TradingView
              </div>
            </div>

            {/* RIGHT TEXT */}
            <div>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-6">
                Trading Platform Partnered
                <br />
                with a Regulated Broker
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Our partnership with Match Trade and TradingView positions
                us as a trustworthy and trader-friendly prop firm in the
                industry.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed">
                Through Match Trade, FXCELITE clients enjoy seamless
                integration with TradingView. Perfect for traders of all
                levels, our charts help track assets like{" "}
                <span className="text-emerald-400 font-semibold">EUR/USD</span>{" "}
                and stay ahead of market trends.
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="h-px bg-white/10 mb-14" />

          {/* BOTTOM CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT TEXT */}
            <div>
              <h3 className="text-3xl font-extrabold text-white mb-4">
                Ready to see the best
                <br />
                spreads in action?
              </h3>

              <p className="text-slate-300 text-lg max-w-md">
                Use the login details on the right to access the server and
                experience ultra-tight spreads for yourself. Start trading
                smarter and keep more of your profits!
              </p>
            </div>

            {/* RIGHT LOGIN DETAILS */}
            <div className="space-y-6">

              {/* LOGIN ID */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <p className="text-indigo-400 font-semibold">Login ID</p>
                <div className="flex items-center gap-3 text-white font-medium">
                  mt@fxcelite.com
                  <Copy size={16} className="cursor-pointer opacity-70 hover:opacity-100" />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <p className="text-indigo-400 font-semibold">Password</p>
                <div className="flex items-center gap-3 text-white font-medium">
                  &&FWcKeFfT15
                  <Copy size={16} className="cursor-pointer opacity-70 hover:opacity-100" />
                </div>
              </div>

              {/* SERVER */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <p className="text-indigo-400 font-semibold">Server</p>
                <div className="flex items-center gap-3 text-white font-medium">
                  MatchTrade FXCELITE
                  <Copy size={16} className="cursor-pointer opacity-70 hover:opacity-100" />
                </div>
              </div>

              {/* CTA */}
              <button className="mt-4 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:opacity-90 transition shadow-lg shadow-emerald-500/30">
                Open Match Trade
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
