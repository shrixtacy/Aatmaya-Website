import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const zodiacSigns = [
  { name: 'Weekly Tarot', symbol: '✦', isImage: true, image: '/Weekly Zodiac Tarot 1.jpg' },
  { name: 'Aries', symbol: '♈', cardName: 'The Chariot', description: 'Use willpower and discipline to commit to one clear plan.' },
  { name: 'Taurus', symbol: '♉', cardName: 'Justice', description: 'Focus on fairness, accountability, and restoring balance in your life.' },
  { name: 'Gemini', symbol: '♊', cardName: '7 of Pentacles', description: 'Practice patience; your steady work is beginning to show long-term growth.' },
  { name: 'Cancer', symbol: '♋', cardName: '4 of Cups', description: 'Avoid emotional fatigue by reconnecting with gratitude and new opportunities.' },
  { name: 'Leo', symbol: '♌', cardName: '3 of Swords', description: 'A healing period; focus on emotional honesty and releasing what no longer serves you.' },
  { name: 'Virgo', symbol: '♍', cardName: 'Knight of Pentacles', description: 'Move steadily toward success; consistency is more important than speed right now.' },
  { name: 'Libra', symbol: '♎', cardName: 'The Sun', description: 'Step into brightness and joy; your natural charm attracts good fortune.' },
  { name: 'Scorpio', symbol: '♏', cardName: 'King of Wands', description: 'Step into your power and lead with charisma and focused ambition.' },
  { name: 'Sagittarius', symbol: '♐', cardName: 'The Chariot', description: 'Your momentum is back; focus on decisive movement and travel.' },
  { name: 'Capricorn', symbol: '♑', cardName: 'Page of Pentacles', description: 'Ground yourself in practical steps and focus on long-term stability.' },
  { name: 'Aquarius', symbol: '♒', cardName: 'The Star', description: 'Embrace renewed hope and inspiration; your innovative ideas will guide you forward.' },
  { name: 'Pisces', symbol: '♓', cardName: 'The Moon', description: 'Trust your deep intuition and navigate through illusions to find clarity.' },
];

const TOTAL = zodiacSigns.length;
const AUTO_INTERVAL = 3000;

