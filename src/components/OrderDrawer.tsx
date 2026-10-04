import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ExternalLink, Phone, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';
import { OUTLET_INFO } from '../data/louisBurgerData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, ci) => sum + ci.item.price * ci.quantity,
    0
  );
  const packagingFee = subtotal > 0 ? 25 : 0;
  const gst = Math.round(subtotal * 0.05); // 5% restaurant GST
  const grandTotal = subtotal + packagingFee + gst;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div
          className="w-screen max-w-md bg-[#121215] border-l border-zinc-800 shadow-2xl flex flex-col justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#ea580c]" />
              <h2 className="font-display font-bold text-lg text-white">
                YOUR ORDER BAG
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-600 mb-4 border border-zinc-800">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="font-display font-bold text-lg text-white">
                  Your bag is currently empty
                </div>
                <p className="text-xs text-zinc-400 max-w-xs mt-1">
                  Explore our craft burger menu and select items to build your customized order.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-zinc-800/60">
                  <span>Selected Dishes ({cartItems.length})</span>
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="text-zinc-500 hover:text-red-400 transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {cartItems.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3.5"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-lg object-cover bg-zinc-800 shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/sohna_road_banner.jpg';
                        }}
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold text-sm text-white truncate">
                            {item.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.id)}
                            className="text-zinc-500 hover:text-red-400 p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-xs text-zinc-400 mt-0.5">
                          ₹{item.price} each
                        </div>

                        {/* Quantity and Line Total */}
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-zinc-800/80 rounded-lg p-1 border border-zinc-700/60">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 text-zinc-300 hover:text-white rounded hover:bg-zinc-700"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-mono font-bold text-white px-2">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 text-zinc-300 hover:text-white rounded hover:bg-zinc-700"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="font-editorial text-lg text-white tabular-nums">
                            ₹{item.price * quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery reassurance note */}
                <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-400 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Freshly prepared at Eros City Square, Sohna Road. 30–35 min dispatch.</span>
                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout Actions */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-zinc-800/80 bg-zinc-950/90 space-y-4">
              {/* Cost Breakdown */}
              <div className="space-y-1.5 text-xs text-zinc-400">
                <div className="flex justify-between">
                  <span>Item Subtotal</span>
                  <span className="font-mono text-zinc-200">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tamper-proof Packaging</span>
                  <span className="font-mono text-zinc-200">₹{packagingFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Govt. Taxes (GST 5%)</span>
                  <span className="font-mono text-zinc-200">₹{gst}</span>
                </div>
                <div className="pt-2 border-t border-zinc-800 flex justify-between text-sm font-bold text-white">
                  <span>Grand Total</span>
                  <span className="font-editorial text-2xl text-[#ea580c] tabular-nums">
                    ₹{grandTotal}
                  </span>
                </div>
              </div>

              {/* Direct Ordering Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={OUTLET_INFO.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#ea580c] hover:bg-[#c2410c] transition-colors shadow-lg shadow-[#ea580c]/25"
                >
                  <span>Complete Order on Swiggy</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={OUTLET_INFO.zomatoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#cb202d] hover:bg-[#b01c27] transition-colors"
                  >
                    <span>Zomato</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={`tel:${OUTLET_INFO.phone}`}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-200 bg-zinc-800 hover:bg-zinc-700 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Kitchen</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
