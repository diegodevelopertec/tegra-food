import { Container,  InputForm } from "./style"
import { ContainerImage } from "./style"
import { ContainerForm } from "./style"
import { Form } from "./style"
import Image from './../../../public/imgloginregister.png'
import Google from './../../../public/google.png'
import Email from './../../../public/email.png'
import Pass from './../../../public/pass.png'
import User from './../../../public/user.png'
import {Link} from 'react-router-dom'

export const RegisterPage=()=>{
    return <Container>
    <ContainerImage>
        <img src={Image} />
    </ContainerImage>
    <ContainerForm>
        <Form>
           <>
            <div>
              <h2>Vamos começar!</h2>
              <p>Crie uma nova conta</p>
            </div>
            <InputForm >
              <img src={User} height={'18.5px'} width={'20px'} />
              <input type="text" placeholder="Nome completo"/>
           </InputForm>
           <InputForm >
              <img src={Email} height={'18.5px'} width={'20px'} />
              <input type="email" placeholder="Seu Email"/>
           </InputForm>
           <InputForm >
              <img src={Pass} height={'18.5px'} width={'20px'} />
              <input type="password" placeholder="senha"/>
           </InputForm>
           <InputForm >
              <img src={Pass} height={'18.5px'} width={'20px'} />
              <input type="password" placeholder="confirme senha"/>
           </InputForm>
           <input type="submit" />
           <div className="login-link">
             <p className="ultima-line">Já tem uma conta?<Link to='/' >Entrar</Link> </p> 
           </div>
         </>
        </Form>
    </ContainerForm>
    
    </Container>
}