import React from 'react';
import { Sparkles } from 'lucide-react';

const ZodiacWheel: React.FC = () => {
  return (
    <section className="py-24 bg-void relative overflow-hidden text-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mystic-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-16">
            <h2 className="font-heading text-3xl md:text-5xl text-antique-white mb-4">Celestial Alignments</h2>
            <p className="font-body text-xl text-parchment-dark/70">The stars whisper their secrets. Listen closely.</p>
        </div>

        {/* Decorative Wheel - simplified purely to visual lines and dots to avoid emoji issues */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto mb-16 rounded-full border border-mystic-gold/20 flex items-center justify-center animate-[spin_80s_linear_infinite]">
            <div className="absolute inset-0 rounded-full border border-dashed border-mystic-gold/10 scale-90"></div>
            <div className="absolute inset-0 rounded-full border border-mystic-gold/5 scale-75"></div>
            
            {/* Center */}
            <div className="absolute inset-0 m-auto w-32 h-32 flex items-center justify-center">
                 <Sparkles className="text-mystic-gold w-12 h-12 opacity-80" />
            </div>

            {/* Decorative Nodes on the wheel */}
            {Array.from({ length: 12 }).map((_, i) => (
                <div 
                    key={i}
                    className="absolute w-2 h-2 bg-mystic-gold/60 rounded-full"
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 30}deg) translate(195px) rotate(-${i * 30}deg)`
                    }}
                />
            ))}
        </div>

        {/* Predictions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
                { title: 'Fire Signs', signs: 'Aries, Leo, Sagittarius', forecast: 'A surge of creative energy propels you forward. Embrace the heat, but beware of burnout.' },
                { title: 'Earth Signs', signs: 'Taurus, Virgo, Capricorn', forecast: 'Stability returns to your finances. Plant seeds now for a harvest in the coming months.' },
                { title: 'Air Signs', signs: 'Gemini, Libra, Aquarius', forecast: 'Communication flows effortlessly. It is time to speak your truth to those who matter.' },
                { title: 'Water Signs', signs: 'Cancer, Scorpio, Pisces', forecast: 'Emotions run deep. Trust your intuition—it is your strongest compass right now.' },
            ].map((item, i) => (
                <div key={i} className="bg-void-light/30 border border-mystic-gold/10 p-8 hover:border-mystic-gold/30 hover:bg-void-light/50 transition-all duration-500 group">
                    <h3 className="font-heading text-xl text-mystic-gold mb-2">{item.title}</h3>
                    <p className="text-xs font-sans uppercase tracking-wider text-parchment-dark/50 mb-4">{item.signs}</p>
                    <p className="font-body text-lg text-parchment leading-relaxed">{item.forecast}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ZodiacWheel;