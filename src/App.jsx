// App.js
import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AdvisorEquity from "./components/AdvisorEquity"; // Make sure this path is correct
import Footer from "./components/Footer";
import Header from "./components/Header";
import InvestingStartupsPage from "./components/InvestingStartUps";
import {
  BusinessPlansPortfolio,
  MarketResearchPortfolio,
  PitchDecksPortfolio,
  Portfolio,
} from "./components/Portfolio";
import PricingPage from "./components/PricingPage";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import WhoWeAre from "./pages/WhoWeAre";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/investing" element={<InvestingStartupsPage />} />

          {/* Services Routes */}
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/services/advisor-equity" element={<AdvisorEquity />} />
          <Route
            path="/services/business-plans"
            element={<div>Business Plans Page</div>}
          />
          <Route
            path="/services/pitch-decks"
            element={<div>Pitch Decks Page</div>}
          />
          <Route
            path="/services/market-research"
            element={<div>Market Research Page</div>}
          />

          {/* Portfolio Routes */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/work/portfolio"
            element={<Navigate to="/portfolio" replace />}
          />
          <Route
            path="/portfolio/pitch-decks"
            element={<PitchDecksPortfolio />}
          />
          <Route
            path="/portfolio/business-plans"
            element={<BusinessPlansPortfolio />}
          />
          <Route
            path="/portfolio/market-research"
            element={<MarketResearchPortfolio />}
          />

          {/* Work Routes */}
          <Route
            path="/work/case-studies"
            element={<div>Case Studies Page</div>}
          />
          <Route
            path="/work/client-work"
            element={<div>Client Work Page</div>}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
