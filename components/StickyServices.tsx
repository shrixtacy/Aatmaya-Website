import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'vedic-astrology',
    title: 'Vedic Astrology',
    description: 'Understand the blueprint of your soul. By mapping the stars at the exact moment of your birth, we reveal your core strengths, karmic lessons, and destiny.',
    imageUrl: '/Astrology.webp',
  },
  {
    id: 'tarot',
    title: 'Tarot Reading',
    description: 'A deep dive into your past, present, and future using the ancient symbolism of the Tarot. We will explore the archetypes influencing your journey and uncover hidden blocks.',
    imageUrl: '/Tarot.webp',
  },
  {
    id: 'palmistry',
    title: 'Palmistry',
    description: 'Decode the map hidden in your hands. A comprehensive analysis of your lifelines to understand your dominant traits, career path, love life, and physical vitality.',
    imageUrl: '/AboutSpace2.jpeg',
  },
  {
    id: 'reiki',
    title: 'Reiki Energy Healing',
    description: 'A holistic scan and realignment of your auric field and chakras. Discover where your energy is leaking and gently restore your vital life force to find inner peace.',
    imageUrl: '/energy forcast.webp', 
  },
];

const StickyServices: React.FC = () => {
  return (
    <section className="relative bg-void w-full" id="services">
      {/* Services Band */}
      <div className="w-full bg-void-light/50 border-t border-b border-mystic-gold/20 py-8 px-6 md:px-12 relative z-20 flex flex-col md:flex-row items-center justify-between">
        <h2 className="font-heading text-3xl md:text-3xl text-mystic-gold uppercase tracking-[0.3em] mb-4 md:mb-0">
          Services
        </h2>
        <Link to="/services" className="group flex items-center gap-2 text-parchment hover:text-mystic-gold transition-colors font-heading text-sm uppercase tracking-widest">
          View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Scroll Stack */}
      <div className="relative">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="sticky top-0 min-h-screen w-full flex items-center justify-center overflow-hidden py-6 px-3 md:px-12"
            style={{ zIndex: index + 1 }}
          >
            {/* Solid background for each layer so they stack opaquely */}
            <div className="absolute inset-0 bg-void border-t border-mystic-gold/10">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-void via-void/90 to-black opacity-80"></div>
            </div>

            {/* Content Card (Horizontal Layout) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-full max-w-5xl mx-auto bg-void/80 backdrop-blur-md border border-mystic-gold/20 flex flex-col md:flex-row overflow-hidden rounded-sm shadow-2xl"
            >
              {/* Image Left */}
              <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto md:h-[420px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-mystic-gold/10 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2994&auto=format&fit=crop';
                  }}
                />
              </div>

              {/* Text Right */}
              <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center relative">
                <div className="absolute top-2 right-6 text-mystic-gold/5 pointer-events-none">
                  <span className="font-heading text-6xl md:text-8xl font-bold">0{index + 1}</span>
                </div>
                
                <h3 className="font-heading text-2xl md:text-4xl text-antique-white mb-3 md:mb-4 tracking-wider relative z-10">
                  {service.title}
                </h3>
                
                <p className="font-body text-sm md:text-lg text-parchment/70 leading-relaxed mb-6 md:mb-8 relative z-10">
                  {service.description}
                </p>

                <div className="flex flex-row gap-3 relative z-10">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="group flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-mystic-gold/10 hover:bg-mystic-gold/20 border border-mystic-gold/40 text-mystic-gold uppercase tracking-[0.1em] text-[10px] md:text-xs transition-all duration-300 whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment</span>
                  </a>
                  
                  <Link to="/services" className="group flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-parchment hover:text-mystic-gold uppercase tracking-[0.1em] text-[10px] md:text-xs transition-all duration-300 border border-mystic-gold/10 hover:border-mystic-gold/30 whitespace-nowrap">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StickyServices;
