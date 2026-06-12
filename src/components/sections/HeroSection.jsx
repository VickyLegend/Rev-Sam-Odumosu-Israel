import React from 'react';
import { motion } from 'framer-motion';
import { heroContent } from '../../constants/content';
import Button from '../ui/Button';
import ParticleCanvas from '../ui/ParticleCanvas';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-navy via-brand-black to-brand-black pt-28 pb-16">
      <ParticleCanvas />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mb-8"
          >
            <span className="font-display text-brand-gold text-xs sm:text-sm tracking-[0.2em] uppercase border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 rounded-full inline-block">
              {heroContent.eyebrow}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="font-display font-black text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.1] max-w-2xl tracking-normal mb-8"
          >
            {heroContent.headlinePre}
            <span className="text-brand-gold">{heroContent.headlineHighlight1}</span>
            {heroContent.headlineMid}
            <span className="text-brand-gold">{heroContent.headlineHighlight2}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="font-body text-brand-cream/90 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          >
            Over 20,000 believers have used this exact prayer program to destroy what was holding them back. These are not regular prayers. <strong className="text-white font-semibold">These are dangerous prayers.</strong>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-md"
          >
            <Button to="/books" size="lg" className="w-full sm:w-auto">
              Give Me Access
            </Button>
            <Button href="#community" variant="outline" size="lg" className="w-full sm:w-auto">
              Enter The Warriors Family
            </Button>
          </motion.div>

          {/* Ticker / Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="border-l-4 border-brand-gold bg-brand-charcoal/50 backdrop-blur-sm px-6 py-4 rounded-r shadow-2xl max-w-xl text-left"
          >
            <p className="font-body text-brand-cream/80 italic text-sm sm:text-base leading-relaxed">
              "{heroContent.ticker}"
            </p>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-brand-gold/30 blur-3xl rounded-full scale-75 pointer-events-none"></div>
          
          <img 
            src="/images/Rev. Sam.png" 
            alt="Rev. Sam Odumosu-Israel" 
            className="w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-[3/4] object-cover rounded-[2rem] border-4 border-brand-gold/80 shadow-[0_0_50px_rgba(201,169,75,0.3)] relative z-10"
          />
        </motion.div>
        
      </div>
    </section>
  );
}
