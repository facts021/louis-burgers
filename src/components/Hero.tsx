import React from 'react';
import { ArrowRight, Sparkles, Clock, MapPin, Star } from 'lucide-react';
import { OUTLET_INFO } from '../data/louisBurgerData';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenCart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#09090b]">
      {/* Background Media with Slow Cinematic Zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/louis_hero_craft.webp"
          alt="Louis Burger Signature Craft Burger"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_14s_ease-in-out_infinite] brightness-[0.72] contrast-[1.08]"
          loading="eager"
        />
        {/* Measured Scrim Overlays ensuring WCAG AA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-[#09090b]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#09090b_90%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
        {/* Location Indicator (Unboxed clean metadata, no pill badge) */}
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#ea580c] mb-6">
          <MapPin className="w-3.5 h-3.5" />
          <span>SOHNA ROAD</span>
          <span className="text-zinc-600" aria-hidden="true">•</span>
          <span>GURUGRAM</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase text-balance max-w-4xl leading-[0.95]">
          BURGERS.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ea580c]">
            DONE DIFFERENT.
          </span>
        </h1>

        {/* Supporting Line */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 font-light max-w-2xl text-balance">
          <span className="font-semibold text-white">Louis Burger — Sohna Road, Gurugram</span>.
          Gourmet craft burgers with cloud-light milk-washed buns, mature English cheddar, and signature 11mm skin-on fries.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href={OUTLET_INFO.swiggyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#ea580c] hover:bg-[#c2410c] rounded-md transition-all shadow-xl shadow-[#ea580c]/25 hover:shadow-[#ea580c]/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>ORDER NOW</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 rounded-md transition-all backdrop-blur-sm hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c]"
          >
            EXPLORE MENU
          </button>
        </div>

        {/* Unboxed Metadata Trust Bar (Clean typographic separators) */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#ea580c]" />
            <span className="text-zinc-200 font-medium">11:30 AM – 4:00 AM</span>
            <span className="text-zinc-400">·</span>
            <span className="text-amber-400 font-medium">Late Night Fuel</span>
          </div>

          <span className="hidden sm:inline text-zinc-600" aria-hidden="true">/</span>

          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-zinc-200 font-medium">4.0 Rating</span>
            <span className="text-zinc-400">·</span>
            <span>4.9K+ Swiggy Orders</span>
          </div>

          <span className="hidden sm:inline text-zinc-600" aria-hidden="true">/</span>

          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ea580c]" />
            <span className="text-zinc-200 font-medium">Eros City Square</span>
            <span className="text-zinc-400">·</span>
            <span>Sector 49</span>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Edge Hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
};
