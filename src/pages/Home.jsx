import React, { useEffect, useState } from "react";
import About from "../components/About";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import TermsPrivacyModal from "../components/TermsPrivacyModal";
import Testimonials from "../components/Testimonials";
import TrustedBy from "../components/TrustedBy";

const Home = () => {
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if terms were already accepted on component mount
    try {
      // For production, use: localStorage.getItem("termsPrivacyAccepted") === "true"
      // For demo, we'll show the modal initially
      const accepted = false; // Change this to check localStorage in production

      if (accepted) {
        setHasAcceptedTerms(true);
        setShowModal(false);
      } else {
        setShowModal(true);
      }
    } catch (error) {
      // If localStorage is not available, show modal
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    setHasAcceptedTerms(true);
    setShowModal(false);
  };

  return (
    <>
      {/* Home page content */}
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <FinalCTA />
      <Footer />

      {/* Modal overlay - only shows if not accepted */}
      {showModal && !hasAcceptedTerms && (
        <TermsPrivacyModal onAccept={handleAccept} />
      )}
    </>
  );
};

export default Home;
