import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {/* Bloc Transport Herzberg */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('companyName')}</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5" />
                <span>{t('companyAddress')}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5" />
                <span>+972 (0)525 464 894</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5" />
                <span>akoltov1967@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Bloc Horaires */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('openingHours')}</h3>
            <div className="space-y-2">
              <p>{t('mondayToThursday')}</p>
              <p>{t('friday')}</p>
              <p>{t('sunday')}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p>{currentYear} {t('companyName')}. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}