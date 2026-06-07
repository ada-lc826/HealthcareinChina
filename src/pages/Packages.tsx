import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  Calendar,
  Clock,
  Hotel,
  Car,
  Stethoscope,
  Pill,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

type Category = 'all' | 'checkup' | 'specialist' | 'tcm' | 'dental';

const allPackages = [
  {
    id: 1,
    category: 'checkup' as Category,
    title: 'Essential Health Checkup',
    titleZh: '基础健康体检',
    titleRu: 'Базовый Медосмотр',
    titleAr: 'الفحص الصحي الأساسي',
    price: 199,
    originalPrice: 850,
    duration: '1-2 days',
    image: '/images/patient-story.jpg',
    tag: 'Best Seller',
    tagColor: 'bg-[hsl(43,96%,56%)]',
    features: [
      'Complete blood count',
      'Liver & kidney function',
      'Blood glucose & lipids',
      'ECG & chest X-ray',
      'Abdominal ultrasound',
      'Doctor consultation',
    ],
    includes: [
      { icon: Calendar, label: '2 days' },
      { icon: Stethoscope, label: '6 checks' },
      { icon: Pill, label: 'Reports in EN' },
    ],
  },
  {
    id: 2,
    category: 'checkup' as Category,
    title: 'Comprehensive Health Checkup',
    titleZh: '全面健康体检',
    titleRu: 'Комплексное Обследование',
    titleAr: 'الفحص الصحي الشامل',
    price: 399,
    originalPrice: 1500,
    duration: '2-3 days',
    image: '/images/hero-hospital.jpg',
    tag: 'Most Popular',
    tagColor: 'bg-[hsl(210,100%,36%)]',
    features: [
      'All Essential checks',
      'Low-dose lung CT scan',
      'Thyroid ultrasound',
      'Cardiac stress test',
      'TCM body constitution analysis',
      '30-min acupuncture session',
      'Personal health report',
    ],
    includes: [
      { icon: Calendar, label: '3 days' },
      { icon: Stethoscope, label: '7+ checks' },
      { icon: Hotel, label: 'Hotel incl.' },
    ],
  },
  {
    id: 3,
    category: 'checkup' as Category,
    title: 'Executive Premium Checkup',
    titleZh: '高管尊享体检',
    titleRu: 'Премиум Обследование',
    titleAr: 'الفحص الصحي المتميز',
    price: 899,
    originalPrice: 3200,
    duration: '3-4 days',
    image: '/images/doctors-team.jpg',
    tag: 'VIP',
    tagColor: 'bg-[hsl(280,65%,60%)]',
    features: [
      'All Comprehensive checks',
      'MRI brain scan',
      'CT coronary angiography',
      'Tumor marker panel (12 items)',
      'Gastroscopy & colonoscopy',
      'Nutritionist consultation',
      'Private room & interpreter',
      'Airport transfer included',
    ],
    includes: [
      { icon: Calendar, label: '4 days' },
      { icon: Stethoscope, label: '12+ checks' },
      { icon: Car, label: 'Transfer incl.' },
      { icon: Hotel, label: '5-star hotel' },
    ],
  },
  {
    id: 4,
    category: 'specialist' as Category,
    title: 'Cardiac Screening Package',
    titleZh: '心脏深度筛查套餐',
    titleRu: 'Кардиоскрининг',
    titleAr: 'باقة فحص القلب',
    price: 799,
    originalPrice: 5000,
    duration: '2-3 days',
    image: '/images/medical-exam.jpg',
    tag: 'Save 84%',
    tagColor: 'bg-[hsl(160,60%,45%)]',
    features: [
      'Coronary CTA scan',
      'Cardiac ultrasound (Echo)',
      'Exercise stress test',
      '24h Holter monitoring',
      'Cardiologist MDT review',
      'Personalized prevention plan',
    ],
    includes: [
      { icon: Calendar, label: '3 days' },
      { icon: Stethoscope, label: '6 checks' },
      { icon: Pill, label: 'EN report' },
    ],
  },
  {
    id: 5,
    category: 'specialist' as Category,
    title: 'Cancer Early Screening',
    titleZh: '肿瘤早期筛查套餐',
    titleRu: 'Раннее Выявление Рака',
    titleAr: 'باقة الكشف المبكر عن السرطان',
    price: 1299,
    originalPrice: 8000,
    duration: '3-5 days',
    image: '/images/medical-exam.jpg',
    tag: 'Critical',
    tagColor: 'bg-red-500',
    features: [
      'Low-dose chest CT',
      'Gastroscopy & colonoscopy',
      'Tumor markers (AFP, CEA, CA19-9, PSA)',
      'Thyroid & breast ultrasound',
      'Oncology specialist MDT',
      'Genetic risk assessment',
    ],
    includes: [
      { icon: Calendar, label: '5 days' },
      { icon: Stethoscope, label: '6+ checks' },
      { icon: Hotel, label: 'Hotel incl.' },
    ],
  },
  {
    id: 6,
    category: 'tcm' as Category,
    title: 'TCM Wellness Journey (5 Days)',
    titleZh: '中医养生之旅（5天）',
    titleRu: 'Оздоровительная Программа ТКМ (5 дней)',
    titleAr: 'رحلة العافية بالطب الصيني (5 أيام)',
    price: 399,
    originalPrice: 1200,
    duration: '5 days',
    image: '/images/tcm-experience.jpg',
    tag: 'Cultural Experience',
    tagColor: 'bg-[hsl(160,60%,45%)]',
    features: [
      'TCM body constitution diagnosis',
      'Acupuncture (3 sessions)',
      'Cupping therapy (2 sessions)',
      'Herbal medicine consultation',
      'Taichi & Qigong classes',
      'Tongrentang pharmacy visit',
      'Wellness meals included',
    ],
    includes: [
      { icon: Calendar, label: '5 days' },
      { icon: Stethoscope, label: '7+ therapies' },
      { icon: Hotel, label: 'Hotel incl.' },
    ],
  },
  {
    id: 7,
    category: 'tcm' as Category,
    title: 'TCM + Modern Medicine Combo',
    titleZh: '中西医结合套餐',
    titleRu: 'Комбо ТКМ + Современная Медицина',
    titleAr: 'الطب الصيني التقليدي + الطب الحديث',
    price: 599,
    originalPrice: 1800,
    duration: '4-5 days',
    image: '/images/tcm-experience.jpg',
    tag: 'Best Value',
    tagColor: 'bg-[hsl(210,100%,36%)]',
    features: [
      'Full health checkup',
      'TCM diagnosis & acupuncture',
      'Herbal prescription (2-week supply)',
      'Nutritionist diet plan',
      'Follow-up video consultation',
      'English medical report',
    ],
    includes: [
      { icon: Calendar, label: '5 days' },
      { icon: Stethoscope, label: '8+ services' },
      { icon: Hotel, label: 'Hotel incl.' },
    ],
  },
  {
    id: 8,
    category: 'dental' as Category,
    title: 'Dental Care Package',
    titleZh: '牙科护理套餐',
    titleRu: 'Стоматологическая Программа',
    titleAr: 'باقة العناية بالأسنان',
    price: 299,
    originalPrice: 2000,
    duration: '1-2 days',
    image: '/images/patient-story.jpg',
    tag: 'Save 85%',
    tagColor: 'bg-[hsl(43,96%,56%)]',
    features: [
      'Full dental examination',
      'Digital X-rays',
      'Professional cleaning & polishing',
      'Up to 3 cavity fillings',
      'Treatment plan & cost estimate',
    ],
    includes: [
      { icon: Calendar, label: '2 days' },
      { icon: Stethoscope, label: '5 services' },
      { icon: Pill, label: 'EN report' },
    ],
  },
];

