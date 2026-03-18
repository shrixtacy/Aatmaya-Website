import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const arcana = [
    { id: 0, name: 'The Fool', meaning: 'New beginnings, optimism, and trust in life.', element: 'Air', detail: 'The Fool represents the start of a journey, innocence, and spontaneous action. It asks you to trust the universe and take a leap of faith.' },
    { id: 1, name: 'The Magician', meaning: 'Manifestation, resourcefulness, and power.', element: 'Air', detail: 'The Magician is the bridge between the spiritual and material worlds. You have all the tools you need to succeed—use them wisely.' },
    { id: 2, name: 'The High Priestess', meaning: 'Intuition, sacred knowledge, and the divine feminine.', element: 'Water', detail: 'She guards the veil between mysteries. Trust your intuition and look beyond the surface. Secrets are waiting to be revealed.' },
    { id: 3, name: 'The Empress', meaning: 'Femininity, beauty, nature, and abundance.', element: 'Earth', detail: 'The Empress signifies fertility and creation. Connect with nature and your senses to birth new ideas or nurture existing ones.' },
    { id: 4, name: 'The Emperor', meaning: 'Authority, establishment, and structure.', element: 'Fire', detail: 'The Emperor brings order to chaos. It suggests a time for stability, rules, and asserting your authority securely.' },
    { id: 5, name: 'The Hierophant', meaning: 'Spiritual wisdom, religious beliefs, and tradition.', element: 'Earth', detail: 'The Hierophant represents traditional values and institutions. Seek guidance from a mentor or established system.' },
    { id: 6, name: 'The Lovers', meaning: 'Love, harmony, and relationships.', element: 'Air', detail: 'Beyond romance, The Lovers signify conscious choices and alignment of values. Harmony is achieved through union.' },
    { id: 7, name: 'The Chariot', meaning: 'Control, willpower, and victory.', element: 'Water', detail: 'Success through determination. You must maintain focus and control opposing forces to move forward triumphantly.' },
    { id: 8, name: 'Strength', meaning: 'Courage, persuasion, and influence.', element: 'Fire', detail: 'True strength is not brute force but inner calm and patience. You can tame the beast within through compassion.' },
    { id: 9, name: 'The Hermit', meaning: 'Soul searching, introspection, and being alone.', element: 'Earth', detail: 'Withdraw from the noise to find your inner light. The answers you seek are found in silence and solitude.' },
    { id: 10, name: 'Wheel of Fortune', meaning: 'Good luck, karma, and life cycles.', element: 'Fire', detail: 'The wheel is always turning. Change is inevitable—embrace the ups and downs as part of your greater destiny.' },
    { id: 11, name: 'Justice', meaning: 'Justice, fairness, truth.', element: 'Air', detail: 'Karma is real. Decisions will be made fairly. If you have acted with integrity, you have nothing to fear.' },
    { id: 12, name: 'The Hanged Man', meaning: 'Pause, surrender, letting go.', element: 'Water', detail: 'A necessary suspension of action. Look at things from a new perspective. Surrender is not defeat; it is a strategy.' },
    { id: 13, name: 'Death', meaning: 'Endings, change, transformation.', element: 'Water', detail: 'Not physical death, but the end of a cycle. Let go of what no longer serves you to make space for the new.' },
    { id: 14, name: 'Temperance', meaning: 'Balance, moderation, patience.', element: 'Fire', detail: 'Find the middle path. Alchemy happens when you blend opposites. Patience and purpose bring harmony.' },
    { id: 15, name: 'The Devil', meaning: 'Shadow self, attachment, addiction.', element: 'Earth', detail: 'You may feel trapped, but the chains are loose. Confront your shadows and break free from material or emotional bondage.' },
    { id: 16, name: 'The Tower', meaning: 'Sudden change, upheaval, chaos.', element: 'Fire', detail: 'A flash of truth that destroys false foundations. It is scary but necessary for rebuilding on solid ground.' },
    { id: 17, name: 'The Star', meaning: 'Hope, faith, purpose.', element: 'Air', detail: 'After the storm comes the calm. The Star brings renewal and inspiration. Trust that the universe is guiding you.' },
    { id: 18, name: 'The Moon', meaning: 'Illusion, fear, anxiety.', element: 'Water', detail: 'Things are not what they seem. Trust your instincts over your eyes. Navigate through uncertainty with intuition.' },
    { id: 19, name: 'The Sun', meaning: 'Positivity, fun, warmth, success.', element: 'Fire', detail: 'The ultimate card of joy and success. Everything is illuminated. Bask in the warmth of your achievements.' },
    { id: 20, name: 'Judgment', meaning: 'Rebirth, inner calling, absolution.', element: 'Fire', detail: 'A wake-up call. Review your past actions and rise to a higher level of consciousness. Your true calling awaits.' },
    { id: 21, name: 'The World', meaning: 'Completion, integration, accomplishment.', element: 'Earth', detail: 'The journey is complete. You have achieved wholeness and success. Celebrate this moment of fulfillment.' }
];

