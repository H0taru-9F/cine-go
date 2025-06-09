import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks";

const RequireAuth = ({ children, roles = [] }) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated()) {
    console.log(isAuthenticated(), "User is not authenticated");
    return <Navigate to="/sign-in" replace state={{ from: location }} />;
  }

  // If no roles are specified, allow access to all authenticated users
  if (roles.length === 0) {
    return children;
  }

  // Check if user has required role
  const hasRequiredRole = roles.includes(user.role);
  if (!hasRequiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RequireAuth;
