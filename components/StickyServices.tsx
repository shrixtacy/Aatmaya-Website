import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Moon, Flame, Sun, Eye } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'tarot',
    title: 'Tarot Reading',
    description: 'A deep dive into your past, present, and future using the ancient symbolism of the Tarot. We will explore the archetypes influencing your journey and uncover hidden blocks.',
    icon: <Sparkles className="w-6 h-6" />,
    imageUrl: 'https://images.unsplash.com/photo-1572916167104-5e3474d15615?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'birth-chart',
    title: 'Birth Chart & Astrology',
    description: 'Understand the blueprint of your soul. By mapping the stars at the exact moment of your birth, we reveal your core strengths, karmic lessons, and destiny.',
    icon: <Moon className="w-6 h-6" />,
    imageUrl: 'https://images.unsplash.com/photo-1518131395894-436323c92c89?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'ritual',
    title: 'Full Moon Ritual Guidance',
    description: 'Harness the potent energy of the full moon. I will design a personalized ritual for you to release what no longer serves you and manifest your deepest desires.',
    icon: <Eye className="w-6 h-6" />,
    imageUrl: 'https://images.unsplash.com/photo-1600609842388-3e449195b058?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'fire-sign',
    title: 'Fire Sign Predictions',
    description: 'Specialized readings for Aries, Leo, and Sagittarius. Ignite your passion and channel your fiery energy into productive, transformative action.',
    icon: <Flame className="w-6 h-6" />,
    imageUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'energy',
    title: 'Personal Energy Forecast',
    description: 'A holistic scan of your auric field and chakra alignment. Discover where your energy is leaking and how to reclaim your vital life force.',
    icon: <Sun className="w-6 h-6" />,
    imageUrl: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1200&auto=format&fit=crop',
  },
];

const StickyServices: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0].id);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) setActiveServiceId(id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const activeService = services.find(s => s.id === activeServiceId) || services[0];

  return (
    <section className="relative bg-void-light text-parchment">
      <div className="flex flex-col lg:flex-row">
        
        {/* Sticky Left Panel - Visuals */}
        <div className="lg:w-1/2 h-[60vh] lg:h-screen sticky top-0 left-0 overflow-hidden flex items-center justify-center bg-void border-r border-mystic-gold/10 z-10">
           
           {/* Background transition images */}
           {services.map((service) => (
             <div 
                key={service.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeServiceId === service.id ? 'opacity-70' : 'opacity-0'}`}
             >
                <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent"></div>
             </div>
           ))}

           {/* Foreground Content */}
           <div className="relative z-20 text-center p-8">
              <div className="mb-6 flex justify-center">
                 <div className="w-24 h-24 rounded-full border border-mystic-gold/30 flex items-center justify-center backdrop-blur-sm bg-void/30 shadow-[0_0_30px_rgba(194,160,72,0.1)]">
                    <div className="text-mystic-gold scale-150">
                        {activeService.icon}
                    </div>
                 </div>
              </div>
              <h3 className="font-heading text-3xl text-antique-white tracking-widest uppercase opacity-90 drop-shadow-lg">
                {activeService.title}
              </h3>
           </div>

           {/* Decorative Border Frame */}
           <div className="absolute inset-4 border border-mystic-gold/20 pointer-events-none"></div>
           <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-mystic-gold to-transparent opacity-50"></div>
        </div>

        {/* Scrollable Right Panel - Text */}
        <div className="lg:w-1/2 min-h-screen bg-void-light">
          {services.map((service, index) => (
            <div 
              key={service.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              data-id={service.id}
              className="min-h-[90vh] flex flex-col justify-center px-8 md:px-20 py-24 border-b border-mystic-gold/5 last:border-0 relative"
            >
              {/* Background decorative number */}
              <span className="font-heading text-mystic-gold text-8xl md:text-9xl absolute top-12 left-4 select-none opacity-5 pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <div className="relative z-10">
                <h3 className="font-heading text-3xl md:text-4xl text-antique-white mb-6">
                  {service.title}
                </h3>
                <p className="font-body text-xl text-parchment-dark/80 leading-relaxed mb-8">
                  {service.description}
                </p>
                <button className="text-mystic-gold text-sm tracking-[0.2em] uppercase font-heading hover:text-white transition-colors flex items-center gap-2 group">
                  Learn More 
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyServices;