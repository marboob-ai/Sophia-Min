import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import GlassSurface from './GlassSurface';

interface HeaderProps {
  onOpenCheckout: (itemTitle?: string) => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout, cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all pointer-events-none">
      <div className="flex items-center justify-between gap-4 pointer-events-auto">
        
        {/* Left balance spacer for mobile / desktop */}
        <a 
          href="#" 
          className="text-xl font-serif tracking-[0.3em] font-bold text-white hover:text-purple-300 transition-colors uppercase shrink-0 py-2 md:hidden"
        >
          CHANEL
        </a>

        {/* Floating GlassSurface Dock (Including CHANEL Brand Logo) */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <GlassSurface
            width="auto"
            height={52}
            borderRadius={26}
            distortionScale={-180}
            displace={0.5}
            backgroundOpacity={0.25}
            className="border border-purple-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.6)] px-6"
          >
            <nav className="h-full flex items-center gap-5 lg:gap-7 text-xs uppercase tracking-[0.2em] font-medium text-neutral-200">
              {/* CHANEL Brand Logo inside Dock */}
              <a 
                href="#" 
                className="text-sm lg:text-base font-serif tracking-[0.3em] font-extrabold text-white hover:text-purple-300 transition-colors uppercase pr-4 border-r border-purple-500/30 flex items-center"
              >
                CHANEL
              </a>

              <button 
                onClick={() => scrollToSection('features')}
                className="hover:text-purple-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-purple-400 hover:after:w-full after:transition-all cursor-pointer whitespace-nowrap"
              >
                Haute Couture
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="hover:text-purple-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-purple-400 hover:after:w-full after:transition-all cursor-pointer whitespace-nowrap"
              >
                Fine Jewelry
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="hover:text-purple-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-purple-400 hover:after:w-full after:transition-all cursor-pointer whitespace-nowrap"
              >
                Fragrance & Beauty
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="hover:text-purple-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-purple-400 hover:after:w-full after:transition-all cursor-pointer whitespace-nowrap"
              >
                Boutiques
              </button>
            </nav>
          </GlassSurface>
        </div>

        {/* Mobile Menu Toggle Container */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mt-2 md:hidden bg-neutral-950/95 border border-purple-900/40 rounded-2xl p-6 space-y-4 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col space-y-4 text-sm uppercase tracking-[0.2em] font-medium text-neutral-200">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-left py-2 hover:text-purple-300 transition-colors border-b border-neutral-900"
            >
              Haute Couture
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-left py-2 hover:text-purple-300 transition-colors border-b border-neutral-900"
            >
              Fine Jewelry
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-left py-2 hover:text-purple-300 transition-colors border-b border-neutral-900"
            >
              Fragrance & Beauty
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-left py-2 hover:text-purple-300 transition-colors"
            >
              Boutiques
            </button>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout();
              }}
              className="mt-4 w-full py-3 bg-gradient-to-r from-purple-700 to-purple-600 text-white font-semibold uppercase tracking-[0.2em] text-xs text-center cursor-pointer rounded-xl hover:from-purple-600 hover:to-purple-500 transition-colors"
            >
              Client Concierge
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
