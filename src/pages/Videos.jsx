import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { videosData } from '../constants/content';

export default function Videos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black font-body text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="text-center mb-16">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Watch & Be <span className="text-brand-gold">Transformed</span>
            </h1>
            <p className="font-body text-brand-cream/80 text-lg max-w-2xl mx-auto">
              Engage with powerful prophetic teachings, violent midnight prayers, and life-changing testimonies on our official channel.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['All', 'Prayers', 'Teachings', 'Testimonies'].map((cat, i) => (
              <button 
                key={cat}
                className={`px-6 py-2 rounded-full font-display uppercase tracking-wider text-sm font-bold border transition-colors ${i === 0 ? 'bg-brand-gold border-brand-gold text-brand-black' : 'bg-transparent border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {videosData.map((video) => (
              <div key={video.id} className="bg-brand-charcoal rounded-xl overflow-hidden shadow-2xl border border-brand-gold/10">
                <div className="aspect-video w-full bg-black">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.embedUrl} 
                    title={video.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-8">
                  <span className="text-xs font-body font-bold tracking-wider text-brand-crimson uppercase mb-3 block">{video.category}</span>
                  <h3 className="font-display font-bold text-2xl text-white mb-4">{video.title}</h3>
                  <p className="font-body text-brand-cream/70 leading-relaxed font-light">{video.description}</p>
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
