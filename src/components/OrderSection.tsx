import React from 'react';
import { ArrowRight, ShoppingBag, ExternalLink, Clock } from 'lucide-react';
import { OUTLET_INFO } from '../data/louisBurgerData';

interface OrderSectionProps {
  onOpenCart: () => void;
  onExploreMenu: () => void;
}

export const OrderSection: React.FC<OrderSectionProps> = ({ onOpenCart, onExploreMenu }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#0c0c0e] relative overflow-hidden border-t border-zinc-800/80">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(234,88,12,0.12)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Unboxed Metadata Header */}
        <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#ea580c] mb-3 flex items-center justify-center gap-2">
          <Clock className="w-3.5 h-3.5" />
          <span>OPEN UNTIL 4:00 AM TONIGHT</span>
        </div>

        {/* Heading */}
        <h2 className="font-display font-black text-6xl sm:text-8xl tracking-tight text-white uppercase leading-none">
          HUNGRY?
        </h2>

        {/* Supporting text */}
        <p className="mt-5 text-lg sm:text-2xl text-zinc-300 font-light max-w-xl mx-auto text-balance">
          Your next burger is closer than you think.
        </p>

        <p className="mt-2 text-xs sm:text-sm text-zinc-500">
          Average delivery dispatch: 30–35 minutes across Gurugram Sector 49 & Sohna Road.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={OUTLET_INFO.swiggyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#ea580c] hover:bg-[#c2410c] rounded-md transition-all shadow-xl shadow-[#ea580c]/30 hover:-translate-y-0.5"
          >
            <span>ORDER NOW (SWIGGY)</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-md transition-all hover:-translate-y-0.5"
          >
            VIEW MENU
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-white bg-transparent hover:bg-zinc-900 border border-zinc-800 rounded-md transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>OPEN ORDER BAG</span>
          </button>
        </div>
      </div>
    </section>
  );
};
