import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index";
import Erro404 from "../pages/404/index";
import Cart from "../pages/Cart/index";
import AboutUs from "../pages/AboutUs/index";

import Admin from "../pages/Admin";
import Products from "../pages/Products";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Erro404 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}
