import { Route,Routes } from "react-router-dom"
import { LoginPage } from "../Pages/LoginPage"
import { RegisterPage } from "../Pages/RegisterPage"
import { ProductPage } from "../Pages/ProductsPage"
import { CartPage } from "../Pages/CartPage"


export const Rotas=()=>{
    return <Routes>
        <Route  path="/" element={<LoginPage />}/>
        <Route  path="/register" element={<RegisterPage />}/>
        <Route  path="/products" element={<ProductPage />}/>
        <Route  path="/cart" element={<CartPage />}/>
    </Routes>
}