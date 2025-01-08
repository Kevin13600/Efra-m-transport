import express from 'express';
import cors from 'cors';
import { sendEmail } from './emailService';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/quote', async (req, res) => {
  try {
    const result = await sendEmail(req.body);
    if (result.success) {
      res.json({ success: true });
    } else {
      res.status(500).json({ success: false, error: result.error });
    }
  } catch (error) {
    console.error('Erreur serveur:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
