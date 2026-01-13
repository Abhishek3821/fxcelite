import React, { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

/* =========================
   CATEGORY IDS
========================= */
const CategoryId = {
  INSTANT: "INSTANT",
  PHASE_1: "PHASE_1",
  PHASE_2: "PHASE_2",
  QUEST_10X: "QUEST_10X",
};

/* =========================
   ICONS
========================= */
const ICONS = {
  Info: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-400"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
};

/* =========================
   PRICING DATA
========================= */
const PRICING_DATA = [
  {
    id: CategoryId.INSTANT,
    label: "Instant Funding",
    isPopular: true,
    columns: [
      { id: "2.5k", name: "2.5K Instant", startingBalance: "$2,500", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "8%", maxDrawdown: "5%", leverage: "1:100", price: "$67" },
      { id: "5k", name: "5K Instant", startingBalance: "$5,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "8%", maxDrawdown: "5%", leverage: "1:100", price: "$199" },
      { id: "10k", name: "10K Instant", startingBalance: "$10,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "8%", maxDrawdown: "5%", leverage: "1:100", price: "$380" },
      { id: "25k", name: "25K Instant", startingBalance: "$25,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "8%", maxDrawdown: "5%", leverage: "1:100", price: "$910" },
      { id: "50k", name: "50K Instant", startingBalance: "$50,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "8%", maxDrawdown: "5%", leverage: "1:100", price: "$1,840" },
      { id: "100k", name: "100K Instant", startingBalance: "$100,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "8%", maxDrawdown: "5%", leverage: "1:100", price: "$3,299" },
      { id: "200k", name: "200K Instant", isPopular: true, startingBalance: "$200,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "8%", maxDrawdown: "5%", leverage: "1:100", price: "$6,139" },
    ],
  },
  {
    id: CategoryId.PHASE_1,
    label: "1 Phase Evaluation",
    columns: [
      { id: "2.5k", name: "2.5K 1-Phase", startingBalance: "$2,500", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "10%", maxDrawdown: "7%", leverage: "1:100", price: "$27" },
      { id: "5k", name: "5K 1-Phase", startingBalance: "$5,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "10%", maxDrawdown: "7%", leverage: "1:100", price: "$78" },
      { id: "10k", name: "10K 1-Phase", startingBalance: "$10,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "10%", maxDrawdown: "7%", leverage: "1:100", price: "$143" },
      { id: "25k", name: "25K 1-Phase", startingBalance: "$25,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "10%", maxDrawdown: "7%", leverage: "1:100", price: "$270" },
      { id: "50k", name: "50K 1-Phase", startingBalance: "$50,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "10%", maxDrawdown: "7%", leverage: "1:100", price: "$402" },
      { id: "100k", name: "100K 1-Phase", startingBalance: "$100,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "10%", maxDrawdown: "7%", leverage: "1:100", price: "$756" },
      { id: "200k", name: "200K 1-Phase", isPopular: true, startingBalance: "$200,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "5", target: "10%", maxDrawdown: "7%", leverage: "1:100", price: "$1,459" },
    ],
  },
  {
    id: CategoryId.PHASE_2,
    label: "2 Phase Evaluation",
    columns: [
      { id: "2.5k", name: "2.5K 2-Phase", startingBalance: "$2,500", profitSharing: "95%", timeLimit: "∞", minTradingDays: "P1:5 P2:3", target: "10% / 6%", maxDrawdown: "10%", leverage: "1:100", price: "$23" },
      { id: "5k", name: "5K 2-Phase", startingBalance: "$5,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "P1:5 P2:3", target: "10% / 6%", maxDrawdown: "10%", leverage: "1:100", price: "$56" },
      { id: "10k", name: "10K 2-Phase", startingBalance: "$10,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "P1:5 P2:3", target: "10% / 6%", maxDrawdown: "10%", leverage: "1:100", price: "$107" },
      { id: "25k", name: "25K 2-Phase", startingBalance: "$25,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "P1:5 P2:3", target: "10% / 6%", maxDrawdown: "10%", leverage: "1:100", price: "$234" },
      { id: "50k", name: "50K 2-Phase", startingBalance: "$50,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "P1:5 P2:3", target: "10% / 6%", maxDrawdown: "10%", leverage: "1:100", price: "$359" },
      { id: "100k", name: "100K 2-Phase", startingBalance: "$100,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "P1:5 P2:3", target: "10% / 6%", maxDrawdown: "10%", leverage: "1:100", price: "$659" },
      { id: "200k", name: "200K 2-Phase", isPopular: true, startingBalance: "$200,000", profitSharing: "95%", timeLimit: "∞", minTradingDays: "P1:5 P2:3", target: "10% / 6%", maxDrawdown: "10%", leverage: "1:100", price: "$1,159" },
    ],
  },
  {
    id: CategoryId.QUEST_10X,
    label: "10X Quest",
    columns: [
      { id: "2.5k", name: "2.5K Quest", startingBalance: "$2,500", reward: "$250", timeLimit: "14", minTradingDays: "10", target: "1% x10 Days", leverage: "1:100", price: "$25" },
      { id: "5k", name: "5K Quest", startingBalance: "$5,000", reward: "$500", timeLimit: "14", minTradingDays: "10", target: "1% x10 Days", leverage: "1:100", price: "$50" },
      { id: "10k", name: "10K Quest", startingBalance: "$10,000", reward: "$1,000", timeLimit: "14", minTradingDays: "10", target: "1% x10 Days", leverage: "1:100", price: "$100" },
      { id: "25k", name: "25K Quest", isPopular: true, startingBalance: "$25,000", reward: "$2,500", timeLimit: "14", minTradingDays: "10", target: "1% x10 Days", leverage: "1:100", price: "$250" },
    ],
  },
];

/* =========================
   MAIN COMPONENT
========================= */
export default function PricingTable() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const programFromURL = searchParams.get("program");

  const [activeCategoryId, setActiveCategoryId] = useState(
    location.state?.category ||
      (programFromURL && CategoryId[programFromURL]
        ? programFromURL
        : CategoryId.INSTANT)
  );

  const tableRef = useRef(null);

  /* 🔁 Sync from Navbar (location.state) */
  useEffect(() => {
    if (location.state?.category && CategoryId[location.state.category]) {
      setActiveCategoryId(location.state.category);
      setTimeout(() => {
        tableRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, [location.state]);

  /* 🔁 Sync from URL (?program=PHASE_1) */
  useEffect(() => {
    if (programFromURL && CategoryId[programFromURL]) {
      setActiveCategoryId(programFromURL);
      setTimeout(() => {
        tableRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, [programFromURL]);

  const activeCategory = PRICING_DATA.find(c => c.id === activeCategoryId);
  const columns = activeCategory.columns;
  const isQuest = activeCategoryId === CategoryId.QUEST_10X;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050617] via-[#070A23] to-[#050617] text-white px-4">
      {/* HERO */}
      <section className="py-12 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Choose <span className="text-emerald-400">The Best Plan</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Select the program that fits your trading goals
        </p>
      </section>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {PRICING_DATA.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategoryId(cat.id)}
            className={`px-6 py-2 rounded-full border transition
              ${
                activeCategoryId === cat.id
                  ? "bg-[#1a1f2e] border-[#4a5de8] text-white"
                  : "border-gray-600 text-gray-400 hover:text-white"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div
        ref={tableRef}
        className="max-w-7xl mx-auto bg-[#0b1020]/80 border border-[#1a212d] rounded-2xl overflow-x-auto"
      >
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-4 text-left">Plan</th>
              {columns.map(c => (
                <th key={c.id} className="p-4 text-center">{c.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <Row label="Starting Balance" values={columns.map(c => c.startingBalance)} />
            {!isQuest && <Row label="Profit Sharing" values={columns.map(c => c.profitSharing)} />}
            {isQuest && <Row label="Reward" values={columns.map(c => c.reward)} />}
            <Row label="Time Limit" values={columns.map(c => c.timeLimit)} />
            <Row label="Min Trading Days" values={columns.map(c => c.minTradingDays)} />
            <Row label="Target" values={columns.map(c => c.target)} />
            <Row label="Leverage" values={columns.map(c => c.leverage)} />

            <tr>
              <td className="p-6 font-bold">Price</td>
              {columns.map(c => (
                <td key={c.id} className="p-6 text-center">
                  <div className="flex flex-col gap-3 items-center">
                    <span className="text-2xl font-bold">{c.price}</span>
                    <button className="px-6 py-2 rounded-full bg-emerald-400 text-black font-bold hover:scale-105 transition">
                      Get Plan
                    </button>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* =========================
   ROW COMPONENT
========================= */
function Row({ label, values }) {
  return (
    <tr className="border-t border-[#1a212d]">
      <td className="p-4 font-semibold">{label}</td>
      {values.map((v, i) => (
        <td key={i} className="p-4 text-center text-gray-300">{v}</td>
      ))}
    </tr>
  );
}
