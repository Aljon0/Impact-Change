import React, { useState } from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import FAQsSection from "./components/sections/FAQsSection";
import HomeSection from "./components/sections/HomeSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "about":
        return <AboutSection />;
      case "testimonials":
        return <TestimonialsSection />;
      case "faqs":
        return <FAQsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="pt-16">{renderSection()}</main>
      <Footer />
    </div>
  );
};

export default App;
