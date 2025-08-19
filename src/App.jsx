import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AdvisorEquity from "./components/AdvisorEquity";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InvestingStartupsPage from "./components/InvestingStartUps";
import { BusinessPlansPortfolio } from "./components/Portfolio/BusinessPlanPortfolio";
import { MarketResearchPortfolio } from "./components/Portfolio/MarketResearchPortoflio";
import { OnePagerPortfolio } from "./components/Portfolio/OnePagerPortfolio";
import { PitchDecksPortfolio } from "./components/Portfolio/PitchDeckPortoflio";
import { Portfolio } from "./components/Portfolio/Portfolio";
import PricingPage from "./components/PricingPage";
import Reviews from "./components/Reviews";
import BusinessPlanWriting from "./components/services/BusinessPlanWriting";
import InvestorOnePager from "./components/services/InvestorOnePager";
import LinkedinProfile from "./components/services/LinkedinProfile";
import MarketResearch from "./components/services/MarketResearch";
import PitchDeck from "./components/services/PitchDeck";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import ProcessPage from "./pages/Process";
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
          <Route path="/Process" element={<ProcessPage />} />
          <Route path="/reviews" element={<Reviews />} />

          {/* Services Routes */}
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/services/advisor-equity" element={<AdvisorEquity />} />
          <Route
            path="/services/business-plans"
            element={<div>Business Plans Page</div>}
          />
          <Route path="/services/pitch-decks" element={<PitchDeck />} />
          <Route
            path="/services/market-research"
            element={<MarketResearch />}
          />
          <Route
            path="/services/linkedin-profile"
            element={<LinkedinProfile />}
          />
          <Route path="/services/one-pager" element={<InvestorOnePager />} />
          <Route
            path="/services/business-plan"
            element={<BusinessPlanWriting />}
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
          <Route path="/portfolio/one-pagers" element={<OnePagerPortfolio />} />

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
