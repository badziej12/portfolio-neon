import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup.string().required('Imię i nazwisko jest wymagane').min(3, 'Imię i nazwisko musi mieć przynajmniej 3 znaki'),
    email: yup.string().email('Nieprawidłowy adres e-mail').required('E-mail jest wymagany'),
    phoneNumber: yup
    .string()
    .required('Numer telefonu jest wymagany')
    .matches(
      /^(\+48)?\s?\d{3}[-.\s]?\d{3}[-.\s]?\d{3}$/,
      'Wprowadź poprawny numer telefonu (np. +48 123 456 789)',
    ),
    message: yup.string().required('Wiadomość jest wymagana').min(10, 'Wiadomość musi mieć przynajmniej 10 znaków'),
})