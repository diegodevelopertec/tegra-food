import { Route,Routes } from "react-router-dom"
import { LoginPage } from "../Pages/LoginPage"
import { RegisterPage } from "../Pages/RegisterPage"
import { ProductPage } from "../Pages/ProductsPage"
import { CartPage } from "../Pages/CartPage"
import { ProductsAdmin } from "../PagesAdmin/Products"
import { AddNewProduct } from "../PagesAdmin/AddProduct"
import { UpdateProduct } from "../PagesAdmin/UpdateProduct"

export const Rotas=()=>{
    return <Routes>
        <Route  path="/" element={<LoginPage />}/>
        <Route  path="/register" element={<RegisterPage />}/>
        <Route  path="/products" element={<ProductPage />}/>
        <Route  path="/cart" element={<CartPage />}/>
        <Route  path="/admin/products" element={<ProductsAdmin />}/>
        <Route  path="/admin/products/new" element={<AddNewProduct />}/>
        <Route  path="/admin/products/update/:id" element={<UpdateProduct />}/>
    </Routes>
}