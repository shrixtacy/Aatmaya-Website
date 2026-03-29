import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-6 text-center bg-void">

      {/* Background with Slow Zoom Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-[url('/AATMAYA%20Background.webp')] bg-cover bg-center opacity-50"
      ></motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-void/30 via-transparent to-void"></div>
      <div className="absolute inset-0 z-[1] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-5xl flex flex-col items-center gap-6 md:gap-10 pb-24 md:pb-0 pt-16 md:pt-0">

        <h1 className="font-heading text-3xl md:text-6xl lg:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-antique-white to-parchment-dark drop-shadow-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="block"
          >
            Welcome to a Space of
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="block text-mystic-gold italic font-serif mt-2"
          >
            Clarity and Cosmic Insight
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-body text-base md:text-xl text-parchment/80 tracking-wide max-w-3xl leading-relaxed mx-auto px-2 md:px-0"
        >
          If you are feeling uncertain, curious, or simply seeking a deeper connection with your life path, know that the universe has a message for you. Let’s uncover it together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 mt-2 md:mt-8 mb-4 md:mb-0"
        >
          <a href="https://wa.me/918117005888?text=Hi%20Aatmaya%2C%20I%20would%20like%20to%20ask%20about%20your%20services%20and%20get%20more%20information." target="_blank" rel="noopener noreferrer" className="group relative px-6 md:px-8 py-3 md:py-4 bg-mystic-gold/10 border border-mystic-gold/40 text-mystic-gold font-heading tracking-[0.2em] uppercase text-xs md:text-sm overflow-hidden hover:text-void transition-colors duration-500 outline-none inline-block">
            <div className="absolute inset-0 w-full h-full bg-mystic-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Star className="w-4 h-4" /> Book a Reading
            </span>
          </a>

          <Link to="/services" className="group px-6 md:px-8 py-3 md:py-4 text-parchment font-heading tracking-[0.2em] uppercase text-xs md:text-sm hover:text-mystic-gold transition-colors duration-300 border-b border-transparent hover:border-mystic-gold/50">
            Explore Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-mystic-gold/50 z-20 animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>

      {/* Scattered Tarot Cards Animation */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        {/* Left Side Cards */}
        <div className="absolute bottom-0 left-0 w-full h-full">
          {[
            { src: '/card-1.webp', rotate: 10, x: '-15%', y: '35%', delay: 2.5 },
            { src: '/card-2.webp', rotate: 20, x: '5%', y: '25%', delay: 2.8 },
            { src: '/card-3.webp', rotate: 30, x: '25%', y: '30%', delay: 3.1 },
          ].map((card, i) => (
            <motion.img
              key={`left-card-${i}`}
              src={card.src}
              initial={{
                opacity: 0,
                y: -100,
                x: card.x,
                scale: 1.3,
                rotateX: 45,
                rotate: card.rotate - 15
              }}
              animate={{
                opacity: 1,
                y: card.y,
                scale: 1,
                rotateX: 0,
                rotate: card.rotate
              }}
              transition={
                isMobile
                  ? {
                      duration: 1.2,
                      delay: card.delay,
                      ease: [0.25, 1, 0.5, 1] // Custom smooth cinematic easeOut
                    }
                  : {
                      duration: 0.8,
                      delay: card.delay,
                      type: "spring",
                      stiffness: 80,
                      damping: 12
                    }
              }
              className="absolute bottom-0 left-0 w-36 md:w-64 lg:w-80 h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-mystic-gold/10 rounded-lg perspective-1000"
              alt={`Tarot Card ${i + 1}`}
            />
          ))}
        </div>

        {/* Right Side Cards */}
        <div className="absolute bottom-0 right-0 w-full h-full">
          {[
            { src: '/card-4.webp', rotate: -10, x: '15%', y: '35%', delay: 3.4 },
            { src: '/card-5.webp', rotate: -20, x: '-5%', y: '25%', delay: 3.7 },
            { src: '/card-6.webp', rotate: -30, x: '-25%', y: '30%', delay: 4.0 },
          ].map((card, i) => (
            <motion.img
              key={`right-card-${i}`}
              src={card.src}
              initial={{
                opacity: 0,
                y: -100,
                x: card.x,
                scale: 1.3,
                rotateX: 45,
                rotate: card.rotate + 15
              }}
              animate={{
                opacity: 1,
                y: card.y,
                scale: 1,
                rotateX: 0,
                rotate: card.rotate
              }}
              transition={
                isMobile
                  ? {
                      duration: 1.2,
                      delay: card.delay,
                      ease: [0.25, 1, 0.5, 1] // Custom smooth cinematic easeOut
                    }
                  : {
                      duration: 0.8,
                      delay: card.delay,
                      type: "spring",
                      stiffness: 80,
                      damping: 12
                    }
              }
              className="absolute bottom-0 right-0 w-36 md:w-64 lg:w-80 h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-mystic-gold/10 rounded-lg perspective-1000"
              alt={`Tarot Card ${i + 4}`}
            />
          ))}
        </div>
      </div>

      {/* Cinematic Vignette to blend cards better */}
      <div className="absolute inset-0 z-[6] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
    </section>
  );
};

export default Hero;
