import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { SignatureShowcase } from './components/SignatureShowcase';
import { MenuSection } from './components/MenuSection';
import { TheLouisLook } from './components/TheLouisLook';
import { FoodGallery } from './components/FoodGallery';
import { SohnaRoadLocation } from './components/SohnaRoadLocation';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramFeed } from './components/InstagramFeed';
import { OrderSection } from './components/OrderSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { MenuItem, CartItem } from './types';
import { OUTLET_INFO } from './data/louisBurgerData';
import { ShoppingBag, ArrowRight, Check } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const totalCartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const cartItemIds = useMemo(() => {
    return new Set(cart.map((c) => c.item.id));
  }, [cart]);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });

    setToastMessage(`Added ${item.name} to order bag`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#ea580c] selection:text-white flex flex-col font-sans">
      {/* Sticky Glass Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateMenu={handleExploreMenu}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Full-Screen Hero */}
        <Hero
          onExploreMenu={handleExploreMenu}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Brand Editorial Intro with Zorawar Kalra verified background */}
        <BrandIntro />

        {/* Signature Showcase - Editorial Food Magazine Style */}
        <SignatureShowcase
          onAddToCart={handleAddToCart}
          onExploreFullMenu={handleExploreMenu}
        />

        {/* The Louis Look - Visual Brand Typography Campaign */}
        <TheLouisLook />

        {/* Complete Interactive Menu Section */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* Real Food & Outlet Masonry Gallery with Lightbox */}
        <FoodGallery />

        {/* Verified Sohna Road Location, Hours, Phone & Map */}
        <SohnaRoadLocation />

        {/* Verified Customer Reviews */}
        <ReviewsSection />

        {/* From The Louis Feed (Instagram) */}
        <InstagramFeed />

        {/* Conversion Order Call-to-Action */}
        <OrderSection
          onOpenCart={() => setIsCartOpen(true)}
          onExploreMenu={handleExploreMenu}
        />
      </main>

      {/* Sophisticated Dark Footer */}
      <Footer />

      {/* Interactive Order Bag Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Add-to-Bag Toast Notification */}
      {toastMessage && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#18181b]/95 border border-zinc-700 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="ml-2 font-bold text-[#ea580c] hover:underline uppercase text-xs"
          >
            View Bag
          </button>
        </aside>
      )}

      {/* Mobile Sticky Quick Order Action (Only visible when items in cart on mobile) */}
      {totalCartCount > 0 && (
        <aside
          aria-label="Order summary"
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#09090b]/95 backdrop-blur-lg border-t border-zinc-800 p-3 px-4 flex items-center justify-between"
        >
          <div>
            <span className="text-[11px] text-zinc-400 uppercase font-semibold block">
              Bag Total ({totalCartCount} items)
            </span>
            <span className="font-editorial text-xl text-white">
              ₹
              {cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0)}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#ea580c]"
          >
            <span>Review Bag</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}
    </div>
  );
}
