import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Silk from './Silk';
import BorderGlow from './BorderGlow';
import StrokeText from './StrokeText';
import MorphSlider from './MorphSlider';

interface HeroProps {
  onBuyNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBuyNow }) => {
  return (
    <section className="relative min-h-[140vh] flex flex-col justify-center items-center bg-black text-white px-4 sm:px-8 lg:px-12 pt-44 sm:pt-56 pb-36 sm:pb-48 overflow-hidden w-full">
      
      {/* Vibrant High-Brightness Silk WebGL Background in Rich Royal Purple */}
      <div className="absolute inset-0 z-0 opacity-100">
        <Silk
          color="#7e22ce"
          sheenColor="#e9d5ff"
          speed={16.5}
          scale={1}
          rotation={0.35}
          sheen={0.85}
          depth={0.15}
          glow={0.8}
          noiseIntensity={0.2}
          mouseInteraction
          clickRipple
          intro
          ripple={1.95}
          wave={1.85}
          interactionStrength={1.45}
        />
      </div>

      {/* Radiant Purple Ambient Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-950/20 to-black/20 pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center space-y-14 px-2 sm:px-6">
        
        {/* Hero Title with Whole White StrokeText on CHANEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center pt-10 sm:pt-16 pb-2 filter drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)] overflow-visible"
        >
          <StrokeText
            text="CHANEL"
            strokeColor="#FFFFFF"
            strokeStyle="solid"
            strokeWidth={2.5}
            dashLength={10}
            drawDuration={1.6}
            fillDelay={0.2}
            stagger={0.05}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            wipeFrom="left"
            fontSize={160}
            fontWeight={900}
            letterSpacing={10}
            marching={false}
            hoverRedraw={true}
            shadow={false}
            fillColor="#FFFFFF"
            shadowColor={null}
          />
        </motion.div>

        {/* Single Short Line Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-white font-medium text-lg sm:text-xl md:text-2xl leading-relaxed tracking-wider text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          <p>Timeless Parisian Haute Couture.</p>
        </motion.div>

        {/* Main Button Centered Below Description with Glassmorphism & High-Visibility BorderGlow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2 flex flex-col items-center justify-center gap-5"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer"
          >
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="rgba(255, 255, 255, 0.08)"
              borderRadius={20}
              glowRadius={40}
              glowIntensity={1.2}
              coneSpread={25}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
              onClick={onBuyNow}
            >
              <div className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3 text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all cursor-pointer backdrop-blur-2xl bg-white/10 hover:bg-white/20 border border-white/30 rounded-[18px] shadow-[0_0_20px_rgba(192,132,252,0.4)]">
                <span>Buy Now</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-purple-200" />
              </div>
            </BorderGlow>
          </motion.div>

          {/* Quiet Trust Markers */}
          <div className="flex items-center justify-center gap-5 text-xs text-purple-100 tracking-widest pt-2 bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-purple-500/20 shadow-md">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />
              Authentic Maison Guarantee
            </span>
            <span>·</span>
            <span>Complimentary Global Delivery</span>
          </div>
        </motion.div>
      </div>

      {/* High-Fidelity Campaign Visual Frame with MorphSlider Effect & Expanded Ultra-Wide Collection */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-28 sm:mt-36 w-full max-w-7xl mx-auto px-2 sm:px-6 relative z-10"
      >
        <div className="relative aspect-[21/9] sm:aspect-[16/8] w-full overflow-hidden border border-purple-500/30 bg-neutral-950/80 backdrop-blur-md shadow-[0_0_70px_rgba(168,85,247,0.4)] rounded-2xl">
          <MorphSlider
            items={[
              {
                image: '/src/assets/images/hero_chanel_jennie_1793179749490.jpg',
                caption: 'Chanel Ambassador Collection'
              },
              {
                image: '/src/assets/images/chanel_coco_mademoiselle_perfume_1793182361266.jpg',
                caption: "Coco Mademoiselle L'Extrait Parfumerie"
              },
              {
                image: '/src/assets/images/hero_chanel_perfume_n5_1793182296409.jpg',
                caption: "N°5 L'Extrait Parfumerie & Rose Harvest"
              },
              {
                image: '/src/assets/images/chanel_bleu_parfum_bottle_1793182361769.jpg',
                caption: 'Bleu de Chanel Grand Extract Edition'
              },
              {
                image: '/src/assets/images/hero_chanel_campaign_2_1793181705986.jpg',
                caption: '18K Beige Gold High Jewelry'
              },
              {
                image: '/src/assets/images/chanel_atelier_branding_1793182361667.jpg',
                caption: 'Haute Parfumerie Maison Coffret & Camellia'
              },
              {
                image: '/src/assets/images/hero_chanel_branding_cambon_1793182295815.jpg',
                caption: '31 Rue Cambon Flagship Maison, Paris'
              },
              {
                image: '/src/assets/images/hero_chanel_campaign_3_1793181706883.jpg',
                caption: 'Paris Haute Couture Runway'
              }
            ]}
            transition="melt"
            intensity={0.55}
            aberration={0.35}
            drift={0.4}
            autoplay={true}
            autoplayDelay={4}
            radius={16}
            showCaptions={true}
            showControls={true}
            showIndicators={true}
          />
        </div>
      </motion.div>

    </section>
  );
};
