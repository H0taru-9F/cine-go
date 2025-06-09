import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import { Alert, Box, IconButton, InputAdornment, Link, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Input from "../../components/old/Input";
import Button from "../../styles/button/Button.jsx";
import signUpFormSchema from "@/validators/sign-up.js";
import { actSignUp } from "@/store/user/actions/signUp.js";
import useToggle from "@/hooks/useToggle.js";
import "@/pages/sign-up/SignUpPage.style.scss";
import initialSignUpFormValues from "@/pages/sign-up/SignUpPage.constants.js";
import Typography from "@/styles/typography/Typography.jsx";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");
  const { toggle, isOpen } = useToggle();

  const handleRegister = async (values, { setSubmitting }) => {
    setSubmitError("");
    try {
      await dispatch(
        actSignUp({
          username: values.username,
          email: values.email,
          password: values.password,
        }),
      );
      navigate("/", { replace: true });
    } catch (err) {
      setSubmitError(err.message || "Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box className="auth-register-form">
      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}
      <Typography variant="h2" className="auth-register-form__title">
        Sign Up
      </Typography>

      <Formik
        initialValues={initialSignUpFormValues}
        validationSchema={signUpFormSchema}
        onSubmit={handleRegister}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Input
              field={{
                name: "username",
                value: values.fullName,
                onChange: handleChange,
                onBlur: handleBlur,
              }}
              form={{ touched, errors }}
              label="Username"
            />

            <Input
              field={{
                name: "email",
                value: values.email,
                onChange: handleChange,
                onBlur: handleBlur,
              }}
              form={{ touched, errors }}
              label="Email"
              type="email"
            />

            <Input
              field={{
                name: "password",
                value: values.password,
                onChange: handleChange,
                onBlur: handleBlur,
              }}
              form={{ touched, errors }}
              label="Password"
              type={isOpen ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={toggle}>
                      {isOpen ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Input
              field={{
                name: "confirmedPassword",
                value: values.confirmedPassword,
                onChange: handleChange,
                onBlur: handleBlur,
              }}
              form={{ touched, errors }}
              label="Confirm Password"
              type="password"
            />
            <Button type="submit" loading={isSubmitting} width="full">
              Sign up
            </Button>
          </Form>
        )}
      </Formik>

      <Stack mt={2}>
        <Typography variant="q" className="auth-link-to-login">
          Already have an account?{" "}
          <Link component={RouterLink} to="/sign-in" underline="hover">
            Login
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}