const ZodiacCardCarousel: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const dragStartX = useRef(0);
  const autoRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const startAuto = () => {
    stopAuto();
    autoRef.current = setInterval(() => {
      setActive((p) => (p + 1) % TOTAL);
    }, AUTO_INTERVAL);
  };

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const goTo = (i: number) => {
    stopAuto();
    setActive(i);
    setTimeout(startAuto, 4000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    stopAuto();
    dragStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - dragStartX.current;
    if (Math.abs(diff) > 40) {
      setActive((p) => diff < 0 ? (p + 1) % TOTAL : (p - 1 + TOTAL) % TOTAL);
    }
    setTimeout(startAuto, 4000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    stopAuto();
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 40) {
      setActive((p) => diff < 0 ? (p + 1) % TOTAL : (p - 1 + TOTAL) % TOTAL);
    }
    setTimeout(startAuto, 4000);
  };

  // Card width/height
  const cw = isMobile ? 140 : 260;
  const ch = isMobile ? 210 : 400;

  const getStyle = (index: number) => {
    let diff = index - active;
    if (diff > TOTAL / 2) diff -= TOTAL;
    if (diff < -TOTAL / 2) diff += TOTAL;
    const abs = Math.abs(diff);

    // Only render 5 cards: -2, -1, 0, 1, 2
    if (abs > 2) {
      return { opacity: 0, pointerEvents: 'none' as const, zIndex: 0, transform: 'scale(0)' };
    }

    const spreadX = isMobile ? 80 : 220;
    const tx = diff * spreadX;
    const ty = abs * abs * (isMobile ? 12 : 20); // arc
    const rot = diff * (isMobile ? 10 : 7);
    const scale = 1 - abs * 0.1;
    const opacity = 1 - abs * 0.15;

    return {
      transform: `translateX(${tx}px) translateY(${ty}px) rotate(${rot}deg) scale(${scale})`,
      zIndex: 10 - abs,
      opacity,
      pointerEvents: 'auto' as const,
    };
  };

  return (
    <section className="relative py-16 md:py-24 bg-void overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mystic-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl text-antique-white mb-3"
        >
          Weekly Zodiac <span className="text-mystic-gold">Tarot</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="font-body text-lg md:text-xl text-parchment/60 mb-14 max-w-2xl mx-auto"
        >
          Explore the mystical world of tarot with weekly zodiac readings for every sign.
        </motion.p>

        {/* Carousel */}
        <div
          className="relative w-full flex items-end justify-center select-none cursor-grab active:cursor-grabbing"
          style={{ height: ch + 80 }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {zodiacSigns.map((card, index) => {
            const style = getStyle(index);
            let diff = index - active;
            if (diff > TOTAL / 2) diff -= TOTAL;
            if (diff < -TOTAL / 2) diff += TOTAL;

            return (
              <div
                key={card.name}
                className="absolute bottom-0 left-1/2 transition-all duration-500 ease-out"
                style={{
                  ...style,
                  marginLeft: -(cw / 2),
                  width: cw,
                  height: ch,
                  transformOrigin: 'bottom center',
                }}
                onClick={() => { if (diff !== 0) goTo(index); }}
              >
                {card.isImage ? (
                  /* First card: actual image */
                  <div className={`w-full h-full rounded-xl overflow-hidden border-2 shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all duration-300 ${diff === 0 ? 'border-mystic-gold shadow-[0_20px_80px_rgba(212,175,55,0.25)]' : 'border-mystic-gold/20'}`}>
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover pointer-events-none"
                      draggable={false}
                    />
                  </div>
                ) : (
                  /* Zodiac sign cards: dark styled cards */
                  <div className={`w-full h-full rounded-xl overflow-hidden border-2 shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all duration-300 flex flex-col items-center justify-center relative ${diff === 0 ? 'border-mystic-gold shadow-[0_20px_80px_rgba(212,175,55,0.25)]' : 'border-mystic-gold/20'}`}
                    style={{ background: 'linear-gradient(160deg, #1a1510 0%, #0d0b08 50%, #1a1510 100%)' }}
                  >
                    {/* Decorative corners */}
                    <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-mystic-gold/40 rounded-tl-sm" />
                    <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-mystic-gold/40 rounded-tr-sm" />
                    <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-mystic-gold/40 rounded-bl-sm" />
                    <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-mystic-gold/40 rounded-br-sm" />

                    {/* Dotted border inset */}
                    <div className="absolute inset-3 border border-dashed border-mystic-gold/15 rounded-lg pointer-events-none" />

                    {/* Subtle radial glow behind symbol background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none" />

                    {/* Inner content overlay */}
                    <div className="absolute inset-0 flex flex-col items-center px-4 py-5 z-10 w-full">
                      {/* Name & Symbol */}
                      <div className="text-center w-full mb-3">
                        <span className={`font-heading text-antique-white tracking-[0.1em] uppercase ${isMobile ? 'text-[10px]' : 'text-[11px]'} flex items-center justify-center gap-1.5`}>
                          <span className="text-mystic-gold/60">✦</span>
                          {(card as any).name} {(card as any).symbol}
                          <span className="text-mystic-gold/60">✦</span>
                        </span>
                      </div>

                      {/* Tarot "Photo" Area */}
                      <div className={`w-full ${isMobile ? 'h-20' : 'h-36'} border border-mystic-gold/30 bg-black/60 rounded-md flex flex-col items-center justify-center relative overflow-hidden mb-3 md:mb-4 shadow-inner`}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none" />
                        <span className={`text-mystic-gold font-heading text-center uppercase tracking-widest ${isMobile ? 'text-xs px-2' : 'text-lg px-4'} drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] z-10 leading-snug`}>
                          {(card as any).cardName || 'Tarot Card'}
                        </span>
                        {/* Little decorative star inside the photo box */}
                        <div className="absolute bottom-2 text-mystic-gold/20 text-[10px]">✧</div>
                      </div>

                      {/* Text Description */}
                      <div className="flex-1 flex w-full items-start justify-center">
                        {(card as any).description ? (
                          <p className={`font-body text-parchment/90 text-center ${isMobile ? 'text-[9px] leading-[1.3]' : 'text-[13px] leading-relaxed'} line-clamp-4`}>
                            {(card as any).description}
                          </p>
                        ) : (
                          <p className={`font-body text-mystic-gold/50 text-center ${isMobile ? 'text-[9px]' : 'text-xs'} italic`}>
                            Awaiting reading...
                          </p>
                        )}
                      </div>
                      
                      {/* Bottom decor */}
                      <div className="text-mystic-gold/30 text-[10px] md:text-xs mt-auto">☽ ✧ ☾</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active card name display */}
        <div className="mt-6 h-8">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-mystic-gold text-lg md:text-xl tracking-[0.2em] uppercase"
          >
            {zodiacSigns[active].name}
          </motion.p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {zodiacSigns.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? 'w-5 h-1.5 bg-mystic-gold' : 'w-1.5 h-1.5 bg-mystic-gold/20 hover:bg-mystic-gold/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZodiacCardCarousel;
