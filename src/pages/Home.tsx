// Import des composants UI personnalisés
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
// Import des icônes de Lucide
import { TruckIcon, BoxIcon, HomeIcon } from 'lucide-react';
// Import des composants de routage
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';
import franckImage from '../assets/franck.webp';
import openTruckImage from '../assets/opentruck.webp';
import openTruck2Image from '../assets/opentruck2.webp';

interface Testimonial {
  id: number;
  text: string;
  name: string;
}

interface CarouselProps {
  testimonials: Testimonial[];
  t: (key: string) => string;
  dir?: string;
}

interface Service {
  title: string;
  description: string;
  icon: any;
}

const HebrewCarousel = ({ testimonials, t }: CarouselProps) => (
  <div className="grid grid-cols-1 gap-4 max-w-xl mx-auto" dir="rtl">
    {testimonials.map((testimonial) => (
      <div key={testimonial.id} className="w-full">
        <Card>
          <CardContent className="p-6" dir="rtl">
            <blockquote className="space-y-2">
              <p className="text-lg mb-4">{t(testimonial.text)}</p>
              <footer className="text-sm font-semibold">{t(testimonial.name)}</footer>
            </blockquote>
          </CardContent>
        </Card>
      </div>
    ))}
  </div>
);

const DefaultCarousel = ({ testimonials, t, dir = "ltr" }: CarouselProps) => (
  <Carousel
    opts={{
      align: "start",
      loop: true,
    }}
    className="max-w-xl mx-auto"
    dir={dir}
  >
    <CarouselContent>
      {testimonials.map((testimonial) => (
        <CarouselItem key={testimonial.id} className="md:basis-1/1">
          <Card>
            <CardContent className="p-6">
              <blockquote className="space-y-2">
                <p className="text-lg mb-4">{t(testimonial.text)}</p>
                <footer className="text-sm font-semibold">{t(testimonial.name)}</footer>
              </blockquote>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

export default function Home() {
  const { t, i18n } = useTranslation();
  const [testimonials] = useState<Testimonial[]>([
    { id: 1, name: 'testimonial1Name', text: 'testimonial1Text' },
    { id: 2, name: 'testimonial2Name', text: 'testimonial2Text' },
    { id: 3, name: 'testimonial3Name', text: 'testimonial3Text' },
  ]);

  // Définition des services proposés avec leurs détails
  const services: Service[] = [
    {
      title: t('clearance'),
      description: t('clearanceDesc'),
      icon: HomeIcon,
    },
    {
      title: t('delivery'),
      description: t('deliveryDesc'),
      icon: BoxIcon,
    },
    {
      title: t('proTransport'),
      description: t('proTransportDesc'),
      icon: TruckIcon,
    },
  ];

  return (
    <>
      <SEO 
        title={t('seoTitle')}
        description={t('seoDesc')}
        keywords={t('seoKeywords')}
      />
      <SchemaOrg 
        type="LocalBusiness"
        areaServed={['תל אביב', 'רמת גן', 'גבעתיים', 'הרצליה', 'חולון', 'בת ים']}
      />
      <div className="flex flex-col min-h-screen">
        {/* Section Hero - Présentation principale */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-muted to-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Texte de présentation */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-800">
                  {t('heroTitle')}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('heroText')}
                </p>
                <Link to="/reservation">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                    {t('getQuote')}
                  </Button>
                </Link>
              </div>
              {/* Image de présentation */}
              <div className="flex-1">
                <img
                  src={franckImage}
                  alt={t('heroImageAlt')}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Services - Liste des services proposés */}
        <section id="services" className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t('ourServices')}</h2>
            {/* Grille de services responsive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <service.icon className="h-12 w-12 text-blue-800 mb-4" />
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Link to="/reservation">
                        <Button className="bg-orange-500 hover:bg-orange-600">
                          {t('getQuote')}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section À propos - Notre engagement */}
        <section id="about" className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">{t('engagement')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <img
                  src={openTruckImage}
                  alt={t('truckImageAlt1')}
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
                <img
                  src={openTruck2Image}
                  alt={t('truckImageAlt2')}
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('engagementText')}
              </p>
            </div>
          </div>
        </section>

        {/* Section Témoignages - Avis de nos clients */}
        <section className="py-16" dir={i18n.language === 'he' ? 'rtl' : 'ltr'}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t('testimonialTitle')}</h2>
            {/* Carrousel de témoignages */}
            {i18n.language === 'he' ? (
              <HebrewCarousel testimonials={testimonials} t={t} />
            ) : (
              <DefaultCarousel testimonials={testimonials} t={t} dir={i18n.language === 'he' ? 'rtl' : 'ltr'} />
            )}
          </div>
        </section>
      </div>
    </>
  );
}