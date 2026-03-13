"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import MenuCard from "@/components/MenuCard";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const CATEGORIES = ["All", "Starters", "Main Course", "Wine & Drinks", "Desserts"];

const MENU_ITEMS = [
  {
    id: "1",
    name: "Roasted Heritage Duck",
    category: "Main Course",
    price: 42.00,
    description: "Slow-roasted heritage duck breast with cherry reduction, parsnip silk, and pistachio dust.",
    image: "/dish.png"
  },
  {
    id: "2",
    name: "Truffle Velouté",
    category: "Starters",
    price: 18.50,
    description: "Creamy seasonal mushroom broth infused with black winter truffle and chive oil.",
    image: "/dish.png"
  },
  {
    id: "3",
    name: "Aged Wagyu Fillet",
    category: "Main Course",
    price: 64.00,
    description: "28-day aged wagyu beef served with smoked marrow butter and charred baby leeks.",
    image: "/dish.png"
  },
  {
    id: "4",
    name: "Saffron Risotto",
    category: "Main Course",
    price: 32.00,
    description: "Acquerello rice, Persian saffron, 36-month aged Parmesan, and edible gold leaf.",
    image: "/dish.png"
  },
  {
    id: "5",
    name: "Valrhona Soufflé",
    category: "Desserts",
    price: 16.00,
    description: "Dark chocolate soufflé with Madagascar vanilla bean gelato and gold flakes.",
    image: "/dish.png"
  },
  {
    id: "6",
    name: "Vintage Cabernet",
    category: "Wine & Drinks",
    price: 120.00,
    description: "Full-bodied vintage 2015 Cabernet Sauvignon with notes of dark fruit and cedar.",
    image: "/dish.png"
  }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-heritage-gold uppercase tracking-[0.4em] text-[10px] font-bold">
              Our Selection
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold italic text-white">
              Digital <span className="text-heritage-gold">Menu</span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input 
              type="text" 
              placeholder="Search for your favorite dish..."
              className="w-full bg-muted border border-white/5 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-heritage-red/50 transition-all text-sm text-white placeholder:text-white/10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                activeCategory === category 
                ? "bg-heritage-red text-white shadow-lg shadow-heritage-red/20" 
                : "bg-muted text-white/50 border border-white/5 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
            >
              <MenuCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
