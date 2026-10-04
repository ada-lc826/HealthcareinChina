import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Stethoscope, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[hsl(222.2,84%,4.9%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Stethoscope className="h-6 w-6 text-[hsl(160,60%,45%)]" />
              <span className="text-lg font-bold">
                Medi<span className="text-[hsl(160,60%,45%)]">China</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">{t('footer.tagline')}</p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(160,60%,45%)] transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(160,60%,45%)] transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[hsl(160,60%,45%)]">{t('footer.services')}</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/packages" className="hover:text-white transition-colors">{t('packages.category.checkup')}</Link></li>
              <li><Link to="/packages" className="hover:text-white transition-colors">{t('packages.category.specialist')}</Link></li>
              <li><Link to="/packages" className="hover:text-white transition-colors">{t('packages.category.tcm')}</Link></li>
              <li><Link to="/packages" className="hover:text-white transition-colors">{t('packages.category.dental')}</Link></li>
              <li><Link to="/hospitals" className="hover:text-white transition-colors">{t('nav.hospitals')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-[hsl(160,60%,45%)]">{t('footer.company')}</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">{t('nav.process')}</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[hsl(160,60%,45%)]">{t('footer.support')}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[hsl(160,60%,45%)]" />
                chenliuying666@163.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[hsl(160,60%,45%)]" />
                +44 7434 667605
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[hsl(160,60%,45%)]" />
                WhatsApp: +44 7434 667605
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[hsl(160,60%,45%)] mt-0.5" />
                {t('contact.address')}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500"> 2025 {t('footer.copyright')}</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
