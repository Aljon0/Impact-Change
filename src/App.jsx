import React from "react";
import About from "./components/About";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import TrustedBy from "./components/TrustedBY";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
