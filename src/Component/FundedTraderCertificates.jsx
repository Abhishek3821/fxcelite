import React, { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img1 from "../assets/fx10.jpg";
import img2 from "../assets/fx11.jpg";

export default function FundedTraderCertificates() {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const certificates = [
    { name: "Antoine Lottit", image: img1 },
    { name: "Bronte Schiller", image: img2 },
    { name: "Carlos Escriva Gimeno", image: img1 },
    { name: "Ehtesham Ahmad", image: img2 },
    { name: "Carlos Escriva Gimeno", image: img1 },
    { name: "Bronte Schiller", image: img2 },
    { name: "Carlos Escriva Gimeno", image: img1 },
  ];

  /* =========================
     HELPERS
  ========================= */
  const getStep = () => {
    if (!cardRef.current) return 300;
    const gap = 40; // gap-10
    return cardRef.current.offsetWidth + gap;
  };

  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 5);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  const slide = (dir) => {
    const el = sliderRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "left" ? -getStep() : getStep(),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    updateArrows();
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  return (
    <>
      {/* SCROLLBAR HIDE */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; }
      `}</style>

      <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* HEADER */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-4">
            Congratulations on becoming an FYFX Funded Trader
          </h2>

          <p className="text-slate-400 text-lg mb-14 max-w-3xl mx-auto">
            Another skilled trader has joined the FYFX funded ranks. Are you
            next?
          </p>

          {/* SLIDER */}
          <div className="relative">
            {/* LEFT ARROW (HIDDEN ON MOBILE) */}
            <ArrowBtn
              onClick={() => slide("left")}
              disabled={!canLeft}
              position="left"
              className="hidden md:flex"
            >
              <ArrowLeft size={14} />
            </ArrowBtn>

            {/* TRACK */}
            <div
              ref={sliderRef}
              className="
                flex gap-10 px-6 md:px-12
                overflow-x-auto scroll-smooth
                scrollbar-hide
                snap-x snap-mandatory
                cursor-grab active:cursor-grabbing
              "
            >
              {certificates.map((item, i) => (
                <div
                  key={i}
                  ref={i === 0 ? cardRef : null}
                  className="snap-start"
                >
                  <CertificateCard {...item} />
                </div>
              ))}
            </div>

            {/* RIGHT ARROW (HIDDEN ON MOBILE) */}
            <ArrowBtn
              onClick={() => slide("right")}
              disabled={!canRight}
              position="right"
              className="hidden md:flex"
            >
              <ArrowRight size={14} />
            </ArrowBtn>
          </div>

          {/* CTA */}
          <button
            className="mt-16 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400
                       text-black font-semibold hover:opacity-90 transition
                       shadow-lg shadow-emerald-500/30"
          >
            Start Earning Now
          </button>
        </div>
      </section>
    </>
  );
}

/* =========================
   CARD
========================= */
function CertificateCard({ image, name }) {
  return (
    <div
      className="
        min-w-[320px]
        sm:min-w-[300px]
        md:min-w-[380px]
        h-[150px]
        sm:h-[170px]
        md:h-[200px]
        rounded-sm
        overflow-hidden
        bg-gradient-to-br from-indigo-700/80 to-indigo-900/80
        border border-white/10
        transition-transform duration-300
        hover:scale-105
      "
    >
      <img
        src={image}
        alt={name}
        draggable={false}
        className="w-full h-full object-cover opacity-90"
      />
    </div>
  );
}

/* =========================
   ARROW BUTTON
========================= */
function ArrowBtn({ children, onClick, disabled, position, className = "" }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${className}
        absolute ${position}-0 top-1/2 -translate-y-1/2 z-10
        w-10 h-10 rounded-full
        border border-white/20 text-white
        items-center justify-center
        backdrop-blur
        transition
        ${disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-white/10"}
      `}
    >
      {children}
    </button>
  );
}
