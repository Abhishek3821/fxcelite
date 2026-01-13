import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  /* =========================
     CLOSE ON OUTSIDE CLICK
  ========================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goToPricing = (category) => {
    navigate("/pricing", { state: { category } });
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#050617] via-[#0B0E2A] to-[#050617] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">FX</span>
            </div>
            <div>
              <p className="text-white font-bold text-lg">FXCELITE</p>
              <p className="text-xs text-slate-400">Since 2021</p>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">

            {/* PROGRAMS */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 hover:text-white transition"
              >
                Programs
                <ChevronDown
                  size={16}
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
              </button>

              {open && (
                <div className="absolute top-10 left-0 w-64 rounded-2xl bg-gradient-to-b from-[#0B0E2A] to-[#050617] border border-white/10 shadow-xl backdrop-blur-xl p-2">
                  <DropdownItem text="Instant Funded Account" onClick={() => goToPricing("INSTANT")} />
                  <DropdownItem text="1 Step Evaluation" onClick={() => goToPricing("PHASE_1")} />
                  <DropdownItem text="2 Step Evaluation" onClick={() => goToPricing("PHASE_2")} />
                  <DropdownItem text="10X Quest" onClick={() => goToPricing("QUEST_10X")} />
                </div>
              )}
            </div>

            <NavLink to="/faqs" className="hover:text-white">FAQs</NavLink>
            <NavLink to="/affiliate" className="hover:text-white">Affiliate</NavLink>
            <NavLink to="/about" className="hover:text-white">About Us</NavLink>
            <NavLink to="/pricing" className="hover:text-white">Pricing</NavLink>
            <NavLink to="/growth-plan" className="hover:text-white">Growth Plan</NavLink>

            <NavLink to="/login" className="flex items-center gap-1 hover:text-white">
              Log In <ExternalLink size={14} />
            </NavLink>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate("/get-started")}
            className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:opacity-90"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

function DropdownItem({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white"
    >
      {text}
    </button>
  );
}
