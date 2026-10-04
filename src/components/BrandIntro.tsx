import React from 'react';
import { Sparkles, Award, ChefHat, Check } from 'lucide-react';
import { BRAND_PILLARS } from '../data/louisBurgerData';

export const BrandIntro: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0c0c0e] border-b border-zinc-800/80 overflow-hidden">
      {/* Subtle Ambient Background Accent */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#831843]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#ea580c]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Typography & Brand Narrative (7 cols) */}
          <div className="lg:col-span-7">
            {/* Small Label */}
            <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#ea580c] mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-[#ea580c]" />
              <span>THE BURGER CULTURE</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] text-balance">
              CRAFT BURGERS.<br />
              <span className="text-zinc-400 font-light">AN ARTISANAL HOMAGE TO 1900.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              Louis Burger is a culinary tribute to <strong className="text-white font-semibold">Louis Lassen</strong>,
              credited with introducing the hamburger to the world in 1900 at Louis&apos; Lunch in New Haven, Connecticut.
            </p>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              Spearheaded by celebrity restaurateur <strong className="text-zinc-200">Zorawar Kalra</strong> and the culinary team behind
              <strong className="text-zinc-200"> Massive Restaurants</strong>, Louis Burger reimagines the classic American burger
              through obsessive ingredient rigor: freshly baked milk-washed cloud-light buns, exclusively sourced mature English cheddar,
              house fermented sauces, and true 11mm skin-on fries.
            </p>

            {/* Founder & Group Credential Pill-less Metadata */}
            <div className="mt-8 p-5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-4">
              <img
                src="/images/zorawar_kalra.webp"
                alt="Zorawar Kalra, Founder Massive Restaurants"
                className="w-14 h-14 rounded-full object-cover border border-zinc-700 shrink-0"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="text-xs sm:text-sm">
                <div className="font-semibold text-white">Curated by Zorawar Kalra</div>
                <div className="text-zinc-400 text-xs mt-0.5">
                  Massive Restaurants Pvt. Ltd. · Farzi Café · Pa Pa Ya · Masala Library
                </div>
              </div>
            </div>

            {/* Pillar Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-zinc-800/60">
              {BRAND_PILLARS.map((pillar) => (
                <div key={pillar.number} className="group">
                  <div className="font-editorial text-2xl text-[#ea580c] mb-1">
                    {pillar.number}.
                  </div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-[#ea580c] transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs text-zinc-400 font-medium mb-1.5">
                    {pillar.tagline}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Real Louis Burger Photograph (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src="/images/louis_dish_1.webp"
                alt="Authentic Louis Burger Smash Seared Creation"
                className="w-full h-[480px] sm:h-[540px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Media Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />

              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[11px] uppercase tracking-widest text-[#ea580c] font-bold">
                  AUTUMN 2026 ARTISAN CRAFT
                </div>
                <div className="font-display font-bold text-xl text-white mt-1">
                  Smash Seared Crust & Milk-Washed Brioche
                </div>
                <div className="text-xs text-zinc-300 mt-1">
                  Photographed in the Louis Burger test kitchen.
                </div>
              </div>
            </div>

            {/* Floating Luxury Spec Accent */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#18181b] border border-zinc-700/80 rounded-xl p-4 shadow-2xl max-w-xs backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-1">
                <ChefHat className="w-4 h-4" />
                <span>The Louis Standard</span>
              </div>
              <p className="text-xs text-zinc-300">
                11mm skin-on potatoes, twice-fried in small batches for unmistakable crunch.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
