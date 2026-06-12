import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { warriorsFamilyFeatures } from '../../constants/content';
import SectionBadge from '../ui/SectionBadge';
import FeatureCard from '../ui/FeatureCard';
import Button from '../ui/Button';

export default function WarriorsFamilySection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="community" className="py-24 bg-brand-black" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge>Community & Covering</SectionBadge>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4 mb-6 leading-tight">
              Life's Battles Require Prophetic Covering, <span className="text-brand-gold">Not Isolation</span>
            </h2>
            <p className="font-body text-brand-cream/80 text-lg">
              Join a global battalion of believers actively being trained in spiritual warfare, prophetic vision, and dream interpretation.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-10 mb-16"
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
          {warriorsFamilyFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button href="https://www.youtube.com/@revsamodumosuisreal" size="lg">
            Enter The Warriors Family
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
