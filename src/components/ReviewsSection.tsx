import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { CUSTOMER_REVIEWS, OUTLET_INFO } from '../data/louisBurgerData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#0c0c0e] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#ea580c] mb-2 flex items-center justify-center gap-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>VERIFIED LOCAL VOICES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase">
            GURGAON GOURMET REVIEWS
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Sourced directly from public Swiggy, Google & Magicpin diner reviews for our Sector 49, Sohna Road outlet.
          </p>
        </div>

        {/* Reviews 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#121215] border border-zinc-800/80 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors shadow-xl"
            >
              <div>
                {/* Rating stars & verified source */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {rev.source} Verified
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author & favorite item */}
              <div className="mt-8 pt-5 border-t border-zinc-800/60">
                <div className="font-semibold text-white text-sm">
                  {rev.author}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {rev.location}
                </div>
                <div className="text-xs text-[#ea580c] font-medium mt-2">
                  Fav: {rev.favoriteDish}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Rating Badge Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <span className="font-editorial text-4xl text-white block">4.0 / 5.0</span>
            <span className="text-xs text-zinc-400 mt-1 block">Average Rating on Swiggy</span>
          </div>

          <div className="hidden sm:block w-px h-10 bg-zinc-800" />

          <div>
            <span className="font-editorial text-4xl text-[#ea580c] block">4,900+</span>
            <span className="text-xs text-zinc-400 mt-1 block">Verified Orders Delivered</span>
          </div>

          <div className="hidden sm:block w-px h-10 bg-zinc-800" />

          <div>
            <span className="font-editorial text-4xl text-white block">4:00 AM</span>
            <span className="text-xs text-zinc-400 mt-1 block">Nightly Service Dispatch</span>
          </div>
        </div>
      </div>
    </section>
  );
};
