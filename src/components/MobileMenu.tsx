import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const goToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete
      setTimeout(goToSection, 100);
    } else {
      goToSection();
    }
  };

  const handleResumeClick = () => {
    navigate('/resume');
    window.scrollTo(0, 0);
    onClose();
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#0E0F1F] border-t border-[#2B3187]/20"
        >
          <nav className="flex flex-col p-4">
            <Link 
              to="/"
              onClick={scrollToTop}
              className="py-3 px-4 text-[#F7F8F8] hover:bg-[#2B3187] rounded-lg transition-colors"
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="py-3 px-4 text-left text-[#F7F8F8] hover:bg-[#2B3187] rounded-lg transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('publications')}
              className="py-3 px-4 text-left text-[#F7F8F8] hover:bg-[#2B3187] rounded-lg transition-colors"
            >
              Publications
            </button>
            <button 
              onClick={handleResumeClick}
              className="py-3 px-4 text-left text-[#F7F8F8] hover:bg-[#2B3187] rounded-lg transition-colors"
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="py-3 px-4 text-left text-[#F7F8F8] hover:bg-[#2B3187] rounded-lg transition-colors"
            >
              Contact
            </button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};