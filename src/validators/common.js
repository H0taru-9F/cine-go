import * as Yup from "yup";
import { EMAIL_PATTERN } from "@/constants";

export const usernameFieldValidation = Yup.string()
  .min(3, "Username must be at least 3 characters")
  .max(50, "Username must be at most 50 characters");

export const passwordFieldValidation = Yup.string()
  .required("Password is required")
  .min(5, "Password must be at least 5 characters")
  .max(255, "Password must be at most 255 characters");

export const emailFieldValidation = Yup.string().matches(
  EMAIL_PATTERN,
  "Invalid email"
);

export const emailFormSchema = Yup.object({
  email: emailFieldValidation.required("Email is required"),
});
