import { Icon } from '@iconify/react';

export default function InvestmentTable({ language }) {
  const investmentData = language === 'tr' 
    ? {
        range: "250.000₺ - 500.000₺",
        equipment: "150.000₺ - 200.000₺",
        operational: "Royalty: %5",
        total: "400.000₺ - 700.000₺"
      }
    : {
        range: "$250,000 - $500,000",
        equipment: "$150,000 - $200,000",
        operational: "Royalty: 5%",
        total: "$400,000 - $700,000"
      };

  const requirementsData = language === 'tr'
    ? {
        experience: "En az 1-2 yıl işletme deneyimi tercih edilir",
        capital: "Minimum 400.000₺ likuidite",
        city: "İstanbul, Ankara, İzmir, Bursa, Antalya",
        commitment: "Tam zamanlı işletme taahhüdü"
      }
    : {
        experience: "At least 1-2 years of business experience preferred",
        capital: "Minimum $400,000 in liquidity",
        city: "Istanbul, Ankara, İzmir, Bursa, Antalya",
        commitment: "Full-time operation commitment"
      };

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Investment */}
      <div className="bg-white rounded-2xl border border-border p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon icon="lucide:dollar-sign" width={24} height={24} className="text-primary" />
          </div>
          {language === 'tr' ? 'Yatırım Bilgileri' : 'Investment Information'}
        </h3>
        <div className="space-y-4">
          <div className="flex items-start justify-between py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <Icon icon="lucide:trending-up" width={20} height={20} className="text-primary" />
              <span className="font-semibold text-secondary">
                {language === 'tr' ? 'Yatırım Aralığı' : 'Investment Range'}
              </span>
            </div>
            <span className="text-lg font-bold text-primary">{investmentData.range}</span>
          </div>
          <div className="flex items-start justify-between py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <Icon icon="lucide:wrench" width={20} height={20} className="text-primary" />
              <span className="font-semibold text-secondary">
                {language === 'tr' ? 'Ekipman Maliyeti' : 'Equipment Cost'}
              </span>
            </div>
            <span className="text-lg font-bold text-primary">{investmentData.equipment}</span>
          </div>
          <div className="flex items-start justify-between py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <Icon icon="lucide:briefcase" width={20} height={20} className="text-primary" />
              <span className="font-semibold text-secondary">
                {language === 'tr' ? 'İşletme Modeli' : 'Operational Model'}
              </span>
            </div>
            <span className="text-lg font-bold text-primary">{investmentData.operational}</span>
          </div>
          <div className="flex items-start justify-between py-4 pt-2">
            <div className="flex items-center gap-3">
              <Icon icon="lucide:calculator" width={20} height={20} className="text-primary" />
              <span className="font-semibold text-secondary">
                {language === 'tr' ? 'Toplam Başlangıç Yatırımı' : 'Total Startup Investment'}
              </span>
            </div>
            <span className="text-xl font-bold text-primary">{investmentData.total}</span>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-white rounded-2xl border border-border p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon icon="lucide:clipboard-check" width={24} height={24} className="text-primary" />
          </div>
          {language === 'tr' ? 'Gereksinimler' : 'Requirements'}
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4 py-4 border-b border-border">
            <Icon icon="lucide:briefcase" width={20} height={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold text-secondary block mb-1">
                {language === 'tr' ? 'İş Deneyimi' : 'Business Experience'}
              </span>
              <span className="text-text-muted">{requirementsData.experience}</span>
            </div>
          </div>
          <div className="flex items-start gap-4 py-4 border-b border-border">
            <Icon icon="lucide:wallet" width={20} height={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold text-secondary block mb-1">
                {language === 'tr' ? 'Minimum Sermaye' : 'Minimum Capital'}
              </span>
              <span className="text-text-muted">{requirementsData.capital}</span>
            </div>
          </div>
          <div className="flex items-start gap-4 py-4 border-b border-border">
            <Icon icon="lucide:map-pin" width={20} height={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold text-secondary block mb-1">
                {language === 'tr' ? 'Şehir Uygunluğu' : 'City Availability'}
              </span>
              <span className="text-text-muted">{requirementsData.city}</span>
            </div>
          </div>
          <div className="flex items-start gap-4 py-4 pt-2">
            <Icon icon="lucide:target" width={20} height={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold text-secondary block mb-1">
                {language === 'tr' ? 'Taahhüt' : 'Commitment'}
              </span>
              <span className="text-text-muted">{requirementsData.commitment}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

