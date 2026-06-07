import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Target,
  Eye,
  Users,
  Award,
  Heart,
  Shield,
  Star,
  ArrowRight,
  Globe,
  Building2,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';

const values = [
  {
    icon: Shield,
    titleKey: 'about.values.transparency',
    descKey: 'about.values.transparency.desc',
    color: 'bg-blue-500',
  },
  {
    icon: Heart,
    titleKey: 'about.values.compassion',
    descKey: 'about.values.compassion.desc',
    color: 'bg-rose-500',
  },
  {
    icon: Award,
    titleKey: 'about.values.excellence',
    descKey: 'about.values.excellence.desc',
    color: 'bg-amber-500',
  },
];

const achievements = [
  { icon: Users, value: '12,800+', label: 'Patients Served', suffix: '' },
  { icon: Building2, value: '470+', label: 'Partner Hospitals', suffix: '' },
  { icon: Globe, value: '77', label: 'Countries Covered', suffix: '' },
  { icon: Star, value: '4.9', label: 'Average Rating', suffix: '/5' },
  { icon: Shield, value: '100%', label: 'JCI Hospital Partners', suffix: '' },
  { icon: Heart, value: '98%', label: 'Patient Satisfaction', suffix: '' },
];

const contactMethods = [
  { icon: Mail, label: 'care@medichina.com', href: 'mailto:care@medichina.com' },
  { icon: Phone, label: '+86 21 8888 8888', href: 'tel:+862188888888' },
  { icon: MessageCircle, label: 'WhatsApp: +86 138 8888 8888', href: '#' },
  { icon: MapPin, label: 'Shanghai, China', href: '#' },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src="/images/doctors-team.jpg"
          alt="Medical team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">{t('about.title')}</h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="border-0 shadow-xl shadow-primary/5">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-xl bg-[hsl(210,100%,36%)]/10 flex items-center justify-center mb-5">
                <Target className="h-7 w-7 text-[hsl(210,100%,36%)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.mission.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('about.mission.desc')}</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl shadow-primary/5">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-xl bg-[hsl(160,60%,45%)]/10 flex items-center justify-center mb-5">
                <Eye className="h-7 w-7 text-[hsl(160,60%,45%)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.vision.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('about.vision.desc')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">{t('about.team.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.team.desc')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {achievements.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <item.icon className="h-8 w-8 mx-auto mb-3 text-[hsl(210,100%,36%)]" />
                <p className="text-2xl font-bold">
                  {item.value}
                  {item.suffix}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{t('about.values.title')}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl ${value.color} text-white flex items-center justify-center mb-5`}
                >
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(value.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(value.descKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Patients Trust Us */}
        <div className="bg-[hsl(210,40%,97%)] rounded-2xl p-8 sm:p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Patients Trust MediChina</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We are not just a booking platform — we are your dedicated medical travel partner.
                From the moment you inquire to your follow-up care back home, our team ensures a
                seamless, safe, and comfortable experience.
              </p>
              <ul className="space-y-3">
                {[
                  'Direct partnerships with 470+ top-tier hospitals',
                  'Professional medical interpreters in 15+ languages',
                  'Transparent pricing — know your costs before you travel',
                  '24/7 patient support throughout your journey',
                  'Comprehensive travel and accommodation assistance',
                  'HIPAA-compliant data security and privacy protection',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-5 w-5 text-[hsl(160,60%,45%)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/patient-story.jpg"
                alt="Patient care"
                className="rounded-xl shadow-lg w-full object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[hsl(210,100%,36%)] text-white flex items-center justify-center">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">4.9/5</p>
                    <p className="text-xs text-muted-foreground">Patient Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{t('contact.title')}</h2>
          <p className="text-lg text-muted-foreground">{t('contact.subtitle')}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="flex items-center gap-3 p-4 rounded-xl bg-[hsl(210,40%,97%)] hover:bg-[hsl(210,100%,36%)]/10 transition-colors"
            >
              <method.icon className="h-5 w-5 text-[hsl(210,100%,36%)]" />
              <span className="text-sm font-medium">{method.label}</span>
            </a>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-[hsl(210,100%,36%)] to-[hsl(210,80%,50%)] rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-white mb-3">
            Start Your Healthcare Journey Today
          </h2>
          <p className="text-white/80 mb-6">
            Get a free consultation and personalized treatment plan within 24 hours
          </p>
          <Button
            size="lg"
            className="bg-white text-[hsl(210,100%,36%)] hover:bg-white/90 font-semibold"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
