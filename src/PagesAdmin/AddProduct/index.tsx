import { Box,BoxContent,CxButtons,CxInputFile,BoxInputs,CxInputsForm, Input, InputsLeft } from "./style"
import { Modal } from "../../Components/Modal"
import { useGlobalContext } from "../../Context/appContext"
import { useProducsApi } from "../../Services/useProductsApi"
import { useState } from "react"
import { ChangeEvent } from "react"


type InputTypes={
  name:string,
  categoria:string,
  valor:number,
  desc:string
}




  
export const AddNewProduct=()=>{
    const {setOnModal}=useGlobalContext()
    const [name,SetName]=useState('')
    const [categoria,setCategoria]=useState('')
    const [desc,SetDesc]=useState('')
    const [preco,SetPreco]=useState('')
    const [img,SetImg]=useState('')
   



    const setData=async()=>{
      if(name && categoria && desc  && preco){
        let newproduct={name,categoria,desc,preco,img}
        await useProducsApi.addProduct({
          image:newproduct.img,
          ingredientes:newproduct.desc,
          name:newproduct.name,
          priceDefault:parseFloat(newproduct.preco),
         
        })
        setOnModal(true)
       SetName('')
       setCategoria('')
       SetDesc('')
       SetPreco('')
       SetImg('')

      }

    }
  
 
    return <Box>
        <BoxContent>
            <h2>Novo Item</h2>
            <BoxInputs>
               <CxInputsForm>
                    <InputsLeft>
                            <Input width={'700px'} height="50px">
                                    <span>Nome</span>
                                    <input type="text" name="name" value={name} onChange={(e:ChangeEvent<HTMLInputElement>)=>SetName(e.target.value)} />
                                </Input>
                                <Input  width={'700px'} height="50px">
                                    <span>Categoria</span>
                                    <input type="text" name="categoria" value={categoria} onChange={(e:ChangeEvent<HTMLInputElement>)=>setCategoria(e.target.value)}/>
                                </Input>
                                <Input  width={'700px'}  height="96px">
                                    <span>Descrição</span>
                                    <input type="text"  name="desc" value={desc} onChange={(e:ChangeEvent<HTMLInputElement>)=>SetDesc(e.target.value)}/>
                                </Input>
                                <Input width="138px" height="50px">
                                    <span>Valor</span>
                                    <input type="text" name="valor" value={preco} onChange={(e:ChangeEvent<HTMLInputElement>)=>SetPreco(e.target.value)} />
                                </Input>
                    </InputsLeft>
                    <CxInputFile >
                        <span>Adicionar uma imagem</span>
                    </CxInputFile>
                   
                </CxInputsForm>
                <CxButtons>
                     <button >Cancelar</button>
                     <button className="cadastro" onClick={setData}>Cadastrar</button>
                </CxButtons>
            
            </BoxInputs>
        </BoxContent>
        <Modal link="" textLeft="Produto cadastrado" textLink="Cancelar"/>
    </Box>
}