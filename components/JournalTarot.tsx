import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Info } from 'lucide-react';
import TarotGallery from './TarotGallery';

const TarotSection: React.FC = () => {
    const [selectedElement, setSelectedElement] = useState('Overview');

    const elements = [
        { name: 'Overview', desc: 'A bridge between your conscious mind and the universal energy surrounding you. Tarot focuses on guidance and hidden influences.' },
        { name: 'Fire (Wands)', desc: 'Represents passion, energy, and will. The spark of creation and the drive to move forward.' },
        { name: 'Water (Cups)', desc: 'Governs emotions, intuition, and relationships. The deep flow of the subconscious soul.' },
        { name: 'Air (Swords)', desc: 'Dictates logic, communication, and conflict. The sharp clarity of the rational mind.' },
        { name: 'Earth (Pentacles)', desc: 'Material world, finances, and manifestation. The practical grounding of our existence.' }
    ];

    return (
        <section id="tarot" className="relative py-24 overflow-hidden border-t border-mystic-gold/10">
            <div className="mb-20 text-center max-w-4xl mx-auto">
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-heading text-mystic-gold text-sm tracking-[0.4em] mb-6 uppercase"
                >
                    The Arcana Bridge
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-heading text-5xl md:text-7xl text-antique-white mb-8"
                >
                    The World of <span className="italic font-serif text-mystic-gold">Tarot</span>
                </motion.h2>
                <div className="w-32 h-[1px] bg-mystic-gold mx-auto mb-10"></div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-parchment-dark font-body text-xl italic leading-relaxed"
                >
                    "Sometimes, the answers we seek are already whispering to us—we just need help hearing them. Tarot is a bridge between your conscious mind and the universal energy surrounding you. Unlike other methods that focus purely on timelines, Tarot focuses on guidance. It reveals the hidden influences in your current situation and delivers the specific message the universe wants you to know right now."
                </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 items-start">
                {/* Element Navigator */}
                <div className="lg:sticky lg:top-32 space-y-4">
                    <h3 className="font-heading text-xs tracking-[0.3em] uppercase opacity-50 mb-8">Guided Elements</h3>
                    {elements.map((el) => (
                        <button
                            key={el.name}
                            onClick={() => setSelectedElement(el.name)}
                            className={`w-full text-left p-6 transition-all duration-500 border rounded-lg ${selectedElement === el.name
                                ? 'bg-mystic-gold text-void border-mystic-gold shadow-[0_0_30px_rgba(212,175,55,0.3)]'
                                : 'bg-void-light/30 border-mystic-gold/10 text-parchment hover:border-mystic-gold/30'
                                }`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="font-heading tracking-[0.2em] uppercase text-sm">{el.name}</span>
                                {selectedElement === el.name && <Sparkles className="w-4 h-4" />}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Content Explorer */}
                <div className="lg:col-span-2 space-y-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedElement}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-void-light/20 p-8 md:p-12 border border-mystic-gold/10 rounded-2xl min-h-[400px]"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full border border-mystic-gold/30 flex items-center justify-center">
                                    <Info className="w-6 h-6 text-mystic-gold" />
                                </div>
                                <h3 className="font-heading text-3xl text-antique-white">{selectedElement}</h3>
                            </div>
                            <p className="font-body text-xl text-parchment/80 leading-relaxed mb-12">
                                {elements.find(e => e.name === selectedElement)?.desc}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="aspect-[2/3] group relative overflow-hidden rounded-xl border border-mystic-gold/20">
                                    <img
                                        src="/Tarot.webp"
                                        alt="Tarot Scene"
                                        className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-void to-transparent">
                                        <span className="font-heading text-xs tracking-widest text-mystic-gold uppercase">Material</span>
                                        <h5 className="font-heading text-lg text-antique-white font-bold">Linen Finish</h5>
                                    </div>
                                </div>
                                <div className="bg-void-light/40 p-8 flex flex-col justify-center border border-mystic-gold/5 rounded-xl">
                                    <h6 className="font-heading text-mystic-gold uppercase tracking-[.2em] text-xs mb-4 text-center md:text-left">The Purpose</h6>
                                    <p className="font-body text-parchment-dark leading-relaxed italic text-center md:text-left">
                                        "Tarot reveals the hidden influences in your current situation and delivers the specific message the universe wants you to know right now."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <TarotGallery />
        </section>
    );
};

export default TarotSection;
