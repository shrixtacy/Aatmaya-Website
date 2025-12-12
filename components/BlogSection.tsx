import React from 'react';
import { Circle } from 'lucide-react';

const BlogSection: React.FC = () => {
  return (
    <section className="relative z-20 py-24 bg-void-light/90 text-parchment px-6 border-t border-mystic-gold/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-antique-white">Moon Cycle Journal</h2>
            <div className="flex justify-center items-center gap-3 opacity-60">
                <div className="h-[1px] w-12 bg-mystic-gold"></div>
                <div className="w-3 h-3 rounded-full border border-mystic-gold bg-void"></div>
                <div className="w-3 h-3 rounded-full bg-mystic-gold"></div>
                <div className="w-3 h-3 rounded-full border border-mystic-gold bg-void"></div>
                <div className="h-[1px] w-12 bg-mystic-gold"></div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            <article className="group cursor-pointer">
                <div className="overflow-hidden mb-6 border border-mystic-gold/10 relative">
                     <div className="absolute inset-0 bg-void/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1528818955841-a7f1d0c450ea?q=80&w=1000&auto=format&fit=crop" 
                        alt="Full Moon" 
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105 grayscale sepia-[.3]"
                    />
                </div>
                <div className="flex flex-col items-start">
                    <span className="font-heading text-xs tracking-[0.2em] uppercase text-mystic-gold-dim mb-2 border-b border-mystic-gold-dim pb-1">Moon Phase</span>
                    <h3 className="font-heading text-3xl text-antique-white mb-3 group-hover:text-mystic-gold transition-colors">The Last Super Full Moon</h3>
                    <p className="font-body text-xl text-white/90 mb-4 leading-relaxed line-clamp-3">
                        As the Super Full Moon rises in Taurus, we are called to ground ourselves in the physical realm while expanding our spiritual horizons. This is a time of potent manifestation...
                    </p>
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-mystic-gold/60 group-hover:text-mystic-gold transition-colors">Read Article</span>
                </div>
            </article>

            <article className="group cursor-pointer">
                <div className="overflow-hidden mb-6 border border-mystic-gold/10 relative">
                     <div className="absolute inset-0 bg-void/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1600609842388-3e449195b058?q=80&w=1000&auto=format&fit=crop" 
                        alt="Crystals" 
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105 grayscale sepia-[.3]"
                    />
                </div>
                <div className="flex flex-col items-start">
                    <span className="font-heading text-xs tracking-[0.2em] uppercase text-mystic-gold-dim mb-2 border-b border-mystic-gold-dim pb-1">Rituals</span>
                    <h3 className="font-heading text-3xl text-antique-white mb-3 group-hover:text-mystic-gold transition-colors">Cleansing Your Tarot Deck</h3>
                    <p className="font-body text-xl text-white/90 mb-4 leading-relaxed line-clamp-3">
                        Energy lingers. Just as you wash your hands, you must cleanse your spiritual tools. Whether through smoke, moonlight, or sound, learn the ancient methods of purification...
                    </p>
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-mystic-gold/60 group-hover:text-mystic-gold transition-colors">Read Article</span>
                </div>
            </article>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;