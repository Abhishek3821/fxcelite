import React from "react";

import visionImg from "../assets/fx14.webp";
export default function OurVision() {
  return (
    <section className="w-full bg-gradient-to-br from-[#020316] via-[#04062a] to-[#020316] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Our Vision
            </h2>

            <p className="text-lg text-slate-200 font-semibold mb-6 leading-relaxed">
              Our vision is straightforward and universal: financial inclusion
              for everyone.
            </p>

            <p className="text-slate-400 leading-relaxed mb-5">FXCELITE
              With the ecosystem of innovative ventures,  allows
              everyone to access funds, allowing them to trade and invest in
              the financial markets. We strive to develop our traders and
              constantly aim to be a leading trusted, secure and innovative
              trading resource. We understand the nature of trust; while it is
              difficult to gain, it is also easily lost.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Trust is earned through our responsibilities and continuous
              efforts to provide our customers with excellent service and
              products by doing the right thing. Our daily mantra for business
              is that it needs to be beneficial for both parties concerned.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 blur-3xl rounded-3xl"></div>

            <img
              src={visionImg}
              alt="Our Vision"
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
