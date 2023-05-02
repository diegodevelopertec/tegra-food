import axios from "axios"
import { baseUrl } from "./config"
import { ProductType } from "../types/data"

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
    addProduct:async(product:ProductType)=>{
        try{
            await axios.post(`${baseUrl}products`,product)
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