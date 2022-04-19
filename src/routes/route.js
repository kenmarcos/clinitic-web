import { Navigate } from "react-router-dom";
import { useDoctor } from "../providers/doctor";

export const PrivateRoute = ({ children }) => {
  const { token } = useDoctor();

  return token ? children : <Navigate to="/login" />;
};

export const PublicRoute = ({ children }) => {
  const { token } = useDoctor();

  return token ? <Navigate to="/dashboard" /> : children;
};
