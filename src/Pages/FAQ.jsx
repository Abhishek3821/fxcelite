import React, { useState, useMemo } from "react";
import { ChevronDown, Search } from "lucide-react";

/* =========================
   FAQ DATA
========================= */
const FAQ_DATA = [
  {
    category: "General",
    items: [
      {
        q: "What is FXCELITE?",
        a: "FXCELITE is a proprietary trading firm that provides traders with access to funded accounts, allowing them to trade financial markets using the firm's capital."
      },
      {
        q: "Are there any countries where trading is restricted?",
        a: "Yes. Traders from sanctioned or restricted jurisdictions are not allowed due to compliance and regulatory requirements."
      },
      {
        q: "How does FXCELITE make money?",
        a: "We generate revenue through challenge fees, subscriptions, and a share of profits from successful traders."
      }
    ]
  },
  {
    category: "Platforms & Trading",
    items: [
      {
        q: "Which trading platforms are available?",
        a: "We support MetaTrader 5 (MT5) and Match-Trader."
      },
      {
        q: "Can I trade news?",
        a: "Yes, unless restricted by your specific trading plan."
      },
      {
        q: "Do you require a stop loss?",
        a: "Yes. Stop-loss usage is mandatory for proper risk management."
      }
    ]
  },
  {
    category: "Accounts & Rules",
    items: [
      {
        q: "What’s the initial account size?",
        a: "Account sizes depend on the plan selected and vary from entry-level to large funded accounts."
      },
      {
        q: "What is the maximum drawdown?",
        a: "Drawdown limits depend on the account type and plan you choose."
      },
      {
        q: "Prohibited Trading Strategies",
        a: "Latency arbitrage, account sharing, reverse trading, or exploiting platform inefficiencies are strictly prohibited."
      }
    ]
  },
  {
    category: "Payouts & Payments",
    items: [
      {
        q: "How do I request my profit payout?",
        a: "You can request payouts directly from your dashboard once all eligibility criteria are met."
      },
      {
        q: "How long does cryptocurrency payout take?",
        a: "Crypto payouts are usually processed within a few hours, depending on network congestion."
      },
      {
        q: "Why is KYC required now?",
        a: "KYC is required to comply with regulations and prevent fraud."
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  /* =========================
     FILTER LOGIC
  ========================= */
  const filteredData = useMemo(() => {
    return FAQ_DATA.map(section => ({
      ...section,
      items: section.items.filter(
        item =>
          (activeCategory === "All" ||
            section.category === activeCategory) &&
          (item.q.toLowerCase().includes(search.toLowerCase()) ||
            item.a.toLowerCase().includes(search.toLowerCase()))
      )
    })).filter(section => section.items.length > 0);
  }, [search, activeCategory]);

  const categories = ["All", ...FAQ_DATA.map(s => s.category)];

  return (
    <section className="w-full py-28 bg-gradient-to-br from-[#020316] via-[#04062a] to-[#020316]">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">
          Frequently Asked{" "}
          <span className="text-emerald-400">Questions</span>
        </h1>

        {/* SEARCH */}
        <div className="relative max-w-xl mx-auto mb-10">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                activeCategory === cat
                  ? "bg-emerald-400 text-black border-emerald-400"
                  : "border-white/10 text-slate-300 hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ LIST */}
        <div className="space-y-10">
          {filteredData.map((section, sIdx) => (
            <div key={sIdx}>
              <h2 className="text-xl font-bold text-white mb-6">
                {section.category}
              </h2>

              <div className="space-y-4">
                {section.items.map((item, iIdx) => {
                  const idx = `${sIdx}-${iIdx}`;
                  const isOpen = openIndex === idx;

                  return (
                    <FAQItem
                      key={idx}
                      question={item.q}
                      answer={item.a}
                      open={isOpen}
                      onToggle={() =>
                        setOpenIndex(isOpen ? null : idx)
                      }
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* =========================
   FAQ ITEM (FIXED)
========================= */
function FAQItem({ question, answer, open, onToggle }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#0b1025] to-[#050617] border border-white/10 overflow-hidden">

      {/* QUESTION */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-white font-medium">
          {question}
        </span>

        <ChevronDown
          className={`text-emerald-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* ANSWER – NO CUTTING */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed">
          {answer}
        </div>
      </div>

    </div>
  );
}
