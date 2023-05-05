import styled from "styled-components";
import { Box, BoxCupomTableCart, BoxPage, CarLastSection, CardCumpom, ContainerProductsCart, TableCart } from "./style";
import { TopMenu } from "../../Components/TopMenu";
import Cart from './../../../public/shopping_cart.png'
import { CardProductCart } from "../../Components/CardProductCart";

let cart=[
    {
        
        id :3,
        name:"Lanche X-Burguer",
        price:22.00,
        qdt:1,
        priceDefault:22.00,
        categoria:" ",
        image:"/public/imgs/img3.jpeg",
        ingredientes:"(Pão, hamburguer, alface, tomate, queijo cheddar, cebola e picles)"
    
},
{
        
    id :3,
    name:"Lanche X-Burguer",
    price:22.00,
    qdt:1,
    priceDefault:22.00,
    categoria:" ",
    image:"/public/imgs/img3.jpeg",
    ingredientes:"(Pão, hamburguer, alface, tomate, queijo cheddar, cebola e picles)"

},
{
        
    id :3,
    name:"Lanche X-Burguer",
    price:22.00,
    qdt:1,
    priceDefault:22.00,
    categoria:" ",
    image:"/public/imgs/img3.jpeg",
    ingredientes:"(Pão, hamburguer, alface, tomate, queijo cheddar, cebola e picles)"

}
]
export const CartPage=()=>{

    return <Box>
         <TopMenu />
       <BoxPage>
        <h2>Meu Carrinho</h2>
      
      <ContainerProductsCart>
            {
                cart.length > 0 && cart.map((i,k)=>(
                     <CardProductCart product={i} key={k}/>
                     ))
            }
            </ContainerProductsCart>

      
        <BoxCupomTableCart>
        <CardCumpom>
            <p>Cupom de desconto</p>
            <div className="cx-cupom">
                <input type="text" />
                <button>adicionar</button>
            </div>
       </CardCumpom>
        <TableCart>
           <div className="linha">
                <div className="left">SUBTOTAL</div>
                <div className="right">R$83,30</div>
           </div>
           <div className="linha">
                <div className="left">ENTREGA</div>
                <div className="right entrega">Calcular</div>
           </div>
           <div className="linha">
                <div className="left">TOTAL</div>
                <div className="right">R$83,00</div>
           </div>
        </TableCart>


        </BoxCupomTableCart>
        <CarLastSection>
            <p>Escolher mais</p>
            <button>
               Fechar Pedido <img src={Cart} />
            </button>
        </CarLastSection>
       </BoxPage>
    </Box>
}