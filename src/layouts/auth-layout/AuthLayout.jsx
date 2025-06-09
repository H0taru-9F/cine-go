import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import AuthBackground from "../../components/background/Background.jsx";

const AuthTemplate = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <AuthBackground />
      <Grid container justifyContent="center" alignItems="center" height="100vh">
        <Grid item lg={3.5} md={6} sm={8} xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
};

export default AuthTemplate;
