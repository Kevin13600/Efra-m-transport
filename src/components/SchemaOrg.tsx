import { Helmet } from 'react-helmet';

interface SchemaOrgProps {
  type?: 'Organization' | 'LocalBusiness' | 'Service';
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  areaServed?: string[];
  priceRange?: string;
}

export default function SchemaOrg({
  type = 'LocalBusiness',
  name = 'Efraïm Transport',
  description = 'שירותי הובלות מקצועיים ואמינים בתל אביב והסביבה',
  url = 'https://efraim-transport.co.il',
  telephone = '+972-XX-XXX-XXXX', // Remplacer par le vrai numéro
  address = {
    streetAddress: 'רחוב אלנבי 1', // Exemple d'adresse
    addressLocality: 'תל אביב',
    addressRegion: 'תל אביב',
    postalCode: '6515601',
    addressCountry: 'IL',
  },
  geo = {
    latitude: 32.0853,
    longitude: 34.7818,
  },
  areaServed = ['תל אביב', 'רמת גן', 'גבעתיים', 'הרצליה', 'חולון', 'בת ים'],
  priceRange = '₪₪-₪₪₪',
}: SchemaOrgProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url,
    telephone,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...geo,
    },
    areaServed: areaServed.map(area => ({
      '@type': 'City',
      name: area,
    })),
    priceRange,
    openingHours: [
      'Su-Th 08:00-19:00',
      'Fr 08:00-14:00',
    ],
    paymentAccepted: ['מזומן', 'העברה בנקאית', 'כרטיס אשראי'],
    currenciesAccepted: 'ILS',
    hasMap: `https://www.google.com/maps?q=${geo.latitude},${geo.longitude}`,
    sameAs: [
      'https://www.facebook.com/efraimtransport', // À remplacer par les vrais liens
      'https://www.instagram.com/efraimtransport',
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
