import * as yup from "yup";
import { passwordFieldValidation, usernameFieldValidation } from "@/validators/common";

const signInFormSchema = yup.object({
  username: usernameFieldValidation.required('Username is required'),
  password: passwordFieldValidation,
});

export default signInFormSchema;
