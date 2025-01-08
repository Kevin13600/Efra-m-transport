import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import LanguageMenu from './LanguageMenu';
import { useTranslation } from 'react-i18next';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary">
            Efraïm Transport
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="hover:text-primary">
              {t('home')}
            </Link>
            <a href="#services" onClick={scrollToSection('services')} className="hover:text-primary">
              {t('services')}
            </a>
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-primary">
              {t('about')}
            </a>
            <LanguageMenu />
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}