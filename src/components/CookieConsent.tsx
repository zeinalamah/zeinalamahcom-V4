import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure the component mounts after navigation
    const timer = setTimeout(() => {
      const hasAccepted = localStorage.getItem('cookiesAccepted');
      if (!hasAccepted) {
        setIsVisible(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 bg-[#0E0F1F] border-t border-[#2B3187]/20 p-4 z-50"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[#F7F8F8]/80 text-sm sm:text-base">
              <p>
                This website uses Google Analytics cookies to analyze site traffic. 
                By clicking "Accept," you consent to our use of analytics cookies.{' '}
                <Link 
                  to="/privacy-policy" 
                  className="text-[#2B3187] hover:text-[#F7F8F8] inline-block"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn more
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={acceptCookies}
                className="px-6 py-2 bg-[#2B3187] text-[#F7F8F8] rounded-lg hover:bg-[#2B3187]/80 transition-colors text-sm"
              >
                Accept
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-[#F7F8F8]/60 hover:text-[#F7F8F8] transition-colors"
                aria-label="Close cookie consent"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};