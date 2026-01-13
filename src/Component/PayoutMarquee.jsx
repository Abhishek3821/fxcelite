import React from "react";
import { TrendingUp } from "lucide-react";

/* =========================
   DATA
========================= */
const payouts = [
  { name: "Leo Kuehner", amount: "$3,422" },
  { name: "Marcel Meyer", amount: "$6,324" },
  { name: "Ionela Reffass", amount: "$6,649" },
  { name: "Sandip Patil", amount: "$5,395" },
  { name: "Steve Okafor", amount: "$6,434" },
  { name: "Ootsavi Mwangi", amount: "$5,316" },
  { name: "Alvin Dupont", amount: "$6,003" },
];

/* =========================
   COMPONENT
========================= */
export default function PayoutMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#070A23] to-[#050617] py-3">
      
      {/* FADE EDGES */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#050617] to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#050617] to-transparent z-20" />

      {/* MARQUEE TRACK */}
      <div className="group flex w-max gap-6 px-6 animate-marquee hover:[animation-play-state:paused]">
        {[...payouts, ...payouts].map((item, i) => (
          <PayoutCard key={i} {...item} />
        ))}
      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
        `}
      </style>
    </section>
  );
}

/* =========================
   CARD
========================= */
function PayoutCard({ name, amount }) {
  return (
    <div className="relative min-w-[320px] h-[120px] flex items-center gap-5 rounded-2xl
                    bg-white/5 border border-white/10 backdrop-blur-xl px-6
                    transition-all duration-300 hover:border-white/20 hover:-translate-y-1">

      {/* GLOW */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 
                      opacity-0 hover:opacity-100 transition blur-xl" />

      {/* ICON */}
      <div className="relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500
                      flex items-center justify-center shadow-lg shadow-emerald-500/30">
        <TrendingUp className="text-black" size={26} />
      </div>

      {/* TEXT */}
      <div className="relative z-10 text-white">
        <p className="font-semibold text-sm mb-1 tracking-wide">
          {name}
        </p>
        <p className="text-2xl font-extrabold tracking-tight">
          {amount}
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Recent payout
        </p>
      </div>
    </div>
  );
}
