import Container from "@mui/material/Container";

export default function Section({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
