import { Box,BoxContent,CxButtons,CxInputFile,BoxInputs,CxInputsForm, Input, InputsLeft } from "./style"
import { Modal } from "../../Components/Modal"
import { useGlobalContext } from "../../Context/appContext"
import { useProducsApi } from "../../Services/useProductsApi"
import { HTMLInputTypeAttribute, useState } from "react"
import { ChangeEvent } from "react"
import { useActionData, useNavigate } from "react-router-dom"


type FormData={
  name:string,
  category:string,
  description:string,
  price:string,
  image:File | null
}




  
export const AddNewProduct=()=>{
    const navigate=useNavigate()
    const {setOnModal}=useGlobalContext()
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [selectedImage, setSelectedImage] = useState<File | null>(null);


  

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
    formData.append('price', price);

  
    const productPost: FormData = {
         name:formData.get('name') as string,
         category:formData.get('category') as string,
         description:formData.get('description') as string,
         price:formData.get('price') as string,
         image:formData.get('image') as File,
        }
    
        console.log(productPost);
        await useProducsApi.addProduct(productPost)

       setName('')
       setCategory('')
       setDescription('')
       setPrice('')
       setSelectedImage(null)


    

}


    return <Box>

        <BoxContent>
            <h2>Novo Item</h2>
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