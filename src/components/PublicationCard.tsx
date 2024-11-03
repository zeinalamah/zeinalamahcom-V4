import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Publication {
  title: string;
  journal: string;
  date: string;
  link: string;
  abstract: string;
}

export const PublicationCard = ({ title, journal, date, link, abstract }: Publication) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className="p-6 bg-[#2B3187]/20 hover:bg-[#2B3187] rounded-xl transition-all cursor-pointer border border-[#2B3187]/20"
    >
      <div className="flex justify-between items-start">
        <div>
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg sm:text-xl font-bold text-[#F7F8F8] hover:text-black transition-colors block mb-2"
            onClick={(e) => e.stopPropagation()}
          >
            {title}
          </a>
          <p className="text-[#F7F8F8]/60">
            {journal} • {date}
          </p>
          <p className="text-[#F7F8F8]/80 text-sm mt-2">
            {isExpanded ? 'Abstract' : 'Click To View Abstract'}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="text-[#F7F8F8]" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4"
          >
            <p className="text-[#F7F8F8] text-sm sm:text-base leading-relaxed">
              {abstract}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};