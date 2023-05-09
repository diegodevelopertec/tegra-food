import { Container, LogoContainer } from "./style"
import { Nav } from "./style"
import {Link} from 'react-router-dom'
import Logo from './../../../public/logo.png'
import { useGlobalContext } from "../../Context/appContext"




export const Header=()=>{
    const {onMenuMobile}=useGlobalContext()

    return <Container active={onMenuMobile}>
    <LogoContainer>
        <img src={Logo} />
    </LogoContainer>
    <Nav >
       <Link to={''}>Todos</Link>
       <Link to={''}>Pizza</Link>
       <Link to={''}>Sobremesa</Link>
       <Link to={''}>Pastel</Link>
       <Link to={''}>Açai</Link>
       <Link to={''}>Bebidas</Link>
    </Nav>





    </Container>
}