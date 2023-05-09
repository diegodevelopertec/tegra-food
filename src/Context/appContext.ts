
import { createContext,useContext } from "react";

type ContextType={
    onModal:boolean,
    setOnModal:(state:boolean)=>void,
    onMenuMobile:boolean,
    setMenuMobile:(state:boolean)=>void
}

export const context=createContext<ContextType>({
    onModal:false,
    setOnModal:()=>{},
    onMenuMobile:false,
    setMenuMobile:(state:boolean)=>{}
})
export const useGlobalContext=()=>useContext(context)