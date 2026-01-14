import React, { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img1 from "../assets/fx7.webp";
import img2 from "../assets/fx8.webp";
import img3 from "../assets/fx9.webp";
import img4 from "../assets/fx19.webp";

/* =========================
   DATA
========================= */
const resources = [
  { title: "FXCELITE Affiliate Program", image: img1 },
  { title: "CopyTrader MT5 to MatchTrade", image: img2 },
  { title: "FXCELITE Academy", image: img3 },
  { title: "Charitable Donation", image: img4 },
];

export default function ResourcesForSuccess() {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const autoplayRef = useRef(null);

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  /* =========================
     HELPERS
  ========================= */
  const getCardStep = () => {
    if (!cardRef.current) return 320;
    const gap = 24; // gap-6
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
      left: dir === "left" ? -getCardStep() : getCardStep(),
      behavior: "smooth",
    });
  };

  /* =========================
     AUTOPLAY (SMART)
  ========================= */
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    updateArrows();

    const start = () => {
      stop();
      autoplayRef.current = setInterval(() => {
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: getCardStep(), behavior: "smooth" });
        }
      }, 3500);
    };

    const stop = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };

    start();

    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    return () => {
      stop();
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", start);
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
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Resources For <span className="text-emerald-400">Success</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Discover the tools, benefits, and resources designed to help
                traders succeed.
              </p>
            </div>

            {/* ARROWS */}
            <div className="flex gap-4">
              <ArrowButton onClick={() => slide("left")} disabled={!canLeft}>
                <ArrowLeft />
              </ArrowButton>
              <ArrowButton onClick={() => slide("right")} disabled={!canRight}>
                <ArrowRight />
              </ArrowButton>
            </div>
          </div>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth
              scrollbar-hide
              snap-x snap-mandatory
              cursor-grab active:cursor-grabbing
            "
          >
            {resources.map((item, i) => (
              <div
                key={i}
                ref={i === 0 ? cardRef : null}
                className="snap-start"
              >
                <ResourceCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================
   CARD
========================= */
function ResourceCard({ title, image }) {
  return (
    <div
      className="
        group relative
        min-w-[310px]
        sm:min-w-[320px]
        md:min-w-[390px]
        h-[380px]
        sm:h-[400px]
        md:h-[420px]
        rounded-md
        bg-white/5 border border-white/10
        backdrop-blur-md
        p-6
        flex flex-col justify-between
        transition-all duration-300
        hover:bg-white/10 hover:-translate-y-1
      "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-indigo-500/20 blur opacity-0 group-hover:opacity-100 transition" />

      {/* IMAGE */}
      <div className="relative rounded-xl overflow-hidden mb-6 h-[180px] sm:h-[200px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
          {title}
        </h3>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-emerald-400 font-semibold transition-all group-hover:gap-3"
        >
          Learn More <span>→</span>
        </a>
      </div>
    </div>
  );
}

/* =========================
   ARROW BUTTON
========================= */
function ArrowButton({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center transition
        ${disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-white/10"}`}
    >
      {children}
    </button>
  );
}
