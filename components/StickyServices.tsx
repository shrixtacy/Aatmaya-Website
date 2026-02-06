import React from 'react';
import { Sparkles, Moon, Flame, Sun, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'tarot',
    title: 'Tarot Reading',
    description: 'A deep dive into your past, present, and future using the ancient symbolism of the Tarot. We will explore the archetypes influencing your journey and uncover hidden blocks.',
    icon: <Sparkles className="w-8 h-8" />,
    imageUrl: '/Tarot.jpg',
  },
  {
    id: 'birth-chart',
    title: 'Birth Chart & Astrology',
    description: 'Understand the blueprint of your soul. By mapping the stars at the exact moment of your birth, we reveal your core strengths, karmic lessons, and destiny.',
    icon: <Moon className="w-8 h-8" />,
    imageUrl: '/Astrology.webp',
  },
  {
    id: 'ritual',
    title: 'Full Moon Ritual Guidance',
    description: 'Harness the potent energy of the full moon. I will design a personalized ritual for you to release what no longer serves you and manifest your deepest desires.',
    icon: <Eye className="w-8 h-8" />,
    imageUrl: '/Moon.webp',
  },
  {
    id: 'fire-sign',
    title: 'Fire Sign Predictions',
    description: 'Specialized readings for Aries, Leo, and Sagittarius. Ignite your passion and channel your fiery energy into productive, transformative action.',
    icon: <Flame className="w-8 h-8" />,
    imageUrl: '/fire sign.webp',
  },
  {
    id: 'energy',
    title: 'Personal Energy Forecast',
    description: 'A holistic scan of your auric field and chakra alignment. Discover where your energy is leaking and how to reclaim your vital life force.',
    icon: <Sun className="w-8 h-8" />,
    imageUrl: '/energy forcast.webp',
  },
];

const StickyServices: React.FC = () => {
  return (
    <section className="relative bg-void">
      {services.map((service, index) => (
        <div
          key={service.id}
          className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
          style={{ zIndex: index + 1 }}
        >
          {/* Background Image with Parallax-like feel */}
          <div className="absolute inset-0">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover grayscale opacity-40 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-black opacity-90"></div>
          </div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl w-full mx-6 p-8 md:p-12 bg-void-light/40 backdrop-blur-xl border border-mystic-gold/20 rounded-lg shadow-2xl"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 text-mystic-gold/10 pointer-events-none">
              <span className="font-heading text-9xl">{index + 1}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
              {/* Icon Box */}
              <div className="shrink-0 w-20 h-20 rounded-full border border-mystic-gold/40 flex items-center justify-center bg-gradient-to-br from-mystic-gold/20 to-transparent shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <div className="text-mystic-gold animate-pulse-slow">
                  {service.icon}
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-heading text-3xl md:text-4xl text-antique-white mb-6 tracking-wide">
                  {service.title}
                </h3>
                <p className="font-body text-xl text-parchment/80 leading-relaxed mb-8 max-w-2xl">
                  {service.description}
                </p>

                <button className="group inline-flex items-center gap-3 px-8 py-3 bg-mystic-gold/10 hover:bg-mystic-gold/20 border border-mystic-gold/40 text-mystic-gold uppercase tracking-[0.2em] text-sm transition-all duration-300">
                  <span>Discover</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator (Only for first few slides) */}
          {index < services.length - 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mystic-gold/30 animate-bounce">
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-mystic-gold/50"></div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default StickyServices;
