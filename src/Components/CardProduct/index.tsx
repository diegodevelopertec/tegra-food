import { ProductType } from "../../types/data"
import { Box, BoxLeft, BoxRigth } from "./style"
import { useGlobalContext } from "../../Context/appContext"

type Prop={
    product:ProductType
}

export const CardProduct=({product}:Prop)=>{
    const {setOnModal}=useGlobalContext()

    return <Box>
        <BoxLeft>
            <img src={product.image} />
            <div className="text">
               <h3>{product.name}</h3>
                <p className="desc">{product.ingredientes}</p>
            </div>
        </BoxLeft>
        <BoxRigth>
            <span >R$ {product.price.toFixed(2).replace('.',',')}</span>
            <button onClick={()=>setOnModal(true)}>comprar</button>
        </BoxRigth>




    </Box>




}