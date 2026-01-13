import React, { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* =========================
   DATA
========================= */
const traders = [
  {
    name: "Romel",
    country: "Trinidad and Tobago",
    flag: "🇹🇹",
    payout: "$1,475",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328f07d9",
  },
  {
    name: "Magisha",
    country: "Uganda",
    flag: "🇺🇬",
    payout: "$750",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
  },
  {
    name: "Catherine",
    country: "United Kingdom",
    flag: "🇬🇧",
    payout: "$542",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    name: "Hidde",
    country: "Netherlands",
    flag: "🇳🇱",
    payout: "$5,521",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Steve",
    country: "Nigeria",
    flag: "🇳🇬",
    payout: "$6,434",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
];

/* =========================
   COMPONENT
========================= */
export default function FundedTraders() {
  const sliderRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const CARD_WIDTH = 360;

  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  const slide = (direction) => {
    sliderRef.current.scrollBy({
      left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows);
    return () => el.removeEventListener("scroll", updateArrows);
  }, []);

  return (
    <>
      {/* =========================
          SCOPED CSS
      ========================= */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-14 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Empowering Funded Traders Across the World
              </h2>
              <p className="text-slate-400 text-lg">
                Real traders share their FXCELITE success stories.
              </p>
            </div>

            {/* ARROWS */}
            <div className="flex gap-4">
              <ArrowButton disabled={!canLeft} onClick={() => slide("left")}>
                <ArrowLeft />
              </ArrowButton>
              <ArrowButton disabled={!canRight} onClick={() => slide("right")}>
                <ArrowRight />
              </ArrowButton>
            </div>
          </div>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
          >
            {traders.map((trader, i) => (
              <div key={i} className="snap-start">
                <TraderCard {...trader} />
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
function TraderCard({ name, country, flag, payout, image }) {
  return (
    <div className="relative min-w-[320px] h-[420px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">

      {/* IMAGE */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover scale-100 transition-transform duration-700 ease-out hover:scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* COUNTRY */}
      <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full text-sm text-white backdrop-blur">
        <span>{flag}</span>
        <span>{country}</span>
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-5 left-5 right-5 text-white">
        <p className="font-semibold text-lg">{name}</p>
        <div className="flex items-center gap-3 mt-2">
          <p className="text-xl font-bold">{payout}</p>
          <span className="px-3 py-1 rounded-full bg-indigo-500 text-xs font-semibold">
            Payout
          </span>
        </div>
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
