import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import AstrologySection from './JournalAstrology';
import PalmistrySection from './JournalPalmistry';
import TarotSection from './JournalTarot';
import ZodiacSection from './JournalZodiac';
import MoonPhasesSection from './JournalMoonPhases';
import { Sparkles } from 'lucide-react';

const JournalPage: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-void min-h-screen text-antique-white selection:bg-mystic-gold selection:text-void">
            <Navbar />

            {/* Hero Section */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale transform-gpu"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/40 to-void"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                    <motion.div
                        style={{ y: y1, opacity }}
                        className="space-y-8 will-change-transform"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex items-center justify-center gap-4 text-mystic-gold/80 mb-6"
                        >
                            <Sparkles className="w-6 h-6" />
                            <span className="font-heading text-sm tracking-[0.4em] uppercase">The Cosmic Archives</span>
                            <Sparkles className="w-6 h-6" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="font-heading text-6xl md:text-8xl lg:text-9xl text-antique-white leading-tight"
                        >
                            The <span className="italic font-serif text-mystic-gold">Journal</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="font-body text-xl md:text-2xl text-parchment/80 max-w-2xl mx-auto italic leading-relaxed"
                        >
                            "A sanctuary of ancient wisdom, exploring the celestial forces that shape our existence and the hidden maps written in the stars."
                        </motion.p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-mystic-gold/50"
                >
                    <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-mystic-gold to-transparent"></div>
                </motion.div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 pb-32 space-y-32">
                <AstrologySection />
                <PalmistrySection />
                <TarotSection />
                <ZodiacSection />
                <MoonPhasesSection />
            </main>

            <Footer />
        </div>
    );
};

export default JournalPage;
