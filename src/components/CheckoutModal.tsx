import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShieldCheck, Gift, Truck, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedItem?: string;
  onSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  preselectedItem,
  onSuccess,
}) => {
  const catalog = [
    {
      id: 'item-1',
      title: 'Haute Couture Tweed Jacket',
      category: 'Haute Couture',
      price: '$18,500',
      numericPrice: 18500,
      image: '/src/assets/images/hero_chanel_couture_1793175824051.jpg',
      description: 'Hand-tailored by Rue Cambon ateliers in Paris with gold embroidered trim and silk lining.'
    },
    {
      id: 'item-2',
      title: 'Coco Crush Ring in 18K Beige Gold',
      category: 'High Jewelry',
      price: '$4,850',
      numericPrice: 4850,
      image: '/src/assets/images/feature_jewelry_1793175824928.jpg',
      description: 'Matrix quilt motif in 18K beige gold set with brilliant-cut diamonds.'
    },
    {
      id: 'item-3',
      title: "N°5 L'Extrait Collector Edition",
      category: 'Parfumerie',
      price: '$890',
      numericPrice: 890,
      image: '/src/assets/images/feature_fragrance_1793175825320.jpg',
      description: 'Hand-sealed baccarat crystal bottle containing pure May Rose & Jasmine de Grasse extract.'
    }
  ];

  const defaultItem = catalog.find(c => c.title === preselectedItem) || catalog[0];

  const [selectedProduct, setSelectedProduct] = useState(defaultItem);
  const [deliveryMethod, setDeliveryMethod] = useState<'courier' | 'boutique'>('courier');
  const [giftWrapping, setGiftWrapping] = useState(true);
  const [personalNote, setPersonalNote] = useState('');
  
  // Client details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  // Order state
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `CH-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderRef(ref);
    setOrderConfirmed(true);
    onSuccess();
  };

  const resetAndClose = () => {
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 text-white shadow-2xl overflow-hidden my-8"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-900 bg-black">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span className="text-sm font-serif tracking-[0.25em] font-bold text-white uppercase">
                CHANEL Client Concierge
              </span>
            </div>

            <button
              onClick={resetAndClose}
              className="p-1 text-neutral-400 hover:text-white transition-colors focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {!orderConfirmed ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
              
              {/* Product Selection */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium block">
                  Select Creation
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {catalog.map(prod => (
                    <div
                      key={prod.id}
                      onClick={() => setSelectedProduct(prod)}
                      className={`p-4 border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        selectedProduct.id === prod.id
                          ? 'border-[#C5A059] bg-neutral-900'
                          : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="w-14 h-14 object-cover border border-neutral-800"
                        />
                        <div>
                          <p className="text-xs uppercase tracking-widest text-[#C5A059] font-mono">{prod.category}</p>
                          <h4 className="text-sm font-serif text-white font-medium">{prod.title}</h4>
                        </div>
                      </div>
                      <span className="text-sm font-mono font-semibold text-white whitespace-nowrap">
                        {prod.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Options */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium block">
                  Fulfillment & Delivery
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('courier')}
                    className={`p-3 text-left border text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer ${
                      deliveryMethod === 'courier'
                        ? 'border-[#C5A059] bg-[#C5A059]/10 text-white'
                        : 'border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Truck className="w-4 h-4 text-[#C5A059]" />
                    <span>White-Glove Express</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('boutique')}
                    className={`p-3 text-left border text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer ${
                      deliveryMethod === 'boutique'
                        ? 'border-[#C5A059] bg-[#C5A059]/10 text-white'
                        : 'border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-[#C5A059]" />
                    <span>Boutique Pickup (Paris)</span>
                  </button>
                </div>
              </div>

              {/* Gift Customization */}
              <div className="space-y-3 pt-2 border-t border-neutral-900">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={giftWrapping}
                    onChange={(e) => setGiftWrapping(e.target.checked)}
                    className="accent-[#C5A059] w-4 h-4"
                  />
                  <span className="text-xs uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                    <Gift className="w-3.5 h-3.5 text-[#C5A059]" />
                    Complimentary Chanel Signature Gift Packaging & Monogram Card
                  </span>
                </label>

                {giftWrapping && (
                  <input
                    type="text"
                    value={personalNote}
                    onChange={(e) => setPersonalNote(e.target.value)}
                    placeholder="Personal message for the recipient..."
                    className="w-full bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A059]"
                  />
                )}
              </div>

              {/* Client Info */}
              <div className="space-y-4 pt-4 border-t border-neutral-900">
                <label className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium block">
                  Client Information
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase text-neutral-400 tracking-wider block mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Lady Vivienne Sterling"
                      className="w-full bg-neutral-900 border border-neutral-800 px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-400 tracking-wider block mb-1">Private Email</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. client@sterling.com"
                      className="w-full bg-neutral-900 border border-neutral-800 px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-[10px] uppercase text-neutral-400 tracking-wider block mb-1">Delivery Address</label>
                    <input
                      required={deliveryMethod === 'courier'}
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. 14 Mayfair Square"
                      className="w-full bg-neutral-900 border border-neutral-800 px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-400 tracking-wider block mb-1">City / Country</label>
                    <input
                      required={deliveryMethod === 'courier'}
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="London, UK"
                      className="w-full bg-neutral-900 border border-neutral-800 px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>
              </div>

              {/* Order Summary Footer */}
              <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500">Total Acquisition</p>
                  <p className="text-xl font-mono text-white font-bold">{selectedProduct.price}</p>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#C5A059] text-black font-semibold text-xs uppercase tracking-[0.25em] hover:bg-white transition-colors cursor-pointer"
                >
                  Confirm Order
                </button>
              </div>

            </form>
          ) : (
            /* Order Success State */
            <div className="p-8 sm:p-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059]">Order Confirmed</span>
                <h3 className="text-2xl font-serif text-white">Maison Chanel Order {orderRef}</h3>
                <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Thank you, {fullName || 'valued client'}. Your acquisition of <strong className="text-white">{selectedProduct.title}</strong> has been reserved with white-glove priority.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-4 text-left max-w-md mx-auto text-xs space-y-2 font-mono">
                <div className="flex justify-between text-neutral-400">
                  <span>Creation:</span>
                  <span className="text-white font-sans">{selectedProduct.title}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Price:</span>
                  <span className="text-white">{selectedProduct.price}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Fulfillment:</span>
                  <span className="text-white capitalize">{deliveryMethod} Delivery</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Certificate:</span>
                  <span className="text-[#C5A059]">Digital Passport Verified</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Our Private Client Manager will contact you at {email || 'your email'} shortly.</span>
              </div>

              <button
                onClick={resetAndClose}
                className="mt-6 px-8 py-3 border border-neutral-800 text-white text-xs uppercase tracking-[0.2em] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
