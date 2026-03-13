"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/store/useCartStore";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-white">
          ROSEBANK
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 uppercase text-xs font-medium tracking-widest text-white/70">
          <Link href="/menu" className="hover:text-heritage-gold transition-colors">Menu</Link>
          <Link href="/booking" className="hover:text-heritage-gold transition-colors">Reservations</Link>
          <Link href="/about" className="hover:text-heritage-gold transition-colors">Our Story</Link>
          <Link href="/contact" className="hover:text-heritage-gold transition-colors">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/cart" className="p-2 text-white/70 hover:text-heritage-gold transition-colors relative">
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 bg-heritage-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-bounce">
                {itemCount}
              </span>
            )}
          </Link>
          
          <button 
            className="md:hidden p-2 text-white/70"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <Link 
            href="/booking" 
            className="hidden md:block bg-heritage-red text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-heritage-red/20"
          >
            Book a Table
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col space-y-4 animate-fade-in text-white/70">
          <Link href="/menu" className="text-sm uppercase tracking-widest font-medium hover:text-heritage-gold" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
          <Link href="/booking" className="text-sm uppercase tracking-widest font-medium hover:text-heritage-gold" onClick={() => setIsMobileMenuOpen(false)}>Reservations</Link>
          <Link href="/about" className="text-sm uppercase tracking-widest font-medium hover:text-heritage-gold" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
          <Link href="/contact" className="text-sm uppercase tracking-widest font-medium hover:text-heritage-gold" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link 
            href="/booking" 
            className="bg-heritage-red text-white text-center py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl shadow-heritage-red/20"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Table
          </Link>
        </div>
      )}
    </nav>
  );
}
