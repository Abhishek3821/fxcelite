import React from "react";

/* =========================
   DATA
========================= */
const tableData = [
  {
    level: 1,
    values: ["$2,500", "$5,000", "$10,000", "$25,000", "$50,000", "$100,000", "$200,000", "50%"],
  },
  {
    level: 2,
    values: ["$3,750", "$7,500", "$15,000", "$37,500", "$75,000", "$150,000", "$290,000", "60%"],
  },
  {
    level: 3,
    values: ["$5,625", "$11,250", "$22,500", "$56,250", "$112,500", "$225,000", "$420,000", "70%"],
  },
  {
    level: 4,
    values: ["$8,438", "$16,875", "$33,750", "$84,375", "$168,750", "$337,500", "$610,000", "70%"],
  },
  {
    level: 5,
    values: ["$12,656", "$25,312", "$50,625", "$126,562", "$253,125", "$506,250", "$890,000", "80%"],
  },
  {
    level: 6,
    values: ["$18,985", "$37,969", "$75,938", "$189,844", "$379,688", "$759,375", "$1,280,000", "80%"],
  },
  {
    level: 7,
    values: ["$28,477", "$56,953", "$113,906", "$284,766", "$569,531", "$1,139,062", "$1,840,000", "90%"],
  },
  {
    level: 8,
    values: ["$42,715", "$85,430", "$170,859", "$427,148", "$854,297", "$1,708,593", "$2,640,000", "90%"],
  },
  {
    level: 9,
    values: ["$64,073", "$128,145", "$256,289", "$640,723", "$1,281,445", "$2,562,890", "$3,790,000", "95%"],
  },
  {
    level: 10,
    values: ["$75,000", "$150,000", "$300,000", "$750,000", "$1,500,000", "$3,000,000", "$6,000,000", "95%"],
  },
];

const headers = [
  "Level",
  "2.5K Plan",
  "5K Plan",
  "10K Plan",
  "25K Plan",
  "50K Plan",
  "100K Plan",
  "200K Plan",
  "Profit Split",
];

/* =========================
   COMPONENT
========================= */
export default function GrowthPlanTable() {
  return (
    <section className="bg-gradient-to-b from-[#050617] via-[#070a2a] to-[#050617] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-gradient-to-br from-[#0b0f1f] via-[#11162b] to-[#0b0f1f] rounded-3xl border border-white/10 p-10">

          {/* TITLE */}
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-4">
            Growth Plan
          </h2>

          {/* DESCRIPTION */}
          <p className="max-w-4xl mx-auto text-center text-white/80 text-sm md:text-base leading-relaxed mb-8">
            FXCELITE was established with the belief that all traders deserve the
            opportunity to trade with substantial capital. Through our Instant
            Funded Trader Program and Evaluation Program, we offer simulated funded
            trading accounts, with the potential to scale up to $3 million. When a
            trader reaches a 24% profit milestone at any level, their account
            balance increases by 50%, as shown below:
          </p>

          {/* PILL BUTTON */}
          <div className="flex justify-center mb-10">
            <span className="px-6 py-2 rounded-full border border-indigo-400 text-indigo-400 text-sm font-semibold">
              Instant & Evaluation
            </span>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm text-white">
              <thead>
                <tr className="border-b border-white/10">
                  {headers.map((h, i) => (
                    <th
                      key={i}
                      className="py-3 px-4 text-left font-semibold text-white/90"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {tableData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="py-3 px-4 font-semibold">
                      {row.level}
                    </td>

                    {row.values.map((val, j) => (
                      <td key={j} className="py-3 px-4">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}
