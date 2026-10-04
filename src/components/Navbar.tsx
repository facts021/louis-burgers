import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Phone, MapPin } from 'lucide-react';
import { OUTLET_INFO } from '../data/louisBurgerData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigateMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu', onClick: onNavigateMenu },
    { label: 'About', href: '#about' },
    { label: 'Craft', href: '#craft' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark (Single element) */}
            <a
              href="#"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c] rounded"
              aria-label="Louis Burger Home"
            >
              <img
                src="/images/louis_burger_logo.png"
                alt="Louis Burger"
                className="h-8 md:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                LOUIS<span className="text-[#ea580c]">.</span>BURGER
              </span>
            </a>

            {/* Zone 2: Navigation Links (Text with subtle hover state) */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={link.onClick}
                  className="transition-colors hover:text-white relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ea580c] rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="flex items-center gap-3">
              {/* Order Bag Button */}
              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-2.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c]"
                aria-label={`View order bag with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#ea580c] text-white text-[11px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Primary Order Now Button */}
              <a
                href={OUTLET_INFO.swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wide uppercase text-white bg-[#ea580c] hover:bg-[#c2410c] rounded-md transition-colors shadow-lg shadow-[#ea580c]/20 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Order Now
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#09090b]/98 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8 animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-4">
              Sohna Road, Gurugram
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (link.onClick) link.onClick();
                }}
                className="block text-2xl font-display font-bold text-zinc-100 hover:text-[#ea580c] transition-colors py-2 border-b border-zinc-800/60"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={OUTLET_INFO.swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-white bg-[#ea580c] rounded-lg shadow-lg shadow-[#ea580c]/30"
              >
                Order on Swiggy
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-zinc-200 bg-zinc-800/90 rounded-lg hover:bg-zinc-700"
              >
                View Order Bag ({cartCount})
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800/80 text-xs text-zinc-400 space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#ea580c] shrink-0" />
              <span>Eros City Square Mall, 1st Floor, Sector 49, Sohna Road</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#ea580c] shrink-0" />
              <a href={`tel:${OUTLET_INFO.phone}`} className="hover:text-white transition-colors">
                {OUTLET_INFO.phone}
              </a>
              <span className="text-zinc-400">·</span>
              <span className="text-emerald-400 font-medium">Open till 4:00 AM</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
