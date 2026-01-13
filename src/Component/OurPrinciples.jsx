import React from "react";
import { Check } from "lucide-react";
import Image from "../assets/fx17.webp";

export default function OurPrinciples() {
  return (  
    <section className="relative overflow-hidden bg-[#050617] py-28">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#1b1f5f,transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT – DEVICE MOCKUP */}
        <div className="relative flex justify-center lg:justify-start">
          {/* PLATFORM */}
          <div className="absolute -bottom-6 w-[320px] h-[120px] rounded-[40px] bg-gradient-to-b from-indigo-400 to-indigo-600 blur-[1px]" />
          
          {/* TABLET */}
          <div className="relative z-10 w-[300px] rotate-[-8deg] shadow-2xl">
            <div className="rounded-2xl bg-[#0b1020] border border-white/10 overflow-hidden">
              <img
                src={Image}
                alt="Trading Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* PHONE */}
          <div className="absolute z-20 right-0 top-10 w-[220px] rotate-[12deg] shadow-2xl">
            <div className="rounded-2xl bg-[#0b1020] border border-white/10 overflow-hidden">
              <img
                src={Image}
                alt="Mobile Trading View"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="text-left">
          <p className="text-indigo-400 font-semibold mb-4 tracking-wide">
            OUR PRINCIPLES
          </p>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-6 leading-tight">
            We prioritize honesty and fairness
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-xl">
            We reward your hard work and exceptional performance with a
            generous profit-sharing model for a true win-win partnership.
          </p>

          {/* LIST */}
          <ul className="space-y-6">
            {[
              "Access detailed trading statistics",
              "Scale your account with every 24% milestone",
              "Up to 95% of profit is yours",
              "Enjoy a fast and hassle-free withdrawal process",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Check className="text-black" size={20} strokeWidth={3} />
                </span>
                <span className="text-white font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
