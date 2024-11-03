import { motion } from 'framer-motion';

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-[#0E0F1F]/80 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        className="w-16 h-16 border-4 border-[#2B3187]/20 border-t-[#2B3187] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};