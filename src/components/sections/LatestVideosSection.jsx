import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionBadge from '../ui/SectionBadge';
import Button from '../ui/Button';
import { videosData } from '../../constants/content';

export default function LatestVideosSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 bg-brand-black" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge>Latest Videos</SectionBadge>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4 leading-tight">
              Watch & Be <span className="text-brand-gold">Transformed</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button to="/videos" variant="outline" className="hidden md:inline-flex">Watch More Videos</Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {videosData.slice(0, 2).map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className="bg-brand-charcoal rounded-xl overflow-hidden shadow-2xl border border-brand-gold/10 group"
            >
              <div className="aspect-video bg-black relative">
                 {/* Placeholder for YouTube Embed */}
                 <div className="absolute inset-0 flex items-center justify-center bg-brand-navy/80 hover:bg-brand-navy/60 transition-colors">
                    <div className="w-16 h-16 bg-brand-crimson/90 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,0,0,0.8)] group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 fill-white translate-x-0.5" viewBox="0 0 24 24">
                         <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                 </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-body font-bold tracking-wider text-brand-gold uppercase mb-2 block">{video.category}</span>
                <h3 className="font-display font-bold text-2xl text-white mb-3 line-clamp-2">{video.title}</h3>
                <p className="font-body text-brand-cream/70 text-sm leading-relaxed">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button to="/videos" className="w-full">Watch More Videos</Button>
        </div>
      </div>
    </section>
  );
}
