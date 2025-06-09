import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import { Alert, Box, IconButton, InputAdornment, Link, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Input from "../../components/old/Input";
import Button from "../../styles/button/Button.jsx";
import { actSignIn } from "@/store/user/actions/signIn.js";
import signInFormSchema from "@/validators/sign-in.js";
import "./SignInPage.style.scss";
import initialSignInFormValues from "@/pages/sign-in/SignInPage.constants.js";
import Typography from "@/styles/typography/Typography.jsx";

export default function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (values, { setSubmitting }) => {
    setSubmitError("");
    try {
      await dispatch(actSignIn({ username: values.username, password: values.password }));
      navigate("/", { replace: true });
    } catch (err) {
      setSubmitError(err.message || "Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // TODO: fix the error handling and styles page
  return (
    <Box className="auth-login-form">
      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}
      <Typography variant="h2" className="auth-login-form__title">
        Sign In
      </Typography>

      <Formik
        initialValues={initialSignInFormValues}
        validationSchema={signInFormSchema}
        onSubmit={handleLogin}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              field={{
                name: "username",
                value: values.username,
                onChange: handleChange,
                onBlur: handleBlur,
              }}
              form={{ touched, errors }}
              label="Username"
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
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />

            <Button type="submit" loading={isSubmitting} width="full">
              Sign in
            </Button>
          </Form>
        )}
      </Formik>
      <Stack mt={2}>
        <Typography className="auth-login-form__link-to-register" variant="q">
          Don’t have an account?{" "}
          <Link component={RouterLink} to="/sign-up" underline="hover">
            Sign Up
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}
