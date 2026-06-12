import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black font-body text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        
        {/* Hero / Intro section */}
        <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-5/12 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-brand-gold/20 blur-3xl rounded-full"></div>
                <img 
                  src="/images/rev-sam.jpg" 
                  alt="Rev Sam Odumosu-Israel" 
                  className="relative z-10 w-full max-w-md rounded-[2rem] border-4 border-brand-gold/50 shadow-2xl"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-7/12"
            >
              <span className="font-display text-brand-gold tracking-[0.2em] uppercase text-sm border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 rounded-full inline-block mb-6">
                Meet The Visionary
              </span>
              <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                Rev. Sam <span className="text-brand-gold">Odumosu-Israel</span>
              </h1>
              <div className="text-brand-cream/80 text-lg space-y-6 leading-relaxed">
                <p>
                  Rev. Sam Odumosu-Israel is a prophetic voice and an apostle of strategic spiritual warfare, raised by God to equip the body of Christ with the necessary tools to silence the enemy and enforce their dominion.
                </p>
                <p>
                  With over 14 years in active ministry, he has stood at the forefront of major deliverances, healing miracles, and prophetic activations. He is the convener of the explosive "Midnight Prayers Altars", a global daily convergence of believers waking up at the midnight hour to secure their daily victories.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="bg-brand-navy py-24 border-y border-brand-gold/20">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-brand-charcoal p-10 rounded-xl border-t-[4px] border-brand-gold"
              >
                <div className="w-16 h-16 mx-auto bg-brand-navy rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(201,169,75,0.2)]">
                  <span className="text-3xl">👁️</span>
                </div>
                <h3 className="font-display font-bold text-3xl text-brand-gold mb-4">Our Vision</h3>
                <p className="text-brand-cream/80 text-lg leading-relaxed">
                  To raise a global army of warrior-believers who are prophetically accurate, spiritually violent, and completely victorious in every area of life.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-brand-charcoal p-10 rounded-xl border-t-[4px] border-brand-gold"
              >
                <div className="w-16 h-16 mx-auto bg-brand-navy rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(201,169,75,0.2)]">
                  <span className="text-3xl">⚔️</span>
                </div>
                <h3 className="font-display font-bold text-3xl text-brand-gold mb-4">Our Mission</h3>
                <p className="text-brand-cream/80 text-lg leading-relaxed">
                  To teach the hands of believers to war and their fingers to fight through continuous prophetic teachings, unapologetic warfare prayers, and deep biblical truths.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 md:px-8 max-w-4xl pt-24 text-center">
           <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-crimson/10 border border-brand-crimson/30 p-12 rounded-2xl relative overflow-hidden"
           >
             <div className="absolute inset-0 bg-brand-gold/5 blur-[50px]"></div>
             <h2 className="relative z-10 font-display font-bold text-3xl md:text-5xl text-white mb-6">
               Ready To Reclaim Your Destiny?
             </h2>
             <p className="relative z-10 text-brand-cream/80 text-lg mb-8 max-w-xl mx-auto">
               You don't have to fight your life's battles alone. Come under a prophetic covering that guarantees results.
             </p>
             <Button href="https://www.youtube.com/@revsamodumosuisreal" size="lg" className="relative z-10">
               Join The Warriors Family
             </Button>
           </motion.div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
