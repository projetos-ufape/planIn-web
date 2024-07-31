import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export function RouterProvider() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route caseSensitive path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}