import {useEffect,useState} from 'react'
import { Header } from "../../Components/Header"
import { Page, SectionProductsList } from "./style"
import { SectionProducts} from "./style"
import Notification from './../../../public/notifications.png'
import Cart from './../../../public/shopping_cart.png'
import Profile from './../../../public/unsplash_mEZ3PoFGs_k.png'
import { ProductType } from '../../types/data'
import { useProducsApi } from '../../Services/useProductsApi'
import { CardProduct } from '../../Components/CardProduct'
import { HeaderPageProducts } from './style'
import orderInative from './../../../public/order.png'
import orderActive from './../../../public/orderac.png'
//import Filter from './../../../public/filter.png'
import Menu from './../../../public/menu.png'
import { Modal } from '../../Components/Modal'
import { TopMenu } from '../../Components/TopMenu'
import { Filter } from '../../Components/Filter'
import { useGlobalContext } from '../../Context/appContext'

export const ProductPage=()=>{
    const [products,setProducts]=useState<ProductType[]>([])
    const {setOnModal,onModal,onMenuMobile,setMenuMobile}=useGlobalContext()
    const [org,setOrg]=useState(false)
    const [statePageOrg,setStatePageOrg]=useState(false)
    const [filtered,setFiltered]=useState(false)
    const {filterData}=useGlobalContext()


    useEffect(()=>{
       let  getProducts=async()=>{
            let data=await useProducsApi.getProducts()
            setProducts(data)
        }
     getProducts()

     if(org){
        setOrg(false)
     }
    
    },[])


    useEffect(()=>{
        if(filterData !== null){
            setProducts(filterData)
        }
    },[filterData])


    const setOrder=()=>{
          setOrg(true)
          setOnModal(true)
          !statePageOrg ?   setOnModal(true) :   setOnModal(false)
          statePageOrg ? setStatePageOrg(false) : setStatePageOrg(true)
          
    }
   
setTimeout(()=>{
    if(onModal){
        setOrg(false)
    }
},1500)
   
   
    return <Page onClick={()=>onMenuMobile ? setMenuMobile(false) : null} >
      <Header /> 
    <SectionProducts>
        <TopMenu />
        <HeaderPageProducts>
          <div className="left">
              <p className='title-primary'>Produtos</p>
              <div className='title-secondary'>
                <span className="text">Todos</span>
                <div className="barra"></div>
              </div>
          </div>
          <div className="right">
              <Filter />
              <img src={statePageOrg ? orderActive : orderInative } onClick={setOrder} alt="" /> 
          
          </div>
      </HeaderPageProducts>
      <SectionProductsList>
        {
          products.map((i,k)=>(
                <CardProduct product={i} key={k} />
            ))
        }
        
      </SectionProductsList>
    </SectionProducts>
    {
        org &&   <Modal link={" "} textLeft={"Ítens organizados de A à Z" } 
        textLink={"Cancelar"} ></Modal>

    }
    {
        (!statePageOrg ||  statePageOrg && !org) &&  <Modal link={"/cart" } textLeft={ "ítem adicionado ao carrinho" } 
        textLink={"ir para o carrinho" }   ></Modal>
    }
        
 


    </Page>



}