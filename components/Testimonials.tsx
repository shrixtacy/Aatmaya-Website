import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="relative z-20 py-24 bg-void/95 border-t border-mystic-gold/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <Star className="w-8 h-8 text-mystic-gold mx-auto mb-12 animate-pulse" />
            
            <div className="space-y-16">
                <blockquote className="relative p-8 border-l-2 border-mystic-gold/30 pl-8 md:pl-12 text-left">
                    <p className="font-body text-2xl md:text-3xl text-white italic leading-relaxed mb-6">
                        "I have never felt so seen. Elara's reading was not just accurate; it was transformative. She touched upon wounds I didn't know I had and offered a path to healing."
                    </p>
                    <footer className="font-heading text-sm uppercase tracking-widest text-mystic-gold">
                        — Sarah J., <span className="text-parchment-dark/50 normal-case tracking-normal">Scorpio Sun</span>
                    </footer>
                </blockquote>

                <blockquote className="relative p-8 border-r-2 border-mystic-gold/30 pr-8 md:pr-12 text-right">
                    <p className="font-body text-2xl md:text-3xl text-white italic leading-relaxed mb-6">
                        "The energy forecast gave me the clarity I needed to make a massive career pivot. Truly a gifted intuitive."
                    </p>
                    <footer className="font-heading text-sm uppercase tracking-widest text-mystic-gold">
                        — Michael R., <span className="text-parchment-dark/50 normal-case tracking-normal">Capricorn Rising</span>
                    </footer>
                </blockquote>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;