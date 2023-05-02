
import { createContext,useContext } from "react";

type ContextType={
    onModal:boolean,
    setOnModal:(state:boolean)=>void
}

export const context=createContext<ContextType>({
    onModal:false,
    setOnModal:()=>{}
})
export const useGlobalContext=()=>useContext(context)