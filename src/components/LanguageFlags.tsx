import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const languages = [
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇬🇧'
  },
  {
    code: 'he',
    name: 'עברית',
    flag: '🇮🇱'
  }
];

export default function LanguageFlags() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.dir = code === 'he' ? 'rtl' : 'ltr';
  };

  return (
    <div className="flex gap-4 items-center">
      <TooltipProvider>
        {languages.map((lang) => (
          <Tooltip key={lang.code}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className={`text-2xl p-2 rounded hover:bg-gray-100 ${
                  i18n.language === lang.code ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => handleLanguageChange(lang.code)}
                title={lang.name}
              >
                <span role="img" aria-label={lang.name} style={{ fontSize: '24px' }}>
                  {lang.flag}
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{lang.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
