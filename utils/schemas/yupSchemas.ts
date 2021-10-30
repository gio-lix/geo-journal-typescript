import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
}).required();

export const RegisterFormSchema = yup.object().shape({
    fullName: yup.string().required(),

}).concat(LoginSchema)