const categories: { key: Category; labelKey: string }[] = [
  { key: 'all', labelKey: 'hospitals.filter.all' },
  { key: 'checkup', labelKey: 'packages.category.checkup' },
  { key: 'specialist', labelKey: 'packages.category.specialist' },
  { key: 'tcm', labelKey: 'packages.category.tcm' },
  { key: 'dental', labelKey: 'packages.category.dental' },
];

export default function Packages() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const getLocalizedTitle = (pkg: typeof allPackages[0]) => {
    if (language === 'zh') return pkg.titleZh;
    if (language === 'ru') return pkg.titleRu;
    if (language === 'ar') return pkg.titleAr;
    return pkg.title;
  };

  const filteredPackages =
    activeCategory === 'all'
      ? allPackages
      : allPackages.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[hsl(210,40%,97%)]">
      {/* Header */}
      <div className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{t('packages.page.title')}</h1>
          <p className="text-lg text-muted-foreground">{t('packages.page.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat.key}
              variant={activeCategory === cat.key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(cat.key)}
              className={
                activeCategory === cat.key
                  ? 'bg-[hsl(210,100%,36%)] text-white'
                  : ''
              }
            >
              {t(cat.labelKey)}
            </Button>
          ))}
        </div>

        {/* US Price Comparison Banner */}
        <div className="bg-gradient-to-r from-[hsl(210,100%,36%)] to-[hsl(210,80%,50%)] rounded-xl p-6 mb-10 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold mb-1">Save up to 85% compared to US prices</h3>
              <p className="text-sm text-white/80">
                Same quality, world-class facilities, at a fraction of the cost
              </p>
            </div>
            <div className="flex gap-6 text-center">
              <div>
                <p className="text-2xl font-bold">$299</p>
                <p className="text-xs text-white/70">China (our package)</p>
              </div>
              <div className="text-white/50 text-2xl font-light">vs</div>
              <div>
                <p className="text-2xl font-bold text-white/60 line-through">$2,000+</p>
                <p className="text-xs text-white/70">US average</p>
              </div>
            </div>
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full ${pkg.tagColor} text-white text-xs font-semibold`}>
                    {pkg.tag}
                  </span>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-base mb-1">{getLocalizedTitle(pkg)}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{pkg.duration}</span>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    {t('packages.includes')}
                  </p>
                  <ul className="space-y-1.5">
                    {pkg.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle className="h-3.5 w-3.5 text-[hsl(160,60%,45%)] mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick info row */}
                <div className="flex gap-3 mb-4 text-xs text-muted-foreground">
                  {pkg.includes.map((item, iIndex) => (
                    <div key={iIndex} className="flex items-center gap-1">
                      <item.icon className="h-3.5 w-3.5" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-end justify-between pt-3 border-t">
                  <div>
                    <span className="text-xs text-muted-foreground">{t('packages.from')}</span>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-bold text-[hsl(210,100%,36%)]">${pkg.price}</p>
                      <p className="text-sm text-muted-foreground line-through">
                        ${pkg.originalPrice}
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-[hsl(210,100%,36%)] hover:bg-[hsl(210,100%,30%)] text-white"
                  >
                    {t('packages.book')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* VIP Custom Package CTA */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg border border-border/50">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[hsl(280,65%,60%)]/10 flex items-center justify-center shrink-0">
              <Sparkles className="h-8 w-8 text-[hsl(280,65%,60%)]" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Need a Custom VIP Package?</h3>
              <p className="text-muted-foreground text-sm">
                We design personalized treatment plans for complex conditions, including private
                aviation, luxury accommodation, and dedicated medical teams. Contact us for a
                bespoke quote.
              </p>
            </div>
            <Button
              size="lg"
              className="shrink-0 bg-[hsl(280,65%,60%)] hover:bg-[hsl(280,65%,50%)] text-white"
            >
              Request VIP Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
