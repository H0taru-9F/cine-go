// Material UI
import { TextField } from "@mui/material";

// Scss
import "./style.scss";

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <TextField
      {...field}
      {...props}
      error={touched[field.name] && Boolean(errors[field.name])}
      className="auth-input"
      helperText={touched[field.name] && errors[field.name]}
      fullWidth
      variant="standard"
      sx={{ mb: 2 }}
    />
  );
};

export default Input;
