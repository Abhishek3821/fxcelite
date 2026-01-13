import React from "react";
import payoutImg from "../assets/fx12.webp"; // replace with your image

export default function FridayPayouts() {
  return (
    <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN CONTAINER */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0B1028] via-[#0E1433] to-[#0B1028] border border-white/10 p-12 md:p-16 flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="flex-1">
            <p className="text-indigo-400 font-semibold tracking-widest mb-4">
              PAYOUTS
            </p>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-6">
              Friday Payouts, Happy Traders
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Partnering with profitable traders daily allows us to understand
              what brings them joy. Enjoy your payouts every Friday from your
              virtual trading profits! You can easily request your payouts
              through a variety of options, including crypto and bank transfers.
            </p>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="flex-1 flex justify-center relative">
            <img
              src={payoutImg}
              alt="Friday Payouts"
              className="w-full max-w-md object-contain"
            />

            {/* Glow */}
            <div className="absolute -inset-10 bg-indigo-600/20 blur-3xl -z-10" />
          </div>

        </div>

      </div>
    </section>
  );
}
