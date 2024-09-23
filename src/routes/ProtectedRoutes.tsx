import { Outlet, Navigate } from "react-router-dom";
import { CategoryProvider } from "../context/CategoryProvider";
import { TaskProvider } from "../context/TaskProvider";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoutes = () => {
  const { user } = useAuth();
  console.log(user);
  return user ? (
    <CategoryProvider>
      <TaskProvider>
        <Outlet />
      </TaskProvider>
    </CategoryProvider>
  ) : (
    <Navigate to="/login" />
  );
};
