import styled from "styled-components";

type Props={
    display:string;
}

export const Box=styled.div<Props>`
position: fixed;
justify-content: center;
background-color: rgba(38, 34, 36, 0.71);
display: ${Props=>Props.display=== 'flex' ? 'flex':'none'};
top: 0;
left: 0;
right: 0;
bottom:0;
height: 100%;
transition: all ease 0.5s;

@media screen and (max-width:950px){
    bottom: 23px;
    
}

`

export const Mensage=styled.div`

    background: #223263;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 573.74px;
    padding: 19px 16.74px;
    height: 66.18px;
    bottom: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 180%;
    p{
        color: #FFFFFF;
        font-family: Poppins;
        font-style: Medium;
        font-size: 16px;
    }
    a{
        color:#E6A11F;
        font-family: Poppins;
        font-style: Medium;
        font-size: 16px;

    }

    @media screen and (max-width:950px){
    bottom: 0;
    margin-top: 23px;
    width: 100%;
    font-size: 12px;
    padding: 15px 9px;
}

`