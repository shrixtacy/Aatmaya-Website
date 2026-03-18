import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplets, Mountain, Wind } from 'lucide-react';

const ZodiacSection: React.FC = () => {
    const elements = [
        {
            name: 'Fire Signs',
            icon: <Flame className="w-8 h-8 text-orange-500" />,
            signs: 'Aries, Leo, Sagittarius',
            desc: 'High energy, passion, and intuitive action. The spark that initiates and inspires.',
            color: 'from-orange-500/10 to-transparent'
        },
        {
            name: 'Earth Signs',
            icon: <Mountain className="w-8 h-8 text-emerald-600" />,
            signs: 'Taurus, Virgo, Capricorn',
            desc: 'Grounding, practical, and dependable. The builders who manifest ideas into reality.',
            color: 'from-emerald-600/10 to-transparent'
        },
        {
            name: 'Water Signs',
            icon: <Droplets className="w-8 h-8 text-blue-500" />,
            signs: 'Cancer, Scorpio, Pisces',
            desc: 'Depth, emotion, and profound intuition. The healers who navigate the unseen.',
            color: 'from-blue-500/10 to-transparent'
        },
        {
            name: 'Air Signs',
            icon: <Wind className="w-8 h-8 text-cyan-400" />,
            signs: 'Gemini, Libra, Aquarius',
            desc: 'Intellect, communication, and perspective. The visionaries who connect the dots.',
            color: 'from-cyan-400/10 to-transparent'
        }
    ];

    return (
        <section id="zodiac" className="relative py-24 overflow-hidden border-t border-mystic-gold/10">
            <div className="mb-24 text-center max-w-4xl mx-auto">
                <h4 className="font-heading text-mystic-gold text-sm tracking-[0.4em] mb-6 uppercase">The Astral Blueprint</h4>
                <h2 className="font-heading text-5xl md:text-7xl text-antique-white mb-8">
                    The Twelve <span className="italic font-serif text-mystic-gold">Zodiac Signs</span>
                </h2>
                <div className="w-24 h-[1px] bg-mystic-gold mx-auto mb-10"></div>

                <div className="grid md:grid-cols-2 gap-12 text-left items-center bg-void-light/10 p-8 rounded-2xl border border-mystic-gold/10">
                    <div>
                        <h3 className="font-heading text-2xl text-antique-white mb-6">About Zodiac Signs</h3>
                        <p className="text-parchment-dark font-body text-lg leading-relaxed mb-6">
                            The Zodiac is a circle of twelve 30-degree divisions of celestial longitude that are centered upon the ecliptic, the path of the Sun. Your zodiac sign, or Sun sign, represents your core personality, your sense of self, and your basic preferences.
                        </p>
                        <p className="text-parchment-dark font-body text-lg leading-relaxed">
                            While your Sun sign paints the broad strokes of your character, the complete chart (including Moon and Rising signs) creates the full masterpiece of who you are.
                        </p>
                    </div>
                    <div className="relative aspect-square md:aspect-video overflow-hidden rounded-xl border border-mystic-gold/20">
                        <img
                            src="https://images.unsplash.com/photo-1515266591878-5a451906f404?q=80&w=2940&auto=format&fit=crop"
                            alt="Zodiac Constellations"
                            className="w-full h-full object-cover opacity-60 grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent"></div>
                    </div>
                </div>
            </div>

            <div className="text-center mb-12">
                <p className="font-heading text-mystic-gold text-sm tracking-[0.3em] uppercase opacity-70">The Four Essential Elements</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {elements.map((el, i) => (
                    <motion.div
                        key={el.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className={`relative p-10 bg-void-light/20 border border-mystic-gold/10 rounded-2xl overflow-hidden hover:border-mystic-gold/40 transition-all duration-700 group`}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-b ${el.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-8 p-4 bg-void/50 rounded-xl inline-block w-fit border border-mystic-gold/5 group-hover:scale-110 transition-transform duration-700">
                                {el.icon}
                            </div>
                            <h3 className="font-heading text-2xl text-antique-white mb-2">{el.name}</h3>
                            <p className="font-heading text-xs text-mystic-gold tracking-[0.2em] uppercase mb-6 opacity-60">{el.signs}</p>
                            <p className="font-body text-parchment-dark text-lg leading-relaxed mt-auto">
                                {el.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ZodiacSection;
