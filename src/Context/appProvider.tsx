import { ReactNode, useContext, useState } from "react";
import {context, useGlobalContext} from './appContext'
import { ProductType } from "../types/data";

type Props={
    children:ReactNode
}


export const AppProvider=({children}:Props)=>{

    const [onModal,setOnModal]=useState(false)
    const [onMenuMobile,setMenuMobile]=useState(false)
    const [filterData, setFilterData]=useState<ProductType[] | null>(null)

    return <context.Provider value={{onModal,setOnModal,onMenuMobile,setMenuMobile,filterData,setFilterData}}>
        {children}
    </context.Provider>
}