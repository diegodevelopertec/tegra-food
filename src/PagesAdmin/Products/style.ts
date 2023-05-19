import styled from "styled-components";


export const Page=styled.div`
    background-color: #E5E5E5;
    display: flex;
    min-height: 100vh;
   


`


export const SectionProducts=styled.section`
    flex: 1;

    @media screen and (max-width:930px) {
            font-size: 15px;
            width: 100%;
        
    }

`
export const SectionProductsList=styled.div`
  padding: 13px;


  @media screen and (max-width:930px) {
          font-size: 12px;
           width: 100%;
           padding:22px 5px;
        
    }
`

export const HeaderPageProducts=styled.div`
    display: flex;
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
            display: flex;
            flex-direction: column;
            .barra{
                background-color: rgba(220, 144, 0, 1);
                width: 100%;
                height: 2px ;
            }
        
    }

   
}

.right{
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
        button{
           background-color: rgba(220, 144, 0, 1);
           border-radius: 4px;
           border: none;
           padding: 12px 8px;
           font-size: 18px;
           color: rgba(255, 255, 255, 1);
           cursor: pointer;
           span{
            margin-left: 10px;
           }
        }
        img{
            height: 35px;
            width: 35px;
            margin-left: 22.5px;
            margin-right:22.5px;
        }
}
@media screen and (max-width:930px) {
    padding: 5px;
    margin: 0px;
    margin-top: 12px;
    width: 100%;
    .left{
       .title-primary,.title-secondary{
           font-size: 15px;
           
       }

        .title-secondary{
            margin-left: 8px;
        }
    }
    .right{
        img{
            height: 15px;
            width: 15px;
        }

        button{
           background-color: rgba(220, 144, 0, 1);
           border-radius: 4px;
           border: none;
           padding: 13px 7px;
           font-size: 12px;
           color: rgba(255, 255, 255, 1);
           cursor: pointer;
           
        }
    }
   }
`