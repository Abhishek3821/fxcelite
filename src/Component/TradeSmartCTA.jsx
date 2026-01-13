import React from "react";
import { MessageCircle } from "lucide-react";

export default function TradeSmartCTA() {
  return (
    <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* CTA CONTAINER */}
        <div className="rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-600 px-8 py-20 md:px-16 text-center text-white shadow-2xl">

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-6">
            Trade Smart &amp; Win
          </h2>

          {/* SUBTITLE */}
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto mb-12">
            Your next trade could be your best. Join us today, and start
            making moves that matter.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">

            {/* DISCORD */}
            <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition shadow-lg">
              <MessageCircle size={20} />
              Join Discord Community
            </button>

            {/* GET STARTED */}
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:opacity-90 transition shadow-lg shadow-emerald-500/30">
              Get Started
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
