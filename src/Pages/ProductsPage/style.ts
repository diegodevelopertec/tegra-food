import styled from "styled-components";


export const Page=styled.div`
    background-color: #E5E5E5;
    display: flex;

    @media screen and (max-width:844px){
        width: 100vw;
    }
 

`


export const SectionProducts=styled.section`
    flex: 1;

    @media screen and (max-width:844px) {
            font-size: 18px;
            width: 100%;
        
    }

`
export const SectionProductsList=styled.div`
  padding: 13px;

@media screen and (max-width:950px){
    padding:5px;
    width: 100%;
}
`

export const HeaderPageProducts=styled.div`
    display: flex;
    margin-left: 43px;
    margin-right:35px;
    margin-bottom: 57px;
    margin-top: 64px;
    justify-content: space-between;
    height: 50px;
  
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
        height: 100%;
        justify-content: center;
        img{
            height: 35px;
            cursor: pointer;
            width: 35px;
            margin-left: 22.5px;
            margin-right:22.5px;
        }
}
@media screen and (max-width:950px) {
    margin-top: 20px;
    margin-bottom: 17px;
    justify-content: space-between;
    width: auto;
    
    .left{
        .title-primary , .title-secondary{
            font-size: 18px;
      }
    }

    .right{
        img{
            height: 18px;
            width: 18px;
            margin-left: 10px;
            margin-right:10px;
        }
    }
   }
`