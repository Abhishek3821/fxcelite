import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  /* =========================
     STATES
  ========================= */
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  /* =========================
     CLOSE DESKTOP DROPDOWN
  ========================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* =========================
     NAV HELPERS
  ========================= */
  const goToPricing = (category) => {
    navigate("/pricing", { state: { category } });
    setDesktopOpen(false);
    setMobileProgramsOpen(false);
    setMobileOpen(false);
  };

  const navTo = (path) => {
    navigate(path);
    setDesktopOpen(false);
    setMobileProgramsOpen(false);
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#050617] via-[#0B0E2A] to-[#050617] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div
            onClick={() => navTo("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-49 h-49 rounded-lg bg-gradient-to-br flex items-center justify-center overflow-hidden">
              <img
                src={Logo}
                alt="FXCELITE Logo"
                className="w-47 h-47 object-contain"
              />
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {/* PROGRAMS (DESKTOP) */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDesktopOpen(!desktopOpen)}
                className="flex items-center gap-1 hover:text-white transition"
              >
                Programs
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    desktopOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {desktopOpen && (
                <div className="absolute top-10 left-0 w-64 rounded-2xl bg-gradient-to-b from-[#0B0E2A] to-[#050617] border border-white/10 shadow-xl backdrop-blur-xl p-2">
                  <DropdownItem
                    text="Instant Funded Account"
                    onClick={() => goToPricing("INSTANT")}
                  />
                  <DropdownItem
                    text="1 Step Evaluation"
                    onClick={() => goToPricing("PHASE_1")}
                  />
                  <DropdownItem
                    text="2 Step Evaluation"
                    onClick={() => goToPricing("PHASE_2")}
                  />
                  <DropdownItem
                    text="10X Quest"
                    onClick={() => goToPricing("QUEST_10X")}
                  />
                </div>
              )}
            </div>

            <NavLink to="/faqs" className="hover:text-white">
              FAQs
            </NavLink>
            <NavLink to="/affiliate" className="hover:text-white">
              Affiliate
            </NavLink>
            <NavLink to="/about" className="hover:text-white">
              About Us
            </NavLink>
            <NavLink to="/pricing" className="hover:text-white">
              Pricing
            </NavLink>
            <NavLink to="/growth-plan" className="hover:text-white">
              Growth Plan
            </NavLink>

            <NavLink
              to="/login"
              className="flex items-center gap-1 hover:text-white"
            >
              Log In <ExternalLink size={14} />
            </NavLink>
          </div>

          {/* DESKTOP CTA */}
          <button
            onClick={() => navTo("/get-started")}
            className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:opacity-90"
          >
            Get Started
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE MENU
      ========================= */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050617] border-t border-white/10 px-6 py-6 space-y-4 text-slate-300">
          {/* PROGRAMS (MOBILE) */}
          <button
            onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
            className="flex items-center justify-between w-full text-left hover:text-white"
          >
            Programs
            <ChevronDown
              size={18}
              className={`transition-transform ${
                mobileProgramsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileProgramsOpen && (
            <div className="pl-4 space-y-2">
              <MobileItem
                text="Instant Funded Account"
                onClick={() => goToPricing("INSTANT")}
              />
              <MobileItem
                text="1 Step Evaluation"
                onClick={() => goToPricing("PHASE_1")}
              />
              <MobileItem
                text="2 Step Evaluation"
                onClick={() => goToPricing("PHASE_2")}
              />
              <MobileItem
                text="10X Quest"
                onClick={() => goToPricing("QUEST_10X")}
              />
            </div>
          )}

          <MobileLink text="FAQs" onClick={() => navTo("/faqs")} />
          <MobileLink text="Affiliate" onClick={() => navTo("/affiliate")} />
          <MobileLink text="About Us" onClick={() => navTo("/about")} />
          <MobileLink text="Pricing" onClick={() => navTo("/pricing")} />
          <MobileLink
            text="Growth Plan"
            onClick={() => navTo("/growth-plan")}
          />
          <MobileLink text="Log In" onClick={() => navTo("/login")} />

          <button
            onClick={() => navTo("/get-started")}
            className="w-full mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

/* =========================
   COMPONENTS
========================= */

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

function MobileItem({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left text-sm hover:text-white"
    >
      {text}
    </button>
  );
}

function MobileLink({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left hover:text-white"
    >
      {text}
    </button>
  );
}
