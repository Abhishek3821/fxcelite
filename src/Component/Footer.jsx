import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#050617] to-[#070A23] pt-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white max-w-2xl">
            Unlock Your Potential and <br /> Join Our Trading Team!
          </h2>

          <div className="flex w-full max-w-md bg-indigo-500/30 rounded-full overflow-hidden border border-white/10">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-6 py-4 bg-transparent text-white placeholder:text-indigo-200 outline-none"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold rounded-full m-1">
              Subscribe
            </button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/10 mb-16" />

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14 mb-16">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                FX
              </div>
              <div>
                <p className="text-white text-xl font-extrabold">FXCELITE</p>
                <p className="text-slate-400 text-sm">Since 2021</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-6">
              GOOD ★★★★★{" "}
              <span className="text-slate-400">
                2207 reviews · Trustindex
              </span>
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social">
                <Youtube size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social">
                <Twitter size={18} />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="social">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* MAIN MENU */}
          <FooterColumn title="Main Menu">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/growth-plan">Growth Plan</FooterLink>
            <FooterLink to="/pricing">Programs</FooterLink>
            <FooterLink to="/reviews">Reviews</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/dashboard">Dashboard</FooterLink>
          </FooterColumn>

          {/* RESOURCES */}
          <FooterColumn title="Resources">
            {/* <FooterLink to="/blog">Blog & Trading Guides</FooterLink> */}
            <FooterLink to="faqs">FAQs & Helpdesk</FooterLink>

            <h4 className="text-white font-semibold mt-6 mb-4">Terms</h4>
            <FooterLink to="/terms-and-conditions">Terms and Conditions</FooterLink>
            <FooterLink to="/refund-policy">Refund Policy</FooterLink>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
          </FooterColumn>

          {/* LEGAL */}
          <FooterColumn title="Legal">
            <FooterLink to="/affiliate">Affiliate Program</FooterLink>
            <FooterLink to="/investor-relations">Investor Relations</FooterLink>
            <FooterLink to="/white-label">White Label Solution</FooterLink>
            <FooterLink to="/charity">Charity Program</FooterLink>
          </FooterColumn>
        </div>

        {/* DISCLAIMER */}
        <p className="text-slate-400 text-xs leading-relaxed mb-10">
          We provide virtual demo accounts that simulate live market conditions.
          Any reference to “Funded” on our website refers only to virtual funding.
          Our services are not investment services or recommendations.
        </p>

        {/* DIVIDER */}
        <div className="h-px bg-white/10 mb-6" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm pb-10 gap-4">
          <p>© 2026 FXCELITE · All rights reserved</p>
          <p>FYFX Capital LTD · Hong Kong Registered company number: 75280952-000</p>
        </div>

      </div>

      {/* shared styles */}
      <style>{`
        .social {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          background: rgba(79,70,229,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: opacity 0.2s;
        }
        .social:hover { opacity: 0.85; }
      `}</style>
    </footer>
  );
}

/* =========================
   HELPERS
========================= */
function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-3 text-slate-300 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="hover:text-white transition"
      >
        {children}
      </Link>
    </li>
  );
}
