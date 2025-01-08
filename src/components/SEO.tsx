import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = 'Efraïm Transport - שירותי הובלות מקצועיים',
  description = 'שירותי הובלות מקצועיים ואמינים בתל אביב והסביבה. הובלות דירה, פינוי דירה ומשלוחים לפרטיים ועסקים.',
  keywords = 'הובלות, הובלות דירה, פינוי דירה, משלוחים, תל אביב, מקצועי, אמין',
  image = 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3',
  url = 'https://efraim-transport.co.il',
}: SEOProps) {
  return (
    <Helmet>
      {/* Balises meta de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="he_IL" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Autres balises meta importantes */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Hebrew" />

      {/* Balises meta pour le référencement local */}
      <meta name="geo.region" content="IL-TA" />
      <meta name="geo.placename" content="Tel Aviv" />
      <meta name="geo.position" content="32.0853;34.7818" />
      <meta name="ICBM" content="32.0853, 34.7818" />

      {/* Liens canoniques et alternates */}
      <link rel="canonical" href={url} />
      <link rel="alternate" href={url} hrefLang="he-IL" />
    </Helmet>
  );
}
