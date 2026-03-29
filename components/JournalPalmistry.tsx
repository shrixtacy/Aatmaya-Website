import React from 'react';
import { motion } from 'framer-motion';

const PalmistrySection: React.FC = () => {
    return (
        <section id="palmistry" className="relative py-24 overflow-hidden border-t border-mystic-gold/10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="order-1 md:order-2 relative group"
                >
                    <div className="absolute inset-0 bg-mystic-gold/5 rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-mystic-gold/20 shadow-2xl">
                        <img
                            src="/palmistry.jpeg"
                            alt="Ancient Hand Reading"
                            className="w-full h-full object-cover opacity-80"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="order-2 md:order-1 lg:pr-12"
                >
                    <h4 className="font-heading text-mystic-gold text-sm tracking-[0.4em] mb-6 uppercase">Mirror of Soul</h4>
                    <h2 className="font-heading text-4xl md:text-6xl text-antique-white mb-8 leading-tight text-right md:text-left">
                        Palmistry <br />
                        <span className="italic font-serif text-mystic-gold">Hast Samudrika</span>
                    </h2>
                    <div className="w-20 h-[1px] bg-mystic-gold mb-12 ml-auto md:ml-0"></div>
                    <div className="space-y-6 text-parchment-dark text-lg leading-relaxed font-body text-right md:text-left">
                        <p>
                            Your hands are a direct reflection of your mind and soul. Palmistry (Hast Samudrika Shastra) goes far beyond predicting the future; it is a profound tool for self-discovery.
                        </p>
                        <p className="text-antique-white italic">
                            "By analyzing the lines, shapes, and mounts of your hand, we uncover your innate personality, emotional tendencies, and hidden talents."
                        </p>
                        <p>
                            This insight helps you understand who you truly are at your core, revealing your strengths and weaknesses so you can build a life that aligns perfectly with your natural nature.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PalmistrySection;
