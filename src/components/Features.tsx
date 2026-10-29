import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Gem, Crown, ArrowUpRight } from 'lucide-react';

interface FeaturesProps {
  onSelectItem: (itemTitle: string) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onSelectItem }) => {
  const featureList = [
    {
      id: 'craftsmanship',
      icon: Scissors,
      title: 'Maison Craftsmanship',
      kicker: 'Rue Cambon Ateliers',
      description: 'Every piece is hand-embroidered by Parisian ateliers, combining centuries of heritage with modern tailoring precision.',
      image: '/src/assets/images/feature_craftsmanship_1793175823871.jpg',
      itemTitle: 'Haute Couture Tweed Jacket',
      price: '$18,500'
    },
    {
      id: 'jewelry',
      icon: Gem,
      title: 'High Jewelry & Gold',
      kicker: '18K Beige Gold & Diamonds',
      description: 'Forged in 18K beige gold and selected diamonds, each creation reflects timeless architecture and everlasting brilliance.',
      image: '/src/assets/images/feature_jewelry_1793175824928.jpg',
      itemTitle: 'Coco Crush Ring in 18K Beige Gold',
      price: '$4,850'
    },
    {
      id: 'fragrance',
      icon: Crown,
      title: 'Iconic Parfumerie',
      kicker: 'Grasse Rose Harvest',
      description: "Crafted from hand-picked May roses in Grasse, N°5 L'Extrait represents the pinnacle of haute parfumerie.",
      image: '/src/assets/images/feature_fragrance_1793175825320.jpg',
      itemTitle: "N°5 L'Extrait Collector Edition",
      price: '$890'
    }
  ];

  return (
    <section id="features" className="py-24 md:py-36 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium">
            Excellence & Heritage
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-wide text-white">
            Unrivaled Paris Mastery
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-6" />
        </div>

        {/* 3 Simple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {featureList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-neutral-950 border border-neutral-800 hover:border-[#C5A059]/60 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  
                  {/* Top Kicker Label */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-widest text-[#C5A059] uppercase bg-black/70 backdrop-blur-md px-2.5 py-1 border border-neutral-800">
                      {item.kicker}
                    </span>
                    <div className="w-8 h-8 rounded-none bg-black/70 backdrop-blur-md border border-neutral-800 flex items-center justify-center text-[#C5A059]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wide font-normal group-hover:text-[#C5A059] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Action & Price */}
                  <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500">Starting From</p>
                      <p className="text-white font-mono text-sm tracking-wide font-semibold">{item.price}</p>
                    </div>

                    <button
                      onClick={() => onSelectItem(item.itemTitle)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#C5A059] hover:text-white transition-colors cursor-pointer group/btn"
                    >
                      <span>Acquire</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
