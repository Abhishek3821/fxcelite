import React, { useEffect, useState } from "react";

/* =========================
   MAIN COMPONENT
========================= */
export default function StatsBar() {
  return (
    <section className="relative bg-gradient-to-b from-[#050617] to-[#070A23] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* STATS CONTAINER */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1028] via-[#0E1433] to-[#0B1028] border border-white/10 shadow-xl">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">

            <StatItem label="Established" end={2021} />
            <StatItem label="Total Payouts" end={36} prefix="$" suffix="M+" />
            <StatItem label="Total Users" end={220} suffix="K+" />
            <StatItem label="Top Earning" end={21.3} prefix="$" suffix="K+" decimals={1} />

          </div>
        </div>

      </div>
    </section>
  );
}

/* =========================
   STAT ITEM WITH COUNT-UP
========================= */
function StatItem({
  label,
  end,
  prefix = "",
  suffix = "",
  duration = 2000,
  decimals = 0,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = start + (end - start) * easeOutCubic(progress);
      setCount(value);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="text-indigo-400 font-semibold tracking-widest text-sm mb-3 uppercase">
        {label}
      </p>
      <p className="text-3xl md:text-4xl font-extrabold text-white">
        {prefix}
        {count.toFixed(decimals)}
        {suffix}
      </p>
    </div>
  );
}

/* =========================
   EASING FUNCTION
========================= */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}
