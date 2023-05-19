import { ProductType } from "../../types/data"
import { Box,BoxCardContext,BoxClear,BoxLeft,BoxRigth} from "./style"
import clear from '/lixeira.png'
import CloseItem from '/close.png'
import Expand from '/expand.png'
import { useDispatch } from "react-redux"
import { removeDataCart } from "../../redux/slices/cart"


type Prop={
    product:ProductType
}
export const CardProductCart=({product}:Prop)=>{

    const dispacth=useDispatch()
    const removeProductDataCart=(product:ProductType)=>{
        dispacth(removeDataCart(product))
    }

    return <Box>
           <BoxCardContext>
            <BoxLeft>
                <img src={`http://localhost:5000/${product.image}`} />
                <div className="text">
                <h3>{product.name}</h3>
                    <p className="desc">{product.description}</p>
                </div>
            </BoxLeft>
            <BoxRigth>
                <div className="top-right" >
                   <span className="btn-remove-mobile"  onClick={()=>removeProductDataCart(product)}><img src={CloseItem} alt="" /></span>
                   <div className="price">R$ {product.price.toFixed(2).replace('.',',')}</div> 
                </div>

                <div className="select-qdt"  >
                    <span>1x</span>
                    <img src={Expand} />
                </div>
              
            </BoxRigth>

        </BoxCardContext>
        <BoxClear>
            <img src={clear} alt="" onClick={()=>removeProductDataCart(product)} />
        </BoxClear>
    </Box>
}