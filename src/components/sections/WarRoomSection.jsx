import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Button from '../ui/Button';

export default function WarRoomSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="war-room" className="py-32 relative bg-brand-crimson/10 overflow-hidden" ref={ref}>
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full max-w-[800px] aspect-square fill-brand-gold">
          {/* Simple Cross/Sword symbolic shape */}
          <path d="M45 10 h10 v30 h30 v10 h-30 v40 h-10 v-40 h-30 v-10 h30 z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 30 }}
           animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="bg-brand-black/40 backdrop-blur-md border border-brand-crimson/30 p-8 md:p-16 rounded-2xl shadow-2xl"
        >
          <div className="mb-8">
            <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto text-brand-gold opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <h2 className="font-display font-bold italic text-3xl md:text-5xl lg:text-6xl text-brand-gold leading-tight mb-8">
            "One Word From God Can Change Everything."
          </h2>
          
          <p className="font-body text-brand-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Step out of the cycle of anxiety and step into the War Room. Build your spiritual muscles and learn to enforce the victory won at Calvary.
          </p>

          <Button href="https://www.youtube.com/@revsamodumosuisreal" variant="primary" size="lg">
            Enter The War Room
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
