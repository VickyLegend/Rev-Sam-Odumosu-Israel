import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionBadge from '../ui/SectionBadge';
import Button from '../ui/Button';

export default function AuthoritySection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 bg-brand-navy" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <SectionBadge>Your Spiritual Home</SectionBadge>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight mb-6">
              Hear the Voice of God. Understand Your Dreams. <span className="text-brand-gold">Overthrow Every Spiritual Resistance.</span>
            </h2>
            
            <div className="font-body text-brand-cream/80 text-lg space-y-6 mb-8 leading-relaxed">
              <p>
                We believe that every believer has the right to hear clearly from God and walk in total dominion. The enemy's greatest weapon is ignorance, and our mandate is to equip you with the practical, prophetic strategies needed to win your everyday battles.
              </p>
              <p>
                Whether you are dealing with repeated generational cycles, confusing dreams, or simply a desire to deepen your prophetic sensitivity, you have found a spiritual command center.
              </p>
            </div>

            <Button to="/books">Get Free Books Now</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-charcoal p-10 rounded-xl border-l-[6px] border-brand-gold relative shadow-2xl shadow-black/50"
          >
            <div className="absolute -top-6 -left-6 text-brand-gold/20">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="font-display text-xl md:text-2xl text-white leading-snug relative z-10 font-medium">
              "Unusual breakthroughs reported daily — court cases dismissed, doctors reversing reports, restoration of lost properties."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-[2px] bg-brand-gold"></div>
              <span className="font-body text-brand-gold uppercase tracking-wider text-sm">Real Testimonies</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
