import styled from "styled-components";



export const Box=styled.div`
background-color: rgba(106, 0, 0, 1);
padding: 38px;
min-height: 100vh;

@media screen and (max-width: 950px) {
    width: 100vw;
    padding: 0;
    
}

`
export const BoxContent=styled.div`
display: flex;
flex-direction: column;
h2{
    color: rgba(229, 161, 31, 1);
    font-family: Poppins;
    font-style: Bold;
    font-size: 24px;

}


@media screen and (max-width: 950px) {
    width: 100%;
    display: flex;
    padding: 22px 12px;
 
}
`

export const BoxInputs=styled.div`
    width: 100%;
    padding-left: 68px;
    display: flex;
    flex-direction: column;
    margin-top: 36px;

    
@media screen and (max-width: 950px) {
    padding:12px;
    align-items: center;
}
`

export const CxInputs=styled.div`
display: flex;
flex-direction: column;

@media screen and (max-width: 950px) {
    width: 100%;
    align-items: center;
  
   
}

`
type Props={
    width:string;
    height:string;
}


export const CxInputsForm=styled.div`
display: flex;

@media screen and (max-width: 950px) {
   flex-direction: column;
   align-items:center;
   width: 100%;
}
`

export const  InputsLeft=styled.div`
display:flex;
flex-direction: column;
@media screen and (max-width: 950px) {
    width: 90%;
}
`

export const Input=styled.div<Props>`
width: ${Props=>Props.width};
border: 2px solid rgba(0, 0, 0, 0.3);
border-radius: 4px;
height:${Props=>Props.height};
display: flex;
flex-direction: column;
background-color:#FFFFFF;
padding: 7px;
margin-bottom: 38px;

span{
    font-family: Poppins;
    font-style: Medium;
    font-size: 12px;
    line-height: 18px;
   
}

input{
    border: none;
    outline: 0;
    width: 100%;
    height: 100%;
    height: auto;
    flex: 1;
    background-color: #FFFFFF;
}

@media screen and (max-width: 950px) {
    width: 100%;
   
    
}

`

export const  CxInputFile=styled.div`
width: 400px;
height: 400px;
background-color: #FFFF;
margin-left: 20px;
border: 2px dashed #E5A11F;
display: flex;
justify-content: center;
align-items: center;
border-radius: 4px;
position: relative;
  overflow: hidden;

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #f1f1f1;
        cursor: pointer;
       font-family: Poppins;
        font-style: Medium;
        font-size: 14px;
        line-height: 21px;
        line-height: 150%;
    }
    input{
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
       
    }

   @media screen  and (max-width:950px){
     width:90%;
     margin: 0;
     justify-content: center;
     align-items: center;
   }
`

export const CxButtons=styled.div`
margin: 234px 99px 59.39px 0px;
display: flex;
justify-content: flex-end;




button,.cadastro{
    cursor: pointer;
    font-family: Poppins;
    font-style: Medium;
    font-size: 18px;
    line-height: 27px;
    line-height: 150%;
    border: none;
    background-color: transparent;
    border-radius: 4px;
    padding: 7px 21px;
    color: rgba(255, 255, 255, 1);
}
.cadastro{
    background-color: #DC9000;
    box-shadow:   0 0 10px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width:950px){
    width: 100%;
    margin-top: 150px;
   
}
`