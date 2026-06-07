import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Star, Phone, Filter } from 'lucide-react';

const hospitals = [
  {
    id: 1,
    name: 'Huashan Hospital Fudan University',
    nameZh: '复旦大学附属华山医院',
    city: 'Shanghai',
    image: '/images/doctors-team.jpg',
    specialties: ['Neurosurgery', 'Orthopedics', 'Dermatology'],
    rating: 4.9,
    reviews: 2847,
    jci: true,
    description: 'One of China\'s top comprehensive hospitals, ranked #1 in neurosurgery nationwide.',
  },
  {
    id: 2,
    name: 'Peking Union Medical College Hospital',
    nameZh: '北京协和医院',
    city: 'Beijing',
    image: '/images/hero-hospital.jpg',
    specialties: ['Oncology', 'Endocrinology', 'General Surgery'],
    rating: 4.9,
    reviews: 3652,
    jci: true,
    description: 'China\'s most prestigious hospital, consistently ranked #1 in Fudan Hospital Ranking.',
  },
  {
    id: 3,
    name: 'Sun Yat-sen University Cancer Center',
    nameZh: '中山大学肿瘤防治中心',
    city: 'Guangzhou',
    image: '/images/medical-exam.jpg',
    specialties: ['Oncology', 'Radiotherapy', 'Stem Cell Therapy'],
    rating: 4.8,
    reviews: 1923,
    jci: true,
    description: 'Asia\'s leading cancer treatment center with cutting-edge proton therapy.',
  },
  {
    id: 4,
    name: 'Shanghai Renji Hospital',
    nameZh: '上海交通大学医学院附属仁济医院',
    city: 'Shanghai',
    image: '/images/patient-story.jpg',
    specialties: ['Gastroenterology', 'Reproductive Medicine', 'Organ Transplant'],
    rating: 4.8,
    reviews: 2156,
    jci: true,
    description: 'Leading in gastroenterology and reproductive medicine with international department.',
  },
  {
    id: 5,
    name: 'Peking University Third Hospital',
    nameZh: '北京大学第三医院',
    city: 'Beijing',
    image: '/images/doctors-team.jpg',
    specialties: ['Sports Medicine', 'Orthopedics', 'Reproductive Medicine'],
    rating: 4.7,
    reviews: 1845,
    jci: true,
    description: 'Famous for sports medicine and the birthplace of China\'s first test-tube baby.',
  },
  {
    id: 6,
    name: 'Shenzhen People\'s Hospital',
    nameZh: '深圳市人民医院',
    city: 'Shenzhen',
    image: '/images/hero-hospital.jpg',
    specialties: ['Cardiology', 'Neurosurgery', 'Emergency Medicine'],
    rating: 4.7,
    reviews: 1523,
    jci: false,
    description: 'Shenzhen\'s premier hospital with advanced cardiac center and international services.',
  },
  {
    id: 7,
    name: 'Guangdong Provincial People\'s Hospital',
    nameZh: '广东省人民医院',
    city: 'Guangzhou',
    image: '/images/medical-exam.jpg',
    specialties: ['Cardiovascular', 'Thoracic Surgery', 'Neurology'],
    rating: 4.8,
    reviews: 1678,
    jci: true,
    description: 'Leading cardiovascular center in South China with comprehensive international services.',
  },
  {
    id: 8,
    name: 'Shanghai Jiao Tong University Affiliated Sixth People\'s Hospital',
    nameZh: '上海市第六人民医院',
    city: 'Shanghai',
    image: '/images/patient-story.jpg',
    specialties: ['Orthopedics', 'Endocrinology', 'Trauma Care'],
    rating: 4.7,
    reviews: 1345,
    jci: true,
    description: 'Top-ranked orthopedic hospital known for complex joint replacement and spine surgery.',
  },
];

const cities = ['All', 'Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

export default function Hospitals() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');

  const filteredHospitals = hospitals.filter((h) => {
    const matchesSearch =
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      h.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === 'All' || h.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  return (
    <div className="min-h-screen bg-[hsl(210,40%,97%)]">
      {/* Header */}
      <div className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{t('hospitals.title')}</h1>
          <p className="text-lg text-muted-foreground">{t('hospitals.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('hospitals.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {cities.map((city) => (
              <Button
                key={city}
                variant={selectedCity === city ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCity(city)}
                className={
                  selectedCity === city
                    ? 'bg-[hsl(210,100%,36%)] text-white'
                    : ''
                }
              >
                {city === 'All' ? t('hospitals.filter.all') : city}
              </Button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredHospitals.length} of {hospitals.length} hospitals
        </p>

        {/* Hospital Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredHospitals.map((hospital) => (
            <Card
              key={hospital.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 h-48 sm:h-auto">
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-5 sm:w-3/5 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-base leading-tight mb-1">
                        {language === 'zh' ? hospital.nameZh : hospital.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {hospital.city}
                      </div>
                    </div>
                    {hospital.jci && (
                      <Badge variant="secondary" className="shrink-0 text-xs bg-[hsl(160,60%,45%)]/10 text-[hsl(160,60%,45%)]">
                        JCI
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-[hsl(43,96%,56%)] text-[hsl(43,96%,56%)]" />
                    <span className="text-sm font-semibold">{hospital.rating}</span>
                    <span className="text-xs text-muted-foreground">
                      ({hospital.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {hospital.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {hospital.specialties.slice(0, 3).map((s, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {s}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-[hsl(210,100%,36%)] hover:bg-[hsl(210,100%,30%)] text-white"
                    >
                      {t('hospitals.book')}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-20">
            <Filter className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No hospitals found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
