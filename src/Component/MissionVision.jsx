import React from "react";
import missionImg from "../assets/fx13.webp"; // replace with your image

export default function MissionVision() {
  return (
    <section className="bg-gradient-to-b from-[#050617] via-[#070A23] to-[#050617] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* QUOTE */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
            <span className="text-indigo-400">“FXCELITE:</span> Where traders create
            opportunities for traders to succeed.”
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.25)]">
              <img
                src={missionImg}
                alt="Trading mission"
                className="w-full max-w-md object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div>
            <p className="text-indigo-400 font-semibold mb-3">
              Mission & Vision
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Our Mission
            </h2>

            <div className="space-y-5 text-slate-300 text-lg leading-relaxed max-w-xl">
              <p>
                At FXCELITE, we recognized early on that many funding programs
                fail to truly support talented traders.
              </p>

              <p>
                Most require long demo periods or charge thousands of dollars
                just to get started. But real traders want the freedom to trade
                right from the start, with a fair profit share and zero risk for
                potential losses.
              </p>

              <p>
                That’s why we created  — to offer the best-funded
                trader program in the industry, designed with your success in
                mind.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
