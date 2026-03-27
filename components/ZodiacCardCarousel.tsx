import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const zodiacSigns = [
  { name: 'Weekly Tarot', symbol: '✦', isImage: true, image: '/Weekly Zodiac Tarot 1.jpg' },
  { name: 'Aries', symbol: '♈' },
  { name: 'Taurus', symbol: '♉' },
  { name: 'Gemini', symbol: '♊' },
  { name: 'Cancer', symbol: '♋' },
  { name: 'Leo', symbol: '♌' },
  { name: 'Virgo', symbol: '♍' },
  { name: 'Libra', symbol: '♎' },
  { name: 'Scorpio', symbol: '♏' },
  { name: 'Sagittarius', symbol: '♐' },
  { name: 'Capricorn', symbol: '♑' },
  { name: 'Aquarius', symbol: '♒' },
  { name: 'Pisces', symbol: '♓' },
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

                    {/* Top decorative element */}
                    <div className="text-mystic-gold/30 text-xs mb-2">✦ ☽ ✦</div>

                    {/* Zodiac Symbol */}
                    <span className={`text-mystic-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] ${isMobile ? 'text-4xl mb-2' : 'text-6xl mb-3'}`}>
                      {card.symbol}
                    </span>

                    {/* Name */}
                    <span className={`font-heading text-antique-white tracking-[0.15em] uppercase ${isMobile ? 'text-[10px]' : 'text-xs'}`}>
                      {card.name}
                    </span>

                    {/* Bottom decorative element */}
                    <div className="text-mystic-gold/30 text-xs mt-2">✦ ☽ ✦</div>

                    {/* Subtle radial glow behind symbol */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none" />
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
