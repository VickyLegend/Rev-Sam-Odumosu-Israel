import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Button from '../ui/Button';

export default function FinalCTASection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-32 bg-brand-black relative overflow-hidden" ref={ref}>
      {/* Animated divider line */}
      <motion.div 
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent w-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isVisible ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Decorative Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isVisible ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
        >
          <span className="font-display text-brand-gold uppercase tracking-[0.3em] text-sm md:text-base font-semibold block mb-4">
            Pray With Power | Win With Authority
          </span>
          <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-12">
            This Is Your Family
          </h2>
          
          <Button href="https://www.youtube.com/@revsamodumosuisrael/membership" size="lg" className="text-xl px-12 py-5 shadow-[0_0_30px_rgba(201,169,75,0.3)]">
            Become a Member
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
