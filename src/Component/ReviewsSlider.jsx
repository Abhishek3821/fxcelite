import React, { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Star } from "lucide-react";

export default function ReviewsSlider() {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const reviews = [
    {
      name: "Paul Tritscher",
      date: "10 April 2025",
      title: "Super Support",
      text: "Super Support! Thank you Kaia",
    },
    {
      name: "Den",
      date: "11 October 2024",
      title: "Legit service",
      text: "Reliable trading platform for me",
    },
    {
      name: "Abdulrahman Duhoki",
      date: "29 May 2024",
      title: "",
      text: "تجربة جميلة وأنا أنصح الأصدقاء بتجربة البرنامج جميل جدا وأنا أنصح بتجربته",
    },
    {
      name: "Paul Tritscher",
      date: "10 April 2025",
      title: "Super Support",
      text: "Super Support! Thank you Kaia",
    },
    {
      name: "Den",
      date: "11 October 2024",
      title: "Legit service",
      text: "Reliable trading platform for me",
    },
    {
      name: "Abdulrahman Duhoki",
      date: "29 May 2024",
      title: "",
      text: "تجربة جميلة وأنا أنصح الأصدقاء بتجربة البرنامج جميل جدا وأنا أنصح بتجربته",
    },
  ];

  /* =========================
     HELPERS
  ========================= */
  const getStep = () => {
    if (!cardRef.current) return 360;
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
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center mb-14">
            <p className="text-indigo-400 tracking-widest font-semibold mb-3">
              REVIEWS
            </p>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white">
              Hear from our Satisfied Traders
            </h2>
          </div>

          {/* SLIDER */}
          <div className="relative">
            {/* LEFT ARROW (HIDDEN ON MOBILE) */}
            <ArrowBtn
              onClick={() => slide("left")}
              disabled={!canLeft}
              position="left"
              className="hidden md:flex"
            >
              <ArrowLeft size={18} />
            </ArrowBtn>

            {/* TRACK */}
            <div
              ref={sliderRef}
              className="
                flex gap-6 px-4 md:px-6
                overflow-x-auto scroll-smooth
                scrollbar-hide
                snap-x snap-mandatory
                cursor-grab active:cursor-grabbing
              "
            >
              {reviews.map((review, i) => (
                <div
                  key={i}
                  ref={i === 0 ? cardRef : null}
                  className="snap-start"
                >
                  <ReviewCard {...review} />
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
              <ArrowRight size={18} />
            </ArrowBtn>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================
   CARD
========================= */
function ReviewCard({ name, date, title, text }) {
  return (
    <div
      className="
        min-w-[320px]
        sm:min-w-[320px]
        md:min-w-[390px]
        h-[280px]
        sm:h-[300px]
        rounded-2xl
        bg-white/5
        border border-white/10
        backdrop-blur-md
        p-6 sm:p-8
        flex flex-col justify-between
      "
    >
      {/* TOP */}
      <div>
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg">
              {name}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">{date}</p>
          </div>
          <CheckCircle className="text-emerald-400" size={20} />
        </div>

        {/* STARS */}
        <div className="flex gap-1 text-emerald-400 mb-4">
          {[...Array(5)].map((_, idx) => (
            <Star key={idx} size={14} fill="currentColor" />
          ))}
        </div>

        {/* TITLE */}
        {title && <p className="text-white font-semibold mb-2">{title}</p>}

        {/* TEXT */}
        <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
      </div>
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
        w-11 h-11 rounded-full
        border border-white/30
        text-white
        flex items-center justify-center
        backdrop-blur
        transition
        ${disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-white/10"}
      `}
    >
      {children}
    </button>
  );
}
