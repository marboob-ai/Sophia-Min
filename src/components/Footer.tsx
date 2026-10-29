import React from 'react';

interface FooterProps {
  onOpenCheckout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout }) => {
  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-900 py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-neutral-900">
          <div>
            <h3 className="text-2xl font-serif tracking-[0.3em] font-bold text-white uppercase">
              CHANEL
            </h3>
            <p className="text-xs text-neutral-500 font-light tracking-widest uppercase mt-2">
              Haute Couture · Fine Jewelry · Haute Parfumerie
            </p>
          </div>

          <button
            onClick={onOpenCheckout}
            className="px-6 py-3 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer"
          >
            Private Client Concierge
          </button>
        </div>

        {/* Links Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-light tracking-wider">
          <div className="space-y-3">
            <h4 className="text-white font-medium uppercase tracking-[0.15em] text-[11px] text-[#C5A059]">
              The House
            </h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Haute Couture</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">High Jewelry</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Fragrance & Beauty</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Craftsmanship</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-medium uppercase tracking-[0.15em] text-[11px] text-[#C5A059]">
              Boutiques
            </h4>
            <ul className="space-y-2">
              <li><span className="text-neutral-300">Paris · 31 Rue Cambon</span></li>
              <li><span className="text-neutral-300">New York · 57th Street</span></li>
              <li><span className="text-neutral-300">London · Bond Street</span></li>
              <li><span className="text-neutral-300">Tokyo · Ginza</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-medium uppercase tracking-[0.15em] text-[11px] text-[#C5A059]">
              Services
            </h4>
            <ul className="space-y-2">
              <li><button onClick={onOpenCheckout} className="hover:text-white transition-colors text-left cursor-pointer">Bespoke Fittings</button></li>
              <li><button onClick={onOpenCheckout} className="hover:text-white transition-colors text-left cursor-pointer">White-Glove Delivery</button></li>
              <li><button onClick={onOpenCheckout} className="hover:text-white transition-colors text-left cursor-pointer">Gift Wrapping</button></li>
              <li><button onClick={onOpenCheckout} className="hover:text-white transition-colors text-left cursor-pointer">Authenticity Certificate</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-medium uppercase tracking-[0.15em] text-[11px] text-[#C5A059]">
              Legal & Privacy
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Sale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility Statement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-neutral-500 font-light tracking-widest">
          <p>© 2026 CHANEL. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>PARIS</span>
            <span>·</span>
            <span>NEW YORK</span>
            <span>·</span>
            <span>LONDON</span>
            <span>·</span>
            <span>TOKYO</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
