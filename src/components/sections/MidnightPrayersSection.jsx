import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionBadge from '../ui/SectionBadge';
import Button from '../ui/Button';

export default function MidnightPrayersSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="videos" className="py-24 bg-brand-navy relative overflow-hidden" ref={ref}>
      {/* Subtle background texture/glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/5 via-brand-navy to-brand-navy pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <SectionBadge>Live Every Night</SectionBadge>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6 leading-tight">
              Live Midnight Prayers <span className="text-brand-crimson-light">Every Night</span> — Join Tonight
            </h2>
            <p className="font-body text-brand-cream/80 text-lg mb-8 leading-relaxed max-w-lg">
              Midnight is the hour of spiritual exchange. Don't sleep through your breakthrough. Log into our daily live sessions where total deliverances and prophetic declarations occur in real-time.
            </p>
            <Button variant="crimson" href="https://www.youtube.com/@revsamodumosuisreal" size="lg" className="group">
              <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24">
                <path d="M21.582 6.186a2.66 2.66 0 0 0-1.875-1.884c-1.654-.445-8.29-.445-8.29-.445s-6.635 0-8.289.444a2.662 2.662 0 0 0-1.875 1.885C.807 7.848.807 12 .807 12s0 4.153.446 5.814a2.666 2.666 0 0 0 1.875 1.885c1.654.444 8.289.444 8.289.444s6.636 0 8.29-.444a2.666 2.666 0 0 0 1.875-1.885c.447-1.661.447-5.814.447-5.814s0-4.152-.447-5.814ZM9.645 15.116V8.884L15.109 12l-5.464 3.116Z"/>
              </svg>
              Watch on YouTube
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <a 
              href="https://www.youtube.com/@revsamodumosuisreal" 
              target="_blank" 
              rel="noreferrer"
              className="relative group block w-full max-w-md cursor-pointer"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-crimson to-brand-gold rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-[#0f1219] rounded-xl aspect-video border border-brand-gold/30 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brand-navy/60 group-hover:bg-brand-navy/40 transition-colors duration-500 z-10"></div>
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-red-900/50">
                  <svg className="w-8 h-8 fill-white translate-x-0.5" viewBox="0 0 24 24">
                     <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="mt-4 font-display font-bold tracking-widest text-brand-gold z-20 uppercase">Watch Live Tonight</p>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
