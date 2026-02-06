import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Moon, Sun } from 'lucide-react';

const events = [
    { date: 'Oct 14', title: 'Solar Eclipse in Libra', type: 'eclipse', icon: Sun },
    { date: 'Oct 28', title: 'Lunar Eclipse in Taurus', type: 'eclipse', icon: Moon },
    { date: 'Nov 13', title: 'New Moon in Scorpio', type: 'moon', icon: Moon },
    { date: 'Dec 13', title: 'Mercury Retrograde', type: 'retrograde', icon: Star },
    { date: 'Dec 21', title: 'Winter Solstice', type: 'solstice', icon: Sun },
    { date: 'Jan 11', title: 'New Moon in Cap', type: 'moon', icon: Moon },
];

const AstralCalendar: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <section ref={targetRef} className="h-[300vh] bg-void relative">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Background Stardust */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

                <motion.div style={{ x }} className="flex gap-24 px-24 items-center">

                    {/* Header Card */}
                    <div className="shrink-0 w-[400px] pr-12 border-r border-mystic-gold/20">
                        <h2 className="font-heading text-6xl text-antique-white mb-6">Celestial <br /> <span className="text-mystic-gold">Calendar</span></h2>
                        <p className="font-body text-xl text-parchment-dark/70">
                            Align your actions with the cosmos. Navigate the upcoming planetary shifts.
                        </p>
                    </div>

                    {events.map((event, i) => (
                        <div key={i} className="relative group shrink-0">
                            <div className="relative w-[300px] h-[400px] border border-mystic-gold/20 bg-void-light/30 backdrop-blur-sm p-8 flex flex-col justify-between hover:border-mystic-gold transition-colors duration-500 rounded-sm">
                                <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-mystic-gold"></div>
                                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-mystic-gold"></div>

                                <div>
                                    <div className="text-mystic-gold mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <event.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-heading text-3xl text-antique-white mb-2">{event.date}</h3>
                                    <div className="h-[1px] w-full bg-gradient-to-r from-mystic-gold/50 to-transparent mb-6"></div>
                                    <h4 className="font-body text-2xl text-parchment">{event.title}</h4>
                                </div>

                                <button className="text-xs uppercase tracking-[0.2em] text-mystic-gold/60 group-hover:text-mystic-gold transition-colors text-left mt-8">
                                    Read Guidance →
                                </button>
                            </div>

                            {/* Connecting Line */}
                            {i < events.length - 1 && (
                                <div className="absolute top-1/2 left-full w-24 h-[1px] bg-mystic-gold/20"></div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AstralCalendar;
