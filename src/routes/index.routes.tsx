import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { AuthProvider } from "../context/AuthProvider";
import { ProtectedRoutes } from "./ProtectedRoutes";

export function RouterProvider() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route caseSensitive path="/" element={<Home />} />
          <Route
            caseSensitive
            path="/notifications"
            element={<div>Notifications</div>}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route caseSensitive path="/login" element={<Login />} />
        <Route caseSensitive path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
