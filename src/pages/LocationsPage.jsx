import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LanguageWrapper from '../components/LanguageWrapper';

export default function LocationsPage() {
  const { t, language } = useLanguage();
  const [selectedCity, setSelectedCity] = useState('all');

  const locations = [
    {
      id: 1,
      name: 'Sariyer',
      address: 'Sariyer Merkez, İstanbul',
      fullAddress: 'Sariyer Merkez Mahallesi, İstiklal Caddesi No: 45, 34450 Sariyer/İstanbul',
      phone: '+90 212 123 45 67',
      hours: language === 'tr' ? 'Pazartesi - Pazar: 07:00 - 22:00' : 'Monday - Sunday: 7:00 AM - 10:00 PM',
      city: 'istanbul',
      coordinates: { lat: 41.1085, lng: 29.0506 },
    },
    {
      id: 2,
      name: 'Bebek',
      address: 'Bebek, İstanbul',
      fullAddress: 'Bebek Mahallesi, Bebek Caddesi No: 12, 34342 Beşiktaş/İstanbul',
      phone: '+90 212 234 56 78',
      hours: language === 'tr' ? 'Pazartesi - Pazar: 07:00 - 23:00' : 'Monday - Sunday: 7:00 AM - 11:00 PM',
      city: 'istanbul',
      coordinates: { lat: 41.0775, lng: 29.0433 },
    },
    {
      id: 3,
      name: 'Kadıköy',
      address: 'Kadıköy, İstanbul',
      fullAddress: 'Kadıköy Merkez, Bağdat Caddesi No: 89, 34710 Kadıköy/İstanbul',
      phone: '+90 216 345 67 89',
      hours: language === 'tr' ? 'Pazartesi - Pazar: 08:00 - 22:00' : 'Monday - Sunday: 8:00 AM - 10:00 PM',
      city: 'istanbul',
      coordinates: { lat: 40.9819, lng: 29.0216 },
    },
    {
      id: 4,
      name: 'Nişantaşı',
      address: 'Nişantaşı, İstanbul',
      fullAddress: 'Teşvikiye Mahallesi, Abdi İpekçi Caddesi No: 23, 34365 Şişli/İstanbul',
      phone: '+90 212 456 78 90',
      hours: language === 'tr' ? 'Pazartesi - Pazar: 07:30 - 23:00' : 'Monday - Sunday: 7:30 AM - 11:00 PM',
      city: 'istanbul',
      coordinates: { lat: 41.0476, lng: 28.9853 },
    },
    {
      id: 5,
      name: 'Ankara Kızılay',
      address: 'Kızılay, Ankara',
      fullAddress: 'Kızılay Mahallesi, Atatürk Bulvarı No: 156, 06420 Çankaya/Ankara',
      phone: '+90 312 567 89 01',
      hours: language === 'tr' ? 'Pazartesi - Pazar: 08:00 - 22:00' : 'Monday - Sunday: 8:00 AM - 10:00 PM',
      city: 'ankara',
      coordinates: { lat: 39.9208, lng: 32.8541 },
    },
    {
      id: 6,
      name: 'İzmir Alsancak',
      address: 'Alsancak, İzmir',
      fullAddress: 'Alsancak Mahallesi, Kordon Boyu No: 78, 35220 Konak/İzmir',
      phone: '+90 232 678 90 12',
      hours: language === 'tr' ? 'Pazartesi - Pazar: 07:00 - 22:00' : 'Monday - Sunday: 7:00 AM - 10:00 PM',
      city: 'izmir',
      coordinates: { lat: 38.4237, lng: 27.1428 },
    },
  ];

  const cities = [
    { id: 'all', label: language === 'tr' ? 'Tümü' : 'All' },
    { id: 'istanbul', label: 'İstanbul' },
    { id: 'ankara', label: 'Ankara' },
    { id: 'izmir', label: 'İzmir' },
  ];

  const filteredLocations = selectedCity === 'all'
    ? locations
    : locations.filter(loc => loc.city === selectedCity);

  const handleFindNearest = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        
        // Find nearest location
        let nearest = locations[0];
        let minDistance = Infinity;

        locations.forEach(loc => {
          const distance = Math.sqrt(
            Math.pow(loc.coordinates.lat - userLat, 2) +
            Math.pow(loc.coordinates.lng - userLng, 2)
          );
          if (distance < minDistance) {
            minDistance = distance;
            nearest = loc;
          }
        });

        // Scroll to nearest location
        document.getElementById(`location-${nearest.id}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      });
    }
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
              <Link
                to="/"
                className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-secondary transition-colors"
              >
                <Icon icon="lucide:arrow-left" width={18} height={18} />
                <span className="hidden sm:inline">{t('nav.locations')}</span>
              </Link>
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
                {t('nav.locations')}
              </h1>
              <p className="text-lg md:text-xl text-text-muted">
                {language === 'tr' 
                  ? 'Size en yakın WMB Cafe lokasyonunu bulun'
                  : 'Find the nearest WMB Cafe location'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Actions */}
        <section className="bg-white border-b border-border sticky top-20 z-30">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide w-full md:w-auto">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city.id)}
                    className={`px-6 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                      selectedCity === city.id
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-background text-text-muted hover:text-secondary'
                    }`}
                  >
                    {city.label}
                  </button>
                ))}
              </div>
              <button
                onClick={handleFindNearest}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-secondary text-white font-semibold hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <Icon icon="lucide:navigation" width={18} height={18} />
                {language === 'tr' ? 'En Yakını Bul' : 'Find Nearest'}
              </button>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location, index) => (
              <motion.div
                key={location.id}
                id={`location-${location.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-secondary mb-2">{location.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-text-muted">
                    <Icon icon="lucide:map-pin" width={18} height={18} className="mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{location.fullAddress}</p>
                  </div>
                  <div className="flex items-center gap-2 text-text-muted">
                    <Icon icon="lucide:clock" width={18} height={18} />
                    <p className="text-sm">{location.hours}</p>
                  </div>
                  <div className="flex items-center gap-2 text-text-muted">
                    <Icon icon="lucide:phone" width={18} height={18} />
                    <a href={`tel:${location.phone}`} className="text-sm hover:text-primary transition-colors">
                      {location.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-2 pt-4 border-t border-border">
                  <a
                    href={`tel:${location.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors text-sm"
                  >
                    <Icon icon="lucide:phone" width={16} height={16} />
                    {language === 'tr' ? 'Ara' : 'Call'}
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border text-secondary font-semibold hover:bg-background transition-colors text-sm"
                  >
                    <Icon icon="lucide:map" width={16} height={16} />
                    {language === 'tr' ? 'Harita' : 'Map'}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </main>

        {/* Map Section */}
        <section className="bg-white border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-secondary mb-6 text-center">
              {language === 'tr' ? 'Haritada Görüntüle' : 'View on Map'}
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.321045813!2d28.682534!3d41.0053702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0x1d3b6b1b0b0b0b0b!2sIstanbul!5e0!3m2!1sen!2str!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </LanguageWrapper>
  );
}

