import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export function Loader() {
  return (
    <Box
      data-testid="app-loader"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="secondary" size={50} />
    </Box>
  );
}

export default function SuspenseWithOutlet({ children }) {
  return <Suspense fallback={<Loader />}>{children ?? <Outlet />}</Suspense>;
}
