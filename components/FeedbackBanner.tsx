import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareHeart, ArrowUpRight } from 'lucide-react';

const FORM_URL = 'https://forms.gle/ZHEcgAoKMLARq1xr7';

const FeedbackBanner: React.FC = () => {
    return (
        <section className="relative overflow-hidden py-20">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2670&auto=format&fit=crop')",
                }}
            />
            {/* Dark overlay with gold tint */}
            <div className="absolute inset-0 bg-gradient-to-r from-void/95 via-void/80 to-void/95" />
            {/* Stardust texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
            {/* Subtle gold glow centre */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-mystic-gold/8 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                {/* Text block */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="flex items-start gap-5"
                >
                    <MessageSquareHeart className="w-10 h-10 text-mystic-gold/70 shrink-0 mt-1 hidden md:block" />
                    <div>
                        <p className="font-heading text-xs uppercase tracking-[0.35em] text-mystic-gold/70 mb-2">
                            Your Voice Matters
                        </p>
                        <h2 className="font-heading text-2xl md:text-3xl text-antique-white tracking-wide leading-snug">
                            Your feedback is our{' '}
                            <span className="text-mystic-gold italic">greatest guide</span>
                        </h2>
                        <p className="font-body text-parchment/60 text-sm mt-2 leading-relaxed max-w-md">
                            Every reading is a shared journey. Help us grow by sharing how your experience felt — it only takes a moment.
                        </p>
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 shrink-0 px-8 py-4 border border-mystic-gold/50 hover:border-mystic-gold bg-mystic-gold/10 hover:bg-mystic-gold/20 text-mystic-gold font-heading text-sm uppercase tracking-widest transition-all duration-300 group"
                >
                    Give Your Feedback
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
            </div>
        </section>
    );
};

export default FeedbackBanner;
