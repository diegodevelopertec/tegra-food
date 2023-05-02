import styled from "styled-components";


export const Page=styled.div`
    background-color: #E5E5E5;
    display: flex;
   
    

    @media screen and (max-width:950px){
        width: 100vw;
    }
 

`

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
        height: 53px;
        width:53px;
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
export const SectionProducts=styled.section`
flex: 1;

@media screen and (max-width:950px) {
        font-size: 18px;
        width: 100%;
        

       
   }

`
export const SectionProductsList=styled.div`
  padding: 13px;

 
`


export const HeaderPageProducts=styled.div`
    display: flex;
    width:auto;
    margin-left: 43px;
    margin-right:35px;
    margin-bottom: 57px;
    margin-top: 64px;
    justify-content: space-between;

.left{
    display: flex;
        .title-primary{
           font-family: Poppins;
            font-style: Bold;
            font-size: 32px;
            line-height: 48px;
            letter-spacing: 0.5px;
            color: #223263;

    }
    .title-secondary{
        margin-left: 20px;
        font-family: Poppins;
        font-style: Bold;
        font-size: 32px;
        line-height: 48px;
        letter-spacing: 0.5px;
        color: #DC9000;
    }

   
}

.right{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            height: 35px;
            width: 35px;
            margin-left: 22.5px;
            margin-right:22.5px;
        }
}
@media screen and (max-width:950px) {
    font-size: 18px;
    width: 100%;
    padding: 15px;
    margin: 0;
    .left{
       h3{
            font-size: 18px;
       }

        .title-secondary{
            margin-left: 8px;
        }
    }
    .right{
        img{
            height: 18px;
            width: 18px;
        }
    }
   }
`