import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index";
import Erro404 from "../pages/404/index";
import Cart from "../pages/Cart/index";
import AboutUs from "../pages/AboutUs/index";
import Products from "../pages/Products/index"

import Admin from "../pages/Admin";
import ProductsDetails from "../pages/ProductsDetails/index";
import { CartProvider } from "../context/cart";

export default function Rotas() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Erro404 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}