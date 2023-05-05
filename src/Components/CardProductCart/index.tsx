import { ProductType } from "../../types/data"
import { Box,BoxCardContext,BoxClear,BoxLeft,BoxRigth} from "./style"
import clear from './../../../public/lixeira.png'
import CloseItem from './../../../public/close.png'
import Expand from './../../../public/expand.png'


type Prop={
    product:ProductType
}
export const CardProductCart=({product}:Prop)=>{
    return <Box>
            <BoxCardContext>
            <BoxLeft>
                <img src={product.image} />
                <div className="text">
                <h3>{product.name}</h3>
                    <p className="desc">{product.ingredientes}</p>
                </div>
            </BoxLeft>
            <BoxRigth>
                <div className="top-right">
                   <span className="btn-remove-mobile"><img src={CloseItem} alt="" /></span>
                   <div className="price">R$ {product.price.toFixed(2).replace('.',',')}</div> 
                </div>

                <div className="select-qdt" onClick={()=>{}}>
                    <span>1x</span>
                    <img src={Expand} />
                </div>
              
            </BoxRigth>

        </BoxCardContext>
        <BoxClear>
            <img src={clear} alt="" />
        </BoxClear>
    </Box>
}