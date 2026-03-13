"use client";

import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />

      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-16">
        <header className="space-y-4 text-center">
          <span className="text-heritage-gold uppercase tracking-[0.4em] text-[10px] font-bold">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold italic leading-tight">
            Contact <span className="text-heritage-gold">Us</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Whether you have a question about our menu, private events, or just want to share your experience, we'd love to hear from you.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl space-y-8 border-white/5 shadow-2xl">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-heritage-red/10 flex items-center justify-center text-heritage-red group-hover:bg-heritage-red group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Location</h4>
                  <p className="text-muted-foreground font-light italic">123 Heritage Lane, Rosebank district<br />London, SW1 2BC</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-heritage-brown/10 flex items-center justify-center text-heritage-brown group-hover:bg-heritage-brown group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Reservations</h4>
                  <p className="text-muted-foreground font-light italic">+44 (0) 20 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-heritage-green/10 flex items-center justify-center text-heritage-green group-hover:bg-heritage-green group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Inquiries</h4>
                  <p className="text-muted-foreground font-light italic">concierge@rosebankcafe.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-heritage-gold/10 flex items-center justify-center text-heritage-gold group-hover:bg-heritage-gold group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Opening Hours</h4>
                  <p className="text-muted-foreground font-light text-xs uppercase tracking-widest leading-loose">
                    Mon - Fri: 11:30 - 22:00<br />
                    Sat - Sun: 10:00 - 23:00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-3xl border-white/5 shadow-2xl"
          >
            <h3 className="text-2xl font-serif font-bold mb-8 italic">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">Your Name</label>
                  <input type="text" className="w-full bg-muted border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heritage-gold/50 transition-all font-light" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">Email Address</label>
                  <input type="email" className="w-full bg-muted border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heritage-gold/50 transition-all font-light" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">Subject</label>
                <input type="text" className="w-full bg-muted border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heritage-gold/50 transition-all font-light" placeholder="Private Event Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">Message</label>
                <textarea rows={4} className="w-full bg-muted border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heritage-gold/50 transition-all font-light resize-none" placeholder="Tell us more..."></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-heritage-red text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-heritage-red/20"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