const TarotGallery: React.FC = () => {
    const [selectedCard, setSelectedCard] = useState<typeof arcana[0] | null>(null);

    return (
        <div className="mt-32">
            <div className="mb-16 text-center">
                <h3 className="font-heading text-3xl text-antique-white mb-4">The Major <span className="italic font-serif text-mystic-gold">Arcana</span></h3>
                <p className="text-parchment/60 italic font-body text-lg">"The Fool's journey through the cosmos."</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
                {arcana.map((card, i) => (
                    <motion.div
                        key={card.name}
                        onClick={() => setSelectedCard(card)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ duration: 0.4, delay: i * 0.03 }}
                        whileHover={{ y: -5 }}
                        className="group relative aspect-[2/3.5] bg-void-light/10 border border-mystic-gold/20 rounded-xl overflow-hidden cursor-pointer hover:border-mystic-gold/40 transition-colors"
                    >
                        {/* Card Back Pattern (Abstract) */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60"></div>

                        <div className="absolute inset-0 p-4 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <span className="font-heading text-xs text-mystic-gold/60">{card.id}</span>
                                <span className="text-[10px] uppercase tracking-widest text-parchment/40">{card.element}</span>
                            </div>

                            <div className="text-center transform group-hover:translate-y-[-2px] transition-transform duration-300">
                                <h4 className="font-heading text-sm md:text-base text-antique-white mb-1 group-hover:text-mystic-gold transition-colors">{card.name}</h4>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal for Card Details */}
            <AnimatePresence>
                {selectedCard && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCard(null)}
                            className="absolute inset-0 bg-void/95"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative w-full max-w-md bg-void-light border border-mystic-gold/30 rounded-2xl overflow-hidden shadow-2xl z-10"
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedCard(null); }}
                                className="absolute top-4 right-4 text-parchment/60 hover:text-mystic-gold z-20"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-8 md:p-12 text-center">
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-mystic-gold/20 flex items-center justify-center font-heading text-2xl text-mystic-gold">
                                    {selectedCard.id}
                                </div>
                                <h3 className="font-heading text-3xl md:text-4xl text-antique-white mb-2">{selectedCard.name}</h3>
                                <p className="text-xs uppercase tracking-[0.3em] text-mystic-gold mb-8">{selectedCard.element}</p>

                                <div className="space-y-6">
                                    <p className="font-heading text-lg text-parchment italic">"{selectedCard.meaning}"</p>
                                    <div className="w-12 h-[1px] bg-mystic-gold/30 mx-auto"></div>
                                    <p className="font-body text-parchment-dark leading-relaxed">
                                        {selectedCard.detail}
                                    </p>
                                </div>
                            </div>
                            {/* Decorative Texture */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"></div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TarotGallery;
