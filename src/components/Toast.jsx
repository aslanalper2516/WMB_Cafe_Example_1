import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Toast({ message, isVisible, onClose, type = 'success' }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 bg-white rounded-xl shadow-2xl border border-border p-4 flex items-center gap-3 min-w-[280px] max-w-md"
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
          }`}>
            <Icon 
              icon={type === 'success' ? 'lucide:check' : 'lucide:x'} 
              width={20} 
              height={20} 
            />
          </div>
          <p className="flex-1 text-sm font-medium text-secondary">{message}</p>
          <button
            onClick={onClose}
            className="p-1 text-text-muted hover:text-secondary transition-colors"
            aria-label="Close"
          >
            <Icon icon="lucide:x" width={16} height={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}




