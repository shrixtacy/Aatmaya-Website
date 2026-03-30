import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonialsData = [
    {
        name: "Saurav",
        text: "This was my first experience in Tarot Card reading. You made the whole experience easy and comfortable. Thanks for that.",
    },
    {
        name: "Abhishek Mishra",
        text: "Very proactive and always mindful of timelines. Her dedication and empathy made the whole experience comforting and reassuring. I'd happily recommend this experience to others.",
    },
    {
        name: "Soumya",
        text: "Love the way you went through all the details via tarot reading and guided me on what's in there in my life.",
    },
    {
        name: "Anvesh Panda",
        text: "I found Aatmaya when I was honestly hitting rock bottom. What I found was a safe harbor — for the first time in a long time, I felt truly heard. The insights were so accurate it was startling. It's not just guidance; it's a shift you can actually feel in your heart.",
    },
    {
        name: "Sukumar Das",
        text: "The cards and face readings were 100% accurate and a pretty shocking experience, in a good way. Thanks for this lovely experience and looking forward to more assistance 🙏🏻",
    },
    {
        name: "Sudeep Jena",
        text: "It's been a great experience. Everyone should do a reading once in a while — it can truly open your mind to new perceptions.",
    },
    {
        name: "Sanat",
        text: "Aatmaya helped me realize the blockage I currently have and was very apt about my situation without knowing anything from me beforehand. Highly recommend to anyone seeking clarity in life.",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="relative py-32 bg-void overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mystic-gold/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Heading */}
            <div className="container mx-auto px-6 relative z-10 mb-16 text-center">
                <Star className="w-6 h-6 text-mystic-gold mx-auto mb-6 animate-pulse" />
                <h2 className="font-heading text-4xl md:text-5xl text-antique-white tracking-wide">
                    <span className="text-mystic-gold">Testimonials</span>
                </h2>
            </div>

            {/* Marquee Track */}
            <div className="relative w-full overflow-hidden">
                {/* Edge fades */}
                <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
                    style={{ background: 'linear-gradient(to right, #0a0710, transparent)' }}
                />
                <div
                    className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
                    style={{ background: 'linear-gradient(to left, #0a0710, transparent)' }}
                />

                <div
                    className="flex items-stretch gap-5 py-4"
                    style={{
                        animation: 'marquee 55s linear infinite',
                        width: 'max-content',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
                    onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
                    onTouchStart={e => (e.currentTarget.style.animationPlayState = 'paused')}
                    onTouchEnd={e => (e.currentTarget.style.animationPlayState = 'running')}
                >
                    {[...testimonialsData, ...testimonialsData].map((t, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 flex flex-col justify-between border border-mystic-gold/15 hover:border-mystic-gold/40 transition-all duration-500 group p-7"
                            style={{
                                width: '420px',
                                height: '220px',
                                background: 'rgba(255,255,255,0.03)',
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            {/* Quote text */}
                            <div className="relative flex-1 overflow-hidden">
                                <Quote className="absolute -top-1 -left-1 w-7 h-7 text-mystic-gold/15 group-hover:text-mystic-gold/35 transition-colors" />
                                <p className="font-body text-sm text-parchment/85 leading-relaxed italic pl-6 line-clamp-4">
                                    "{t.text}"
                                </p>
                            </div>

                            {/* Divider + Name */}
                            <div className="mt-5 pt-4 border-t border-mystic-gold/15 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mystic-gold via-amber-600 to-void border border-mystic-gold/40 shrink-0" />
                                <h4 className="font-heading text-xs uppercase tracking-widest text-mystic-gold">
                                    {t.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
