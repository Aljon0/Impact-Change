import React from "react";
import About from "../components/About";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import TrustBar from "../components/TrustBar";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default Home;
