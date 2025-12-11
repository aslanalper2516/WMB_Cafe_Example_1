import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

export default function ProductModal({ isOpen, onClose, product, onAddToCart }) {
  const { t, language } = useLanguage();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64 md:h-80 bg-background">
                <img
                  src={product.image || 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <Icon icon="lucide:x" width={20} height={20} />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-secondary mb-2">{product.name}</h2>
                    <p className="text-2xl font-bold text-primary">{product.price}₺</p>
                  </div>
                  {product.badges && (
                    <div className="flex gap-2">
                      {product.badges.map((badge, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-text-muted mb-6 leading-relaxed">{product.description}</p>

                {product.allergens && (
                  <div className="mb-6 p-4 rounded-lg bg-background border border-border">
                    <h3 className="font-semibold text-secondary mb-2">
                      {language === 'tr' ? 'Alerjen Bilgisi' : 'Allergen Information'}
                    </h3>
                    <p className="text-sm text-text-muted">{product.allergens}</p>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <span className="font-semibold text-secondary">
                    {language === 'tr' ? 'Adet' : 'Quantity'}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Icon icon="lucide:minus" width={18} height={18} />
                    </button>
                    <span className="w-12 text-center text-lg font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Icon icon="lucide:plus" width={18} height={18} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onAddToCart({ ...product, quantity });
                    onClose();
                  }}
                  className="w-full h-14 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Icon icon="lucide:shopping-cart" width={20} height={20} />
                  {language === 'tr' ? 'Sepete Ekle' : 'Add to Cart'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

