import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('announcement_dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('announcement_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-brand-crimson text-white w-full z-50 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 py-2 flex items-center justify-center text-sm font-medium">
            <a 
              href="https://www.youtube.com/@revsamodumosuisreal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-2"
            >
              <span className="animate-pulse">🔴</span> LIVE: Midnight Prayers Every Night — Join Tonight on YouTube
            </a>
            <button 
              onClick={handleDismiss} 
              className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss announcement"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
