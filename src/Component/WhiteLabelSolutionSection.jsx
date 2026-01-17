import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/fx18.webp"
export default function WhiteLabelSolutionSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-[#050617] via-[#070a2a] to-[#050617] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16">
          Start your Own Prop Firm <br />
          with our{" "}
          <span className="text-emerald-400">White Label Solution</span>
        </h2>

        {/* MAIN CARD */}
        <div className="relative bg-gradient-to-br from-[#0b0f1f] via-[#11162b] to-[#0b0f1f] border border-white/10 rounded-3xl p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">

          {/* LEFT VISUAL */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">

              {/* Dashboard mock */}
              <div className="rounded-2xl bg-black/40 border border-white/10 p-4 shadow-2xl">
                <img
                  src={img1}
                  alt="White Label Dashboard"
                  className="rounded-xl"
                />
              </div>

              {/* TradingView badge */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-lg">
                  TV
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-indigo-400 font-semibold mb-3">
              Our B2B Solution
            </p>

            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Tailor-Made Prop Trading: <br />
              FXCELITE’s White Label Solution
            </h3>

            <div className="space-y-4 text-white/85 leading-relaxed max-w-xl">
              <p>
                Is your prop trading firm missing out on opportunities due to a
                lack of brand presence and customization? FXCELITE’s White
                Label solution is your best option.
              </p>

              <p>
                Our program provides personalized plans and a full range of
                support services to ensure your success in the market.
              </p>

              <p>
                Let’s team up and tap into our knowledge and know-how to create
                a thriving prop trading firm of your own.
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate("/white-label")}
              className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:scale-105 transition"
            >
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
