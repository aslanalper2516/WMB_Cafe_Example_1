import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function TimelineItem({ year, title, description, image, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-6 md:gap-8 pb-12 md:pb-16"
    >
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 border-4 border-white shadow-lg flex items-center justify-center z-10 relative">
          <span className="text-xl md:text-2xl font-serif font-bold text-primary">{year}</span>
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-primary/20 mt-4"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
          {image && (
            <div className="relative h-48 md:h-64 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
                style={{ filter: 'brightness(1.05) contrast(1.1) saturate(1.15)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent"></div>
            </div>
          )}
          <div className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-3">{title}</h3>
            <p className="text-text-muted leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

