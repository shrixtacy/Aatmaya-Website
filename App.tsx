import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StickyServices from './components/StickyServices';
import ZodiacWheel from './components/ZodiacWheel';
import BlogSection from './components/BlogSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';

const App: React.FC = () => {
  return (
    <main className="relative bg-void min-h-screen text-antique-white selection:bg-mystic-gold selection:text-void">
      <Navbar />
      <StarBackground />
      <Hero />
      <About />
      <StickyServices />
      <ZodiacWheel />
      <BlogSection />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;