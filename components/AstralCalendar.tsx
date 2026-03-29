import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Moon, Sun } from 'lucide-react';

const events = [
    { month: 'January', newMoon: 'Jan 19 (1:21 AM)', fullMoon: 'Jan 3 (3:33 PM)', name: 'Wolf Moon (Supermoon)', icon: Moon },
    { month: 'February', newMoon: 'Feb 17 (5:31 PM)', fullMoon: 'Feb 2 (3:39 AM)', name: 'Snow Moon', icon: Moon },
    { month: 'March', newMoon: 'Mar 19 (6:53 AM)', fullMoon: 'Mar 3 (5:07 PM)', name: 'Worm Moon (Total Lunar Eclipse)', icon: Moon },
    { month: 'April', newMoon: 'Apr 17 (5:21 PM)', fullMoon: 'Apr 2 (7:41 AM)', name: 'Pink Moon', icon: Moon },
    { month: 'May', newMoon: 'May 17 (1:31 AM)', fullMoon: 'May 1 (10:53 PM)', fullMoon2: 'May 31 (2:15 PM)', name: 'Flower Moon', name2: 'Blue Moon', icon: Moon },
    { month: 'June', newMoon: 'Jun 15 (8:24 AM)', fullMoon: 'Jun 30 (5:26 AM)', name: 'Strawberry Moon', icon: Moon },
    { month: 'July', newMoon: 'Jul 14 (3:13 PM)', fullMoon: 'Jul 29 (8:05 PM)', name: 'Buck Moon', icon: Moon },
    { month: 'August', newMoon: 'Aug 12 (11:06 PM)', fullMoon: 'Aug 28 (9:48 AM)', name: 'Sturgeon Moon (Partial Lunar Eclipse)', icon: Moon },
    { month: 'September', newMoon: 'Sep 11 (8:56 AM)', fullMoon: 'Sep 26 (10:19 PM)', name: 'Harvest Moon', icon: Moon },
    { month: 'October', newMoon: 'Oct 10 (9:20 PM)', fullMoon: 'Oct 26 (9:41 AM)', name: 'Hunter’s Moon', icon: Moon },
    { month: 'November', newMoon: 'Nov 9 (12:32 PM)', fullMoon: 'Nov 24 (8:23 PM)', name: 'Beaver Moon (Supermoon)', icon: Moon },
    { month: 'December', newMoon: 'Dec 9 (6:21 AM)', fullMoon: 'Dec 24 (6:58 AM)', name: 'Cold Moon (Supermoon)', icon: Moon },
];

const AstralCalendar: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <section ref={targetRef} className="h-[500vh] bg-void relative">
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
                            <div className="relative w-[340px] h-[460px] border border-mystic-gold/20 bg-void-light/30 backdrop-blur-sm p-8 flex flex-col hover:border-mystic-gold transition-colors duration-500 rounded-sm">
                                <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-mystic-gold"></div>
                                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-mystic-gold"></div>

                                <div>
                                    <div className="text-mystic-gold mb-3 opacity-50 group-hover:opacity-100 transition-opacity flex justify-between items-center">
                                        <event.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-heading text-3xl md:text-4xl text-antique-white mb-2 leading-[1.1]">{event.month}</h3>
                                    <div className="h-[1px] w-full bg-gradient-to-r from-mystic-gold/50 to-transparent mb-6"></div>
                                    
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <p className="text-mystic-gold/70 text-xs uppercase tracking-[0.15em] mb-1">New Moon</p>
                                            <p className="font-body text-xl text-parchment">{event.newMoon}</p>
                                        </div>
                                        <div>
                                            <p className="text-mystic-gold/70 text-xs uppercase tracking-[0.15em] mb-1">Full Moon</p>
                                            <p className="font-body text-xl text-parchment mb-0.5">{event.fullMoon}</p>
                                            <p className="font-body text-sm text-parchment/60">{event.name}</p>
                                        </div>
                                        {event.fullMoon2 && (
                                        <div>
                                            <p className="text-mystic-gold/70 text-xs uppercase tracking-[0.15em] mt-2 mb-1">{event.name2}</p>
                                            <p className="font-body text-xl text-parchment">{event.fullMoon2}</p>
                                        </div>
                                        )}
                                    </div>
                                </div>

                                <button className="text-xs uppercase tracking-[0.2em] text-mystic-gold/60 group-hover:text-mystic-gold transition-colors text-left mt-auto pt-6">
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
