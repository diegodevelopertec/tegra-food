
import { createContext,useContext } from "react";
import { ProductType } from "../types/data";

type ContextType={
    onModal:boolean,
    setOnModal:(state:boolean)=>void,
    onMenuMobile:boolean,
    setMenuMobile:(state:boolean)=>void,
    filterData:ProductType[]  | null,
    setFilterData:([]:ProductType[] )=>void,

    
}

export const context=createContext<ContextType>({
    onModal:false,
    setOnModal:()=>{},
    onMenuMobile:false,
    setMenuMobile:(state:boolean)=>{},
    filterData:null ,
    setFilterData:([] : ProductType[] )=>{},
  
})
export const useGlobalContext=()=>useContext(context)