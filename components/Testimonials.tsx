import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
    return (
        <section className="relative py-32 bg-void overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mystic-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <Star className="w-6 h-6 text-mystic-gold mx-auto mb-6 animate-pulse" />
                    <h2 className="font-heading text-4xl md:text-5xl text-antique-white tracking-wide">
                        Echoes of <span className="text-mystic-gold">Transformation</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-void-light/30 backdrop-blur-md border border-mystic-gold/10 p-10 hover:border-mystic-gold/30 transition-all duration-500 group relative">
                        <Quote className="absolute top-8 left-8 w-12 h-12 text-mystic-gold/10 group-hover:text-mystic-gold/20 transition-colors" />
                        <div className="relative z-10">
                            <p className="font-body text-xl md:text-2xl text-parchment leading-relaxed mb-8 italic">
                                "I have never felt so seen. Elara's reading was not just accurate; it was transformative. She touched upon wounds I didn't know I had and offered a path to healing."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mystic-gold to-void border border-mystic-gold/30"></div>
                                <div>
                                    <h4 className="font-heading text-sm uppercase tracking-widest text-mystic-gold">Sarah Jenkins</h4>
                                    <p className="font-body text-xs text-parchment/50">Scorpio Sun</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-void-light/30 backdrop-blur-md border border-mystic-gold/10 p-10 hover:border-mystic-gold/30 transition-all duration-500 group relative md:translate-y-12">
                        <Quote className="absolute top-8 left-8 w-12 h-12 text-mystic-gold/10 group-hover:text-mystic-gold/20 transition-colors" />
                        <div className="relative z-10">
                            <p className="font-body text-xl md:text-2xl text-parchment leading-relaxed mb-8 italic">
                                "The energy forecast gave me the clarity I needed to make a massive career pivot. Truly a gifted intuitive. I come back every month for the flipbook."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mystic-gold to-void border border-mystic-gold/30"></div>
                                <div>
                                    <h4 className="font-heading text-sm uppercase tracking-widest text-mystic-gold">Michael Ross</h4>
                                    <p className="font-body text-xs text-parchment/50">Capricorn Rising</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
