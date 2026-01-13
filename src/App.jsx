import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Component/Footer";
import Affiliate from "./Pages/Affiliate";
import FAQ from "./Pages/FAQ";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
