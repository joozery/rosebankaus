import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 px-6 py-12 md:py-20 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-white">
            ROSEBANK
          </Link>
          <p className="text-muted-foreground text-sm font-light leading-relaxed">
            Crafting unforgettable culinary moments since 1924. Experience the heritage of taste in every bite.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-heritage-gold hover:border-heritage-gold transition-all">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-heritage-gold hover:border-heritage-gold transition-all">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-heritage-gold hover:border-heritage-gold transition-all">
              <Twitter size={18} />
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-widest font-bold text-heritage-gold">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/menu" className="text-sm text-muted-foreground hover:text-white transition-colors">Digital Menu</Link></li>
            <li><Link href="/booking" className="text-sm text-muted-foreground hover:text-white transition-colors">Table Booking</Link></li>
            <li><Link href="/about" className="text-sm text-muted-foreground hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-widest font-bold text-primary">Contact Us</h4>
          <ul className="space-y-3">
            <li className="text-sm text-muted-foreground">hello@rosebankheritage.com</li>
            <li className="text-sm text-muted-foreground">+44 20 7946 0123</li>
            <li className="text-sm text-muted-foreground">123 Heritage Lane, Rosebank</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-widest font-bold text-heritage-gold">Newsletter</h4>
          <p className="text-sm text-muted-foreground">Subscribe for exclusive preview of our seasonal menus.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full bg-muted border border-white/5 rounded-full py-3 px-6 focus:outline-none focus:ring-1 focus:ring-heritage-gold text-sm text-white"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-heritage-red text-white px-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:brightness-110">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/50">
        <p>© 2026 Rosebank Heritage Cafe. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
