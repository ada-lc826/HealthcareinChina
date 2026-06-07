import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DollarSign,
  Languages,
  Zap,
  Leaf,
  ArrowRight,
  Star,
  Users,
  Building2,
  Globe,
  Heart,
  Calendar,
  Shield,
  CheckCircle,
} from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    titleKey: 'features.transparent.title',
    descKey: 'features.transparent.desc',
  },
  {
    icon: Languages,
    titleKey: 'features.language.title',
    descKey: 'features.language.desc',
  },
  {
    icon: Zap,
    titleKey: 'features.efficiency.title',
    descKey: 'features.efficiency.desc',
  },
  {
    icon: Leaf,
    titleKey: 'features.tcm.title',
    descKey: 'features.tcm.desc',
  },
];

const stats = [
  { icon: Users, value: '12,800+', labelKey: 'stats.patients' },
  { icon: Building2, value: '470+', labelKey: 'stats.hospitals' },
  { icon: Globe, value: '77', labelKey: 'stats.countries' },
  { icon: Heart, value: '98%', labelKey: 'stats.satisfaction' },
];

const packages = [
  {
    title: 'Comprehensive Health Checkup',
    titleZh: '全面健康体检',
    titleRu: 'Комплексное Обследование',
    titleAr: 'فحص صحي شامل',
    price: 299,
    duration: '2-3 days',
    image: '/images/patient-story.jpg',
    features: ['Full blood panel', 'ECG & ultrasound', 'Chest X-ray', 'TCM consultation'],
    tag: 'Most Popular',
  },
  {
    title: 'TCM Wellness Experience',
    titleZh: '中医养生体验',
    titleRu: 'Оздоровительная Программа ТКМ',
    titleAr: 'تجربة العافية بالطب الصيني',
    price: 399,
    duration: '5-7 days',
    image: '/images/tcm-experience.jpg',
    features: ['Acupuncture 3 sessions', 'Cupping therapy', 'Herbal consultation', 'Taichi class'],
    tag: 'Unique Experience',
  },
  {
    title: 'Cardiac Screening Premium',
    titleZh: '心脏深度筛查',
    titleRu: 'Премиум Кардиоскрининг',
    titleAr: 'فحص القلب المميز',
    price: 799,
    duration: '3-4 days',
    image: '/images/medical-exam.jpg',
    features: ['Coronary CTA', 'Heart ultrasound', 'Stress test', 'Expert MDT review'],
    tag: 'Best Value',
  },
];

const testimonials = [
  {
    name: 'Alexander Petrov',
    country: 'Russia',
    treatment: 'Orthopedic Surgery',
    rating: 5,
    text: 'From diagnosis to surgery in 4 days. In Russia I would have waited 3 months. The doctors were world-class and the interpreter was with me every step.',
    image: '/images/hero-hospital.jpg',
  },
  {
    name: 'Siti Rahayu',
    country: 'Indonesia',
    treatment: 'Health Checkup + TCM',
    rating: 5,
    text: 'The whole package cost less than $400 including the hotel! The acupuncture was amazing. I am bringing my parents next year.',
    image: '/images/tcm-experience.jpg',
  },
  {
    name: 'Ahmed Al-Rashid',
    country: 'UAE',
    treatment: 'Cancer Screening',
    rating: 5,
    text: 'Halal food, prayer room, private interpreter — everything was arranged. The technology here rivals anything in Europe at a fraction of the cost.',
    image: '/images/doctors-team.jpg',
  },
];

export default function Home() {
  const { t, language } = useLanguage();

  const getLocalizedTitle = (pkg: typeof packages[0]) => {
    if (language === 'zh') return pkg.titleZh;
    if (language === 'ru') return pkg.titleRu;
    if (language === 'ar') return pkg.titleAr;
    return pkg.title;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-hospital.jpg"
            alt="Modern hospital"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>Visa-free entry for 77 countries</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/packages">
                <Button
                  size="lg"
                  className="bg-white text-[hsl(210,100%,36%)] hover:bg-white/90 font-semibold px-8"
                >
                  {t('hero.cta.primary')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/hospitals">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8"
                >
                  {t('hero.cta.secondary')}
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[hsl(160,60%,45%)]" />
                <span>JCI Certified Hospitals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[hsl(160,60%,45%)]" />
                <span>24/7 Multilingual Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[hsl(160,60%,45%)]" />
                <span>Transparent Pricing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg shadow-primary/5">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-[hsl(210,100%,36%)]" />
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t(stat.labelKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[hsl(210,40%,97%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('features.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-[hsl(210,100%,36%)]/10 flex items-center justify-center mb-5 group-hover:bg-[hsl(210,100%,36%)]/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-[hsl(210,100%,36%)]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t(feature.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('packages.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('packages.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[hsl(160,60%,45%)] text-white text-xs font-semibold">
                      {pkg.tag}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{getLocalizedTitle(pkg)}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-[hsl(160,60%,45%)] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">{t('packages.from')}</span>
                      <p className="text-2xl font-bold text-[hsl(210,100%,36%)]">
                        ${pkg.price}
                      </p>
                    </div>
                    <Button className="bg-[hsl(210,100%,36%)] hover:bg-[hsl(210,100%,30%)] text-white">
                      {t('packages.book')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/packages">
              <Button variant="outline" size="lg" className="gap-2">
                {t('packages.detail')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-[hsl(210,40%,97%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('process.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('process.subtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', titleKey: 'process.step1.title', descKey: 'process.step1.desc', icon: Calendar },
              { step: '02', titleKey: 'process.step2.title', descKey: 'process.step2.desc', icon: Shield },
              { step: '03', titleKey: 'process.step3.title', descKey: 'process.step3.desc', icon: Globe },
              { step: '04', titleKey: 'process.step4.title', descKey: 'process.step4.desc', icon: Heart },
              { step: '05', titleKey: 'process.step5.title', descKey: 'process.step5.desc', icon: Star },
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-16 h-16 mx-auto rounded-full bg-[hsl(210,100%,36%)] text-white flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold text-[hsl(160,60%,45%)] mb-1 block">
                  STEP {item.step}
                </span>
                <h4 className="font-semibold text-sm mb-2">{t(item.titleKey)}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/process">
              <Button variant="outline" size="lg" className="gap-2">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('testimonials.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg shadow-primary/5">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[hsl(43,96%,56%)] text-[hsl(43,96%,56%)]" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[hsl(210,100%,36%)]/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-[hsl(210,100%,36%)]">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.country} · {testimonial.treatment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/80 mb-8">{t('cta.subtitle')}</p>
          <Button
            size="lg"
            className="bg-white text-[hsl(210,100%,36%)] hover:bg-white/90 font-semibold px-10 py-6 text-base"
          >
            {t('cta.button')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-6 flex justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" /> Free Assessment
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" /> No Hidden Fees
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" /> 24h Response
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
