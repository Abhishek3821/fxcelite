import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img1 from "../assets/fx10.jpg";
import img2 from "../assets/fx11.jpg";

export default function FundedTraderCertificates() {
  const sliderRef = useRef(null);

  const certificates = [
    { name: "Antoine Lottit", image: img1 },
    { name: "Bronte Schiller", image: img2 },
    { name: "Carlos Escriva Gimeno", image: img1 },
    { name: "Ehtesham Ahmad", image: img2 },
  ];

  const slide = (direction) => {
    const slider = sliderRef.current;
    const scrollAmount = 320;

    slider.scrollTo({
      left:
        direction === "left"
          ? slider.scrollLeft - scrollAmount
          : slider.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-4">
          Congratulations on becoming an FYFX Funded Trader
        </h2>

        <p className="text-slate-400 text-lg mb-16">
          Another skilled trader has joined the FYFX funded ranks. Are you next?
        </p>

        {/* SLIDER */}
        <div className="relative flex items-center justify-center mb-14">
          {/* LEFT */}
          <button
            onClick={() => slide("left")}
            className="absolute left-0 z-10 w-10 h-10 rounded-full border border-white/20 text-white
                       flex items-center justify-center hover:bg-white/10 transition backdrop-blur"
          >
            <ArrowLeft size={18} />
          </button>

          {/* TRACK */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-14
                       scroll-smooth"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
            }}
          >
            {certificates.map((item, i) => (
              <div
                key={i}
                className="min-w-[300px] h-[200px] rounded-xl
                           bg-gradient-to-br from-indigo-700/80 to-indigo-900/80
                           border border-white/10 overflow-hidden
                           transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-90"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <button
            onClick={() => slide("right")}
            className="absolute right-0 z-10 w-10 h-10 rounded-full border border-white/20 text-white
                       flex items-center justify-center hover:bg-white/10 transition backdrop-blur"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* CTA */}
        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400
                           text-black font-semibold hover:opacity-90 transition
                           shadow-lg shadow-emerald-500/30">
          Start Earning Now
        </button>
      </div>

      {/* SCROLLBAR HIDE */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
}
