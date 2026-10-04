import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const TheLouisLook: React.FC = () => {
  const editorialPanels = [
    {
      word: "STACKED",
      sub: "Double Patties · Aged Cheddar",
      image: "/images/louis_hero_craft.webp",
      colSpan: "lg:col-span-7",
      aspect: "aspect-[16/10]",
    },
    {
      word: "LOADED",
      sub: "Shimeji Truffle · Gold Warak",
      image: "/images/louis_dish_2.webp",
      colSpan: "lg:col-span-5",
      aspect: "aspect-square",
    },
    {
      word: "CRISPY",
      sub: "11mm Skin-On · Sea Salt",
      image: "/images/louis_dish_3.webp",
      colSpan: "lg:col-span-5",
      aspect: "aspect-square",
    },
    {
      word: "MESSY",
      sub: "House Animal Sauce · Brioche Melt",
      image: "/images/sohna_road_food_1.jpg",
      colSpan: "lg:col-span-7",
      aspect: "aspect-[16/10]",
    },
  ];

  return (
    <section id="craft" className="py-24 sm:py-32 bg-[#09090b] relative overflow-hidden border-t border-zinc-800/80">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#831843]/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#ea580c] mb-2">
            VISUAL IDENTITY
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white uppercase leading-[1.05]">
            THE LOUIS LOOK<span className="text-[#ea580c]">.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            A collision of dark luxury, Gurgaon late-night street culture, and uncompromising culinary design.
          </p>
        </div>

        {/* Fashion / Editorial Campaign Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {editorialPanels.map((panel) => (
            <div
              key={panel.word}
              className={`${panel.colSpan} relative rounded-2xl overflow-hidden group border border-zinc-800 bg-zinc-950 shadow-2xl`}
            >
              <div className={`relative ${panel.aspect} w-full overflow-hidden`}>
                <img
                  src={panel.image}
                  alt={`The Louis Look: ${panel.word}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8] contrast-[1.05]"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/sohna_road_banner.jpg';
                  }}
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent" />

                {/* Oversized Typography Lockup */}
                <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between pointer-events-none">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-bold text-[#ea580c]">
                      CAMPAIGN NO. 04
                    </span>
                    <span className="text-zinc-400 text-xs">
                      {panel.sub}
                    </span>
                  </div>

                  <div>
                    <span className="font-editorial text-6xl sm:text-8xl md:text-9xl text-white tracking-wider block leading-none select-none opacity-90 transition-transform duration-500 group-hover:translate-x-2">
                      {panel.word}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
