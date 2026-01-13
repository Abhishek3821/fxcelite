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
  const autoplayRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const CARD_STEP = 380;

  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const slide = (direction) => {
    const el = sliderRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -CARD_STEP : CARD_STEP,
      behavior: "smooth",
    });
  };

  // Autoplay (pause on hover / interaction)
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    updateArrows();

    const start = () => {
      autoplayRef.current = setInterval(() => {
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: CARD_STEP, behavior: "smooth" });
        }
      }, 3500);
    };

    const stop = () => autoplayRef.current && clearInterval(autoplayRef.current);

    start();
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);
    el.addEventListener("scroll", updateArrows);

    // Keyboard support
    const onKey = (e) => {
      if (e.key === "ArrowLeft") slide("left");
      if (e.key === "ArrowRight") slide("right");
    };
    window.addEventListener("keydown", onKey);

    return () => {
      stop();
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", start);
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      {/* Scoped scrollbar hide */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-28">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-14 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Resources For <span className="text-emerald-400">Success</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Discover the tools, benefits, and resources designed to help traders succeed.
              </p>
            </div>

            {/* ARROWS */}
            <div className="flex gap-4">
              <ArrowButton
                onClick={() => slide("left")}
                disabled={!canLeft}
                ariaLabel="Scroll left"
              >
                <ArrowLeft />
              </ArrowButton>
              <ArrowButton
                onClick={() => slide("right")}
                disabled={!canRight}
                ariaLabel="Scroll right"
              >
                <ArrowRight />
              </ArrowButton>
            </div>
          </div>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
          >
            {resources.map((item, i) => (
              <div key={i} className="snap-start">
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
    <div className="group relative min-w-[300px] sm:min-w-[340px] h-[420px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">

      {/* Glow */}
      <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-indigo-500/20 blur opacity-0 group-hover:opacity-100 transition" />

      {/* IMAGE */}
      <div className="relative rounded-xl overflow-hidden mb-6 h-[200px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
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
function ArrowButton({ children, onClick, disabled, ariaLabel }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center transition
        ${disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-white/10"}`}
    >
      {children}
    </button>
  );
}
