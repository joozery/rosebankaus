"use client";

import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import { motion } from "framer-motion";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="text-heritage-gold uppercase tracking-[0.4em] text-[10px] font-bold">
            Reservations
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold italic text-white">
            Book Your <span className="text-heritage-gold">Table</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto font-light">
            Secure your spot for an unforgettable dining experience. 
            For parties larger than 8, please contact us directly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-heritage-red/5 rounded-full -mr-16 -mt-16 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-heritage-red/5 rounded-full -ml-16 -mb-16 blur-3xl" />
          
          <BookingForm />
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-heritage-red">Location</h4>
            <p className="text-sm text-muted-foreground italic">123 Heritage Lane, Rosebank <br />London, SW1 2BC</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-heritage-red">Opening Hours</h4>
            <p className="text-sm text-muted-foreground italic">Mon - Fri: 11:30 - 22:00 <br />Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </main>
  );
}
