import axios from "axios"
import { baseUrl } from "./config"
import { ProductType } from "../types/data"


type ProductPost={
    name: string;
    priceDefault: number;
    ingredientes: string;
    image: string;
  
}
export const useProducsApi={


    getProducts:async():Promise<ProductType[]>=>{
            let res=await axios.get(`${baseUrl}products`)
           return res.data

            
    },
    getProductId:async(id:number):Promise<ProductType | boolean>=>{
        try{
            let res=await axios.get(`${baseUrl}products/${id}`)
            return res.data

        }catch(e){
            return false
        }
    },
    addProduct:async(product:ProductPost)=>{
        try{
            await axios.post(`${baseUrl}products`,{
                    name: product.name,
                    priceDefault: product.priceDefault,
                    price:product.priceDefault,
                    ingredientes: product.ingredientes,
                    image: product.image,
                    qdt: 1
            })
        }catch{
            return false
        }
    },

    deleteProduct:async(id:number)=>{
        try{
            await axios.get(`${baseUrl}/products/${id}`)
            return true
        }catch{
            return false
        }
    }
}