import React from 'react';
import { ArrowRight, Plus, Sparkles, Check } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/louisBurgerData';

interface SignatureShowcaseProps {
  onAddToCart: (item: MenuItem) => void;
  onExploreFullMenu: () => void;
}

export const SignatureShowcase: React.FC<SignatureShowcaseProps> = ({ onAddToCart, onExploreFullMenu }) => {
  // Select top verified signature items
  const signatureItems = [
    MENU_ITEMS.find((i) => i.id === 'louis-grand-royale')!,
    MENU_ITEMS.find((i) => i.id === 'truffletake-burger')!,
    MENU_ITEMS.find((i) => i.id === 'louis-signature-chicken')!,
    MENU_ITEMS.find((i) => i.id === 'the-louis-fried-chicken' || i.id === 'louis-fried-chicken')!,
    MENU_ITEMS.find((i) => i.id === 'monster-cheeseburger')!,
    MENU_ITEMS.find((i) => i.id === 'korean-fried-chicken')!,
  ].filter(Boolean);

  return (
    <section id="signatures" className="py-24 sm:py-32 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-zinc-800/80 gap-6">
          <div>
            <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#ea580c] mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CURATED EDIT</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase">
              SIGNATURE CREATIONS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl">
              Artisan compositions crafted with milk-washed buns, slow-cooked reductions, and mature cheeses.
            </p>
          </div>

          <button
            type="button"
            onClick={onExploreFullMenu}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-200 hover:text-[#ea580c] transition-colors focus:outline-none"
          >
            <span>VIEW COMPLETE MENU</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Editorial Magazine Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {signatureItems.map((item, idx) => (
            <article
              key={item.id}
              className="group flex flex-col bg-[#121215] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Media Slot */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to banner if specific image is unavailable
                    (e.target as HTMLImageElement).src = '/images/sohna_road_banner.jpg';
                  }}
                />
                
                {/* Media Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-80" />

                {/* Editorial Index Number */}
                <span className="absolute top-4 left-4 font-editorial text-2xl text-zinc-400/80 drop-shadow">
                  0{idx + 1}
                </span>

                {/* Dietary Clean Icon */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-zinc-700/60 flex items-center gap-1.5 text-[11px] font-semibold">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.dietary === 'veg' ? 'bg-emerald-500' : 'bg-red-500'
                    }`}
                  />
                  <span className="text-zinc-300 uppercase tracking-wider text-[10px]">
                    {item.dietary === 'veg' ? 'VEG' : 'NON-VEG'}
                  </span>
                </div>
              </div>

              {/* Editorial Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed tags with separator */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="text-[11px] font-medium text-[#ea580c] uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span>{item.tags[0]}</span>
                      {item.tags[1] && (
                        <>
                          <span className="text-zinc-600" aria-hidden="true">·</span>
                          <span className="text-zinc-400">{item.tags[1]}</span>
                        </>
                      )}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#ea580c] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Highlight Ingredients (Unboxed text) */}
                  {item.ingredientsHighlight && (
                    <div className="mt-4 pt-3 border-t border-zinc-800/60 flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-zinc-400">
                      {item.ingredientsHighlight.map((ing, i) => (
                        <React.Fragment key={ing}>
                          <span>{ing}</span>
                          {i < item.ingredientsHighlight!.length - 1 && (
                            <span className="text-zinc-700" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price & Action Row */}
                <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-zinc-400 block uppercase tracking-wider font-semibold">
                      Verified Price
                    </span>
                    <span className="font-editorial text-2xl sm:text-3xl text-white tabular-nums tracking-wide">
                      ₹{item.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onAddToCart(item)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#ea580c] hover:bg-[#c2410c] transition-all shadow-md shadow-[#ea580c]/20 hover:shadow-[#ea580c]/35 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>ADD TO ORDER</span>
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
