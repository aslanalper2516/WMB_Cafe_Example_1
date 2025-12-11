import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  const { t, language } = useLanguage();

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="text-2xl font-bold text-secondary">
                {language === 'tr' ? 'Sepetim' : 'My Cart'}
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-text-muted hover:text-secondary transition-colors"
              >
                <Icon icon="lucide:x" width={24} height={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Icon icon="lucide:shopping-cart" width={64} height={64} className="text-text-muted mb-4" />
                  <p className="text-text-muted text-lg">
                    {language === 'tr' ? 'Sepetiniz boş' : 'Your cart is empty'}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 rounded-lg border border-border bg-background">
                      <div className="flex-1">
                        <h3 className="font-semibold text-secondary mb-1">{item.name}</h3>
                        <p className="text-sm text-text-muted mb-2">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">{item.price}₺</span>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                            >
                              <Icon icon="lucide:minus" width={16} height={16} />
                            </button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                            >
                              <Icon icon="lucide:plus" width={16} height={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-text-muted hover:text-red-500 transition-colors"
                      >
                        <Icon icon="lucide:trash-2" width={20} height={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-border bg-background">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-secondary">
                    {language === 'tr' ? 'Toplam' : 'Total'}
                  </span>
                  <span className="text-2xl font-bold text-primary">{total.toFixed(2)}₺</span>
                </div>
                <button className="w-full h-14 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl">
                  {language === 'tr' ? 'Siparişi Tamamla' : 'Complete Order'}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

