import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { OUTLET_INFO } from '../data/louisBurgerData';

export const InstagramFeed: React.FC = () => {
  const feedImages = [
    {
      src: "/images/louis_hero_craft.webp",
      alt: "Louis Burger Double Stack",
    },
    {
      src: "/images/louis_dish_2.webp",
      alt: "Louis Grand Royale Gold Warak",
    },
    {
      src: "/images/louis_dish_3.webp",
      alt: "Signature 11mm Skin-on Fries & Packaging",
    },
    {
      src: "/images/louis_dish_1.webp",
      alt: "Smash Lamb & Buff Cheeseburgers",
    },
    {
      src: "/images/sohna_road_food_1.jpg",
      alt: "Crispy Buttermilk Chicken Burger",
    },
    {
      src: "/images/sohna_road_food_2.jpg",
      alt: "Swiss Cottage Cheese Burger",
    },
  ];

  return (
    <section className="py-20 bg-[#09090b] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#ea580c] mb-2 flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>COMMUNITY & FEED</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl tracking-tight text-white uppercase">
              FROM THE LOUIS FEED
            </h2>
          </div>

          <a
            href={OUTLET_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors"
          >
            <span>@louisburgerofficial</span>
            <ArrowUpRight className="w-4 h-4 text-[#ea580c]" />
          </a>
        </div>

        {/* 6-Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {feedImages.map((img, i) => (
            <a
              key={i}
              href={OUTLET_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/80 block"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/sohna_road_banner.jpg';
                }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
