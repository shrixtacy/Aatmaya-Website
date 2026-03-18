import React from 'react';
import { motion } from 'framer-motion';

const AstrologySection: React.FC = () => {
    return (
        <section id="astrology" className="relative py-24 overflow-hidden border-t border-mystic-gold/10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-mystic-gold/5 rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-mystic-gold/20 shadow-2xl">
                        <img
                            src="/Astrology.webp"
                            alt="Vedic Astrology Chart"
                            className="w-full h-full object-cover grayscale contrast-125 opacity-80"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h4 className="font-heading text-mystic-gold text-sm tracking-[0.4em] mb-6 uppercase">Ancient Wisdom</h4>
                    <h2 className="font-heading text-4xl md:text-6xl text-antique-white mb-8 leading-tight">
                        Vedic <span className="italic font-serif text-mystic-gold">Astrology</span>
                        <br />(Jyotish)
                    </h2>
                    <div className="w-20 h-[1px] bg-mystic-gold mb-12"></div>
                    <div className="space-y-6 text-parchment-dark text-lg leading-relaxed font-body">
                        <p>
                            Vedic Astrology (Jyotish) is an ancient Indian science that serves as a powerful diagnostic tool for your life. By analyzing the precise position of the planets at the time of your birth, it creates a unique cosmic snapshot that reveals your past, present, and future.
                        </p>
                        <p className="text-antique-white italic">
                            "Whether you are facing a dilemma in your career, relationship, or personal growth, Vedic Astrology cuts through the confusion to provide accurate, specific answers."
                        </p>
                        <p>
                            It is the most reliable way to understand the planetary forces at play and find the clarity you need to move forward.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AstrologySection;
