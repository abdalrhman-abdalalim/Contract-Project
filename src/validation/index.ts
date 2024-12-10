import * as yup from "yup";

export const LoginSchema = yup.object({
  identifier: yup
    .string()
    .required("email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter valid email"),
  password: yup.string().required("password is required"),
  passwordConfirmation: yup
    .string()
    .label("confirm password")
    .oneOf([yup.ref("password")], "Password must match"),
});