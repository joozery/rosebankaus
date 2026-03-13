"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
        <header className="space-y-4 text-center md:text-left">
          <span className="text-heritage-gold uppercase tracking-[0.4em] text-[10px] font-bold">
            Established 1924
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold italic leading-tight">
            A Century of <span className="text-heritage-gold">Heritage</span>
          </h1>
        </header>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg"
          >
            <p>
              Rosebank Heritage Cafe began its journey a century ago, nestled in the heart of the city's golden district. Originally a meeting place for visionaries and artists, it has evolved into a sanctuary for those who appreciate the fine art of dining.
            </p>
            <p>
              Our philosophy is simple: honor the traditions of the past while embracing the innovation of the future. Every ingredient is sourced with care, every dish prepared with soul, and every guest welcomed like family.
            </p>
            <div className="pt-8 border-t border-white/5">
              <h3 className="text-heritage-gold font-serif text-2xl mb-2">Our Mission</h3>
              <p className="text-sm">To provide a timeless atmosphere where taste and tradition create unforgettable memories.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
          >
            <Image 
              src="/hero.png" // Using existing hero image for consistency
              alt="Our Story"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted/30 py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="text-heritage-red font-serif text-4xl italic">1924</h4>
            <h5 className="font-bold text-sm uppercase tracking-widest text-white">The Opening</h5>
            <p className="text-muted-foreground text-sm font-light">Founded by Julian Rosebank, the cafe opened its doors as a hub for cultural exchange.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-heritage-red font-serif text-4xl italic">1950</h4>
            <h5 className="font-bold text-sm uppercase tracking-widest text-white">Culinary Expansion</h5>
            <p className="text-muted-foreground text-sm font-light">Introduced signature heritage recipes that remain on our menu to this day.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-heritage-red font-serif text-4xl italic">2024</h4>
            <h5 className="font-bold text-sm uppercase tracking-widest text-white">A New Chapter</h5>
            <p className="text-muted-foreground text-sm font-light">Celebrating 100 years of culinary excellence with a modern luxury touch.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
