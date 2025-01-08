import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Button } from '../components/ui/button';
import { GlobeIcon, CheckIcon } from 'lucide-react';

const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
  { code: 'he', name: 'עברית' }
];

export default function LanguageMenu() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.dir = code === 'he' ? 'rtl' : 'ltr';
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 font-normal"
        >
          <GlobeIcon className="h-4 w-4" />
          <span>{currentLanguage?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <div className="flex items-center justify-between w-full">
              <span>{lang.name}</span>
              {i18n.language === lang.code && (
                <CheckIcon className="h-4 w-4 ml-2" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
