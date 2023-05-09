import { Box,Mensage } from "./style"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../../Context/appContext"

type Props={
    textLeft:string,
    textLink:string,
    link:string
}
export const Modal=({ link,textLeft,textLink}:Props)=>{
    const {onModal,setOnModal}=useGlobalContext()

    
    return <Box display={onModal ? 'flex': 'none'} onClick={()=>setOnModal(false)}>
        <Mensage >
        <p>{textLeft}</p>
            <Link to={`${link}`} onClick={()=>setOnModal(false)}>
             {textLink}
            </Link>
        </Mensage>
    </Box>

}

{
    /* <p>ítem adicionado ao carrinho</p>
            <Link to={'/cart'} onClick={()=>setOnModal(false)}>
               ir para o carrinho
            </Link>
            */
}