"use client";

import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check, Calendar, Clock, Users, Mail, Phone, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 space-y-6 animate-fade-in bg-card border border-white/5 rounded-3xl p-8">
        <div className="w-24 h-24 bg-heritage-red/20 text-heritage-red rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-heritage-red/20">
          <Check size={48} strokeWidth={3} />
        </div>
        <h2 className="text-4xl font-serif font-bold text-white">Table Reserved!</h2>
        <div className="space-y-2 text-muted-foreground">
          <p className="text-lg">Thank you, {formData.name}.</p>
          <p>We've sent a confirmation email to <span className="text-heritage-gold font-medium">{formData.email}</span>.</p>
          <p className="text-sm italic pt-4">We look forward to hosting you for an unforgettable heritage experience.</p>
        </div>
        <button 
          onClick={() => {
            setIsSuccess(false);
            setFormData({ date: '', time: '', guests: '2', name: '', email: '', phone: '' });
          }}
          className="bg-heritage-red text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-heritage-red/20"
        >
          Make another reservation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Date */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.2em] font-bold text-white/50 flex items-center gap-2">
            <Calendar size={14} className="text-heritage-gold" />
            Date
          </label>
          <input 
            type="date" 
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full bg-muted border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heritage-red/50 transition-all text-white"
          />
        </div>

        {/* Time */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.2em] font-bold text-white/50 flex items-center gap-2">
            <Clock size={14} className="text-heritage-gold" />
            Time
          </label>
          <input 
            type="time" 
            required
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full bg-muted border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heritage-red/50 transition-all text-white"
          />
        </div>

        {/* Guests Select using Radix UI */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.2em] font-bold text-white/50 flex items-center gap-2">
            <Users size={14} className="text-heritage-gold" />
            Number of Guests
          </label>
          <Select.Root 
            value={formData.guests} 
            onValueChange={(value) => setFormData({ ...formData, guests: value })}
          >
            <Select.Trigger className="w-full flex items-center justify-between bg-muted border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heritage-red/50 transition-all text-left text-white">
              <Select.Value placeholder="Select guests..." />
              <Select.Icon>
                <ChevronDown size={16} className="text-white/30" />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className="overflow-hidden bg-card border border-white/5 rounded-xl shadow-2xl z-[100] min-w-[var(--radix-select-trigger-width)]">
                <Select.Viewport className="p-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <Select.Item 
                      key={num} 
                      value={num.toString()}
                      className="flex items-center justify-between px-4 py-2 text-sm text-white/70 rounded-lg outline-none cursor-pointer hover:bg-white/10 focus:bg-white/10 data-[state=checked]:text-heritage-gold"
                    >
                      <Select.ItemText>{num} {num === 1 ? 'Guest' : 'Guests'}</Select.ItemText>
                      <Select.ItemIndicator>
                        <Check size={14} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.2em] font-bold text-white/50 flex items-center gap-2">
            <User size={14} className="text-heritage-gold" />
            Full Name
          </label>
          <input 
            type="text" 
            placeholder="John Doe"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-muted border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heritage-red/50 transition-all placeholder:text-white/10 text-white"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.2em] font-bold text-white/50 flex items-center gap-2">
            <Mail size={14} className="text-heritage-gold" />
            Email Address
          </label>
          <input 
            type="email" 
            placeholder="john@example.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-muted border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heritage-red/50 transition-all placeholder:text-white/10 text-white"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.2em] font-bold text-white/50 flex items-center gap-2">
            <Phone size={14} className="text-heritage-gold" />
            Phone Number
          </label>
          <input 
            type="tel" 
            placeholder="+1 (555) 000-0000"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-muted border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heritage-red/50 transition-all placeholder:text-white/10 text-white"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-heritage-red text-white py-4 rounded-xl text-sm font-bold uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-2xl shadow-heritage-red/30"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Processing...
          </>
        ) : (
          "Confirm Reservation"
        )}
      </button>

      <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest leading-relaxed">
        By clicking "Confirm Reservation", you agree to our <br />
        <span className="text-heritage-gold underline cursor-pointer">Terms of Service</span> and <span className="text-heritage-gold underline cursor-pointer">Privacy Policy</span>.
      </p>
    </form>
  );
}
