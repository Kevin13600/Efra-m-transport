import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (formData: any) => {
  const emailContent = `
    Nouvelle demande de devis :
    
    Nom : ${formData.lastName}
    Prénom : ${formData.firstName}
    Adresse : ${formData.address}
    Téléphone : ${formData.phone}
    
    Détails du transport :
    ${formData.transportDetails}
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // L'email sera envoyé à la même adresse
      subject: 'Nouvelle demande de devis - Transport Herzberg',
      text: emailContent,
    });
    return { success: true };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, error: error.message };
  }
};
