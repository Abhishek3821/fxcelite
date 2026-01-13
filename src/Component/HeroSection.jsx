import React from "react";
import { Star, CheckCircle, Play, PieChart, BarChart3, Wallet, Headphones } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050617] via-[#070A23] to-[#050617]">
      
      {/* Background Chevron Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,transparent_75%,rgba(255,255,255,0.06)_75%),linear-gradient(225deg,transparent_75%,rgba(255,255,255,0.06)_75%)] bg-[length:120px_120px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-12 text-center text-white">

        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 text-sm text-slate-300 mb-6">
          <span className="font-semibold">GOOD</span>
          <div className="flex gap-1 text-emerald-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <span>2207 reviews</span>
          <div className="flex items-center gap-1 text-emerald-400 font-medium">
            <CheckCircle size={14} />
            Trustindex
          </div>
        </div>

        {/* Subheading */}
        <p className="text-indigo-400 font-semibold mb-3">
          Reliable Since 2021
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight mb-8">
          For Traders Who Want to Win!
        </h1>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Feature icon={<PieChart size={18} />} text="Up to 100% Profit Split" />
          <Feature icon={<BarChart3 size={18} />} text="Up to $6M in Funding" />
          <Feature icon={<Wallet size={18} />} text="Daily Payouts" />
          <Feature icon={<Headphones size={18} />} text="24/7 Support" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-emerald-500/30">
            Get Funded
          </button>

          <button className="px-10 py-4 rounded-full border border-white/30 text-white font-semibold text-lg flex items-center gap-2 hover:bg-white/10 transition">
            <Play size={18} />
            Play Video
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================
   Feature Pill Component
========================= */
function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium">
      <span className="text-indigo-400">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
