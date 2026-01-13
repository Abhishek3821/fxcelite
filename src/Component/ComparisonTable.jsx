import React from "react";

export default function ComparisonTable() {
  const rows = [
    {
      feature: "Max Account Size",
      fundyourfx: "Up to $3 Million",
      ftmo: "Up to $400,000",
      fundingpips: "Up to $2 Million",
      fundednext: "Up to $4 Million",
    },
    {
      feature: "Minimum Days Requirement",
      fundyourfx: "No minimum days required",
      ftmo: "10 minimum days",
      fundingpips: "3 trading days in evaluation",
      fundednext: "5 trading days in evaluation",
    },
    {
      feature: "Time Limit",
      fundyourfx: "No time limit",
      ftmo: "30 Days",
      fundingpips: "30 Days",
      fundednext: "30 Days",
    },
    {
      feature: "Daily Drawdown Rule",
      fundyourfx: "No daily drawdown rule",
      ftmo: "Yes, 5% daily drawdown",
      fundingpips: "Maximum daily loss limit of 5%",
      fundednext: "5% daily loss limit",
    },
    {
      feature: "Payout Policy",
      fundyourfx: "Payout after 14 days, $150 min",
      ftmo: "Payouts processed monthly",
      fundingpips: "1% min withdrawal, 60%–100% profit split",
      fundednext: "95% profit split, 1st payout in 5 days",
    },
    {
      feature: "Platforms Offered",
      fundyourfx: "Match-Trader with MT5 Copier available",
      ftmo: "MT4, MT5, cTrader",
      fundingpips: "MT5 in partnership with BlackBull Markets",
      fundednext: "MT4, MT5, cTrader",
    },
    {
      feature: "Type of Plans",
      fundyourfx: "Evaluation based and Instant Funding plans",
      ftmo: "Evaluation based",
      fundingpips: "Evaluation based and Instant Funding plans",
      fundednext: "Evaluation based",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-4">
            How We <span className="text-emerald-400">Stand Out</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Overview comparison with our competitors
          </p>
        </div>

        {/* TABLE */}
        <div className="relative overflow-x-auto rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1028] via-[#0E1433] to-[#0B1028]">

          <table className="min-w-full text-left text-sm text-white">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-5 font-semibold">Feature</th>
                <th className="px-6 py-5 font-semibold bg-indigo-600/90">
                 FXCELITE
                </th>
                <th className="px-6 py-5 font-semibold">FTMO</th>
                <th className="px-6 py-5 font-semibold">Fundingpips</th>
                <th className="px-6 py-5 font-semibold">FundedNext</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-white/10 last:border-none"
                >
                  <td className="px-6 py-5 font-medium text-slate-200">
                    {row.feature}
                  </td>

                  <td className="px-6 py-5 bg-indigo-600/80 font-semibold">
                    {row.fundyourfx}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {row.ftmo}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {row.fundingpips}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {row.fundednext}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </section>
  );
}
