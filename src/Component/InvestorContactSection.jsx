import React from "react";
import { useNavigate } from "react-router-dom";

export default function InvestorContactSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-[#050617] via-[#070a2a] to-[#050617] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN CARD */}
        <div className="relative bg-gradient-to-br from-[#0b0f1f] via-[#11162b] to-[#0b0f1f] border border-white/10 rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-indigo-400 font-semibold mb-3">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Please Contact Our <br />
              Investor Relations Team
            </h2>

            <p className="text-white/80 leading-relaxed max-w-xl mb-8">
              To learn more about investing in FXCELITE or to start the
              investment process. We appreciate your interest in FXCELITE and
              look forward to partnering with you to achieve exceptional
              investment returns.
            </p>

            {/* CTA */}
            <button
              onClick={() => navigate("/investor-relations")}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:scale-105 transition"
            >
              Apply Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              alt="Investor Relations"
              className="rounded-2xl object-cover w-full h-[360px] shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
