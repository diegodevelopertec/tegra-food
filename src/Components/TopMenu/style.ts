import styled from "styled-components"

export const SectionTop=styled.div`
    background-color: #DC9000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px;
    img{
        width: 30px;
        margin:10px;
        height: 30px;
        font-style: normal;
        cursor: pointer;
    }
   .profile{
        border-radius: 100%;
        height: 35px;
        width:35px;
    }
  
    @media screen and (max-width:950px){
        width: 100%;
    }
`
export const ButtomMobile=styled.button`
    display: none;
    border: none;
    margin: 10px;
    background-color: transparent;
@media screen and (max-width:950px) {
    display: flex;
}

img{
    height: 32px;
    width: 32px;
}


`