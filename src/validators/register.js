import * as yup from "yup";
import pattern from "./pattern";
import msg from "./message";

const registerSchema = yup.object({
  fullName: yup.string().required(msg.required).min(2, "Full name must be at least 2 characters"),
  email: yup.string().required(msg.required).email(msg.email),
  password: yup.string().required(msg.required).min(6, "Password must be at least 6 characters").max(15, "Password must be at most 15 characters"),
  confirmedPassword: yup
    .string()
    .required(msg.required)
    .oneOf([yup.ref("password")], msg.confirmedPassword),
});

export default registerSchema;
