import * as yup from "yup";
import {
  emailFieldValidation,
  passwordFieldValidation,
  usernameFieldValidation,
} from "@/validators/common";
import * as Yup from "yup";

const signUpFormSchema = yup.object({
  username: usernameFieldValidation.required('Username is required'),
  email: emailFieldValidation,
  password: passwordFieldValidation,
  confirmedPassword: yup.string()
  .required("Repeated password is required")
  .oneOf([Yup.ref("password")], "Passwords must match"),
});

export default signUpFormSchema;
