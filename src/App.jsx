import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Component/Footer";
import Affiliate from "./Pages/Affiliate";
import FAQ from "./Pages/FAQ";
import Pricing from "./Pages/Pricing";
import GrowthPlan from "./Pages/GrowthPlan";

import TermsAndConditions from "./Pages/TermsAndConditions";
import RefundPolicy from "./Pages/RefundPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import InvestorRelations from "./Pages/InvestorRelations";
import WhiteLabelSolutions from "./Pages/whitelabel-solutions";
import ScrollToTop from "./Component/ScrollToTop";
function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/faqs" element={<FAQ />} />  
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/growth-plan" element={<GrowthPlan />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/investor-relations" element={<InvestorRelations />} />
        <Route path="/white-label-solutions" element={<WhiteLabelSolutions />} />
  
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
