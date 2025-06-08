import express, { json } from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:4321',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(json());

app.post('/send-email', async (req, res) => {
    const { fromEmail, message } = req.body;

    try {
        let transporter = createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        let info = await transporter.sendMail({
            from: `"Website Contact" <${process.env.SMTP_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: 'New message from website',
            text: `From: ${fromEmail}\n\nMessage:\n${message}`
        });

        console.log('Message sent: %s', info.messageId);
        res.json({ success: true, message: 'Email sent!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
