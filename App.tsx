import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import JournalPage from './components/JournalPage';

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <IntroDoubleSlide />
    <StickyServices />
    <MonthlyFlipbook />
    <AstralCalendar />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <main className="relative bg-void min-h-screen text-antique-white selection:bg-mystic-gold selection:text-void scroll-smooth">
        <StarBackground />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;