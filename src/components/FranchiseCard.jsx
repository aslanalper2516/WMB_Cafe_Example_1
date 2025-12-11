import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function FranchiseCard({ icon, title, description, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {image ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            style={{ filter: 'brightness(1.05) contrast(1.1) saturate(1.15)' }}
          />
        </div>
      ) : (
        <div className="h-32 bg-primary/10 flex items-center justify-center">
          <Icon icon={icon} width={48} height={48} className="text-primary" strokeWidth={1.5} />
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3">{title}</h3>
        <p className="text-text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

