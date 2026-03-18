import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Star } from 'lucide-react';

const MoonPhasesSection: React.FC = () => {
    const phases = [
        { name: 'New Moon', action: 'New Beginnings', desc: 'A time to set intentions and plant seeds for the coming month.' },
        { name: 'First Quarter', action: 'Take Action', desc: 'Challenges arise, requiring strength and commitment to your goals.' },
        { name: 'Full Moon', action: 'Harvest & Release', desc: 'Peak energy. A time of realization, celebration, and letting go.' },
        { name: 'Third Quarter', action: 'Introspection', desc: 'Closing cycles. Reflecting on lessons and preparing for the new moon.' }
    ];

    return (
        <section id="moon" className="relative py-24 overflow-hidden border-t border-mystic-gold/10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="flex-1 relative"
                >
                    {/* Animated Moon Illustration */}
                    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                        <div className="absolute inset-0 bg-mystic-gold/10 blur-3xl rounded-full"></div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="relative w-full h-full border border-mystic-gold/20 rounded-full flex items-center justify-center p-12"
                        >
                            <div className="w-full h-full rounded-full border border-mystic-gold/10 flex items-center justify-center">
                                <Moon className="w-32 h-32 text-mystic-gold/80" />
                            </div>
                            {/* Orbital dots */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-mystic-gold rounded-full shadow-[0_0_15px_#D4AF37]"></div>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="flex-1 space-y-12">
                    <div>
                        <h4 className="font-heading text-mystic-gold text-sm tracking-[0.4em] mb-4 uppercase">The Lunar Cycle</h4>
                        <h2 className="font-heading text-4xl md:text-6xl text-antique-white mb-6">
                            Moon <span className="italic font-serif text-mystic-gold">Phases</span>
                        </h2>
                        <p className="text-parchment-dark text-lg italic mb-10">"The moon dictates the tides of our collective subconscious and emotional rhythm."</p>
                    </div>

                    <div className="space-y-8">
                        {phases.map((phase, i) => (
                            <motion.div
                                key={phase.name}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="flex gap-6 group"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full border border-mystic-gold/30 flex items-center justify-center group-hover:bg-mystic-gold/10 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-mystic-gold"></div>
                                    </div>
                                    {i < phases.length - 1 && <div className="w-[1px] h-full bg-mystic-gold/10 my-2"></div>}
                                </div>
                                <div>
                                    <h5 className="font-heading text-xl text-antique-white mb-2 flex items-center gap-3">
                                        {phase.name}
                                        <span className="text-[10px] tracking-[0.2em] font-heading text-mystic-gold uppercase opacity-60">/ {phase.action}</span>
                                    </h5>
                                    <p className="font-body text-parchment/60 leading-relaxed italic">{phase.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoonPhasesSection;
