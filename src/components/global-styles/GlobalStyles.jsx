import "./GlobalStyles.style.scss";
import {CssBaseline} from "@mui/material";

export default function GlobalStyles({ children }) {
  return (
      <>
        <CssBaseline/>
        {children}
      </>
  )
}
