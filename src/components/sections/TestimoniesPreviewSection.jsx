import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionBadge from '../ui/SectionBadge';
import Button from '../ui/Button';
import { testimoniesData } from '../../constants/content';

export default function TestimoniesPreviewSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 bg-brand-navy relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
             <SectionBadge>Testimonies</SectionBadge>
             <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4 leading-tight">
               What God Is Doing <span className="text-brand-gold">In Lives</span>
             </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button to="/testimonies" variant="outline" className="hidden md:inline-flex">Read All Testimonies</Button>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {testimoniesData.slice(0, 3).map((testimony, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="bg-brand-charcoal p-8 rounded-xl border-l-[3px] border-brand-gold relative flex flex-col h-full"
            >
              <div className="text-brand-gold/20 mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="font-body text-brand-cream/80 text-lg flex-grow italic leading-relaxed mb-6">
                "{testimony.excerpt}"
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-brand-gold/10 pt-4">
                <span className="font-display font-bold text-white">{testimony.name}</span>
                <span className="text-xs font-body font-medium bg-brand-gold/20 text-brand-gold px-2 py-1 rounded">
                  {testimony.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center md:hidden">
          <Button to="/testimonies" className="w-full">Read All Testimonies</Button>
        </div>
      </div>
    </section>
  );
}
