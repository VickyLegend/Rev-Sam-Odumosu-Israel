import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, borderColor: '#c9a94b' }}
      transition={{ duration: 0.2 }}
      className="bg-brand-charcoal border-t-[3px] border-transparent p-8 rounded-lg flex flex-col items-start gap-4 transition-colors"
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="font-display text-xl font-bold text-brand-gold">{title}</h3>
      <p className="font-body text-brand-cream/80 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
