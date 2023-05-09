import { TopMenu } from "../../Components/TopMenu"
import { Page } from "./style"
import { Header } from "../../Components/Header"
import { SectionProducts } from "./style"
import { HeaderPageProducts } from "./style"
import { SectionProductsList } from "./style"
import { useEffect,useState} from "react"
import { Filter } from "../../Components/Filter"
import order from './../../../public/order.png'
import { ProductType } from "../../types/data"
import { useProducsApi } from "../../Services/useProductsApi"
import { CardProduct } from "../../Components/CardProduct"
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../../Context/appContext"
import { Modal } from "../../Components/Modal"


export const ProductsAdmin=()=>{

    const [products,setProducts]=useState<ProductType[]>([])
    const {setOnModal,onMenuMobile,setMenuMobile}=useGlobalContext()
    const navigate=useNavigate()

    const orderAction=()=>{
        setOnModal(true)
    }

    useEffect(()=>{
       let  getProducts=async()=>{
            let data=await useProducsApi.getProducts()
            setProducts(data)
        
        
         
        }
     getProducts()
    
    },[products])


 

    return<Page onClick={()=>onMenuMobile ? setMenuMobile(false) : null}>
    <Header />
    
  <SectionProducts>
      <TopMenu />
      <HeaderPageProducts>
        <div className="left">
            <h4 className='title-primary'>Produtos</h4>
            <div className='title-secondary'>
                <span className="text">Todos</span>
                <div className="barra"></div>
             </div>
        </div>
        <div className="right">
            <img src={order} alt="" onClick={orderAction}/>
            <button onClick={()=>navigate('/admin/products/new')}>Adicionar <span>+</span></button>
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
  <Modal link="" textLeft="Ítens organizados de A à Z" textLink="Cancelar"/>

  </Page>



}

