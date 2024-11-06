import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Problems } from "./components/Problems";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Bonuses } from "./components/Bonuses";
import { FAQ } from "./components/FAQ";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";
import { CallToAction } from "./components/CallToAction";
import { MetaPixel } from "./components/MetaPixel";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MetaPixel />

      <Navbar />
      <Hero />
      <Problems />
      <Features />
      <Testimonials />
      <Bonuses />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
