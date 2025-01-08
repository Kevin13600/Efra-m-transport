import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function Reservation() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    telephone: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('http://localhost:3001/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(t('errorMessage'));
      }

      setSubmitStatus('success');
      setFormData({
        nom: '',
        prenom: '',
        adresse: '',
        email: '',
        telephone: '',
        details: '',
      });
      alert(t('successMessage'));
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
      alert(t('errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title={t('requestQuote') + ' - Transport Herzberg'}
        description={t('quoteDescription')}
        keywords="transport, devis, reservation"
      />
      <SchemaOrg 
        type="Service"
        name={t('requestQuote')}
        description={t('quoteDescription')}
      />
      <div className="min-h-screen bg-background">
        {/* Main Content */}
        <main className="pt-24 px-4">
          <div className="container mx-auto max-w-2xl">
            {/* Back Button */}
            <a href="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
              ← {t('backButton')}
            </a>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">{t('requestQuote')}</h1>
            <p className="text-gray-600 mb-8">
              {t('quoteDescription')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="nom" className="block text-sm font-medium">
                    {t('lastName')}
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="prenom" className="block text-sm font-medium">
                    {t('firstName')}
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="adresse" className="block text-sm font-medium">
                  {t('address')}
                </label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="telephone" className="block text-sm font-medium">
                    {t('phone')}
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="block text-sm font-medium">
                  {t('transportDetails')}
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder={t('transportDetailsPlaceholder')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 text-black"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? t('sending') : t('submitQuote')}
              </button>
            </form>

            {/* Séparateur "OU" */}
            <div className="relative py-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-background px-4 text-sm text-gray-500">{t('or')}</span>
              </div>
            </div>

            {/* Bouton WhatsApp */}
            <a
              href={`https://wa.me/972525464894`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-md transition-colors text-center flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('contactWhatsApp')}
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
