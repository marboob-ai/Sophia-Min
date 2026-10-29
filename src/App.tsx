import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);
  const [cartCount, setCartCount] = useState(0);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleOpenCheckout = (itemTitle?: string) => {
    setSelectedItem(itemTitle);
    setCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#C5A059] selection:text-black antialiased font-sans">
      {/* Section 1: Header */}
      <Header
        onOpenCheckout={handleOpenCheckout}
        cartCount={cartCount}
      />

      <main>
        {/* Section 2: Hero */}
        <Hero onBuyNow={() => handleOpenCheckout()} />

        {/* Section 3: Features */}
        <Features onSelectItem={(item) => handleOpenCheckout(item)} />

        {/* Section 4: Reviews */}
        <Reviews />
      </main>

      {/* Section 5: Footer */}
      <Footer onOpenCheckout={() => handleOpenCheckout()} />

      {/* Interactive Acquisition Concierge Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        preselectedItem={selectedItem}
        onSuccess={handleOrderSuccess}
      />
    </div>
  );
}
