import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroDoubleSlide from './components/IntroDoubleSlide';
import StickyServices from './components/StickyServices';
import MonthlyFlipbook from './components/MonthlyFlipbook';
import AstralCalendar from './components/AstralCalendar';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';

const App: React.FC = () => {
  return (
    <main className="relative bg-void min-h-screen text-antique-white selection:bg-mystic-gold selection:text-void scroll-smooth">
      <Navbar />
      <StarBackground />

      {/* 1. Hero */}
      <Hero />

      {/* 2. IntroDoubleSlide */}
      <IntroDoubleSlide />

      {/* 3. StickyServices (Untouched) */}
      <StickyServices />

      {/* 4. MonthlyFlipbook */}
      <MonthlyFlipbook />

      {/* 5. AstralCalendar */}
      <AstralCalendar />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Contact */}
      <Contact />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
};

export default App;