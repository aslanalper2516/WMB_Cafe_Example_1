import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function StepCard({ number, title, description, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-6 pb-8 md:pb-12"
    >
      {/* Step Number Badge & Line */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-16 h-16 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg z-10 relative">
          <span className="text-2xl font-bold">{number}</span>
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-primary/20 mt-4"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-6">
        <div className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2">{title}</h3>
          <p className="text-text-muted leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

