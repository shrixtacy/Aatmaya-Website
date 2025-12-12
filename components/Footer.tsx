import React from 'react';
import { Instagram, Mail, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 bg-void pt-20 pb-10 border-t border-mystic-gold px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
            <h2 className="font-heading text-2xl text-white mb-4">Aatmaya</h2>
            <p className="font-body text-white/80 max-w-xs">
                Ancient wisdom for the modern soul. Illuminated by starlight, guided by spirit.
            </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4 font-heading text-sm uppercase tracking-widest text-white/90">
            <a href="#" className="hover:text-mystic-gold transition-colors">Book a Reading</a>
            <a href="#" className="hover:text-mystic-gold transition-colors">Services</a>
            <a href="#" className="hover:text-mystic-gold transition-colors">Journal</a>
            <a href="#" className="hover:text-mystic-gold transition-colors">Contact</a>
        </div>

        {/* Social & Newsletter */}
        <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-mystic-gold/30 flex items-center justify-center text-mystic-gold hover:bg-mystic-gold hover:text-void transition-colors">
                    <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-mystic-gold/30 flex items-center justify-center text-mystic-gold hover:bg-mystic-gold hover:text-void transition-colors">
                    <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-mystic-gold/30 flex items-center justify-center text-mystic-gold hover:bg-mystic-gold hover:text-void transition-colors">
                    <Mail className="w-4 h-4" />
                </a>
            </div>
            <p className="text-xs text-white/60 font-sans">© 2024 Aatmaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;