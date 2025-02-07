import {FC, useEffect, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {ErrorMessage, sendEmail} from "@/utils/send-email";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "@/utils/validationSchema";

export type FormData = {
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
};

export const ContactForm: FC = () => {
    const [status, setStatus] = useState<ErrorMessage | null>(null);
    const {register, handleSubmit, formState: {errors, isSubmitting}, reset, watch} = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const cursorRefs = useRef<{[key: string]: HTMLSpanElement | null | undefined}>({});

    const watchFields = watch();

    useEffect(() => {
        Object.keys(watchFields).forEach((key) => updateCursorPosition(key));
    }, [watchFields]);

    // Aktualizacja pozycji kursora
    const updateCursorPosition = (key: string) => {
        const input = document.getElementById(key) as HTMLInputElement | HTMLTextAreaElement;
        const cursor = cursorRefs.current[key];

        if (input && cursor) {
            const textWidth = input.value.length * .9; // Przybliżona szerokość znaków
            cursor.style.left = `${textWidth + 1}rem`; // Dopasowanie pozycji kursora
        }
    };

    const onSubmit = async (data: FormData) => {
        setStatus(null);
        const result = await sendEmail(data);
        setStatus(result);
        reset();
    }

    return (
        <div className="contact-form">
             <form className={"contact-form__content"} onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                <div className={"contact-form__input-container"}>
                    <label htmlFor="name">Imię i nazwisko</label>
                    <div className="contact-form__input-wrapper">
                        <input id={"name"} type="text" placeholder={"np. Jan Kowalski"} {...register('name', {required: true})}
                            autoComplete={"on"} className={errors.name ? 'error' : ''}/>
                        <span ref={(el) => { cursorRefs.current["name"] = el; }} className="custom-cursor"></span>
                    </div>
                    {errors.name && <p className={"error-message"}>{errors.name?.message}</p>}
                </div>
                <div className={"contact-form__input-container"}>
                    <label htmlFor="email">E-mail</label>
                    <div className="contact-form__input-wrapper">
                        <input id={"email"} type="email"
                            placeholder={"twój-email@gmail.com"} {...register('email', {required: true})}
                            autoComplete={"on"} className={errors.email ? 'error' : ''}/>
                        <span ref={(el) => { cursorRefs.current["email"] = el; }} className="custom-cursor"></span>
                    </div>
                    {errors.email && <p className={"error-message"}>{errors.email?.message}</p>}
                </div>
                <div className={"contact-form__input-container"}>
                    <label htmlFor="phoneNumber">Telefon</label>
                    <div className="contact-form__input-wrapper">
                        <input id={"phoneNumber"} type="tel" className={errors.phoneNumber ? 'error' : ''}
                            placeholder={"123456789"} {...register('phoneNumber', {required: true})}/>
                        <span ref={(el) => { cursorRefs.current["phoneNumber"] = el; }} className="custom-cursor"></span>
                    </div>
                    {errors.phoneNumber && <p className={"error-message"}>{errors.phoneNumber?.message}</p>}
                </div>
                <div className={"contact-form__input-container"}>
                    <label htmlFor="message">Treść</label>
                    <div className="contact-form__input-wrapper">
                        <textarea id="message"
                                cols={30}
                                rows={3}
                                {...register('message', {required: true})}
                                className={errors.message ? 'error' : ''}
                                placeholder={"Treść wiadomości ..."}></textarea>
                    </div>
                    {errors.message && <p className={"error-message"}>{errors.message?.message}</p>}
                </div>
                <div className={"end-xs"}>
                    <button type={"submit"} className={"contact-form__button"}>
                        {isSubmitting ? "Wysyłanie..." : "Wyślij"}
                    </button>
                </div>
                {status && <p className={`status-message ${status.success ? "" : "error"}`}>{status.message}</p>}
            </form>
        </div>
    )
}