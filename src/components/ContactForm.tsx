import {FC, useState} from "react";
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
    const {register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm<FormData>({
        resolver: yupResolver(schema),
    });

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
                    <label htmlFor="name">Name</label>
                    <div className="contact-form__input-wrapper">
                        <input id={"name"} type="text" placeholder={"John Doe"} {...register('name', {required: true})}
                            autoComplete={"on"} className={errors.name ? 'error' : ''}/>
                    </div>
                    {errors.name && <p className={"error-message"}>{errors.name?.message}</p>}
                </div>
                <div className={"contact-form__input-container"}>
                    <label htmlFor="email">E-mail</label>
                    <div className="contact-form__input-wrapper">
                        <input id={"email"} type="email"
                            placeholder={"your-email@gmail.com"} {...register('email', {required: true})}
                            autoComplete={"on"} className={errors.email ? 'error' : ''}/>
                    </div>
                    {errors.email && <p className={"error-message"}>{errors.email?.message}</p>}
                </div>
                <div className={"contact-form__input-container"}>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <div className="contact-form__input-wrapper">
                        <input id={"phoneNumber"} type="tel" className={errors.phoneNumber ? 'error' : ''}
                            placeholder={"123456789"} {...register('phoneNumber', {required: true})}/>
                    </div>
                    {errors.phoneNumber && <p className={"error-message"}>{errors.phoneNumber?.message}</p>}
                </div>
                <div className={"contact-form__input-container"}>
                    <label htmlFor="message">Message</label>
                    <div className="contact-form__input-wrapper">
                        <textarea id="message"
                                cols={30}
                                rows={3}
                                {...register('message', {required: true})}
                                className={errors.message ? 'error' : ''}
                                placeholder={"Message ..."}></textarea>
                    </div>
                    {errors.message && <p className={"error-message"}>{errors.message?.message}</p>}
                </div>
                <div className={"end-xs"}>
                    <button type={"submit"} className={"contact-form__button"}>
                        {isSubmitting ? "Sending..." : "Send"}
                    </button>
                </div>
                {status && <p className={`status-message ${status.success ? "" : "error"}`}>{status.message}</p>}
            </form>
        </div>
    )
}