import React from 'react';
import { Send, MapPin, Mail, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section className="relative py-24 bg-void overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-mystic-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Left Info */}
                    <div>
                        <h2 className="font-heading text-5xl text-antique-white mb-6">Begin Your <br /> <span className="text-mystic-gold">Journey</span></h2>
                        <p className="font-body text-xl text-parchment/70 mb-12 max-w-md">
                            The stars have aligned for us to meet. Reach out if you seek clarity, guidance, or a deeper connection with your purpose.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 border border-mystic-gold/20 rounded-full group-hover:bg-mystic-gold/10 transition-colors">
                                    <Mail className="text-mystic-gold w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-heading text-lg text-antique-white">Email Me</h4>
                                    <p className="font-body text-parchment/60">hello@aatmaya.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 border border-mystic-gold/20 rounded-full group-hover:bg-mystic-gold/10 transition-colors">
                                    <Instagram className="text-mystic-gold w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-heading text-lg text-antique-white">Follow the Path</h4>
                                    <p className="font-body text-parchment/60">@aatmaya.tarot</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-void-light/30 backdrop-blur-md p-10 border border-mystic-gold/20 rounded-sm">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-mystic-gold">First Name</label>
                                    <input type="text" className="w-full bg-void/50 border-b border-mystic-gold/30 p-3 text-antique-white focus:outline-none focus:border-mystic-gold transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-mystic-gold">Last Name</label>
                                    <input type="text" className="w-full bg-void/50 border-b border-mystic-gold/30 p-3 text-antique-white focus:outline-none focus:border-mystic-gold transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-mystic-gold">Email</label>
                                <input type="email" className="w-full bg-void/50 border-b border-mystic-gold/30 p-3 text-antique-white focus:outline-none focus:border-mystic-gold transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-mystic-gold">Message</label>
                                <textarea rows={4} className="w-full bg-void/50 border-b border-mystic-gold/30 p-3 text-antique-white focus:outline-none focus:border-mystic-gold transition-colors resize-none"></textarea>
                            </div>

                            <button className="w-full py-4 bg-mystic-gold/10 hover:bg-mystic-gold/20 border border-mystic-gold/40 text-mystic-gold font-heading uppercase tracking-widest transition-all hover:tracking-[0.2em] flex items-center justify-center gap-2 group">
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
