import { Container,  InputForm } from "./style"
import {Link} from 'react-router-dom'
import { ContainerImage } from "./style"
import { ContainerForm } from "./style"
import { Form } from "./style"
import Image from './../../../public/imgloginregister.png'
import Google from './../../../public/google.png'
import Email from './../../../public/email.png'
import Pass from './../../../public/pass.png'

export const LoginPage=()=>{
    return <Container>
    <ContainerImage>
        <img src={Image} />
    </ContainerImage>
    <ContainerForm>
        <Form>
           <>
           <h2>Bem Vindo</h2>
            <p>faça o login para continuar</p>
           <InputForm >
              <img src={Email} height={'18.5px'} width={'20px'} />
              <input placeholder="Seu Email"/>
           </InputForm>
           <InputForm >
              <img src={Pass} height={'18.5px'} width={'20px'} />
              <input placeholder="senha"/>
           </InputForm>
           <input type="submit" />
           <div className="container-or">
                <span className="line"></span>
                <span className="or">ou</span>
                <span className="line"></span>
           </div>
           <div className="container-google">
                <img src={Google} />
                <a href="" >Entrar com o Google</a>
           </div>
           <p className="ultima-line">Não tem uma conta?<Link to='/register' >Cadastre</Link>  </p></>
        </Form>
    </ContainerForm>
    
    </Container>
}