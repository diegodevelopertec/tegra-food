import { Container, LogoContainer } from "./style"
import { Nav } from "./style"
import {Link, useNavigate} from 'react-router-dom'
import Logo from './../../../public/logo.png'
import { useGlobalContext } from "../../Context/appContext"
import { useState } from "react"
import { useProducsApi } from "../../Services/useProductsApi"
import { useAppSelector } from "../../hooks/useAppSelector"


export const Header=()=>{
    const {setMenuMobile,onMenuMobile}=useGlobalContext()
    const navigate=useNavigate()
    const {setFilterData}=useGlobalContext()
    

 
      const  setProductsAll=async()=>{
        let productsAll=await useProducsApi.getProducts()
        setFilterData(productsAll)
    }

    const FilterCategory=async(category:string)=>{
        let productsAll=await useProducsApi.getProducts()
        let productsCategory=productsAll.filter(i=>i.category === category)
        setFilterData(productsCategory)
    }
  



    return <Container active={onMenuMobile} >
        <LogoContainer>
            <img src={Logo} />
        </LogoContainer>
        <Nav >
            <Link to={''}  className={ 'td'} onClick={setProductsAll} >Todos</Link>
            <Link to={''}  onClick={()=>FilterCategory('Pizza')}  >Pizza</Link>
            <Link to={''}  onClick={()=>FilterCategory('Sobremesa')} >Sobremesa</Link>
            <Link to={''}  onClick={()=>FilterCategory('Pastel')}>Pastel</Link>
            <Link to={''}  onClick={()=>FilterCategory('Açai')}>Açai</Link>
            <Link to={''}  onClick={()=>FilterCategory('Bebidas')}>Bebidas</Link>
        </Nav>





    </Container>
}