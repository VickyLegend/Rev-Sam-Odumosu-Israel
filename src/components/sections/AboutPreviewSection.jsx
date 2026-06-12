import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionBadge from '../ui/SectionBadge';
import Button from '../ui/Button';
import { aboutStats } from '../../constants/content';

export default function AboutPreviewSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 bg-brand-charcoal text-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-gold/20 blur-2xl rounded-full"></div>
              <img 
                src="/images/rev-sam.jpg" 
                alt="Rev Sam Odumosu-Israel" 
                className="relative z-10 w-full max-w-sm rounded-[2rem] border-4 border-brand-gold/50 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <SectionBadge>The Visionary</SectionBadge>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4 mb-6 leading-tight">
              Meet Rev. Sam <span className="text-brand-gold">Odumosu-Israel</span>
            </h2>
            
            <div className="font-body text-brand-cream/80 text-lg space-y-4 mb-10 leading-relaxed">
              <p>
                Called by God with a distinct prophetic anointing, Rev. Sam Odumosu-Israel has dedicated his life to equipping believers with the weapons of spiritual warfare. His mandate is clear: to raise a generation of believers who refuse to be defeated by the circumstances of life.
              </p>
              <p>
                Through the Midnight Prayer Altars and extensive prophetic teachings, thousands across the globe have experienced undeniable miracles, deliverance from long-standing generational yokes, and specific direction for their destinies.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-brand-gold/20 mb-10">
               {aboutStats.map((stat, i) => (
                 <div key={i}>
                   <div className="font-display font-black text-3xl md:text-4xl text-brand-gold">{stat.value}</div>
                   <div className="font-body text-sm text-brand-cream/60 mt-1 uppercase tracking-wider">{stat.label}</div>
                 </div>
               ))}
            </div>

            <Button to="/about">Learn More About Rev Sam</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
