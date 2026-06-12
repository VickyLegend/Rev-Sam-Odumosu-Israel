import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { donateOptions, donateImpacts } from '../constants/content';

export default function Donate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black font-body text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-24">
          <div className="text-center">
            <span className="font-display text-brand-gold tracking-[0.2em] uppercase text-sm border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 rounded-full inline-block mb-6">
              Partnership
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Become A Hand of God <span className="text-brand-gold">On The Earth</span>
            </h1>
            <p className="font-body text-brand-cream/80 text-lg max-w-3xl mx-auto leading-relaxed">
              When you partner with Sam Odumosu-Israel Ministries, you aren't just giving money—you are equipping the army of the Lord. Your seeds help us distribute free materials, broadcast dangerous prayers globally, and reach the unreached.
            </p>
          </div>
        </div>

        {/* Ways to Give Grid */}
        <div className="container mx-auto px-4 md:px-8 max-w-6xl mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {donateOptions.map((option) => (
              <div key={option.id} className="bg-brand-charcoal p-8 rounded-xl border border-brand-gold/30 hover:border-brand-gold transition-colors flex flex-col relative overflow-hidden group">
                {/* Decorative BG element */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/10 transition-colors"></div>
                
                <div className="w-14 h-14 bg-brand-navy rounded-lg flex items-center justify-center text-3xl mb-6 shadow-inner border border-brand-gold/20">
                  {option.icon}
                </div>
                
                <h3 className="font-display font-bold text-2xl text-white mb-3">{option.title}</h3>
                <p className="text-brand-cream/70 leading-relaxed mb-8 flex-grow">
                  {option.description}
                </p>

                {option.id === 'bank' ? (
                  <div className="bg-brand-navy p-4 rounded text-center border border-brand-gold/20">
                    <span className="block text-brand-cream/60 text-sm mb-1 uppercase tracking-wider">Account Number</span>
                    <span className="font-display font-bold text-2xl text-brand-gold tracking-widest">{option.accNum}</span>
                  </div>
                ) : (
                  <a 
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-6 py-4 bg-brand-gold text-brand-black font-display font-bold uppercase tracking-wider rounded border border-brand-gold outline-offset-2 outline-brand-gold focus:outline-2 hover:bg-transparent hover:text-brand-gold transition-all"
                  >
                    {option.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-brand-navy py-20 border-y border-brand-gold/20">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl text-brand-gold">Your Impact In Action</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {donateImpacts.map((impact, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-5xl mb-4 opacity-80">{impact.icon}</div>
                  <h4 className="font-display font-bold text-xl text-white">{impact.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
