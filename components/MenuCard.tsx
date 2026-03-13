"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/lib/store/useCartStore";
import { toast } from "sonner";

interface MenuCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function MenuCard({ id, name, description, price, image }: MenuCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id, name, price, quantity: 1 });
    toast.success(`${name} added to your bag!`, {
      style: {
        background: '#141414',
        border: '1px solid rgba(255,255,255,0.05)',
        color: '#fff',
      },
      icon: <Plus className="text-heritage-red" size={16} />
    });
  };

  return (
    <div className="group relative glass p-4 rounded-[1.5rem] hover:bg-heritage-brown/10 border-white/5 transition-all duration-500 hover:-translate-y-1">
      <div className="relative h-48 w-full mb-6 overflow-hidden rounded-2xl">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-heritage-red/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white shadow-xl">
          ${price.toFixed(2)}
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-serif font-bold text-white group-hover:text-heritage-gold transition-colors">{name}</h3>
        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 italic">
          {description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-heritage-gold transition-colors">
          View Details
        </button>
        <button 
          onClick={handleAddToCart}
          className="w-10 h-10 rounded-full bg-heritage-red text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg shadow-heritage-red/40 hover:brightness-110"
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
}
