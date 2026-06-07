import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MessageSquare,
  ClipboardList,
  Plane,
  Stethoscope,
  Video,
  ArrowRight,
  Shield,
  Clock,
  DollarSign,
  Globe,
  Heart,
  Calendar,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    titleKey: 'process.step1.title',
    descKey: 'process.step1.desc',
    icon: MessageSquare,
    color: 'bg-blue-500',
  },
  {
    step: '02',
    titleKey: 'process.step2.title',
    descKey: 'process.step2.desc',
    icon: ClipboardList,
    color: 'bg-teal-500',
  },
  {
    step: '03',
    titleKey: 'process.step3.title',
    descKey: 'process.step3.desc',
    icon: Plane,
    color: 'bg-emerald-500',
  },
  {
    step: '04',
    titleKey: 'process.step4.title',
    descKey: 'process.step4.desc',
    icon: Stethoscope,
    color: 'bg-violet-500',
  },
  {
    step: '05',
    titleKey: 'process.step5.title',
    descKey: 'process.step5.desc',
    icon: Video,
    color: 'bg-amber-500',
  },
];

const guarantees = [
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    desc: 'All costs disclosed upfront. No hidden fees, no surprises. Price match guarantee.',
  },
  {
    icon: Clock,
    title: '24-Hour Response',
    desc: 'Get your preliminary assessment and treatment plan within 24 hours of inquiry.',
  },
  {
    icon: Globe,
    title: 'Visa Assistance',
    desc: 'We guide you through the visa-free or visa-on-arrival process for 77+ countries.',
  },
  {
    icon: Heart,
    title: 'End-to-End Care',
    desc: 'From airport pickup to post-treatment follow-up, we are with you at every step.',
  },
];

const faqs = [
  {
    q: 'Do I need a visa to come to China for medical treatment?',
    a: 'Citizens of 77 countries can enter China visa-free for up to 30 days. An additional 55 countries qualify for 240-hour (10-day) visa-free transit. We will verify your eligibility and guide you through the process.',
  },
  {
    q: 'How much can I save compared to treatment in the US or Europe?',
    a: 'Patients typically save 40-85% on medical costs. For example, a comprehensive health checkup that costs $2,000+ in the US is available through our packages starting at $199. Complex surgeries can save $50,000+.',
  },
  {
    q: 'Will language be a barrier?',
    a: 'Absolutely not. We provide professional medical interpreters in English, Russian, Arabic, Indonesian, and many other languages. An interpreter accompanies you to all medical appointments. Our platform and medical reports are available in multiple languages.',
  },
  {
    q: 'How do I pay for treatment?',
    a: 'We accept Visa, Mastercard, American Express, PayPal, wire transfers, and major mobile payment methods. Payment plans are available for packages over $1,000. Hospital fees are paid directly through our secure platform.',
  },
  {
    q: 'What if I need to reschedule or cancel?',
    a: 'Rescheduling is free up to 7 days before your arrival. Full refund available up to 14 days before arrival. For cancellations within 7 days, a 20% service fee applies. We understand medical travel involves uncertainty and accommodate changes whenever possible.',
  },
];

export default function Process() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-[hsl(210,100%,36%)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('process.title')}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t('process.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Steps Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index > 0 ? 'lg:mt-12' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} ${
                    index % 2 === 1 ? 'lg:text-left' : 'lg:text-right'
                  }`}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 rounded-xl ${item.color} text-white flex items-center justify-center shrink-0`}
                        >
                          <item.icon className="h-7 w-7" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`text-xs font-bold px-2 py-0.5 rounded ${item.color} text-white`}
                            >
                              STEP {item.step}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{t(item.titleKey)}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {t(item.descKey)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[hsl(210,100%,36%)] border-4 border-white shadow-lg items-center justify-center z-10">
                  <span className="text-white text-xs font-bold">{item.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Guarantees */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Service Guarantees</h2>
            <p className="text-muted-foreground">
              We stand behind every aspect of your medical journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[hsl(210,100%,36%)]/10 flex items-center justify-center mb-4">
                    <g.icon className="h-7 w-7 text-[hsl(210,100%,36%)]" />
                  </div>
                  <h3 className="font-semibold mb-2">{g.title}</h3>
                  <p className="text-sm text-muted-foreground">{g.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Everything you need to know about medical travel to China
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-sm mb-3 flex items-start gap-2">
                    <Shield className="h-4 w-4 text-[hsl(210,100%,36%)] mt-0.5 shrink-0" />
                    {faq.q}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-[hsl(210,100%,36%)] to-[hsl(210,80%,50%)] rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to start? Get your free assessment now.
          </h2>
          <p className="text-white/80 mb-6">
            Our medical coordinators will review your case and respond within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[hsl(210,100%,36%)] hover:bg-white/90 font-semibold">
              Get Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
