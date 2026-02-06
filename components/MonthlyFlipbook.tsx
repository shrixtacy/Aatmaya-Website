import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const MonthlyFlipbook: React.FC = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [hasTriggered, setHasTriggered] = useState(false);
    const [isAutoOpening, setIsAutoOpening] = useState(false);

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;
        let scrollEndTimeout: NodeJS.Timeout;

        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            clearTimeout(scrollEndTimeout);

            scrollTimeout = setTimeout(() => {
                scrollEndTimeout = setTimeout(() => {
                    if (!hasTriggered && sectionRef.current) {
                        const rect = sectionRef.current.getBoundingClientRect();
                        const windowHeight = window.innerHeight;
                        const sectionCenter = rect.top + rect.height / 2;
                        const viewportCenter = windowHeight / 2;

                        // Trigger if roughly centered
                        if (Math.abs(sectionCenter - viewportCenter) < 200) {
                            setHasTriggered(true);

                            // Wait 1.5 seconds after scroll stops, then open
                            setTimeout(() => {
                                setIsAutoOpening(true);
                                if (iframeRef.current && iframeRef.current.contentWindow) {
                                    iframeRef.current.contentWindow.postMessage(
                                        { type: 'openFlipbook' },
                                        '*'
                                    );
                                }
                            }, 1500);
                        }
                    }
                }, 300);
            }, 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Fallback interval check
        const intervalCheck = setInterval(() => {
            if (!hasTriggered && sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const sectionCenter = rect.top + rect.height / 2;
                const viewportCenter = windowHeight / 2;

                if (Math.abs(sectionCenter - viewportCenter) < 200 && rect.top < windowHeight) {
                    setHasTriggered(true);
                    setTimeout(() => {
                        setIsAutoOpening(true);
                        if (iframeRef.current && iframeRef.current.contentWindow) {
                            iframeRef.current.contentWindow.postMessage({ type: 'openFlipbook' }, '*');
                        }
                    }, 1500);
                }
            }
        }, 1000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
            clearTimeout(scrollEndTimeout);
            clearInterval(intervalCheck);
        };
    }, [hasTriggered]);

    return (
        <section ref={sectionRef} className="relative min-h-screen py-24 px-6 bg-void flex flex-col items-center justify-center overflow-hidden">

            {/* Floating Background Blobs (Replaced CSS animations with Framer Motion) */}
            <motion.div
                animate={{
                    translateY: [-20, 20, -20],
                    translateX: [-10, 10, -10],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] left-[5%] w-[320px] h-[320px] rounded-full bg-mystic-gold/5 blur-[80px] pointer-events-none"
            />
            <motion.div
                animate={{
                    translateY: [20, -20, 20],
                    translateX: [10, -10, 10],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-void-light/30 blur-[100px] pointer-events-none"
            />

            <div className="relative w-full max-w-7xl mx-auto text-center z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="font-heading text-4xl md:text-5xl text-antique-white mb-4"
                >
                    Weekly Zodiac <span className="text-mystic-gold">Tarot</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="font-body text-xl text-parchment/60 mb-12 max-w-2xl mx-auto"
                >
                    Explore the mystical world of tarot with our interactive flipbook featuring weekly zodiac readings.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`relative mx-auto rounded-xl p-8 transition-all duration-700 ${isAutoOpening ? 'shadow-[0_0_80px_rgba(212,175,55,0.3)]' : 'shadow-2xl'}`}
                    style={{
                        backgroundImage: "url('https://www.transparenttextures.com/patterns/parchment.png')",
                        backgroundColor: '#f5f5dc', // Fallback beige color
                    }}
                >
                    {/* Highlighted Border */}
                    <div className={clsx(
                        "absolute inset-0 rounded-xl border-[3px] border-mystic-gold transition-all duration-1000",
                        isAutoOpening ? "border-opacity-100 shadow-[inset_0_0_30px_rgba(212,175,55,0.4)]" : "border-opacity-60"
                    )} />

                    {/* Inner Corner Decorations */}
                    <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-mystic-gold/60 rounded-tl-lg"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-mystic-gold/60 rounded-tr-lg"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-mystic-gold/60 rounded-bl-lg"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-mystic-gold/60 rounded-br-lg"></div>

                    <iframe
                        ref={iframeRef}
                        src="/flipbook/flipbook.html"
                        title="Weekly Zodiac Tarot Flipbook"
                        className="relative z-10 w-full max-w-[1200px] h-[600px] md:h-[700px] border-0 rounded-lg bg-transparent"
                        allowFullScreen
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default MonthlyFlipbook;

