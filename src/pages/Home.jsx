import React from "react";
import About from "../components/About";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import TrustedBy from "../components/TrustedBy";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default Home;
