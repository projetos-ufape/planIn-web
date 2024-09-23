import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Notifications } from "../pages/Notifications";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { AuthProvider } from "../context/AuthProvider";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ThemeProvider } from "../context/ThemeProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Toaster } from "react-hot-toast";
import { FONT } from "../utils/theme";

export function RouterProvider() {
  return <AppRoutes />;
}

function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/">
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          <ThemeProvider>
            <Routes>
              <Route element={<ProtectedRoutes />}>
                <Route caseSensitive path="/" element={<Home />} />
                <Route
                  caseSensitive
                  path="/notifications"
                  element={<Notifications />}
                />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route caseSensitive path="/login" element={<Login />} />
              <Route caseSensitive path="/register" element={<Register />} />
            </Routes>
          </ThemeProvider>
        </LocalizationProvider>
      </BrowserRouter>
      <Toaster containerStyle={{ fontFamily: FONT.body.fontFamily }} />
    </AuthProvider>
  );
}
