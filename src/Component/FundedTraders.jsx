import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* =========================
   DATA
========================= */
const traders = [
  {
    name: "Raf",
    country: "Poland",
    flag: "🇵🇱",
    payout: "$2,910",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Josh",
    country: "United Kingdom",
    flag: "🇬🇧",
    payout: "$6,520",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Slada",
    country: "Serbia",
    flag: "🇷🇸",
    payout: "$1,520",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    name: "Denise",
    country: "Netherlands",
    flag: "🇳🇱",
    payout: "$4,576",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    name: "Slada",
    country: "Serbia",
    flag: "🇷🇸",
    payout: "$1,520",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
];

/* =========================
   COMPONENT
========================= */
export default function FundedTradersSlider() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: false,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    slidesToShow: 1,
    variableWidth: true,
    speed: 500,
    touchThreshold: 12,
  };

  return (
    <section className="bg-gradient-to-b from-[#020617] to-[#050a2a] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Empowering Funded Traders Across the World
            </h2>
            <p className="text-slate-400">
              Real traders share their FundYourFX success stories.
            </p>
          </div>

          {/* ARROWS (DESKTOP ONLY) */}
          <div className="hidden md:flex gap-3">
            <CircleArrow onClick={() => sliderRef.current.slickPrev()}>
              <ArrowLeft size={18} />
            </CircleArrow>
            <CircleArrow onClick={() => sliderRef.current.slickNext()}>
              <ArrowRight size={18} />
            </CircleArrow>
          </div>
        </div>

        {/* SLIDER */}
        <Slider ref={sliderRef} {...settings}>
          {traders.map((trader, i) => (
            <div key={i} className="px-2 sm:px-3">
              <TraderCard {...trader} />
            </div>
          ))}
        </Slider>
      </div>

      {/* FIX SLICK ALIGNMENT */}
      <style>{`
        .slick-track {
          display: flex !important;
        }
      `}</style>
    </section>
  );
}

/* =========================
   CARD
========================= */
function TraderCard({ name, country, flag, payout, image }) {
  return (
    <div
      className="
        relative
        w-[310px]
        sm:w-[300px]
        md:w-[340px]
        lg:w-[380px]
        h-[360px]
        sm:h-[380px]
        md:h-[420px]
        rounded-md
        overflow-hidden
        bg-white/5
        border border-white/10
        backdrop-blur-md
        transition-transform duration-300
        hover:-translate-y-1
      "
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* COUNTRY BADGE */}
      <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full text-xs sm:text-sm text-white">
        <span>{flag}</span>
        <span className="hidden sm:inline">{country}</span>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <p className="font-semibold text-base sm:text-lg mb-1">{name}</p>

        <div className="flex items-center gap-3">
          <span className="text-lg sm:text-xl font-bold">{payout}</span>
          <span className="px-3 py-1 rounded-full bg-indigo-600 text-xs font-semibold">
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
function CircleArrow({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition"
    >
      {children}
    </button>
  );
}
