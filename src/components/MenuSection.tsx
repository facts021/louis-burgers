import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Sparkles, Filter, Leaf } from 'lucide-react';
import { MenuItem, DietaryType } from '../types';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/louisBurgerData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: Set<string>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, cartItemIds }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      // Dietary match
      const matchesDietary =
        dietaryFilter === 'all' || item.dietary === dietaryFilter;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags?.some((t) => t.toLowerCase().includes(query)) ||
        item.ingredientsHighlight?.some((i) => i.toLowerCase().includes(query));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#0c0c0e] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#ea580c] mb-2 flex items-center justify-center gap-2">
            <span>SOHNA ROAD CURRENT MENU</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase">
            EXPLORE THE COMPLETE MENU
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Prepared to order at our Eros City Square kitchen. Available for late-night delivery until 4:00 AM.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-10">
          {/* Horizontal Scrollable Category Selector (Functional Segmented Control) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c] ${
                  selectedCategory === cat
                    ? 'bg-[#ea580c] text-white shadow-lg shadow-[#ea580c]/25'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Secondary Controls: Search & Dietary Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search burgers, truffle, wings, fries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/90 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Toggle (Segmented control) */}
            <div className="flex items-center gap-1.5 p-1 bg-zinc-900/90 border border-zinc-800 rounded-lg self-end sm:self-auto">
              <button
                type="button"
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  dietaryFilter === 'all'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter('veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/80'
                    : 'text-zinc-400 hover:text-emerald-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Veg Only</span>
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter('non-veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-red-950/80 text-red-300 border border-red-800/80'
                    : 'text-zinc-400 hover:text-red-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>Non-Veg</span>
              </button>
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-zinc-900/40 rounded-xl border border-zinc-800">
            <p className="text-zinc-400 text-sm">No items found matching your filter.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#ea580c] font-semibold underline hover:text-orange-400"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const inCart = cartItemIds.has(item.id);
              return (
                <article
                  key={item.id}
                  className="flex flex-col bg-[#141417] border border-zinc-800/80 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-200 group"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/sohna_road_banner.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-transparent opacity-70" />

                    {/* Category unboxed marker */}
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider text-zinc-300 border border-zinc-700/60">
                      {item.category}
                    </div>

                    {/* Dietary indicator */}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm p-1.5 rounded border border-zinc-700/60">
                      <span
                        className={`block w-2.5 h-2.5 rounded-full ${
                          item.dietary === 'veg' ? 'bg-emerald-500' : 'bg-red-500'
                        }`}
                        title={item.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                      />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {item.tags && item.tags.length > 0 && (
                        <div className="text-[11px] text-[#ea580c] font-medium tracking-wide uppercase mb-1">
                          {item.tags[0]}
                        </div>
                      )}

                      <h3 className="font-display font-bold text-lg text-white group-hover:text-[#ea580c] transition-colors leading-tight">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Price and Add button */}
                    <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                      <span className="font-editorial text-2xl text-white tabular-nums">
                        ₹{item.price}
                      </span>

                      <button
                        type="button"
                        onClick={() => onAddToCart(item)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c] ${
                          inCart
                            ? 'bg-zinc-800 text-zinc-200 border border-zinc-700 hover:bg-zinc-700'
                            : 'bg-[#ea580c] text-white hover:bg-[#c2410c] shadow-md shadow-[#ea580c]/20'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>ADDED +1</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>ADD</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
