import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { testimoniesData } from '../constants/content';
import Button from '../components/ui/Button';

export default function Testimonies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black font-body text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Signs, Wonders <span className="text-brand-gold">& Miracles</span>
            </h1>
            <p className="font-body text-brand-cream/80 text-lg max-w-2xl mx-auto mb-8">
              Read the undeniable acts of God in the lives of our Warriors Family members globally. God is still in the business of doing the impossible.
            </p>
            <Button to="/testimonies/submit" variant="primary">
              Share Your Testimony
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimoniesData.map((testimony) => (
              <div 
                key={testimony.id}
                className="bg-brand-charcoal p-8 rounded-xl border border-brand-gold/20 flex flex-col h-full hover:border-brand-gold/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-body font-bold bg-brand-gold/20 text-brand-gold px-3 py-1 rounded uppercase tracking-wider">
                    {testimony.category}
                  </span>
                  <span className="text-brand-cream/50 text-sm">{testimony.date}</span>
                </div>
                
                <p className="font-body text-brand-cream text-lg italic leading-relaxed flex-grow mb-6">
                  "{testimony.excerpt}"
                </p>
                
                <div className="border-t border-brand-gold/10 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-brand-gold font-display font-bold">
                    {testimony.name.charAt(0)}
                  </div>
                  <span className="font-display font-bold text-white text-lg tracking-wide">{testimony.name}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
