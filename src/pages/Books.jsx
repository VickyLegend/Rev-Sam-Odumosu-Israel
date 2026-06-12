import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { booksList } from '../constants/content';
import Button from '../components/ui/Button';

export default function Books() {
  // Ensure we start at the top of the page when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black font-body text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          
          <div className="mb-20">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Prophetic <span className="text-brand-gold">Books & Resources</span>
            </h1>
            <p className="font-body text-brand-cream/80 text-lg max-w-2xl mx-auto">
              Access powerfully inspired materials designed to build your spiritual authority and warfare capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto align-stretch cursor-pointer">
            {booksList.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function BookCard({ book }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-brand-charcoal rounded-xl overflow-hidden border border-brand-gold/20 shadow-lg flex flex-col group hover:border-brand-gold/50 transition-colors h-full text-left">
      
      <div className="w-full aspect-[3/4] bg-brand-navy relative border-b border-brand-gold/20 flex flex-col items-center justify-center overflow-hidden">
        {book.imageSrc && !imgError ? (
          <img 
            src={book.imageSrc} 
            alt={book.title} 
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-4 border-2 border-brand-gold/30 rounded border-dashed flex flex-col items-center justify-center p-6 text-center">
            <span className="text-6xl mb-4">{book.image}</span>
            <span className="font-display font-bold text-brand-gold text-xl">{book.title}</span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-brand-black/90 backdrop-blur border border-brand-gold/50 text-brand-gold font-bold px-3 py-1 text-sm uppercase tracking-wider shadow-lg">
          {book.price}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <span className="text-xs font-body font-bold text-brand-cream/50 uppercase tracking-widest mb-3 block">
          AUTHOR: Rev. Sam Odumosu-Israel
        </span>
        <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-brand-gold transition-colors line-clamp-2">
          {book.title}
        </h3>
        
        <p className="font-body text-brand-cream/70 leading-relaxed text-sm mb-8 flex-grow">
          {book.description}
        </p>
        
        <div className="mt-auto">
          <Button 
            href={book.isFree ? "https://www.youtube.com/@revsamodumosuisreal" : "https://buymeacoffee.com/samodumosuisrael"} 
            variant="primary" 
            className="w-full flex justify-center items-center group/btn"
          >
            <span>{book.isFree ? "Download Now" : "Buy Now"}</span>
            <svg 
              className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
