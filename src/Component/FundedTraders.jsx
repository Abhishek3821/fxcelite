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
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
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
  const cardRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const CARD_GAP = 24; // gap-6
  const SIDE_PADDING = 24; // px-6

  /* -------------------------
     Helpers
  -------------------------- */
  const getCardWidth = () =>
    cardRef.current?.offsetWidth || 320;

  const scrollToIndex = (index) => {
    const el = sliderRef.current;
    if (!el) return;

    const cardWidth = getCardWidth();
    const target =
      index * (cardWidth + CARD_GAP) - SIDE_PADDING;

    el.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  /* -------------------------
     Arrow handlers
  -------------------------- */
  const prev = () => {
    setActiveIndex((i) => Math.max(i - 1, 0));
  };

  const next = () => {
    setActiveIndex((i) =>
      Math.min(i + 1, traders.length - 1)
    );
  };

  /* -------------------------
     Sync scroll on index change
  -------------------------- */
  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  /* -------------------------
     Drag / swipe with snap
  -------------------------- */
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    let startX = 0;
    let startScroll = 0;
    let isDown = false;

    const onDown = (e) => {
      isDown = true;
      startX = e.pageX || e.touches[0].pageX;
      startScroll = el.scrollLeft;
      el.classList.add("cursor-grabbing");
    };

    const onMove = (e) => {
      if (!isDown) return;
      const x = e.pageX || e.touches[0].pageX;
      el.scrollLeft = startScroll - (x - startX);
    };

    const onUp = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove("cursor-grabbing");

      const cardSize = getCardWidth() + CARD_GAP;
      const newIndex = Math.round(
        (el.scrollLeft + SIDE_PADDING) / cardSize
      );

      setActiveIndex(
        Math.min(
          Math.max(newIndex, 0),
          traders.length - 1
        )
      );
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    el.addEventListener("touchstart", onDown, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onUp);

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);

      el.removeEventListener("touchstart", onDown);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <>
      {/* =========================
          SCOPED CSS
      ========================= */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; }
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
              <ArrowButton
                disabled={activeIndex === 0}
                onClick={prev}
              >
                <ArrowLeft />
              </ArrowButton>
              <ArrowButton
                disabled={activeIndex === traders.length - 1}
                onClick={next}
              >
                <ArrowRight />
              </ArrowButton>
            </div>
          </div>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-6 px-6 overflow-x-auto scrollbar-hide cursor-grab select-none"
          >
            {traders.map((trader, i) => (
              <div
                key={i}
                ref={i === 0 ? cardRef : null}
              >
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
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full text-sm text-white backdrop-blur">
        <span>{flag}</span>
        <span>{country}</span>
      </div>

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
        ${
          disabled
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-white/10 hover:scale-105 active:scale-95"
        }`}
    >
      {children}
    </button>
  );
}
