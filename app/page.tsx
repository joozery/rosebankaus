"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { UtensilsCrossed, CalendarDays, ArrowRight, Play, Quote, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 z-0 bg-background overflow-hidden">
          <Image
            src="/hero.png"
            alt="Rosebank Heritage Cafe Interior"
            fill
            className="object-cover opacity-100 scale-105"
            priority
          />
          {/* Minimalist transition gradient only */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-heritage-gold uppercase tracking-[0.4em] text-[10px] font-bold drop-shadow-lg">
              Est. 1924 | Fine Dining
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              A Symphony of <span className="text-heritage-gold italic">Heritage & Taste</span>
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              Experience the finest gourmet cuisine in the heart of the city. 
              Where every dish tells a story of tradition and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link 
              href="/booking"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-heritage-red text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 hover:brightness-110 transition-all group shadow-2xl shadow-heritage-red/20"
            >
              <CalendarDays size={18} />
              Book a Table
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/menu"
              className="w-full md:w-auto flex items-center justify-center gap-2 glass px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-heritage-brown transition-all group"
            >
              <UtensilsCrossed size={18} />
              Order Online
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest font-bold">Discover More</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-3 gap-12 border-t border-white/5">
        <div className="space-y-6 group cursor-default">
          <div className="w-16 h-16 rounded-2xl bg-muted border border-white/5 flex items-center justify-center text-heritage-red group-hover:bg-heritage-red group-hover:text-white transition-all duration-500 shadow-xl">
            <UtensilsCrossed size={32} />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">Gourmet Menu</h3>
          <p className="text-muted-foreground font-light leading-relaxed">
            Curated by Michelin-starred chefs, our menu features seasonal ingredients sourced from local organic farms.
          </p>
        </div>

        <div className="space-y-6 group cursor-default">
          <div className="w-16 h-16 rounded-2xl bg-muted border border-white/5 flex items-center justify-center text-heritage-brown group-hover:bg-heritage-brown group-hover:text-white transition-all duration-500 shadow-xl">
            <CalendarDays size={32} />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">Private Events</h3>
          <p className="text-muted-foreground font-light leading-relaxed">
            From intimate dinners to grand celebrations, our heritage spaces provide the perfect backdrop for your events.
          </p>
        </div>

        <div className="space-y-6 group cursor-default border-heritage-red/20">
          <div className="w-16 h-16 rounded-2xl bg-muted border border-white/5 flex items-center justify-center text-heritage-gold group-hover:bg-heritage-gold group-hover:text-white transition-all duration-500 shadow-xl">
            <ShoppingBag size={32} />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">Fast Delivery</h3>
          <p className="text-muted-foreground font-light leading-relaxed">
            Enjoy our heritage dishes from the comfort of your home with our premium, eco-friendly delivery service.
          </p>
        </div>
      </section>

      {/* Chef's Special Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden border border-white/5"
          >
            <Image 
              src="/chef.png" 
              alt="Executive Chef" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-heritage-gold uppercase tracking-[0.4em] text-[10px] font-bold">
              Culinary Craftsmanship
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold italic leading-tight text-white">
              Meet Our <span className="text-heritage-gold">Executive Chef</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed italic">
              "Cooking is not just about ingredients; it's about the heritage we carry into every plate. At Rosebank, we prepare stories, not just meals."
            </p>
            <div className="space-y-4 text-muted-foreground font-light">
              <p>With over two decades of experience in world-class kitchens, Chef Julian brings a unique blend of traditional techniques and modern culinary artistry to your table.</p>
              <p>Every signature dish is a testament to his passion for authentic flavors and perfect presentation.</p>
            </div>
            <Link href="/about" className="inline-flex items-center gap-4 text-heritage-red font-bold uppercase tracking-widest text-xs hover:gap-6 transition-all group">
              Read Our Story
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Video Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Cinematic Atmosphere" 
            fill 
            className="object-cover opacity-40 scale-110" 
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center space-y-8 px-6">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-24 h-24 rounded-full bg-heritage-red text-white flex items-center justify-center mx-auto shadow-2xl shadow-heritage-red/40 group"
          >
            <Play size={32} fill="currentColor" className="ml-1" />
          </motion.button>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-serif font-bold italic text-white">The Atmosphere</h3>
            <p className="text-heritage-gold uppercase tracking-[0.4em] text-[10px] font-bold">Watch our cinematic experience</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-heritage-gold uppercase tracking-[0.4em] text-[10px] font-bold">
              Guest Experiences
            </span>
            <h2 className="text-5xl font-serif font-bold italic text-white">What People <span className="text-heritage-gold">Say</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alexander Wright",
                role: "Food Critic",
                content: "An absolute masterpiece of culinary art. The duck reduction is something I will dream about for weeks.",
                stars: 5
              },
              {
                name: "Sophia Martinez",
                role: "Regular Guest",
                content: "The best fine dining experience in London. The atmosphere takes you back to a golden era of elegance.",
                stars: 5
              },
              {
                name: "James Chen",
                role: "Wine Enthusiast",
                content: "Exquisite wine pairing and impeccable service. Rosebank remains my top choice for special celebrations.",
                stars: 5
              }
            ].map((testi, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 rounded-[2rem] space-y-6 relative border-white/5"
              >
                <Quote className="text-heritage-red absolute top-8 right-8 opacity-20" size={40} />
                <div className="flex gap-1 text-heritage-gold">
                  {[...Array(testi.stars)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-muted-foreground font-light italic leading-relaxed">"{testi.content}"</p>
                <div>
                  <h4 className="font-bold text-white">{testi.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-heritage-brown font-bold">{testi.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ShoppingBag({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}
