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
//import Filter from './../../../public/filter.png'
import Menu from './../../../public/menu.png'
import { Modal } from '../../Components/Modal'
import { TopMenu } from '../../Components/TopMenu'
import { Filter } from '../../Components/Filter'

export const ProductPage=()=>{
    const [products,setProducts]=useState<ProductType[]>([])

    useEffect(()=>{
       let  getProducts=async()=>{
            let data=await useProducsApi.getProducts()
            setProducts(data)
        }
     getProducts()
    
    },[])


    return <Page >
      <Header />
      
    <SectionProducts>
        <TopMenu />
        <HeaderPageProducts>
          <div className="left">
              <h3 className='title-primary'>Produtos</h3>
              <h3 className='title-secondary'>Todos</h3>
          </div>
          <div className="right">
              <Filter />
              <img src={orderInative} alt="" />
          
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
   




    </Page>



}