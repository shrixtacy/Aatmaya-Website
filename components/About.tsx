import React from 'react';

const About: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 flex justify-center bg-void text-parchment">
      {/* Card Container */}
      <div className="relative max-w-5xl w-full bg-void-light/50 backdrop-blur-sm rounded-sm shadow-2xl overflow-hidden p-8 md:p-16 border border-mystic-gold/20">
        
        {/* Decorative Corners */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-mystic-gold opacity-50"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-mystic-gold opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-mystic-gold opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-mystic-gold opacity-50"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Portrait Side */}
          <div className="relative flex justify-center order-2 md:order-1">
             <div className="relative w-64 h-80 md:w-80 md:h-96 group">
                <div className="absolute inset-0 border border-mystic-gold/30 rotate-6 translate-x-2 translate-y-2 transition-transform duration-700 group-hover:rotate-3"></div>
                <div className="absolute inset-0 border border-parchment/10 -rotate-3 -translate-x-2 -translate-y-2 transition-transform duration-700 group-hover:-rotate-1"></div>
                <div className="absolute inset-0 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1000&auto=format&fit=crop" 
                        alt="Tarot Reader Portrait" 
                        className="w-full h-full object-cover sepia-[.2] opacity-90"
                    />
                </div>
             </div>
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h4 className="font-heading text-mystic-gold-dim text-lg tracking-[0.3em] mb-4 uppercase">The Reader</h4>
            <h2 className="font-heading text-4xl md:text-5xl text-antique-white mb-8">
              Guided by the Moon, Grounded in Earth
            </h2>
            <div className="w-16 h-[1px] bg-mystic-gold mx-auto md:mx-0 mb-8"></div>
            <p className="font-body text-xl text-parchment-dark leading-relaxed mb-6">
              I am Elara, a weaver of fate and a translator of the cosmic language. 
              With over a decade of practice in the mystic arts, I help souls navigate the fog of uncertainty.
            </p>
            <p className="font-body text-xl text-parchment-dark leading-relaxed">
              My readings are not just predictions—they are a sacred dialogue between your spirit and the universe. 
              Together, we will uncover the hidden paths illuminated by the moonlight.
            </p>
            
            {/* Moon Phase Decoration (CSS Shapes) */}
            <div className="mt-10 flex justify-center md:justify-start gap-3 opacity-60">
                <div className="w-4 h-4 rounded-full border border-mystic-gold bg-void"></div>
                <div className="w-4 h-4 rounded-full border border-mystic-gold bg-transparent border-r-transparent rotate-45"></div>
                <div className="w-4 h-4 rounded-full bg-mystic-gold/50"></div>
                <div className="w-4 h-4 rounded-full bg-mystic-gold"></div>
                <div className="w-4 h-4 rounded-full bg-mystic-gold/50"></div>
                <div className="w-4 h-4 rounded-full border border-mystic-gold bg-transparent border-l-transparent -rotate-45"></div>
                <div className="w-4 h-4 rounded-full border border-mystic-gold bg-void"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;