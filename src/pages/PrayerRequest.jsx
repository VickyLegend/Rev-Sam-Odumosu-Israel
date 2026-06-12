import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

export default function PrayerRequest() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black font-body text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 pt-4">
              Submit Your <span className="text-brand-gold">Prayer Request</span>
            </h1>
            <p className="font-body text-brand-cream/80 text-lg leading-relaxed">
              "Again I say to you, that if two of you agree on earth about anything that they may ask, it shall be done for them by My Father who is in heaven." - Matthew 18:19
            </p>
          </div>

          <div className="bg-brand-charcoal p-8 md:p-12 rounded-xl border border-brand-gold/20 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Prayer request submitted successfully. We are warring for you.'); }}>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Prayer Category *</label>
                  <select 
                    required
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none"
                  >
                    <option value="">Select Category...</option>
                    <option value="healing">Healing & Health</option>
                    <option value="finance">Financial Breakthrough</option>
                    <option value="marriage">Marriage & Family</option>
                    <option value="deliverance">Deliverance & Spiritual Warfare</option>
                    <option value="career">Job / Career</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Your Prayer Request *</label>
                <textarea 
                  required
                  rows="6"
                  className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none placeholder-brand-cream/30"
                  placeholder="Share the details of your situation. We take confidentiality seriously."
                ></textarea>
              </div>

              <div className="flex items-start gap-3 bg-brand-navy/50 p-4 rounded border border-brand-gold/10">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  className="mt-1 w-4 h-4 rounded border-brand-gold/30 text-brand-gold focus:ring-brand-gold bg-brand-navy bg-transparent"
                />
                <label htmlFor="privacy" className="text-sm text-brand-cream/80 leading-relaxed cursor-pointer">
                  Please keep my details completely private. Do not mention my name during live broadcast prayers.
                </label>
              </div>

              <div className="pt-4 text-center">
                <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                  Submit to War Room
                </Button>
                <p className="mt-4 text-xs text-brand-gold/60 font-body uppercase tracking-widest">
                  Our intercessory team will take this up immediately.
                </p>
              </div>

            </form>
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
