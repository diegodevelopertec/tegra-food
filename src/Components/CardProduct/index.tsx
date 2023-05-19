import { ProductType } from "../../types/data"
import { Box, BoxLeft, BoxRigth } from "./style"
import { useGlobalContext } from "../../Context/appContext"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addDataCart } from "../../redux/slices/cart"

type Prop={
    product:ProductType
}

export const CardProduct=({product}:Prop)=>{
    const {setOnModal,setSharedProduct}=useGlobalContext()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const addProductToCart=(product:ProductType)=>{
        dispatch(addDataCart(product))
        console.log(product)
        setOnModal(true)
    }



    const setSharedtoContext=()=>{
       setSharedProduct(product)
       navigate(`/admin/products/update/${product.id}`)
       
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
            { location.href.includes('admin') &&   <button onClick={setSharedtoContext}>Editar</button>}
        </BoxRigth>




    </Box>




}