import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Star } from "lucide-react";

export default function ReviewsSlider() {
  const sliderRef = useRef(null);

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
    },{
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

  const slide = (direction) => {
    sliderRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-28">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="text-indigo-400 tracking-widest font-semibold mb-3">
              REVIEWS
            </p>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white">
              Hear from our Satisfied Traders
            </h2>
          </div>

          {/* SLIDER WRAPPER */}
          <div className="relative">

            {/* LEFT ARROW */}
            <button
              onClick={() => slide("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition"
            >
              <ArrowLeft size={18} />
            </button>

            {/* SLIDER */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-6"
            >
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="min-w-[320px] sm:min-w-[380px] h-[300px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-8 flex flex-col justify-between"
                >
                  {/* TOP */}
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {review.name}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          {review.date}
                        </p>
                      </div>
                      <CheckCircle className="text-emerald-400" size={20} />
                    </div>

                    {/* STARS */}
                    <div className="flex gap-1 text-emerald-400 mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={16} fill="currentColor" />
                      ))}
                    </div>

                    {/* TITLE */}
                    {review.title && (
                      <p className="text-white font-semibold mb-2">
                        {review.title}
                      </p>
                    )}

                    {/* TEXT */}
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={() => slide("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition"
            >
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
