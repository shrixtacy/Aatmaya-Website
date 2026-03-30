import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroDoubleSlide from './components/IntroDoubleSlide';
import StickyServices from './components/StickyServices';
import ZodiacCardCarousel from './components/ZodiacCardCarousel';
import AstralCalendar from './components/AstralCalendar';
import Testimonials from './components/Testimonials';
import FeedbackBanner from './components/FeedbackBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import JournalPage from './components/JournalPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <IntroDoubleSlide />
    <StickyServices />
    <ZodiacCardCarousel />
    <AstralCalendar />
    <Testimonials />
    <FeedbackBanner />
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;