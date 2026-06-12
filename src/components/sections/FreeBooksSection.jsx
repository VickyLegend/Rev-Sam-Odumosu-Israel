import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { booksList } from '../../constants/content';
import SectionBadge from '../ui/SectionBadge';
import Button from '../ui/Button';

export default function FreeBooksSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 bg-brand-black" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isVisible ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="max-w-3xl mx-auto mb-16"
        >
          <SectionBadge>Free Prophetic Resources</SectionBadge>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4 mb-6 leading-tight">
            Free Prophetic Prayer <span className="text-brand-gold">&</span> Books
          </h2>
          <p className="font-body text-brand-cream/80 text-lg">
            Download our curated collection of spiritual warfare and prophetic teaching manuals. These resources have been designed to equip you for undeniable victory.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {booksList.filter(book => book.isFree).slice(0, 2).map((book) => (
            <motion.div
              key={book.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="bg-brand-charcoal rounded-xl p-8 lg:p-10 text-left border-t-[4px] border-brand-gold bg-gradient-to-b from-brand-charcoal to-brand-navy hover:shadow-[0_10px_30px_rgba(201,169,75,0.1)] transition-all duration-300"
            >
              <div className="text-5xl mb-6">{book.image}</div>
              <h3 className="font-display font-bold text-2xl text-white mb-4 line-clamp-2">
                {book.title}
              </h3>
              <p className="font-body text-brand-cream/70 mb-8 leading-relaxed h-16">
                {book.description}
              </p>
              <Button to="/books" variant="outline" className="w-full">
                Get Access
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button to="/books" size="lg">
            View All Resources
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
