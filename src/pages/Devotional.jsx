import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { devotionalsData } from '../constants/content';
import { Link } from 'react-router-dom';

export default function Devotional() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black font-body text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="text-center mb-20">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Daily Prophetic <span className="text-brand-gold">Devotionals</span>
            </h1>
            <p className="font-body text-brand-cream/80 text-lg max-w-2xl mx-auto">
              Equip your spirit every day with deep revelational teachings and prophetic decrees to enforce your victory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devotionalsData.map((devotional) => (
              <div key={devotional.slug} className="bg-brand-charcoal rounded-xl border border-brand-gold/20 overflow-hidden flex flex-col hover:border-brand-gold/50 transition-colors group">
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-brand-gold text-sm font-bold tracking-wider mb-4 block uppercase">{devotional.date}</span>
                  <h3 className="font-display font-bold text-2xl text-white mb-4 line-clamp-2 group-hover:text-brand-gold transition-colors">
                    <Link to={`/devotional/${devotional.slug}`}>
                      {devotional.title}
                    </Link>
                  </h3>
                  <p className="text-brand-cream/80 leading-relaxed mb-8 flex-grow">
                    {devotional.excerpt}
                  </p>
                  
                  <Link 
                    to={`/devotional/${devotional.slug}`}
                    className="inline-flex items-center text-brand-gold font-medium uppercase tracking-wider text-sm hover:text-white transition-colors mt-auto"
                  >
                    Read More 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
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
