import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { Sparkles } from 'lucide-react';

const AboutPage: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="bg-void min-h-screen text-antique-white selection:bg-mystic-gold selection:text-void">
            <Navbar />

            {/* Hero Section */}
            <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518066596162-811cff7f16fb?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center opacity-30 transform-gpu"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/40 to-void"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                    <motion.div
                        style={{ y: y1, opacity }}
                        className="space-y-6 will-change-transform"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex items-center justify-center gap-4 text-mystic-gold/80 mb-4"
                        >
                            <Sparkles className="w-5 h-5" />
                            <span className="font-heading text-sm tracking-[0.4em] uppercase">The Story</span>
                            <Sparkles className="w-5 h-5" />
                        </motion.div>

                        <motion.img
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            src="/logo.png"
                            alt="Aatmaya Brand Logo"
                            className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain mb-8 mix-blend-screen opacity-90"
                        />
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="font-heading text-6xl md:text-8xl text-antique-white leading-tight"
                        >
                            About <span className="font-brand font-medium tracking-normal text-mystic-gold pb-4">Aatmaya</span>
                        </motion.h1>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 pb-32 space-y-24 mt-12">
                
                {/* About Aatmaya Section */}
                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariants}
                    className="relative"
                >
                    <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-mystic-gold/50 via-mystic-gold/10 to-transparent hidden md:block" />
                    <h2 className="font-heading text-3xl md:text-4xl text-mystic-gold mb-8 tracking-wide">Where the Soul Finds Clarity</h2>
                    <div className="space-y-6 text-parchment/80 font-body text-lg leading-relaxed">
                        <p>
                            <span className="font-brand text-xl tracking-wide">Aatmaya</span> is a realm of spiritual awakening, where intuition meets divine wisdom. It is a space for those seeking deeper understanding, clarity, and a connection beyond the physical world. Guided by higher energies, <span className="font-brand text-xl tracking-wide">Aatmaya</span> helps unveil hidden truths, offering insight into life’s mysteries.
                        </p>
                        <p>
                            Whether you are searching for purpose, guidance, or a bridge to the unseen, <span className="font-brand text-xl tracking-wide">Aatmaya</span> opens the door to profound transformation. Here, every message holds meaning, and every journey leads to enlightenment. Step beyond the ordinary—embrace the infinite possibilities that await.
                        </p>
                    </div>
                </motion.section>

                {/* What Aatmaya Offers Section */}
                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariants}
                    className="relative"
                >
                    <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-mystic-gold/50 via-mystic-gold/10 to-transparent hidden md:block" />
                    <h2 className="font-heading text-3xl md:text-4xl text-mystic-gold mb-8 tracking-wide">What <span className="font-brand font-medium tracking-wide">Aatmaya</span> Offers…</h2>
                    <div className="space-y-6 text-parchment/80 font-body text-lg leading-relaxed">
                        <p>
                            <span className="font-brand text-xl tracking-wide">Aatmaya</span> is more than just a space for spiritual guidance—it is a realm of awakening, transformation, and deep connection. Rooted in the wisdom of the unseen, <span className="font-brand text-xl tracking-wide">Aatmaya</span> bridges the physical and spiritual worlds, helping seekers uncover hidden truths and find clarity. Whether searching for purpose, healing, or divine guidance, <span className="font-brand text-xl tracking-wide">Aatmaya</span> offers a path to profound understanding.
                        </p>
                        <p>
                            Through tarot, intuitive channeling, and spiritual mentoring, <span className="font-brand text-xl tracking-wide">Aatmaya</span> provides insight into life’s pressing questions—be it love, career, personal growth, or the unknown. Every reading is a sacred experience, infused with divine wisdom, offering not just answers but the guidance to shape your own destiny.
                        </p>
                        <p>
                            <span className="font-brand text-xl tracking-wide">Aatmaya</span> recognizes that the future is not set in stone—your free will and choices define your path. Tarot serves as a spiritual compass, unveiling the energies at play and allowing you to navigate life’s crossroads with awareness and confidence.
                        </p>
                        <p>
                            Here, spiritual energy flows freely, unlocking deeper truths and transformation. Every reading is conducted with care, authenticity, and a deep connection to the higher realms. Whether you seek clarity on a question or a holistic understanding of your life’s purpose, <span className="font-brand text-xl tracking-wide">Aatmaya</span> is here to illuminate the unseen and empower your spirit.
                        </p>
                        <p className="font-heading text-2xl text-antique-white mt-12 text-center italic py-8 border-t border-b border-mystic-gold/20 tracking-wider bg-mystic-gold/5">
                            Step beyond the ordinary—embrace the infinite possibilities that await.
                        </p>
                    </div>
                </motion.section>

                {/* Disclaimer Section */}
                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariants}
                    className="relative bg-void-light/30 p-8 md:p-12 border border-mystic-gold/20 rounded-sm"
                >
                    <h2 className="font-heading text-2xl md:text-3xl text-mystic-gold mb-6 tracking-wide">Disclaimer</h2>
                    <div className="space-y-4 text-parchment/70 font-body text-base leading-relaxed">
                        <p>
                            Tarot readings are a form of spiritual guidance and should not be considered absolute predictions of the future. The insights provided are intuitive interpretations meant to offer clarity, support, and perspective on your personal and professional life. However, tarot does not dictate your fate—your free will ultimately shapes your destiny. The choices you make, the actions you take, and the energy you put into your journey determine your path forward.
                        </p>
                        <p>
                            Tarot serves as a bridge between the conscious and subconscious, offering guidance from the spiritual realm to help you navigate life’s challenges and decisions. It is a tool for self-reflection and empowerment, designed to help you understand the energies surrounding you. While it can reveal potential outcomes and hidden influences, it is not a substitute for professional advice in legal, medical, or financial matters. If you are facing serious issues in these areas, please seek guidance from a qualified professional.
                        </p>
                        <p>
                            Each reading requires deep spiritual energy and connection, and every session is conducted with care and dedication. Please be patient and allow time for your assigned reading day, as spiritual work cannot be rushed. The insights you receive are based on the present energy and may shift depending on your choices and circumstances.
                        </p>
                        <p>
                            Tarot readings should be approached with an open heart and mind. The messages received are meant to provide clarity, encouragement, and deeper understanding, but it is up to you to apply them in a way that aligns with your highest good.
                        </p>
                    </div>
                </motion.section>

                {/* Terms and Conditions Section */}
                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariants}
                    className="relative"
                >
                    <h2 className="font-heading text-2xl md:text-3xl text-mystic-gold mb-8 tracking-wide">Terms <span className="text-antique-white">&</span> Conditions</h2>
                    <ul className="space-y-4 text-parchment/80 font-body text-base md:text-lg leading-relaxed list-disc pl-6 marker:text-mystic-gold">
                        <li>Full name and date of birth are required for readings. If your question involves another person, their full name and DOB must also be provided.</li>
                        <li>All tarot sessions will be conducted only after full payment is received.</li>
                        <li>Readings are non-refundable unless there is a cancellation or delay in delivery.</li>
                        <li>If you wish to receive your reading sooner than the estimated delivery time, additional service charges will apply.</li>
                        <li>Interconnected questions will be treated as separate questions and charged accordingly.</li>
                        <li>You must be truthful about your situation. Dishonesty or false information is not the reader’s responsibility.</li>
                        <li>Video call readings are available but will incur additional charges. Please request and confirm availability in advance.</li>
                        <li>Please do not request free readings. All services are energy-intensive and require proper compensation.</li>
                        <li>Prices are set based on the energy and effort involved in readings. They are non-negotiable, except during special offers or sales.</li>
                        <li>Please be respectful and ask for permission via text before calling.</li>
                        <li>Tarot does not predict death or provide medical, legal, or financial advice.</li>
                        <li>Any decision made or action taken as a result of your reading is your sole responsibility. You are not being forced or influenced to take any specific action. The reader assumes no legal liability for any consequences, damages, or losses resulting from the session.</li>
                    </ul>
                    <div className="mt-8 p-6 bg-mystic-gold/10 border-l-4 border-mystic-gold italic text-mystic-gold/90 font-body">
                        By booking a reading, you acknowledge and agree to these terms and conditions.
                    </div>
                </motion.section>

            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
