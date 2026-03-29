import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-mystic-gold/20">

      {/* Massive Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <h1 className="font-brand text-[15vw] text-mystic-gold tracking-wider">Aatmaya</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">

          <div className="max-w-sm">
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo.png" alt="Aatmaya Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              <h2 className="font-brand text-4xl mt-2 text-antique-white tracking-wide">Aatmaya</h2>
            </div>
            <p className="font-body text-xl text-parchment/60 leading-relaxed">
              Illuminating the path within through the language of the stars.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="font-heading text-sm text-mystic-gold tracking-widest uppercase mb-6">Explore</h4>
              <ul className="space-y-4 font-body text-parchment/80">
                <li><Link to="/services" className="hover:text-mystic-gold transition-colors cursor-pointer block">Readings</Link></li>
                <li><Link to="/journal" className="hover:text-mystic-gold transition-colors cursor-pointer block">The Journal</Link></li>
                <li><Link to="/about" className="hover:text-mystic-gold transition-colors cursor-pointer block">About <span className="font-brand text-lg tracking-wide lowercase capitalize">Aatmaya</span></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm text-mystic-gold tracking-widest uppercase mb-6">Connect</h4>
              <ul className="space-y-4 font-body text-parchment/80">
                <li>
                  <a href="mailto:aatmaya30@gmail.com" className="hover:text-mystic-gold transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" /> aatmaya30@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/918117005888" target="_blank" rel="noopener noreferrer" className="hover:text-mystic-gold transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" /> +91 8117005888
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-mystic-gold/10">
          <p className="text-xs text-parchment/40 uppercase tracking-widest">© 2024 <span className="font-brand normal-case tracking-normal text-sm">Aatmaya</span>. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="mt-8 md:mt-0 px-6 py-2 border border-mystic-gold/20 rounded-full text-mystic-gold/60 hover:text-mystic-gold hover:border-mystic-gold transition-all text-xs uppercase tracking-widest flex items-center gap-2"
          >
            Return to Stars <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
