"use client";

import Navbar from "@/components/Navbar";
import { useCartStore } from "@/lib/store/useCartStore";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Check } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, total, clearCart } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = async () => {
    if (items.length === 0) return;
    
    setIsCheckingOut(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          total: total(),
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        clearCart();
        toast.success("Order placed successfully!");
      } else {
        toast.error("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-background text-white">
        <Navbar />
        <div className="pt-48 pb-24 px-6 max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="w-24 h-24 bg-heritage-red/20 text-heritage-red rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-heritage-red/20">
            <Check size={48} strokeWidth={3} />
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-serif font-bold italic">Order <span className="text-heritage-gold">Received</span></h1>
            <p className="text-muted-foreground text-lg italic">Thank you for choosing Rosebank. Your gourmet meal is being prepared with traditional heritage craft.</p>
          </div>
          <div className="pt-8">
            <Link 
              href="/menu"
              className="bg-heritage-red text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-heritage-red/20"
            >
              Order More
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />

      <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-12">
        <header className="space-y-4">
          <span className="text-heritage-gold uppercase tracking-[0.4em] text-[10px] font-bold">
            Your Selection
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold italic">
            Shopping <span className="text-heritage-gold">Bag</span>
          </h1>
        </header>

        {items.length === 0 ? (
          <div className="text-center py-20 space-y-8 bg-card border border-white/5 rounded-3xl">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto text-white/10">
              <ShoppingBag size={48} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold">Your bag is empty</h2>
              <p className="text-muted-foreground">Looks like you haven't added anything to your bag yet.</p>
            </div>
            <Link 
              href="/menu"
              className="inline-flex items-center gap-2 bg-heritage-red text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-heritage-red/20"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="glass p-6 rounded-2xl flex items-center gap-6"
                  >
                    <div className="flex-1 space-y-1">
                      <h3 className="text-xl font-serif font-bold">{item.name}</h3>
                      <p className="text-heritage-gold font-bold">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-4 bg-muted px-4 py-2 rounded-full border border-white/5">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-white/50 hover:text-white transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-white/50 hover:text-white transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-white/20 hover:text-heritage-red transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="space-y-6">
              <div className="glass p-8 rounded-3xl space-y-8 sticky top-32">
                <h3 className="text-2xl font-serif font-bold">Order Summary</h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="text-white">${total().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery</span>
                    <span className="text-heritage-green font-bold">FREE</span>
                  </div>
                  <div className="border-t border-white/5 pt-4 flex justify-between text-xl font-serif font-bold">
                    <span>Total</span>
                    <span className="text-heritage-gold">${total().toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-heritage-red text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-heritage-red/20 flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {isCheckingOut ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Checkout Now
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest leading-relaxed">
                  Secure Checkout Powered by Heritage Pay
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
