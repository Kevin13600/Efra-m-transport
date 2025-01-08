require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(express.json());

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Configuration de Twilio
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Fonction pour envoyer un email
async function sendEmail(formData) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'Nouvelle demande de devis',
    html: `
      <h2>Nouvelle demande de devis</h2>
      <p><strong>Nom:</strong> ${formData.nom}</p>
      <p><strong>Prénom:</strong> ${formData.prenom}</p>
      <p><strong>Adresse:</strong> ${formData.adresse}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Téléphone:</strong> ${formData.telephone}</p>
      <p><strong>Détails:</strong> ${formData.details}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

// Fonction pour envoyer un SMS
async function sendSMS(formData) {
  const message = `Nouvelle demande de devis de ${formData.nom} ${formData.prenom}. Tel: ${formData.telephone}`;
  
  return twilioClient.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.env.RECIPIENT_PHONE,
  });
}

// Route pour gérer les soumissions de formulaire
app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = req.body;

    // Envoyer l'email
    await sendEmail(formData);

    // Envoyer le SMS
    await sendSMS(formData);

    res.status(200).json({ message: 'Formulaire soumis avec succès' });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la soumission du formulaire' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
