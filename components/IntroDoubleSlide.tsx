import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const IntroDoubleSlide: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide(1);
    const prevSlide = () => setCurrentSlide(0);

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <section className="relative min-h-screen bg-void flex flex-col items-center justify-center overflow-hidden py-16 md:py-24 px-6 md:px-12">

            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 md:mb-16 text-center"
            >
                <h4 className="font-heading text-mystic-gold text-xs tracking-[0.4em] uppercase mb-4 opacity-70">Sanctuary</h4>
                <h2 className="font-heading text-3xl md:text-5xl text-antique-white tracking-widest uppercase">
                    About The <span className="text-mystic-gold italic font-serif lowercase">Space</span>
                </h2>
                <div className="w-24 h-[1px] bg-mystic-gold/30 mx-auto mt-6"></div>
            </motion.div>

            {/* Navigation Controls - Hidden on Mobile */}
            <div className="hidden md:flex absolute inset-x-12 top-1/2 -translate-y-1/2 justify-between z-30 pointer-events-none">
                <button
                    onClick={prevSlide}
                    className={`p-4 rounded-full border border-mystic-gold/20 text-mystic-gold hover:bg-mystic-gold/10 transition-all pointer-events-auto ${currentSlide === 0 ? 'opacity-0 cursor-default' : 'opacity-100'}`}
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                    onClick={nextSlide}
                    className={`p-4 rounded-full border border-mystic-gold/20 text-mystic-gold hover:bg-mystic-gold/10 transition-all pointer-events-auto ${currentSlide === 1 ? 'opacity-0 cursor-default' : 'opacity-100'}`}
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>

            {/* Slides Container */}
            <div className="w-full h-full max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: currentSlide === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: currentSlide === 0 ? 50 : -50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                nextSlide();
                            } else if (swipe > swipeConfidenceThreshold) {
                                prevSlide();
                            }
                        }}
                        className="w-full cursor-grab active:cursor-grabbing"
                    >
                        {currentSlide === 0 ? (
                            /* SLIDE 1: ABOUT SURAVI */
                            <div className="relative w-full bg-void-light/30 shadow-2xl overflow-hidden p-6 md:p-12 border border-mystic-gold/10 rounded-lg">
                                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                                    {/* Portrait Side - Photo first on mobile */}
                                    <div className="relative flex justify-center order-1 md:order-1">
                                        <div className="relative w-56 h-72 md:w-[450px] md:h-[550px] group">
                                            <div className="absolute inset-0 border border-mystic-gold/30 rotate-6 translate-x-2 translate-y-2 transition-transform duration-700 group-hover:rotate-3"></div>
                                            <div className="absolute inset-0 border border-parchment/10 -rotate-3 -translate-x-2 -translate-y-2 transition-transform duration-700 group-hover:-rotate-1"></div>
                                            <div className="absolute inset-0 overflow-hidden">
                                                <img
                                                    src="/suravi-mishra.webp"
                                                    alt="Suravi Mishra Portrait"
                                                    className="w-full h-full object-cover grayscale contrast-110 opacity-90"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text Side - Second on mobile */}
                                    <div className="order-2 md:order-2 text-center md:text-left">
                                        <h4 className="font-heading text-mystic-gold-dim text-sm tracking-[0.3em] mb-4 uppercase">The Reader</h4>
                                        <h2 className="font-heading text-3xl md:text-5xl text-antique-white mb-6 md:mb-8 leading-tight">
                                            Namaste, I am <br className="md:hidden" />
                                            <span className="text-mystic-gold">Suravi Mishra</span>
                                        </h2>
                                        <div className="w-16 h-[1px] bg-mystic-gold mx-auto md:mx-0 mb-6 md:mb-8"></div>
                                        <div className="space-y-4 text-parchment/70 font-body text-base md:text-lg leading-relaxed">
                                            <p>
                                                Welcome to a Space of Clarity and Cosmic Insight. If you are feeling uncertain, curious, or simply seeking a deeper connection with your life path, know that the universe has a message for you. Let’s uncover it together.
                                            </p>
                                            <p>
                                                Your birth chart is your blueprint, and your palms are your timeline. Through a unique blend of Vedic Astrology, Palmistry, and Tarot, we turn the unknown into actionable insight.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* SLIDE 2: THE CRAFT */
                            <div className="relative w-full bg-void-light/30 shadow-2xl overflow-hidden p-6 md:p-12 border border-mystic-gold/10 rounded-lg">
                                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                                    {/* Image Side - Photo first on mobile */}
                                    <div className="relative flex justify-center order-1 md:order-2">
                                        <div className="relative w-56 h-72 md:w-[450px] md:h-[550px] group">
                                            <div className="absolute inset-0 border border-mystic-gold/30 -rotate-6 translate-x-2 translate-y-2 transition-transform duration-700 group-hover:-rotate-3"></div>
                                            <div className="absolute inset-0 border border-parchment/10 rotate-3 -translate-x-2 -translate-y-2 transition-transform duration-700 group-hover:rotate-1"></div>
                                            <div className="absolute inset-0 overflow-hidden">
                                                <img
                                                    src="/AboutSpace2.jpeg"
                                                    alt="Aatmaya Mystic Arts"
                                                    className="w-full h-full object-cover grayscale contrast-125 sepia-[.2] opacity-90"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text Side - Second on mobile */}
                                    <div className="order-2 md:order-1 text-center md:text-right">
                                        <h4 className="font-heading text-mystic-gold-dim text-sm tracking-[0.3em] mb-4 uppercase">The Vision</h4>
                                        <h2 className="font-heading text-3xl md:text-5xl text-antique-white mb-6 md:mb-8 leading-tight">
                                            Empowering Your <br className="md:hidden" />
                                            <span className="text-mystic-gold">Journey</span>
                                        </h2>
                                        <div className="w-16 h-[1px] bg-mystic-gold mx-auto md:ml-auto md:mr-0 mb-6 md:mb-8"></div>
                                        <div className="space-y-4 text-parchment/70 font-body text-base md:text-lg leading-relaxed">
                                            <p>
                                                Aatmaya is a sanctuary for the mystic arts with a reputation for accuracy and empathy. Mastering the trifecta of Vedic Astrology, Palmistry, and Tarot, we look past the surface to reveal the core of your challenges.
                                            </p>
                                            <p>
                                                At Aatmaya, we provide honest, direct, and transformative guidance to help you take control of your destiny today.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Dots for Mobile */}
                <div className="flex justify-center gap-2 mt-8 md:hidden">
                    <button
                        onClick={() => setCurrentSlide(0)}
                        className={`w-2 h-2 rounded-full transition-all ${currentSlide === 0 ? 'bg-mystic-gold w-6' : 'bg-mystic-gold/20'}`}
                    />
                    <button
                        onClick={() => setCurrentSlide(1)}
                        className={`w-2 h-2 rounded-full transition-all ${currentSlide === 1 ? 'bg-mystic-gold w-6' : 'bg-mystic-gold/20'}`}
                    />
                </div>
            </div>
        </section>
    );
};
export default IntroDoubleSlide;
