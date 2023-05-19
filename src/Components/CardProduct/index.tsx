import { ProductType } from "../../types/data"
import { Box, BoxLeft, BoxRigth } from "./style"
import { useGlobalContext } from "../../Context/appContext"
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addDataCart } from "../../redux/slices/cart"

type Prop={
    product:ProductType
}

export const CardProduct=({product}:Prop)=>{
    const {setOnModal}=useGlobalContext()
    const dispatch=useDispatch()

    const addProductToCart=(product:ProductType)=>{
        dispatch(addDataCart(product))
        console.log(product)
        setOnModal(true)
    }


    return <Box>
        <BoxLeft>
            <img src={`http://localhost:5000/${product.image}`} />
            <div className="text">
               <h3>{product.name}</h3>
                <p className="desc">{product.description}</p>
            </div>
        </BoxLeft>
        <BoxRigth>
            <span >R$ {product.price.toFixed(2).replace('.',',')}</span>
            
            { !location.href.includes('admin') &&   <button onClick={()=>addProductToCart(product)}>comprar</button>}
            { location.href.includes('admin') &&   <button onClick={()=>{}}>Editar</button>}
        </BoxRigth>




    </Box>




}