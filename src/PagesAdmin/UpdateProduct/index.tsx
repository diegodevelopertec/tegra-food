import { Box,BoxContent,CxButtons,CxInputFile,BoxInputs,CxInputsForm, Input, InputsLeft } from "./style"
import { Modal } from "../../Components/Modal"
import { useGlobalContext } from "../../Context/appContext"
import { useProducsApi } from "../../Services/useProductsApi"
import {  useState } from "react"
import { useActionData, useNavigate } from "react-router-dom"
import { ProductType } from "../../types/data"


type FormData={
   id:number,
  name:string,
  category:string,
  description:string,
  price:number | string,
  image:File 
}




  
export const UpdateProduct=()=>{
    const navigate=useNavigate()
    const {setOnModal,sharedProduct,setSharedProduct}=useGlobalContext()
    const [name,setName]=useState<string>(sharedProduct!.name)
    const [description,setDescription]=useState(sharedProduct!.description)
    const [price,setPrice]=useState<string | number>(sharedProduct!.price.toFixed(2).replace('.',','))
    const [category,setCategory]=useState(sharedProduct!.category)
    const [selectedImage, setSelectedImage] = useState<File  >(sharedProduct!.image as File);
  

  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  }

const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', name);
    if (selectedImage) {
      formData.append('image', selectedImage);
    }
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', price as string);

  
    const productPost: FormData = {
         id:sharedProduct!.id,
         name:formData.get('name') as string,
         category:formData.get('category') as string,
         description:formData.get('description') as string,
         price:formData.get('price') as string,
         image:formData.get('image') as File,
        }
      
        
        await useProducsApi.updateProduct({
            ...productPost,
            price:parseFloat(productPost.price as string)
        })

}


    return <Box>

        <BoxContent>
            <h2>Atualizar Item</h2>
           <form  method="POST" encType="multipart/form-data" onSubmit={handleSubmit} > 
            <BoxInputs>
                <CxInputsForm>
                        <InputsLeft>
                                <Input width={'700px'} height="50px">
                                        <span>Nome</span>
                                        <input type="text"  name="name" value={name} onChange={(e)=>setName(e.target.value)} /> 
                                    </Input>
                                    <Input  width={'700px'} height="50px">
                                        <span>Categoria</span>
                                        <input type="text"  name="category" value={category}onChange={(e)=>setCategory(e.target.value)} />
                                    </Input>
                                    <Input  width={'700px'}  height="96px">
                                        <span>Descrição</span>
                                        <input type="text"   name="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
                                    </Input>
                                    <Input width="138px" height="50px">
                                        <span>Valor</span>
                                        <input type="text"  name="price" value={price} onChange={(e)=>setPrice(e.target.value)}  />
                                    </Input>
                                  
                        </InputsLeft>
                        <CxInputFile >
                            <span>{selectedImage ? 'uma imagem foi selecionada' : 'Adicionar uma imagem'}</span>
                            <input type="file" name="image"accept="image/*"  onChange={handleImageChange} />
                           
                        </CxInputFile>

                    
                    </CxInputsForm>
                    <CxButtons>
                        <button onClick={()=>navigate('/admin/products')} >Cancelar</button>
                        <input className="cadastro" type="submit" value={'Cadastrar'} />
                    </CxButtons>
                </BoxInputs>
           </form>
        </BoxContent>
        <Modal link="" textLeft="Produto cadastrado" textLink="Cancelar"/>
    </Box>
}