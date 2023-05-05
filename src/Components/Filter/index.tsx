import { useState } from 'react'
import { ItemFilter,  BoxFilter, BoxTopFilter, BoxItemsFilter, BoxItens } from './style'
import filter from './../../../public/filter.png'
import { toToastItem } from 'react-toastify/dist/utils'


type Props={
    text:string
}
export const Filter=()=>{
    const [expandFilter,setExpandFilter]=useState(false)

    const toggleExpand=()=>{
        if(expandFilter){
            setExpandFilter(false)
        }else{
            setExpandFilter(true)
        }
    }

    const ClickFilterAction=()=>{
        alert('clicou')
    }

    return <BoxFilter>
        <BoxTopFilter>
            <img src={filter} alt="" onClick={toggleExpand} />
        </BoxTopFilter>
        {expandFilter && <BoxItemsFilter>
            <p>Filtrar por preço:</p>
            <BoxItens>
                <ItemFilter>R$5 à R$25</ItemFilter>
                <ItemFilter>R$26 à R$45</ItemFilter>
                <ItemFilter>R$46 ou mais</ItemFilter>
            </BoxItens>
        </BoxItemsFilter>}
    </BoxFilter>

   

    
}