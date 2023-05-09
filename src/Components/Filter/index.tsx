import { useLayoutEffect, useState } from 'react'
import { ItemFilter,  BoxFilter, BoxTopFilter, BoxItemsFilter, BoxItens } from './style'
import filter from './../../../public/filter.png'
import { toToastItem } from 'react-toastify/dist/utils'
import { useGlobalContext } from '../../Context/appContext'
import { useProducsApi } from '../../Services/useProductsApi'


type Props={
    text:string,
    onClickFilter:(filters:number[])=>void
 
}
export const Filter=()=>{
    const [expandFilter,setExpandFilter]=useState(false)
    const {filterData,setFilterData}=useGlobalContext()

    const toggleExpand=()=>{
        if(expandFilter){
            setExpandFilter(false)
        }else{
            setExpandFilter(true)
        }
    }


    const ClickFilterAction=async(fOne:number,fTwo:number)=>{
        let dataFilter=[fOne,fTwo] //pegando dados do filtro
       setExpandFilter(false) 
       let products=await useProducsApi.getProducts()
       let filteredProducts=products.filter(i=>i.price >= dataFilter[0] && i.price <= dataFilter[1] || dataFilter[0] == 46 ? i.price >= dataFilter[0] : null )
       //let FilteredProductsTwo=products.filter(i=>dataFilter[0] == 46 ? i.price >= dataFilter[0] : null)
       
     if(filteredProducts){
       setFilterData(filteredProducts);
     }
      

      
     }

    return <BoxFilter>
        <BoxTopFilter>
            <img src={filter} alt="" onClick={toggleExpand} />
        </BoxTopFilter>
        {expandFilter && <BoxItemsFilter>
            <p>Filtrar por preço:</p>
            <BoxItens>
                <ItemFilter onClick={()=>ClickFilterAction(5,25)}>R$5 à R$25</ItemFilter>
                <ItemFilter onClick={()=>ClickFilterAction(26,45)}>R$26 à R$45</ItemFilter>
                <ItemFilter onClick={()=>ClickFilterAction(46,46)}>R$46 ou mais</ItemFilter>
            </BoxItens>
        </BoxItemsFilter>}
    </BoxFilter>

   

    
}