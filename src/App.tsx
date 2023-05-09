import { Rotas } from "./Routes/routes"
import {ContainerRoutesApp} from './App.style'
import { Modal } from "./Components/Modal"
import { useGlobalContext } from "./Context/appContext"



export const App=()=>{
const {onModal,setOnModal}=useGlobalContext()

setTimeout(()=>{
  if(onModal){
    setOnModal(false)
  }
 
},1500)
    return <ContainerRoutesApp >
    
      <Rotas />
    
    
    </ContainerRoutesApp>
}


