import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { ProductType } from './../../types/data';




type updateType={
    idProduct:string | number,
    price:number,
   
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        productsCart:[] as ProductType[],
        totalcart:0,
    },
    reducers: {
            addDataCart:(state,action:PayloadAction<ProductType>)=>{
                let dataId=state.productsCart.find(product=>product.id === action.payload.id)
                if(dataId){
                    dataId.price+=action.payload.price,
                    dataId.qdt+=action.payload.qdt
                   
                }else{
                    state.productsCart.push(action.payload)
                  
                    
                }
              
                state.totalcart+=action.payload.price
                //state.totalcart=state.productsCart.reduce((prev,next)=> next.qdt *(prev + next.price), 0)
          
            },
            removeDataCart:(state,action:PayloadAction<ProductType>)=>{
                state.productsCart=[...state.productsCart.filter(product=>product.id !== action.payload.id)]
                state.totalcart=state.totalcart - action.payload.price
               
            },
            clearCart:(state)=>{
                state.productsCart=[]
                state.totalcart=0
              
               
            },
            changeQdtMore:(state,action:PayloadAction<updateType>)=>{
                let index=state.productsCart.findIndex(p=>p.id === action.payload.idProduct)
                state.productsCart[index].price = action.payload.price
                state.totalcart=state.productsCart.reduce((prev,next)=> (prev + next.price), 0)
            },
            changeQdtMinus:(state,action:PayloadAction<updateType>)=>{
                let index=state.productsCart.findIndex(p=>p.id === action.payload.idProduct)
                state.productsCart[index].price - action.payload.price
                  
                state.totalcart=state.productsCart.reduce((prev,next)=> (prev + next.price), 0)
               
                  
              
            }
        
           
           
      
    }
}
  )

  export const {addDataCart,removeDataCart,clearCart,changeQdtMinus,changeQdtMore}=CartSlice.actions
  export default CartSlice.reducer
