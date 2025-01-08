import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Navigation
      home: 'Accueil',
      services: 'Services',
      about: 'À propos',
      contact: 'Contact',

      // SEO
      seoTitle: 'Efraïm Transport - Services de déménagement et transport',
      seoDesc: 'Services professionnels de déménagement, débarras et transport à Paris et en Île-de-France',

      // Hero Section
      heroTitle: 'Transport professionnel et fiable',
      heroText: 'Votre partenaire de confiance pour tous vos besoins de transport et déménagement',
      heroImageAlt: 'Transport professionnel',

      // Services
      ourServices: 'Nos Services',
      clearance: 'Débarras',
      clearanceDesc: 'Service complet de débarras pour appartements, caves et maisons',
      delivery: 'Livraison d\'achats',
      deliveryDesc: 'Livraison rapide et sécurisée de vos achats à votre domicile',
      proTransport: 'Transport professionnel',
      proTransportDesc: 'Solutions de transport sur mesure pour les professionnels',
      getQuote: 'Demander un devis',

      // Notre Engagement
      engagement: 'Notre Engagement',
      engagementText: 'Mon métier est un service de transport dédié à offrir des solutions de déplacements sûrs et pratiques. J\'assure des services de transport personnalisés, adaptés à vos besoins spécifiques. Je m\'engage à vous fournir des trajets confortables et sécurisés, tout en respectant les délais.',
      truckImageAlt1: 'Camion ouvert',
      truckImageAlt2: 'Deuxième vue du camion',

      // Testimonials
      testimonialTitle: 'Témoignages Clients',
      testimonial1Name: 'Sarah Cohen',
      testimonial1Text: 'Service exceptionnel ! Ponctuel et professionnel.',
      testimonial2Name: 'David Levy',
      testimonial2Text: 'Très satisfait du déménagement. Je recommande vivement.',
      testimonial3Name: 'Rachel Ben',
      testimonial3Text: 'Efficace et soigneux avec mes meubles. Excellent service !',

      // Footer
      companyName: 'Transport Herzberg',
      companyAddress: 'Tel Aviv, Israël',
      openingHours: 'Horaires d\'ouverture',
      mondayToThursday: 'Lundi - Jeudi : 8h00 - 18h00',
      friday: 'Vendredi : 8h00 - 14h00',
      sunday: 'Dimanche : 8h00 - 18h00',
      allRightsReserved: 'Tous droits réservés.',
      currentYear: '2025 Transport Herzberg',

      // Reservation Page
      backButton: 'Retour',
      requestQuote: 'Demande de devis personnalisé',
      quoteDescription: 'Remplissez le formulaire ci-dessous pour recevoir un devis adapté à vos besoins de transport.',
      lastName: 'Nom',
      firstName: 'Prénom',
      address: 'Adresse',
      phone: 'Téléphone',
      transportDetails: 'Détails du transport',
      transportDetailsPlaceholder: 'Décrivez vos besoins de transport (type de marchandises, dimensions, poids, lieu de départ et d\'arrivée, etc.)',
      submitQuote: 'Demander un devis personnalisé',
      sending: 'Envoi en cours...',
      successMessage: 'Votre demande a été envoyée avec succès !',
      errorMessage: 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.',
      or: 'OU',
      contactWhatsApp: 'Nous contacter sur WhatsApp',
    },
  },
  en: {
    translation: {
      // Navigation
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',

      // SEO
      seoTitle: 'Efraïm Transport - Moving and Transport Services',
      seoDesc: 'Professional moving, clearance and transport services in Paris and Île-de-France',

      // Hero Section
      heroTitle: 'Professional and Reliable Transport',
      heroText: 'Your trusted partner for all your transport and moving needs',
      heroImageAlt: 'Professional transport',

      // Services
      ourServices: 'Our Services',
      clearance: 'Clearance',
      clearanceDesc: 'Complete clearance service for apartments, cellars and houses',
      delivery: 'Purchase Delivery',
      deliveryDesc: 'Fast and secure delivery of your purchases to your home',
      proTransport: 'Professional Transport',
      proTransportDesc: 'Customized transport solutions for professionals',
      getQuote: 'Get a Quote',

      // Our Commitment
      engagement: 'Our Commitment',
      engagementText: 'My profession is a transport service dedicated to providing safe and convenient transportation solutions. I provide personalized transport services, tailored to your specific needs. I am committed to providing you with comfortable and secure journeys, while respecting deadlines.',
      truckImageAlt1: 'Open truck',
      truckImageAlt2: 'Second view of the truck',

      // Testimonials
      testimonialTitle: 'Client Testimonials',
      testimonial1Name: 'Sarah Cohen',
      testimonial1Text: 'Exceptional service! Punctual and professional.',
      testimonial2Name: 'David Levy',
      testimonial2Text: 'Very satisfied with the move. I highly recommend.',
      testimonial3Name: 'Rachel Ben',
      testimonial3Text: 'Efficient and careful with my furniture. Excellent service!',

      // Footer
      companyName: 'Transport Herzberg',
      companyAddress: 'Tel Aviv, Israel',
      openingHours: 'Opening Hours',
      mondayToThursday: 'Monday - Thursday: 8:00 AM - 6:00 PM',
      friday: 'Friday: 8:00 AM - 2:00 PM',
      sunday: 'Sunday: 8:00 AM - 6:00 PM',
      allRightsReserved: 'All rights reserved.',
      currentYear: '2025 Transport Herzberg',

      // Reservation Page
      backButton: 'Back',
      requestQuote: 'Request Custom Quote',
      quoteDescription: 'Fill out the form below to receive a quote tailored to your transport needs.',
      lastName: 'Last Name',
      firstName: 'First Name',
      address: 'Address',
      phone: 'Phone',
      transportDetails: 'Transport Details',
      transportDetailsPlaceholder: 'Describe your transport needs (type of goods, dimensions, weight, pickup and delivery locations, etc.)',
      submitQuote: 'Request Custom Quote',
      sending: 'Sending...',
      successMessage: 'Your request has been sent successfully!',
      errorMessage: 'An error occurred while sending the form. Please try again.',
      or: 'OR',
      contactWhatsApp: 'Contact us on WhatsApp',
    },
  },
  he: {
    translation: {
      // Navigation
      home: 'בית',
      services: 'שירותים',
      about: 'אודות',
      contact: 'צור קשר',

      // SEO
      seoTitle: 'Efraïm Transport - שירותי הובלות ותחבורה',
      seoDesc: 'שירותי הובלות, פינוי ותחבורה מקצועיים בפריז ובאיל דה פראנס',

      // Hero Section
      heroTitle: 'הובלות מקצועיות ואמינות',
      heroText: 'השותף האמין שלך לכל צרכי ההובלה והמעבר',
      heroImageAlt: 'הובלות מקצועיות',

      // Services
      ourServices: 'השירותים שלנו',
      clearance: 'פינוי',
      clearanceDesc: 'שירות פינוי מלא לדירות, מרתפים ובתים',
      delivery: 'משלוח קניות',
      deliveryDesc: 'משלוח מהיר ובטוח של הקניות שלך לביתך',
      proTransport: 'הובלה מקצועית',
      proTransportDesc: 'פתרונות הובלה מותאמים אישית למקצוענים',
      getQuote: 'קבל הצעת מחיר',

      // Our Commitment
      engagement: 'המחויבות שלנו',
      engagementText: 'המקצוע שלי הוא שירות הובלות המוקדש לספק פתרונות תחבורה בטוחים ונוחים. אני מספק שירותי הובלה מותאמים אישית, המותאמים לצרכים הספציפיים שלך. אני מתחייב לספק לך נסיעות נוחות ובטוחות, תוך כדי שמירה על לוחות זמנים.',
      truckImageAlt1: 'משאית פתוחה',
      truckImageAlt2: 'מבט שני של המשאית',

      // Testimonials
      testimonialTitle: 'המלצות לקוחות',
      testimonial1Name: 'שרה כהן',
      testimonial1Text: 'שירות יוצא מן הכלל! דייקני ומקצועי.',
      testimonial2Name: 'דוד לוי',
      testimonial2Text: 'מרוצה מאוד מההובלה. ממליץ בחום.',
      testimonial3Name: 'רחל בן',
      testimonial3Text: 'יעיל וזהיר עם הרהיטים שלי. שירות מצוין!',

      // Footer
      companyName: 'הרצברג הובלות',
      companyAddress: 'תל אביב, ישראל',
      openingHours: 'שעות פתיחה',
      mondayToThursday: 'שני - חמישי: 8:00 - 18:00',
      friday: 'שישי: 8:00 - 14:00',
      sunday: 'ראשון: 8:00 - 18:00',
      allRightsReserved: 'כל הזכויות שמורות.',
      currentYear: '2025 הרצברג הובלות',

      // Reservation Page
      backButton: 'חזרה',
      requestQuote: 'בקשת הצעת מחיר מותאמת אישית',
      quoteDescription: 'מלא את הטופס למטה כדי לקבל הצעת מחיר המותאמת לצרכי ההובלה שלך.',
      lastName: 'שם משפחה',
      firstName: 'שם פרטי',
      address: 'כתובת',
      phone: 'טלפון',
      transportDetails: 'פרטי ההובלה',
      transportDetailsPlaceholder: 'תאר את צרכי ההובלה שלך (סוג הסחורה, מידות, משקל, מיקום איסוף ומסירה וכו\')',
      submitQuote: 'בקש הצעת מחיר מותאמת אישית',
      sending: 'שולח...',
      successMessage: 'בקשתך נשלחה בהצלחה!',
      errorMessage: 'אירעה שגיאה בשליחת הטופס. אנא נסה שוב.',
      or: 'או',
      contactWhatsApp: 'צור קשר באמצעות וואטסאפ',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'he', // Langue par défaut : hébreu
    fallbackLng: 'he',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
