import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/index"
import Erro404 from "../pages/404/index"
import Cart from "../pages/Cart/index"
import Admin from "../pages/Admin"

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="" element={} /> */}
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<Erro404 />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}