import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { OUTLET_INFO } from '../data/louisBurgerData';

export const SohnaRoadLocation: React.FC = () => {
  return (
    <section id="location" className="py-24 sm:py-32 bg-[#09090b] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#ea580c] mb-2">
            DESTINATION & DELIVERY
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase">
            FIND YOUR LOUIS<span className="text-[#ea580c]">.</span>
          </h2>
          <p className="mt-3 text-base text-zinc-300 font-medium">
            Louis Burger – Sohna Road, Gurugram
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Centrally stationed at Sector 49 to serve Sohna Road, Golf Course Extension, South City II, and Nirvana Country.
          </p>
        </div>

        {/* Location Showcase Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Outlet Details & Actions (5 cols) */}
          <div className="lg:col-span-5 bg-[#121215] border border-zinc-800/80 rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Cloud Kitchen & Takeout</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white">
                Eros City Square Outlet
              </h3>

              {/* Verified Details List */}
              <div className="mt-6 space-y-5 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Exact Address</div>
                    <div className="text-zinc-300 mt-0.5 leading-relaxed">
                      {OUTLET_INFO.address}
                    </div>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Operating Hours</div>
                    <div className="text-zinc-200 mt-0.5 font-medium">
                      {OUTLET_INFO.timings}
                    </div>
                    <div className="text-xs text-amber-400 mt-0.5">
                      ★ {OUTLET_INFO.lateNightNote}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Direct Kitchen Contact</div>
                    <a
                      href={`tel:${OUTLET_INFO.phone}`}
                      className="text-[#ea580c] hover:underline font-mono text-sm block mt-0.5"
                    >
                      {OUTLET_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Pricing Reference */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <span>Average Cost</span>
                  <span className="font-medium text-white">{OUTLET_INFO.costForTwo}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col gap-3">
              <a
                href={OUTLET_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700 focus:outline-none"
              >
                <Navigation className="w-4 h-4 text-[#ea580c]" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href={`tel:${OUTLET_INFO.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-300 bg-zinc-900 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-800 focus:outline-none"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store for Inquiries</span>
              </a>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={OUTLET_INFO.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#ea580c] hover:bg-[#c2410c] transition-colors shadow-lg shadow-[#ea580c]/20"
                >
                  <span>Swiggy</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={OUTLET_INFO.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#cb202d] hover:bg-[#a81a24] transition-colors shadow-lg shadow-[#cb202d]/20"
                >
                  <span>Zomato</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Dark Map Frame & Outlet Ambience (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Embedded Google Map with Dark Card Wrapper */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl flex-1 min-h-[340px]">
              <iframe
                title="Louis Burger Sohna Road Location Map"
                src="https://maps.google.com/maps?q=Eros%20City%20Square%20Mall,%20Sector%2049,%20Sohna%20Road,%20Gurgaon&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[320px] rounded-2xl"
              />

              {/* Pin Overlay Badge */}
              <div className="absolute top-4 left-4 bg-[#09090b]/90 backdrop-blur-md px-3 py-2 rounded-lg border border-zinc-800 shadow-xl flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] animate-ping" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Eros City Square · 1st Floor
                </span>
              </div>
            </div>

            {/* Verified Outlet Ambience / Kitchen Snapshot */}
            <div className="bg-[#121215] border border-zinc-800/80 rounded-2xl p-5 flex items-center gap-5">
              <img
                src="/images/louis_sohna_road_official.jpg"
                alt="Louis Burger Sohna Road Kitchen"
                className="w-20 h-20 rounded-xl object-cover border border-zinc-700 shrink-0"
              />
              <div className="text-xs sm:text-sm">
                <div className="font-semibold text-white">
                  State-of-the-art Hygiene & Fast Dispatch
                </div>
                <p className="text-zinc-400 mt-1">
                  Engineered with commercial high-output smash griddles and humidity-controlled heat chutes to deliver hot, uncrushed burgers across Sector 49 & Sohna Road.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
