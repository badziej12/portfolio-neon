import {FormData} from '@/components/ContactForm';

export type ErrorMessage = {
    success: boolean;
    message: string;
};

export async function sendEmail(data: FormData): Promise<ErrorMessage> {
    const apiEndpoint = '/api/email';

    try {
        const res = await fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) {
            return { success: false, message: 'Wystąpił błąd podczas wysyłania wiadomości' };
        }

        return {success: true, message: 'Wiadomość została wysłana pomyślnie!'};
    } catch {
        return {success: false, message: 'Nie udało się wysłać wiadomości.'};
    }
}