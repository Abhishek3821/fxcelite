import React from "react";
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
              GOOD ★★★★★ <span className="text-slate-400">2207 reviews · Trustindex</span>
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin, Twitter, MessageCircle].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-indigo-600/80 flex items-center justify-center text-white hover:opacity-90 transition"
                  >
                    <Icon size={18} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* MAIN MENU */}
          <div>
            <h4 className="text-white font-semibold mb-4">Main Menu</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>Home</li>
              <li>Growth Plan</li>
              <li>Programs</li>
              <li>Reviews</li>
              <li>About Us</li>
              <li>Dashboard</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>Blog & Trading Guides</li>
              <li>FAQs & Helpdesk</li>
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-4">Terms</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>Terms and Conditions</li>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>Affiliate Program</li>
              <li>Investor Relations</li>
              <li>White Label Solution</li>
              <li>Charity Program</li>
            </ul>
          </div>
        </div>

        {/* DISCLAIMER */}
        <p className="text-slate-400 text-xs leading-relaxed mb-10">
          We provide virtual demo accounts that simulate live market conditions.
          Any reference to “Funded” on our website or in our terms pertains only
          to virtual funding. Our services are not investment services or
          recommendations, and our staff are not authorized to offer investment
          advice. All information is for educational purposes only and does not
          constitute specific investment advice or recommendations.
        </p>

        {/* DIVIDER */}
        <div className="h-px bg-white/10 mb-6" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm pb-10 gap-4">
          <p>© 2026 FXCELITE · All rights reserved</p>
          <p>FYFX Capital LTD · Hong Kong Registered company number: 75280952-000</p>
        </div>

      </div>
    </footer>
  );
}
