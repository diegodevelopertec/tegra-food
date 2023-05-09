import { ReactNode, useContext, useState } from "react";
import {context, useGlobalContext} from './appContext'

type Props={
    children:ReactNode
}


export const AppProvider=({children}:Props)=>{

    const [onModal,setOnModal]=useState(false)
    const [onMenuMobile,setMenuMobile]=useState(false)


    return <context.Provider value={{onModal,setOnModal,onMenuMobile,setMenuMobile}}>
        {children}
    </context.Provider>
}