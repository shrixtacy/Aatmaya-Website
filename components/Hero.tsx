import React from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[url('/AATMAYA%20Background.jpg')] bg-cover bg-center"></div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-black/40"></div>

      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-8">
        
        {/* Replaced graphic spacer to maintain balance without the icon */}
        <div className="h-12"></div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-wider text-white drop-shadow-2xl shadow-black">
          Beyond the <span className="text-mystic-gold italic drop-shadow-2xl shadow-black">Veil</span>
        </h1>

        <p className="font-body text-xl md:text-2xl text-white tracking-wide max-w-2xl leading-relaxed drop-shadow-lg shadow-black">
          Unlock the wisdom written in the stars. 
          <br className="hidden md:block" />
          Ancient divination for the modern soul.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-8">
            <button className="group relative px-8 py-4 border border-mystic-gold/40 text-mystic-gold font-heading tracking-[0.2em] uppercase text-sm hover:bg-mystic-gold hover:text-void transition-all duration-500 ease-out">
                <span className="relative z-10 flex items-center gap-2">
                    <Star className="w-4 h-4" /> Book a Reading
                </span>
            </button>
            <button className="group px-8 py-4 text-parchment font-heading tracking-[0.2em] uppercase text-sm hover:text-mystic-gold transition-colors duration-300">
                Explore Services
            </button>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-void to-transparent"></div>
    </section>
  );
};

export default Hero;