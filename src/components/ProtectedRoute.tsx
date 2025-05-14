import React from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
  allowedRoles: string[];
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("evidwan-current-user") || "null");

  if (!user) {
    // Redirect to login if no user is logged in
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // Redirect to the home page if the user's role is not allowed
    return <Navigate to={`/${user.role.toLowerCase()}/home`} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;