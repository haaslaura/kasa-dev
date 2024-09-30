import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/style.css"

import Layout from "./layouts/Layout"
import Home from "./pages/Home";
import About from "./pages/About";
import HousingSheet from "./pages/Housing";
import Error from "./pages/Error404";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/housing/:param" element={<HousingSheet />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);