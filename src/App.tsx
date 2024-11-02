import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Bonuses } from './components/Bonuses';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />
      <Problems />
      <Features />
      <Testimonials />
      <Bonuses />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;