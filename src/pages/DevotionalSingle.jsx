import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { devotionalsData } from '../constants/content';

export default function DevotionalSingle() {
  const { slug } = useParams();
  const [devotional, setDevotional] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = devotionalsData.find(d => d.slug === slug);
    if (found) setDevotional(found);
  }, [slug]);

  if (!devotional) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Devotional not found</h1>
          <Link to="/devotional" className="text-brand-gold hover:underline">Back to Devotionals</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black font-body text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-40 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          
          <Link to="/devotional" className="inline-flex items-center text-brand-gold/60 hover:text-brand-gold mb-10 transition-colors uppercase text-sm font-bold tracking-widest">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            All Devotionals
          </Link>
          
          <article>
            <div className="mb-12 border-b border-brand-gold/20 pb-10 text-center">
              <span className="text-brand-gold text-sm font-bold tracking-widest uppercase block mb-4">
                {devotional.date}
              </span>
              <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                {devotional.title}
              </h1>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-brand-cream/90 leading-relaxed font-light">
              {/* Splitting content by sentences/paragraphs simply for UI mock if real HTML is not in data */}
              {devotional.content.split('. ').map((sentence, i) => (
                sentence.length > 5 ? <p key={i} className="mb-6">{sentence}.</p> : null
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-brand-gold/20 flex flex-col sm:flex-row justify-between items-center gap-6">
              <span className="text-brand-cream/60 font-body uppercase tracking-wider text-sm font-bold">Share This Word:</span>
              <div className="flex gap-4">
                {['Facebook', 'Twitter', 'WhatsApp'].map(platform => (
                  <button key={platform} className="px-6 py-2 rounded-full border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors text-sm font-bold">
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </article>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
