import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Journal', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-void/90 backdrop-blur-md py-4 shadow-lg border-b border-mystic-gold/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <a href="#" className="font-heading text-xl md:text-2xl text-antique-white tracking-widest font-bold hover:text-mystic-gold transition-colors z-50 relative">
          Aatmaya
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-parchment font-heading text-xs uppercase tracking-[0.2em] hover:text-mystic-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 border border-mystic-gold/40 text-mystic-gold font-heading text-xs uppercase tracking-[0.2em] hover:bg-mystic-gold hover:text-void transition-all duration-300">
            Book Reading
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-antique-white hover:text-mystic-gold transition-colors z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-void z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2994&auto=format&fit=crop')] opacity-5 bg-cover bg-center pointer-events-none"></div>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="font-heading text-2xl text-antique-white hover:text-mystic-gold uppercase tracking-widest relative z-10"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <button className="mt-4 px-8 py-3 border border-mystic-gold text-mystic-gold font-heading text-sm uppercase tracking-widest hover:bg-mystic-gold hover:text-void transition-all relative z-10">
            Book Reading
        </button>
      </div>
    </nav>
  );
};

export default Navbar;