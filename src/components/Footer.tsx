import React, { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, ExternalLink, ArrowUp } from 'lucide-react';
import { OUTLET_INFO } from '../data/louisBurgerData';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-zinc-900 text-zinc-400 py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-zinc-900">
          
          {/* Brand & Concept (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/louis_burger_logo.png"
                alt="Louis Burger"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                LOUIS<span className="text-[#ea580c]">.</span>BURGER
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Artisanal gourmet burgers crafted by Massive Restaurants. Paying homage to Louis Lassen (1900) with cloud-light milk-washed buns, mature English cheddar, and signature 11mm skin-on fries.
            </p>

            <div className="pt-2 text-xs text-zinc-500">
              Corporate HQ: {OUTLET_INFO.corporateHq}
            </div>
          </div>

          {/* Sohna Road Verified Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-white">
              SOHNA ROAD OUTLET
            </div>

            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span>{OUTLET_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#ea580c] shrink-0" />
                <span>{OUTLET_INFO.timings} (Open 7 Days a Week)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ea580c] shrink-0" />
                <a href={`tel:${OUTLET_INFO.phone}`} className="hover:text-white transition-colors font-mono">
                  {OUTLET_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Direct Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-white">
              DIRECT CHANNELS
            </div>

            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={OUTLET_INFO.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Order on Swiggy</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={OUTLET_INFO.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Order on Zomato</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={OUTLET_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={OUTLET_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Instagram @louisburgerofficial</span>
                  <Instagram className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 Massive Restaurants Pvt. Ltd. · Louis Burger Sohna Road, Gurugram.
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:text-zinc-300 transition-colors"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Simple Policy Modal */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-[#121215] border border-zinc-800 rounded-xl p-6 sm:p-8 max-w-lg w-full text-zinc-300 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display font-bold text-lg text-white">
              {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <p className="text-xs leading-relaxed text-zinc-400">
              {activeModal === 'privacy'
                ? 'Louis Burger and Massive Restaurants Pvt. Ltd. respect customer privacy. Customer ordering data and delivery information are processed through our authorized delivery partners (Swiggy, Zomato) adhering to Indian data protection protocols.'
                : 'All menu pricing, item availability, and delivery radius are subject to partner platform terms and seasonal supply. Food safety, hygiene, and kitchen operations comply strictly with FSSAI standards.'}
            </p>
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded text-xs font-semibold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
