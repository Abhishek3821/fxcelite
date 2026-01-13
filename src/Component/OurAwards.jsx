import React from "react";
import Img from "../assets/fx15.webp";
import Img2 from "../assets/fx16.webp";

export default function OurAwards() {
  return (
    <section className="w-full py-28 bg-gradient-to-br from-[#020316] via-[#04062a] to-[#020316]">
      <div className="max-w-7xl mx-auto px-6">

        {/* GLASS CARD */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl px-8 md:px-16 py-20 shadow-2xl">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Our Awards
            </h2>

            <p className="text-slate-300 leading-relaxed">
              FundYourFX is an award-winning prop firm renowned for its
              excellence in Instant Funding and Customer Service, providing
              top-notch trading support and funding solution
            </p>
          </div>

          {/* AWARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-center">

            {/* AWARD 1 */}
            <AwardCard
              year="2023"
              title="Best Instant Funding Prop Firm"
            />

            {/* AWARD 2 */}
            <AwardCard
              year="2024"
              title="Best Customer Support"
              tag="FYFX_BESTCUSTOMERSUPPORT"
            />

          </div>

          {/* FOOTER */}
          <div className="flex flex-col items-center mt-20 gap-4">
            <img
              src={Img2}
              alt="Funded Trading"
              className="h-10 opacity-90"
            />
            <p className="text-slate-300 text-sm">Awarded by</p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================
   AWARD CARD
========================= */
function AwardCard({ year, title, tag }) {
  return (
    <div className="relative text-center">

      {/* YEAR */}
      <p className="text-slate-500 mb-4">{year}</p>

      {/* OPTIONAL TAG */}
      {tag && (
        <div className="inline-block mb-4 px-4 py-1 text-xs tracking-widest text-white border border-white/30 rounded">
          {tag}
        </div>
      )}

      {/* LAUREL */}
      <div className="relative w-72 h-72 mx-auto flex flex-col items-center justify-center">
        <img
          src={Img}
          alt="Award Laurel"
          className="absolute inset-0 w-full h-full opacity-80"
        />

      </div>
    </div>
  );
}
