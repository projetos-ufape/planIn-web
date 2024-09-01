import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { NotFound } from "../pages/NotFound";

export function RouterProvider() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route caseSensitive  path="/" element={<Home/>}/>
        <Route caseSensitive path="/login" element={<Login />} />
        <Route caseSensitive path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}