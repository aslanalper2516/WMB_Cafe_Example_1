import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function SuccessStoryCard({ quote, name, location, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={`${name} - ${location}`}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            loading="lazy"
            style={{ filter: 'brightness(1.05) contrast(1.1) saturate(1.15)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent"></div>
        </div>
      )}
      <div className="p-6 md:p-8">
        <div className="mb-4">
          <Icon icon="lucide:quote" width={32} height={32} className="text-primary/30" />
        </div>
        <p className="text-text-muted leading-relaxed mb-6 italic text-lg">
          "{quote}"
        </p>
        <div className="pt-4 border-t border-border">
          <p className="font-semibold text-secondary">{name}</p>
          <div className="flex items-center gap-2 text-text-muted mt-1">
            <Icon icon="lucide:map-pin" width={14} height={14} />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

