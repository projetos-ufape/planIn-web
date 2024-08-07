import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import Login from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound";

export function RouterProvider() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route caseSensitive path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}