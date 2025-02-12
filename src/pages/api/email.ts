import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";
import {schema} from "@/utils/validationSchema";
import * as yup from 'yup';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const body = req.body;

        try {
            await schema.validate(body, {abortEarly: false});
    
            const {email, name, message, phoneNumber} = body;
    
            const transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.MY_EMAIL,
                    pass: process.env.MY_PASSWORD,
                },
            });
    
            const mailOptions: Mail.Options = {
                from: process.env.MY_EMAIL,
                to: process.env.MY_EMAIL,
                subject: `lechsystem.pl ${name} (${email}) tel:${phoneNumber}`,
                text: message,
            };
    
            const sendMailPromise = () =>
                new Promise<string>((resolve, reject) => {
                    transport.sendMail(mailOptions, function (err) {
                        if (!err) {
                            resolve('Wiadomość wysłana');
                        } else {
                            reject(err.message);
                        }
                    });
                });
    
            await sendMailPromise();
            return res.status(200).json({message: 'Wiadomość wysłana'});
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                const errors = err.inner.map(e => ({
                    path: e.path,
                    message: e.message,
                }));
    
                return res.status(400).json({ errors });
            }
    
            return res.status(500).json({error: err});
        }
    } else {
        res.status(405).json({message: 'Method not allowed'});
    }
}
