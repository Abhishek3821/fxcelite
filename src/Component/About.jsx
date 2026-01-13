import React from "react";
import { Play } from "lucide-react";
import videoThumbnail from "../assets/fx12.webp"; // replace with your image

export default function About() {
  return (
    <section className="bg-gradient-to-b from-[#2E3192] via-[#1B1F5E] to-[#050617] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              About FundYourFX
            </h2>

            <p className="text-lg text-slate-200 leading-relaxed max-w-xl">
              We are FundYourFX, an award-winning prop firm built to fuel your
              trading success. Benefit from instant funding, scalable
              evaluation plans, and exceptional customer support that will
              accelerate your trading journey. Empower your trading and
              dominate the markets with the best in the business.
            </p>
          </div>

          {/* RIGHT VIDEO CARD */}
          <div className="relative flex justify-center">
            <div className="relative rounded-3xl border-4 border-indigo-500/80 p-2 shadow-[0_0_60px_rgba(99,102,241,0.35)]">

              {/* VIDEO IMAGE */}
              <img
                src={videoThumbnail}
                alt="FundYourFX Introduction"
                className="rounded-2xl w-full max-w-lg object-cover"
              />

              {/* PLAY BUTTON */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl transition transform group-hover:scale-105">
                  <Play className="text-indigo-600 ml-1" size={36} />
                </div>
              </button>
            </div>

            {/* GLOW */}
            <div className="absolute -inset-16 bg-indigo-500/20 blur-3xl -z-10" />
          </div>

        </div>

      </div>
    </section>
  );
}
