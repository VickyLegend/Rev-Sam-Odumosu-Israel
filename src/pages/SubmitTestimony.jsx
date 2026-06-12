import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

export default function SubmitTestimony() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black font-body text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl w-full">
          
          <div className="text-center mb-10">
            <h1 className="font-display font-bold text-4xl text-brand-gold mb-4">Share Your Testimony</h1>
            <p className="text-brand-cream/80 text-lg">
              "And they overcame him by the blood of the Lamb, and by the word of their testimony..." - Rev 12:11
            </p>
          </div>

          <div className="bg-brand-charcoal p-8 md:p-10 rounded-xl border border-brand-gold/20 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Testimony submitted successfully!'); }}>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 placeholder-brand-muted text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 placeholder-brand-muted text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 placeholder-brand-muted text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Testimony Category *</label>
                  <select 
                    required
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors appearance-none"
                  >
                    <option value="">Select Category...</option>
                    <option value="healing">Healing & Health</option>
                    <option value="financial">Financial Breakthrough</option>
                    <option value="deliverance">Deliverance</option>
                    <option value="marital">Marital / Family</option>
                    <option value="legal">Legal Victory</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Your Testimony *</label>
                <textarea 
                  required
                  rows="6"
                  className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 placeholder-brand-muted text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
                  placeholder="Tell us what God has done for you..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="permission" 
                  required
                  className="mt-1 w-4 h-4 rounded border-brand-gold/30 text-brand-gold focus:ring-brand-gold bg-brand-navy"
                />
                <label htmlFor="permission" className="text-sm text-brand-cream/80 leading-relaxed cursor-pointer">
                  I give permission for this testimony to be shared publicly to encourage others (Personal contact details will remain private).
                </label>
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full">
                  Submit Testimony
                </Button>
              </div>
            </form>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
