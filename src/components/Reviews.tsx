import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  const reviewsList = [
    {
      id: 'rev-1',
      name: 'Lady Vivienne Sterling',
      role: 'Haute Couture Patron, London',
      rating: 5,
      comment: 'The private fitting process at Rue Cambon was transcendent. Every hand-embroidered seam and gold detail reflects an unprecedented legacy of Parisian mastery.'
    },
    {
      id: 'rev-2',
      name: 'Elena Rostova',
      role: 'Art Curator & Collector, Geneva',
      rating: 5,
      comment: 'Chanel High Jewelry possesses a quiet, architectural magnificence. The 18K beige gold Coco Crush creation is a timeless masterpiece I treasure daily.'
    },
    {
      id: 'rev-3',
      name: 'Camille Laurent',
      role: 'Fashion Editor, Paris',
      rating: 5,
      comment: "Unboxing N°5 L'Extrait with white-glove concierge delivery was an extraordinary sensory experience. Unmatched elegance down to the finest detail."
    }
  ];

  return (
    <section id="reviews" className="py-24 md:py-36 bg-neutral-950 text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium">
            Patron Testimonials
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-wide text-white">
            Client Impressions
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-6" />
        </div>

        {/* 3 Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {reviewsList.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black border border-neutral-800 p-8 flex flex-col justify-between space-y-8 relative group hover:border-[#C5A059]/50 transition-colors"
            >
              <Quote className="w-8 h-8 text-neutral-800 group-hover:text-[#C5A059]/30 transition-colors absolute top-6 right-6" />

              <div className="space-y-6 relative z-10">
                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-neutral-300 font-serif italic text-base sm:text-lg leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-neutral-900 space-y-1">
                <h4 className="text-white text-sm font-medium tracking-wide font-sans">
                  {rev.name}
                </h4>
                <p className="text-neutral-500 text-xs font-light tracking-wider uppercase">
                  {rev.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
