import styled from "styled-components";


export const Box=styled.div`
  width: 100%;
  overflow-x: none;

@media screen and (max-width:950px) {
    width: 100vw;
}
`

export const BoxPage=styled.div`
    padding-top: 165px;
    padding-right:40px;
    padding-left:40px;
    width:100%;    
    h2{
        height: 48px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 150%;
        letter-spacing: 0.5px;
        color: #223263;
        padding-left: 40px;
        @media screen and (max-width:950px){
            font-size: 20px;
            padding-left: 24px;
        }
}

    @media screen  and (max-width: 950px){
        padding-top: 20px;
        padding-right:6px;
        padding-left:6px;
      
       
    } 
`

export const ContainerProductsCart=styled.div`
    margin-top: 27px;
  
    
   
    @media screen and (max-width:950px) {
        display: flex;
        flex-direction:column;
        align-items: center;
       width: 100%;
    
      
       
       
    }

`

export const CardCumpom=styled.div`
    border: 0.25px solid #000000;
    box-shadow: 3px 3px 8px 1px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    display: flex;
    background: #FFFFFF;
    width: 704px;
    border-radius: 8px;
    height: 128px;
    padding: 41px 24px;
    margin-right:17px;
 

    @media screen and (max-width:950px) {
        padding-left: 13px;
        padding-top: 10px;
        padding-right: 2px;
        padding-bottom: 10px;
        width: 100%;
        height: max-content;
        margin-bottom: 4px;
        margin-top: 0px;
    
        
       
    }
p{
   
    font-family: 'Poppins';
    font-style: normal;
    margin-right:8px;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.5px;
    color: #223263;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media screen and (max-width:950px){
        font-size: 12px;
        margin-right:14px;
    }

}

.cx-cupom{
    width: 377px;
    height: 54px;
    justify-content: space-between;
    border: 0.25px solid #000000;
    border-radius: 6px;
    background: #FFFFFF;
    border-radius: 6px;
    display:flex;
    padding: 3px;
   
    input{
        border: none;
        flex: 1;
        outline: none;
       
    }
    button{
        width: 140px;
        height: 50px;
        padding: 10px;
        border: none;
        background-color: #DC9000;
        font-size: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        text-align: center;
        letter-spacing: 0.5px;
        color: #FFFFFF;
        cursor: pointer;
        @media screen and (max-width:950px){
            font-size: 10px;
            width: 68.25px;
            padding: 6.5px 7.62px;
        }
    }
  

}



`
export const TableCart=styled.div`
flex: 1;
@media screen and (max-width:950px) {
    width: max-content;
    align-self:flex-end;
}

.linha{
    display: flex;
   

  
}
.left{
    flex: 1;
    padding: 18px 16px;
    border: 2px solid  rgba(0, 0, 0, 0.5);
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    font-family: Poppins;
    font-style: Bold;
    font-size: 12px;
    line-height: 18px;
    line-height: 150%;
    font-weight: 700px;
    letter-spacing: 0.5px;
    color:#000000;
    @media screen  and (max-width:950px){
        width: 85px;
    }
}
.entrega{
    display: flex;
    justify-content: end;
    padding: 18px 16px;
    border: 2px solid  rgba(0, 0, 0, 0.5);
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    font-family: Poppins;
    font-style: Bold;
    font-weight: 700px;
    font-size: 12px;
    line-height: 18px;
    line-height: 150%;
    letter-spacing: 0.5px;
    color:#000000;
    text-decoration: underline;
    @media screen  and (max-width:950px){
        width: 85px;
    }
}
.right{
    flex: 1;
    display: flex;
    justify-content: end;
    padding: 18px 16px;
    border: 2px solid  rgba(0, 0, 0, 0.5);
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    font-family: Poppins;
    font-style: Bold;
    font-weight: 700px;
    font-size: 12px;
    line-height: 18px;
    line-height: 150%;
    letter-spacing: 0.5px;
    color:#223263;
    @media screen  and (max-width:950px){
        width: 85px;
    }
        
    

}


`
export const BoxCupomTableCart=styled.div`
    display: flex;
    margin-right: 169px;
    @media screen and (max-width:950px) {
        flex-direction: column;
        width: 100%;
    
    }


`

export const CarLastSection=styled.section`
display: flex;
justify-content: end;
padding: 129px ;
padding-right: 0;
margin-right: 152px;



@media screen  and (max-width:950px){
    margin-bottom: 49px;
    margin-top: 35px;
}


p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;
    text-decoration-line: underline;
    color: #223263;
    cursor: pointer;
}
button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 6px;
    border: none;
    margin-left: 31px;
    background: #DC9000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;
    color: #FFFFFF;
    cursor: pointer;
    img{
        height: 30px;
        width: 30px;
        margin-left: 10px;
    }
    @media screen  and (max-width:950px) {
        width: 165px;
        display: flex;
        font-size: 12px;
        justify-content: center;
        img{
            display: none;
        }
    }
}

@media screen and (max-width:950px) {
    width: 100%;
   justify-content: center;
   padding: 42px 35px 15px;
   font-size: 12px;
    p{
        font-size: 12px;
    }
     button{
        width: 165px;
       
    }
}
`