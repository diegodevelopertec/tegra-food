import axios from "axios"
import { baseUrl } from "./config"
import { ProductType } from "../types/data"


type ProductPost={
    name: string;
    category:string,
    price:string,
    description: string;
    image: File | null;
  
}

export const useProducsApi={


    getProducts:async():Promise<ProductType[]>=>{
            let res=await axios.get(`${baseUrl}products/`)
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
        let res=await axios.post(`${baseUrl}products`,product,{
            headers: {
                'Content-Type': 'multipart/form-data',
              }
        })
        console.log('produto enviado com sucesso!');
        return res.data
      }catch(e){
        console.error('Erro ao enviar o usuário:', e);
      }
       
    },
    updateProduct:async(product:ProductType)=>{
        try{
          let res=await axios.put(`${baseUrl}products/${product.id}`,product,{
              headers: {
                  'Content-Type': 'multipart/form-data',
                }
          })
          console.log('produto atualizado com sucesso!');
          return res.data
        }catch(e){
          console.error('Erro ao enviar o usuário:', e);
        }
         
      },

    deleteProduct:async(id:number)=>{
        try{
            await axios.get(`${baseUrl}products/${id}`)
            return true
        }catch{
            return false
        }
    }
}