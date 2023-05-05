import styled from "styled-components"


export const BoxFilter=styled.div`
display: flex;
justify-content: center;

`
export const BoxTopFilter=styled.div`
width: initial;
height:initial;

img{
    height: 22px;
    width: 22px;
    cursor: pointer;
}
`
export const BoxItemsFilter=styled.div`

    p{
        width: 100%;
        font-family: Poppins;
        font-style: Medium;
        font-size: 16px;
        text-align: center;
        margin-bottom: 24px;
         color:#000000;
    }
    background:rgba(255, 255, 255, 1);
    padding-bottom: 51px;
    padding-left: 26px;
    padding-right: 16px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
   position: absolute;
    margin-top: 55px;
    margin-right: 255px;
    width: max-content;
 

`
export const BoxItens=styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width:844px) {
        flex-direction: column;
        align-items: center;
         text-align: center;
         padding-left: 33px;
         padding-right: 33px;
         
    }


`

export const ItemFilter=styled.div`
    font-family: Poppins;
    font-style: Medium;
    font-size: 16px;
    color:#FFFFFF;
    margin-right: 47px;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    background-color: rgba(220, 144, 0, 1);

    @media screen and (max-width:844px) {
        width: 90%;
        margin-top:22px;
    }

`