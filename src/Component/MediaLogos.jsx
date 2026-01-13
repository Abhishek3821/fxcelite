import React from "react";

export default function MediaLogos() {
  return (
    <section className="w-full bg-gradient-to-b from-[#050617] to-[#070A23] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 opacity-70">

          <Logo text="MarketWatch" />
          <Logo text="Digital Journal" />
          <Logo text="Bloomberg" />
          <Logo text="Associated Press" />
          <Logo text="Yahoo! Finance" />

        </div>
      </div>
    </section>
  );
}

/* =========================
   LOGO ITEM
========================= */
function Logo({ text }) {
  return (
    <span className="text-slate-400 text-lg md:text-xl font-semibold tracking-wide hover:opacity-100 transition">
      {text}
    </span>
  );
}
