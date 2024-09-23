import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoutes = () => {
  const { user } = useAuth();
  
  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
