import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Franchise() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    investmentRange: '',
    experience: '',
    additionalRequirements: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[\d\s\-\+\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    
    // Validate on blur
    let error = '';
    if (!value.trim()) {
      error = language === 'tr' ? 'Bu alan zorunludur' : 'This field is required';
    } else if (name === 'email' && !validateEmail(value)) {
      error = language === 'tr' ? 'Geçerli bir e-posta adresi girin' : 'Enter a valid email address';
    } else if (name === 'phone' && !validatePhone(value)) {
      error = language === 'tr' ? 'Geçerli bir telefon numarası girin' : 'Enter a valid phone number';
    }
    
    if (error) {
      setErrors({ ...errors, [name]: error });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = language === 'tr' ? 'Ad zorunludur' : 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = language === 'tr' ? 'Soyad zorunludur' : 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = language === 'tr' ? 'E-posta zorunludur' : 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = language === 'tr' ? 'Geçerli bir e-posta adresi girin' : 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = language === 'tr' ? 'Telefon zorunludur' : 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = language === 'tr' ? 'Geçerli bir telefon numarası girin' : 'Enter a valid phone number';
    }
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.city.trim()) {
      newErrors.city = language === 'tr' ? 'Şehir zorunludur' : 'City is required';
    }
    if (!formData.investmentRange) {
      newErrors.investmentRange = language === 'tr' ? 'Yatırım aralığı seçiniz' : 'Select investment range';
    }
    if (!formData.experience) {
      newErrors.experience = language === 'tr' ? 'Deneyim seviyesi seçiniz' : 'Select experience level';
    }
    return newErrors;
  };

  const handleNext = () => {
    if (step === 1) {
      const step1Errors = validateStep1();
      if (Object.keys(step1Errors).length === 0) {
        setStep(2);
        setErrors({});
      } else {
        setErrors(step1Errors);
        setTouched({
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
        });
      }
    } else if (step === 2) {
      const step2Errors = validateStep2();
      const allErrors = { ...step2Errors };
      
      if (!acceptedTerms) {
        allErrors.terms = language === 'tr' ? 'KVKK şartlarını kabul etmelisiniz' : 'You must accept the privacy policy';
      }
      
      if (Object.keys(allErrors).length === 0) {
        handleSubmit();
      } else {
        setErrors(allErrors);
        setTouched({
          city: true,
          investmentRange: true,
          experience: true,
        });
      }
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  const investmentRanges = language === 'tr' 
    ? ['50.000₺ - 100.000₺', '100.000₺ - 250.000₺', '250.000₺ - 500.000₺', '500.000₺+']
    : ['$50,000 - $100,000', '$100,000 - $250,000', '$250,000 - $500,000', '$500,000+'];

  const experienceOptions = language === 'tr'
    ? ['Yok', '1-3 Yıl', '3-5 Yıl', '5+ Yıl']
    : ['None', '1-3 Years', '3-5 Years', '5+ Years'];

  if (isSubmitted) {
    return (
      <section id="franchise" className="py-24 md:py-32 relative overflow-hidden bg-premium-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6"
          >
            <Icon icon="lucide:check" width={40} height={40} className="text-primary" strokeWidth={3} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {language === 'tr' ? 'Başvurunuz Alındı!' : 'Application Received!'}
          </h2>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
            {language === 'tr'
              ? 'En kısa sürede sizinle iletişime geçeceğiz. Franchise bilgi kitapçığımızı indirmek ister misiniz?'
              : 'We will contact you soon. Would you like to download our franchise information booklet?'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
            >
              <Icon icon="lucide:download" width={20} height={20} />
              {language === 'tr' ? 'Kitapçığı İndir' : 'Download Booklet'}
            </a>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  city: '',
                  investmentRange: '',
                  experience: '',
                  additionalRequirements: '',
                });
              }}
              className="inline-flex items-center justify-center h-14 px-8 rounded-lg border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-all"
            >
              {language === 'tr' ? 'Yeni Başvuru' : 'New Application'}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="franchise" className="py-24 md:py-32 relative overflow-hidden bg-premium-gradient">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
            <Icon icon="lucide:store" width={32} height={32} strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-6">
            {t('franchise.title')}
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-8">
            {t('franchise.description')}
          </p>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-text-muted'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 1 ? 'bg-primary text-white' : 'bg-background border-2 border-border'
              }`}>
                1
              </div>
              <span className="hidden sm:inline font-semibold">
                {language === 'tr' ? 'Kişisel Bilgiler' : 'Personal Info'}
              </span>
            </div>
            <div className={`w-16 h-0.5 ${step >= 2 ? 'bg-primary' : 'bg-border'}`}></div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-text-muted'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 2 ? 'bg-primary text-white' : 'bg-background border-2 border-border'
              }`}>
                2
              </div>
              <span className="hidden sm:inline font-semibold">
                {language === 'tr' ? 'İş Bilgileri' : 'Business Info'}
              </span>
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl shadow-xl border border-border p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold text-secondary mb-6">
                {language === 'tr' ? 'Kişisel Bilgiler' : 'Personal Information'}
              </h3>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      {t('franchise.firstName')} *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full h-12 px-4 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.firstName && touched.firstName
                          ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                          : 'border-border focus:ring-primary/20 focus:border-primary'
                      }`}
                      aria-invalid={errors.firstName && touched.firstName}
                      aria-describedby={errors.firstName && touched.firstName ? 'firstName-error' : undefined}
                    />
                    {errors.firstName && touched.firstName && (
                      <p id="firstName-error" className="mt-1 text-xs text-red-500" role="alert">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      {t('franchise.lastName')} *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full h-12 px-4 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.lastName && touched.lastName
                          ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                          : 'border-border focus:ring-primary/20 focus:border-primary'
                      }`}
                      aria-invalid={errors.lastName && touched.lastName}
                      aria-describedby={errors.lastName && touched.lastName ? 'lastName-error' : undefined}
                    />
                    {errors.lastName && touched.lastName && (
                      <p id="lastName-error" className="mt-1 text-xs text-red-500" role="alert">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    {t('franchise.email')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full h-12 px-4 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.email && touched.email
                        ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                        : 'border-border focus:ring-primary/20 focus:border-primary'
                    }`}
                    aria-invalid={errors.email && touched.email}
                    aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                  />
                  {errors.email && touched.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    {language === 'tr' ? 'Telefon' : 'Phone'} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full h-12 px-4 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.phone && touched.phone
                        ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                        : 'border-border focus:ring-primary/20 focus:border-primary'
                    }`}
                    aria-invalid={errors.phone && touched.phone}
                    aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && touched.phone && (
                    <p id="phone-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleNext}
                  className="w-full h-14 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl mt-6 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                >
                  {language === 'tr' ? 'Devam Et' : 'Continue'}
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl shadow-xl border border-border p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold text-secondary mb-6">
                {language === 'tr' ? 'İş Bilgileri' : 'Business Information'}
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    {language === 'tr' ? 'Şehir' : 'City'} *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full h-12 px-4 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.city && touched.city
                        ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                        : 'border-border focus:ring-primary/20 focus:border-primary'
                    }`}
                    aria-invalid={errors.city && touched.city}
                    aria-describedby={errors.city && touched.city ? 'city-error' : undefined}
                  />
                  {errors.city && touched.city && (
                    <p id="city-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.city}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    {language === 'tr' ? 'Yatırım Aralığı' : 'Investment Range'} *
                  </label>
                  <select
                    name="investmentRange"
                    value={formData.investmentRange}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full h-12 px-4 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.investmentRange && touched.investmentRange
                        ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                        : 'border-border focus:ring-primary/20 focus:border-primary'
                    }`}
                    aria-invalid={errors.investmentRange && touched.investmentRange}
                    aria-describedby={errors.investmentRange && touched.investmentRange ? 'investmentRange-error' : undefined}
                  >
                    <option value="">{language === 'tr' ? 'Seçiniz' : 'Select'}</option>
                    {investmentRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                  {errors.investmentRange && touched.investmentRange && (
                    <p id="investmentRange-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.investmentRange}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    {language === 'tr' ? 'Deneyim' : 'Experience'} *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full h-12 px-4 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.experience && touched.experience
                        ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                        : 'border-border focus:ring-primary/20 focus:border-primary'
                    }`}
                    aria-invalid={errors.experience && touched.experience}
                    aria-describedby={errors.experience && touched.experience ? 'experience-error' : undefined}
                  >
                    <option value="">{language === 'tr' ? 'Seçiniz' : 'Select'}</option>
                    {experienceOptions.map((exp, index) => (
                      <option key={index} value={exp}>{exp}</option>
                    ))}
                  </select>
                  {errors.experience && touched.experience && (
                    <p id="experience-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.experience}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    {language === 'tr' ? 'Ek Gereksinimler' : 'Additional Requirements'}
                  </label>
                  <textarea
                    name="additionalRequirements"
                    value={formData.additionalRequirements}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder={language === 'tr' ? 'Varsa eklemek istedikleriniz...' : 'Any additional information...'}
                  />
                </div>
                <div className="flex items-start gap-3 pt-4">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={acceptedTerms}
                    onChange={(e) => {
                      setAcceptedTerms(e.target.checked);
                      if (errors.terms) {
                        setErrors({ ...errors, terms: '' });
                      }
                    }}
                    className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary/20 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                    aria-invalid={errors.terms ? 'true' : 'false'}
                    aria-describedby={errors.terms ? 'terms-error' : undefined}
                  />
                  <label htmlFor="terms" className="text-sm text-text-muted">
                    {language === 'tr'
                      ? 'KVKK aydınlatma metnini okudum ve kabul ediyorum. *'
                      : 'I have read and accept the privacy policy. *'}
                  </label>
                </div>
                {errors.terms && (
                  <p id="terms-error" className="text-xs text-red-500 ml-8" role="alert">
                    {errors.terms}
                  </p>
                )}
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 h-14 rounded-lg border-2 border-border text-secondary font-semibold hover:bg-background transition-all focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-2"
                  >
                    {language === 'tr' ? 'Geri' : 'Back'}
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!acceptedTerms || isLoading}
                    className="flex-1 h-14 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Icon icon="lucide:loader-2" width={20} height={20} />
                        </motion.div>
                        <span>{language === 'tr' ? 'Gönderiliyor...' : 'Submitting...'}</span>
                      </>
                    ) : (
                      t('franchise.submit')
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Grid Pattern BG */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>
    </section>
  );
}
