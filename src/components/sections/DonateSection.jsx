import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { donateImpacts } from '../../constants/content';
import SectionBadge from '../ui/SectionBadge';
import Button from '../ui/Button';

export default function DonateSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 bg-brand-navy" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse lg:flex-row">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
             <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                {donateImpacts.map((impact, idx) => (
                  <motion.div
                    key={impact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                    className="bg-brand-charcoal border border-brand-gold/20 p-6 rounded-lg text-center flex flex-col items-center justify-center gap-3"
                  >
                    <span className="text-4xl">{impact.icon}</span>
                    <span className="font-display font-medium text-brand-gold text-lg">{impact.label}</span>
                  </motion.div>
                ))}
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <SectionBadge>Partner With Us</SectionBadge>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4 mb-6 leading-tight">
              Become A <span className="text-brand-gold">Hand of God</span> On The Earth
            </h2>
            <div className="font-body text-brand-cream/80 text-lg space-y-6 mb-8 leading-relaxed">
              <p>
                When you partner with this ministry, you are directly funding the spread of the Gospel, the distribution of free prophetic resources, and the hosting of our daily midnight prayer altars that bring deliverance to thousands globally.
              </p>
              <div className="bg-brand-gold/10 border-l-4 border-brand-gold p-4 text-brand-gold font-medium rounded-r">
                "Your giving is more than a donation — it is warfare. It speaks for you on the altar."
              </div>
            </div>
            
            <Button href="https://buymeacoffee.com/samodumosuisrael" size="lg" className="w-full sm:w-auto">
               Sow a Seed
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
