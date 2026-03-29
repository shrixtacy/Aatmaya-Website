import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { Sparkles, Calendar } from 'lucide-react';

interface SubService {
    title: string;
    description: string;
    detail: string;
}

interface ServiceCategory {
    id: string;
    name: string;
    subServices: SubService[];
}

const serviceCategories: ServiceCategory[] = [
    {
        id: 'vedic-astrology',
        name: 'Vedic Astrology',
        subServices: [
            {
                title: 'Prashna',
                description: 'A precise and immediate answer to a single burning question without the need for a birth chart.',
                detail: 'This method taps into the present moment\'s energy, offering quick clarity and direction when you feel uncertain or stuck.',
            },
            {
                title: 'Varshaphal',
                description: 'A detailed annual roadmap that highlights key themes, opportunities, and challenges for your upcoming year.',
                detail: 'It helps you plan ahead with confidence, align your decisions, and make the most of favorable periods.',
            },
            {
                title: 'Natal Reading',
                description: 'A comprehensive analysis of your birth chart to understand your true nature, strengths, and life purpose.',
                detail: 'This reading provides deep insight into your personality, patterns, and the path your soul is meant to follow.',
            },
            {
                title: 'Dhan-Varsha',
                description: 'Specialized guidance focused on wealth, financial growth, and career success indicated in your chart.',
                detail: 'It helps identify strong periods for financial gains and reveals how you can unlock your earning potential.',
            },
            {
                title: 'Muhurta',
                description: 'Calculation of the most auspicious timing for important events, decisions, or new beginnings.',
                detail: 'This ensures your actions are aligned with supportive cosmic energies, increasing the chances of success and positive outcomes.',
            },
            {
                title: 'Mahadasha',
                description: 'An in-depth analysis of your current planetary period and its influence on your life.',
                detail: 'This reading helps you understand ongoing challenges and opportunities, guiding you to navigate this phase with awareness.',
            },
            {
                title: 'Jivan Sanjivani',
                description: 'A powerful combination of remedies and guidance designed to support you through difficult phases.',
                detail: 'It offers practical and spiritual solutions to restore balance, strength, and clarity during challenging times.',
            },
            {
                title: 'Guna-Samyog',
                description: 'A detailed compatibility analysis that goes beyond basic matching to understand relationship dynamics.',
                detail: 'This reading reveals emotional alignment, long-term potential, and areas that may need understanding or effort.',
            },
            {
                title: 'Samagra Darshana',
                description: 'A fusion session combining astrology and tarot for both root-cause analysis and immediate guidance.',
                detail: 'It provides a holistic perspective—understanding the "why" behind your situation and offering clear next steps.',
            },
            {
                title: 'Rahu Ketu Rupa-Rekha',
                description: 'A deep dive into your karmic axis to uncover patterns linked to past influences and soul growth.',
                detail: 'This reading helps you understand attachments, lessons, and the direction your soul is evolving toward.',
            },
        ],
    },
    {
        id: 'tarot-reading',
        name: 'Tarot Reading',
        subServices: [
            {
                title: 'Yes / No Reading',
                description: 'A precise and instant answer to a single burning question when you need immediate clarity.',
                detail: 'This reading taps into the present energy surrounding your situation, offering quick guidance to help you move forward with confidence and certainty.',
            },
            {
                title: 'Monthly Forecast',
                description: 'A focused look at the energies, challenges, and opportunities coming your way in the month ahead.',
                detail: 'It helps you prepare mentally and emotionally, allowing you to align your actions with the flow of the upcoming phase.',
            },
            {
                title: 'Spiritual Alignment Reading',
                description: 'Discover where your soul is calling you and how to reconnect with your true inner path.',
                detail: 'This reading helps you realign with your higher self, release inner blocks, and move toward a more purposeful and fulfilling journey.',
            },
            {
                title: 'Career Reading',
                description: 'Strategic guidance on job changes, professional growth, and overcoming workplace challenges.',
                detail: 'Gain clarity on your career direction, hidden opportunities, and the steps needed to achieve long-term stability and success.',
            },
            {
                title: '3-Question Reading',
                description: 'Targeted answers to three specific areas of your life where you feel stuck or uncertain.',
                detail: 'This session provides focused clarity, helping you break confusion and take decisive action in key aspects of your life.',
            },
            {
                title: 'Half-Year Forecast',
                description: 'A strategic roadmap for the next six months to help you plan your major moves with confidence.',
                detail: 'It highlights upcoming shifts, challenges, and growth opportunities so you can stay ahead and make aligned decisions.',
            },
            {
                title: 'Love Life Prediction',
                description: 'Deep insight into your current relationships, future possibilities, and emotional blockages.',
                detail: 'This reading helps you understand patterns in love, heal emotional wounds, and attract meaningful and balanced connections.',
            },
            {
                title: 'Guidance Reading',
                description: 'A comprehensive reading to navigate your current situation and discover the best path forward.',
                detail: 'It provides clarity on complex situations, helping you understand what\'s happening beneath the surface and how to move wisely.',
            },
            {
                title: '5-Question Reading',
                description: 'An in-depth session covering multiple aspects of your life for a holistic understanding.',
                detail: 'It allows you to explore different areas at once, connecting the dots and giving you a broader perspective on your journey.',
            },
            {
                title: 'Annual Forecast',
                description: 'A complete yearly overview, breaking down the themes and energies of your next 12 months.',
                detail: 'This reading helps you prepare for major life phases, align your goals, and move through the year with awareness and intention.',
            },
        ],
    },
    {
        id: 'palmistry',
        name: 'Palmistry',
        subServices: [
            {
                title: 'Snapshot Reading',
                description: 'A quick yet insightful overview of your primary palm lines to understand your dominant personality traits.',
                detail: 'This reading highlights your current life focus, helping you gain clarity on where your energy is directed right now.',
            },
            {
                title: 'Career & Wealth Blueprint',
                description: 'A focused study of your Fate and Sun lines to decode your path toward success and financial stability.',
                detail: 'It provides clarity on your career direction, growth potential, and the opportunities that can lead to long-term abundance.',
            },
            {
                title: 'Standard Reading',
                description: 'A complete analysis of your major lines—Heart, Head, Life, and Fate—to understand your life\'s overall trajectory.',
                detail: 'This reading offers a balanced view of your personality, decisions, and potential, helping you make more aligned life choices.',
            },
            {
                title: 'Insight Fusion',
                description: 'A powerful combination of palmistry and tarot, offering both long-term insight and immediate clarity.',
                detail: 'This session blends destiny analysis with intuitive guidance, helping you understand your path while resolving a specific concern.',
            },
            {
                title: 'Love & Compatibility',
                description: 'A deep exploration of your Heart and Marriage lines to understand relationship patterns and emotional needs.',
                detail: 'This reading helps you gain clarity on love, compatibility, and the timing of meaningful connections in your life.',
            },
            {
                title: 'Deep Dive',
                description: 'An in-depth examination of every mount, minor line, and marking to uncover the complete map of your journey.',
                detail: 'This session reveals hidden strengths, challenges, and life patterns, offering a detailed understanding of your inner and outer world.',
            },
            {
                title: 'Health & Vitality Scan',
                description: 'A specialized analysis of key lines to understand your physical energy, resilience, and potential vulnerabilities.',
                detail: 'This reading helps you become more aware of your well-being, guiding you toward a more balanced and energized lifestyle.',
            },
        ],
    },
    {
        id: 'reiki',
        name: 'Reiki Energy Healing',
        subServices: [
            {
                title: 'Energetic Reset',
                description: 'A quick yet powerful cleanse designed to wash away daily stress, negativity, and stagnant energy.',
                detail: 'This session helps you feel lighter, recharged, and more aligned, allowing fresh, positive energy to flow freely into your life.',
            },
            {
                title: 'Creative Expression Healing',
                description: 'Unblock your throat and sacral chakras to release suppressed emotions and awaken your creative flow.',
                detail: 'This healing supports self-expression, helping you reconnect with your authentic voice, ideas, and inner inspiration.',
            },
            {
                title: 'Soul Level Spiritual Healing',
                description: 'A deep, transformative session focused on realigning your vibration with your true spiritual essence.',
                detail: 'It works on a soul level to restore inner balance, strengthen your connection to higher energies, and bring a sense of peace and clarity.',
            },
            {
                title: 'Self Love Healing',
                description: 'Gently dissolve the inner critic and reconnect with a deep sense of self-worth and acceptance.',
                detail: 'This session nurtures emotional healing, helping you build confidence, self-trust, and a more compassionate relationship with yourself.',
            },
            {
                title: 'Financial Healing',
                description: 'Clear limiting beliefs, scarcity patterns, and energetic blocks connected to money and abundance.',
                detail: 'This healing opens your energy field to receive prosperity, helping you shift your mindset and attract financial growth with ease.',
            },
            {
                title: 'Relationship Healing',
                description: 'Release emotional cords, heal past wounds, and restore balance within your relationships.',
                detail: 'This session helps you improve emotional connections, build healthier bonds, and create harmony in your personal life.',
            },
            {
                title: 'Career Growth Healing',
                description: 'Remove energetic blockages that may be holding you back from professional success and recognition.',
                detail: 'It helps align your energy with opportunities, confidence, and clarity needed to grow and thrive in your career path.',
            },
            {
                title: 'Inner Child Healing',
                description: 'Reconnect with your younger self and gently heal unresolved emotions from your early years.',
                detail: 'This session helps release deep-rooted patterns, allowing you to feel lighter, more secure, and emotionally free.',
            },
            {
                title: 'Parental Trauma Healing',
                description: 'Heal complex emotional wounds linked to family dynamics and inherited patterns.',
                detail: 'It supports you in releasing burdens from the past, helping you create healthier emotional boundaries and inner stability.',
            },
            {
                title: 'Sexual Energy Healing',
                description: 'Restore balance in your creative and vital energy while releasing stored trauma or emotional blockages.',
                detail: 'This session enhances confidence, emotional intimacy, and helps you reconnect with your natural flow of life force energy.',
            },
            {
                title: 'Karmic Healing',
                description: 'Break repetitive life patterns and release heavy emotional or energetic imprints from the past.',
                detail: 'This healing helps you move forward with awareness, freeing you from cycles that no longer serve your growth.',
            },
        ],
    },
];

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ServicesPage: React.FC = () => {
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
            <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2994&auto=format&fit=crop')] bg-cover bg-center opacity-30 transform-gpu"></div>
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
                            <span className="font-heading text-sm tracking-[0.4em] uppercase">Sacred Offerings</span>
                            <Sparkles className="w-5 h-5" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="font-heading text-6xl md:text-8xl text-antique-white leading-tight"
                        >
                            Our <span className="italic font-serif text-mystic-gold">Services</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="font-body text-xl md:text-2xl text-parchment/70 max-w-2xl mx-auto italic leading-relaxed"
                        >
                            "Explore the mystic arts we offer — each crafted to illuminate your path with clarity and purpose."
                        </motion.p>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-6 pb-32 space-y-32 mt-12">
                {serviceCategories.map((category, catIndex) => (
                    <motion.section
                        key={category.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUpVariants}
                    >
                        {/* Category Header */}
                        <div className="flex items-center gap-6 mb-16">
                            <div className="text-mystic-gold/10 font-heading text-7xl md:text-9xl font-bold leading-none select-none">
                                0{catIndex + 1}
                            </div>
                            <div>
                                <h2 className="font-heading text-4xl md:text-5xl text-antique-white tracking-wider">
                                    {category.name}
                                </h2>
                                <div className="w-20 h-[2px] bg-mystic-gold mt-4"></div>
                            </div>
                        </div>

                        {/* Sub-services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {category.subServices.map((sub, subIndex) => (
                                <motion.div
                                    key={subIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: subIndex * 0.08 }}
                                    className="group relative bg-void-light/30 border border-mystic-gold/10 hover:border-mystic-gold/30 p-8 transition-all duration-500 rounded-sm overflow-hidden"
                                >
                                    {/* Hover glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-mystic-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <h3 className="font-heading text-xl md:text-2xl text-mystic-gold mb-4 tracking-wider">
                                            {sub.title}
                                        </h3>
                                        <p className="font-body text-parchment/80 text-base leading-relaxed mb-3">
                                            {sub.description}
                                        </p>
                                        <p className="font-body text-parchment/60 text-sm leading-relaxed">
                                            {sub.detail}
                                        </p>
                                    </div>

                                    {/* Book Button */}
                                    <div className="relative z-10 mt-6">
                                        <a
                                            href={`https://wa.me/918117005888?text=${encodeURIComponent(`Hi Aatmaya, I'm interested in booking a ${sub.title} reading and would like more information.`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-mystic-gold/70 hover:text-mystic-gold text-xs uppercase tracking-widest transition-colors font-heading"
                                        >
                                            <Calendar className="w-3.5 h-3.5" />
                                            Book This Reading
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                ))}
            </main>

            <Footer />
        </div>
    );
};

export default ServicesPage;
