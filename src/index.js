import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/style.css"

import Layout from "./layouts/Layout"
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error404";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="*" element={<Error housingNotFound={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);