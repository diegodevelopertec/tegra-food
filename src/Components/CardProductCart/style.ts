import styled from "styled-components"


export const Box=styled.div`
    display: flex;
    width: 100%;
`

export const BoxCardContext=styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    height: 128px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    padding-right: 47px;
    border: 0.25px solid #000000;
    box-shadow: 3px 3px 8px 1px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    margin-bottom: 9px;

    @media screen and (min-width:280px) and (max-width:844px){
        justify-content:space-around;
        padding: 12px;
        margin-bottom: 4px;

       
    }

`
export const BoxLeft=styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    
    img{
        width: 96.62px;
        margin-right: 47px;
        height: 100.97px;
        border-radius: 100%;
        box-shadow: 0px, 4px  rgba(0, 0, 0, 0.25);
     
    }

    h3{
      
        height: 36px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 150%;
        letter-spacing: 0.5px;
        color: #223263;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}
    .text{
        display: flex;
        flex-direction: column;
    }
.desc{
    height: 29px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.5px;
    color: rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 844px) {
    img{
        width: 60px;
        height: 60px;
        margin-right: 7px;
    }
    h3{
        width: 131px;
        height: 18px;
        font-size: 12px;
    }
    .desc{
        width: 201px;
        height: 36px;
        font-size: 10px;
    }
}

`

export const BoxRigth=styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
  
  .top-right  {
    width: 98px;
    display: flex;
    flex-direction: column;
    color:#223263;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.5px;
 
}

button{
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    padding: 10px;
    width: 140px;
    height: 50px;
    border:none;
    background: #DC9000;
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
}

.btn-remove-mobile{
    
   display: none;
   justify-content: end;
   img{
    width: 24px;
    height: 24px;
   }
}

.select-qdt{
   font-family: Poppins;
    font-style: Medium;
    font-size: 20px;
    line-height: 150%;
    vertical-align: Center;
    letter-spacing: 0.5px;
    fill: Solid;
    padding: 7px 4px;
    border-radius: 4px;
    box-shadow:rgba(0, 0, 0, 0.25);
    background-color:#DC9000;
    color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img{
        width: 26px;
        height:26px;
        cursor: pointer;

    }
    span{
        color: #FFFFFF;
    }
}
@media screen and (max-width: 844px) {
   span{
    font-size: 12px;
   }
   button{
    width: auto;
    width: 85px;
    height: 35px;
    font-size: 12px;
   }
   .btn-remove-mobile{
      display: flex;
   }
}

`

export const BoxClear=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 46px;
width: fit-content;
padding: 42px 38px;
img{
    height:48px ;
    width:48px ;
    cursor: pointer;
}

@media screen and (max-width:844px) {
    display:none;
}
`