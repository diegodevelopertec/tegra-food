import { Box,Mensage } from "./style"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../../Context/appContext"

export const Modal=()=>{
    const {onModal,setOnModal}=useGlobalContext()

    
    return <Box display={onModal ? 'flex' : 'none'}>
        <Mensage >
            <p>ítem adicionado ao carrinho</p>
            <Link to={'/cart'} onClick={()=>setOnModal(false)}>
               ir para o carrinho
            </Link>
        </Mensage>
    </Box>

}