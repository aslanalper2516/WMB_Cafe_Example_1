import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LanguageWrapper from '../components/LanguageWrapper';
import CartDrawer from '../components/CartDrawer';
import ProductModal from '../components/ProductModal';
import Toast from '../components/Toast';

export default function MenuPage() {
  const { t, language } = useLanguage();
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('borek');
  const [toast, setToast] = useState({ message: '', isVisible: false });
  const [rippleButton, setRippleButton] = useState(null);
  const categoryRefs = useRef({});

  const categories = [
    { id: 'borek', label: t('menu.categories.borek'), icon: 'lucide:croissant' },
    { id: 'coffee', label: t('menu.categories.coffee'), icon: 'lucide:coffee' },
    { id: 'desserts', label: t('menu.categories.desserts'), icon: 'lucide:cake' },
    { id: 'beverages', label: t('menu.categories.beverages'), icon: 'lucide:glass-water' },
  ];

  const menuItems = {
    borek: [
      { key: 'kıymalıBorek', badges: ['signature', 'bestseller'], allergens: 'Gluten, Süt' },
      { key: 'peynirliBorek', badges: ['vegetarian'], allergens: 'Gluten, Süt' },
      { key: 'ıspanaklıBorek', badges: ['vegetarian'], allergens: 'Gluten, Süt' },
      { key: 'suBorek', badges: ['signature'], allergens: 'Gluten, Süt' },
    ],
    coffee: [
      { key: 'espresso', badges: [], allergens: '' },
      { key: 'americano', badges: [], allergens: '' },
      { key: 'cappuccino', badges: ['bestseller'], allergens: 'Süt' },
      { key: 'latte', badges: ['bestseller'], allergens: 'Süt' },
      { key: 'turkishCoffee', badges: ['signature'], allergens: '' },
    ],
    desserts: [
      { key: 'baklava', badges: ['signature', 'bestseller'], allergens: 'Gluten, Fındık, Süt' },
      { key: 'sutlac', badges: ['vegetarian'], allergens: 'Süt, Gluten' },
      { key: 'kunefe', badges: ['signature'], allergens: 'Gluten, Süt' },
      { key: 'croissant', badges: [], allergens: 'Gluten, Süt' },
    ],
    beverages: [
      { key: 'ayran', badges: ['vegetarian'], allergens: 'Süt' },
      { key: 'freshOrange', badges: ['vegan'], allergens: '' },
      { key: 'lemonade', badges: ['vegan'], allergens: '' },
      { key: 'turkishTea', badges: ['signature'], allergens: '' },
    ],
  };

  const getBadgeLabel = (badge) => {
    const labels = {
      signature: language === 'tr' ? 'İmza' : 'Signature',
      bestseller: language === 'tr' ? 'Çok Satan' : 'Bestseller',
      vegetarian: language === 'tr' ? 'Vejetaryen' : 'Vegetarian',
      vegan: language === 'tr' ? 'Vegan' : 'Vegan',
    };
    return labels[badge] || badge;
  };

  const getBadgeColor = (badge) => {
    const colors = {
      signature: 'bg-primary text-white',
      bestseller: 'bg-red-500 text-white',
      vegetarian: 'bg-green-500 text-white',
      vegan: 'bg-emerald-500 text-white',
    };
    return colors[badge] || 'bg-gray-500 text-white';
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.key);
    const item = t(`menu.items.${product.key}`);
    const productName = item.name || product.name;
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.key
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, {
        id: product.key,
        name: productName,
        description: item.description || product.description,
        price: parseFloat((item.price || product.price).replace(/[^0-9.]/g, '')),
        quantity: 1,
      }]);
    }
    
    // Show toast notification
    setToast({
      message: language === 'tr' ? `${productName} sepete eklendi` : `${productName} added to cart`,
      isVisible: true,
    });
    
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setToast({ ...toast, isVisible: false });
    }, 3000);
    
    setIsCartOpen(true);
  };
  
  const handleButtonClick = (productKey, productData) => {
    // Ripple effect
    setRippleButton(productKey);
    setTimeout(() => setRippleButton(null), 300);
    
    handleAddToCart(productData);
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleProductClick = (product) => {
    const item = t(`menu.items.${product.key}`);
    setSelectedProduct({
      ...product,
      ...item,
      image: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800`,
    });
    setIsModalOpen(true);
  };

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    categoryRefs.current[categoryId]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <LanguageWrapper>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white shadow-md">
                  <span className="font-bold text-sm">WMB</span>
                </div>
                <span className="font-semibold text-base text-secondary">WMB Cafe</span>
              </Link>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 text-text-muted hover:text-secondary transition-colors"
                >
                  <Icon icon="lucide:shopping-cart" width={24} height={24} />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  )}
                </button>
                <Link
                  to="/"
                  className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-secondary transition-colors"
                >
                  <Icon icon="lucide:arrow-left" width={18} height={18} />
                  <span className="hidden sm:inline">{t('nav.menu')}</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-premium-gradient border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4">
                {t('menu.pageTitle')}
              </h1>
              <p className="text-lg md:text-xl text-text-muted">
                {t('menu.pageSubtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sticky Category Bar */}
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide py-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-background text-text-muted hover:text-secondary hover:bg-background'
                  }`}
                >
                  <Icon icon={category.icon} width={18} height={18} />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          {categories.map((category) => (
            <section
              key={category.id}
              ref={(el) => (categoryRefs.current[category.id] = el)}
              className="mb-20 scroll-mt-24"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-10"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon icon={category.icon} width={24} height={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                  {category.label}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[category.id].map((product) => {
                  const item = t(`menu.items.${product.key}`);
                  if (!item || typeof item !== 'object') return null;

                  return (
                    <motion.div
                      key={product.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="relative h-48 bg-background overflow-hidden">
                        <img
                          src={`https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop`}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        {product.badges && product.badges.length > 0 && (
                          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                            {product.badges.map((badge, index) => (
                              <span
                                key={index}
                                className={`px-2.5 py-1 rounded-full text-xs font-bold ${getBadgeColor(badge)} shadow-md`}
                              >
                                {getBadgeLabel(badge)}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-secondary mb-2">{item.name}</h3>
                        <p className="text-sm text-text-muted mb-4 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>

                        {product.allergens && (
                          <p className="text-xs text-text-muted mb-4">
                            <span className="font-semibold">
                              {language === 'tr' ? 'Alerjen: ' : 'Allergens: '}
                            </span>
                            {product.allergens}
                          </p>
                        )}

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-2xl font-bold text-primary">{item.price}</span>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleProductClick(product)}
                              className="px-4 py-2 rounded-lg border border-border text-sm font-semibold text-secondary hover:bg-background transition-colors"
                            >
                              {language === 'tr' ? 'Detay' : 'Details'}
                            </button>
                            <button
                              onClick={() => {
                                const productData = {
                                  key: product.key,
                                  name: item.name,
                                  description: item.description,
                                  price: parseFloat(item.price.replace(/[^0-9.]/g, '')),
                                };
                                handleButtonClick(product.key, productData);
                              }}
                              className="relative w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all shadow-md hover:shadow-lg hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 overflow-hidden"
                              aria-label={language === 'tr' ? `${item.name} sepete ekle` : `Add ${item.name} to cart`}
                            >
                              {rippleButton === product.key && (
                                <motion.span
                                  initial={{ scale: 0, opacity: 0.5 }}
                                  animate={{ scale: 4, opacity: 0 }}
                                  transition={{ duration: 0.6 }}
                                  className="absolute inset-0 bg-white rounded-full"
                                />
                              )}
                              <Icon icon="lucide:plus" width={20} height={20} strokeWidth={2.5} className="relative z-10" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          ))}
        </main>

        {/* Footer CTA */}
        <section className="bg-secondary text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'tr' ? 'Sipariş vermek ister misiniz?' : 'Would you like to order?'}
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === 'tr' ? 'Online sipariş verin veya bizi ziyaret edin' : 'Order online or visit us'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsCartOpen(true)}
                className="inline-flex items-center justify-center h-14 px-10 rounded-lg bg-primary text-white text-base font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t('nav.orderOnline')}
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center h-14 px-10 rounded-lg border-2 border-white/20 text-white text-base font-semibold hover:bg-white/10 transition-all"
              >
                {language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
          product={selectedProduct}
          onAddToCart={(product) => {
            handleAddToCart({ key: product.key || selectedProduct.key, ...product });
          }}
        />
      )}

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={() => setToast({ ...toast, isVisible: false })}
        type="success"
      />
    </LanguageWrapper>
  );
}
