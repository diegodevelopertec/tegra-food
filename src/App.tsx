import { Rotas } from "./Routes/routes"
import {ContainerRoutesApp} from './App.style'
import { Modal } from "./Components/Modal"
export const App=()=>{


    return <ContainerRoutesApp>
      <Rotas />
      <Modal />
    </ContainerRoutesApp>
}


