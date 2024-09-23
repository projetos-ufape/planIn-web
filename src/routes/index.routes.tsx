import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Notifications } from "../pages/Notifications"; 
import Register from "../pages/Register";
import Login from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { useAuth } from "../hooks/useAuth";

export function RouterProvider() {
  const { user } = useAuth();

  return (
    <BrowserRouter basename="/">
      <Routes>
        {user?.token ? (
          <>
            <Route caseSensitive path="/" element={<Home />} />
            <Route caseSensitive path="/notifications" element={<Notifications />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route  caseSensitive path="/login" element={<Login />} />
            <Route caseSensitive path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
