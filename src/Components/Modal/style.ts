import styled from "styled-components";

type Props={
    display:string;
}

export const Box=styled.div<Props>`
position: fixed;
justify-content: center;
background-color: rgba(38, 34, 36, 0.71);
display: ${Props=>Props.display };
top: 0;
left: 0;
right: 0;
bottom:0;
height: 100%;
transition: all ease .2s;



`

export const Mensage=styled.div`

    background: #223263;
    display: flex;
    justify-content: space-between;
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
    }
    a{
        color:#E6A11F;;
    }

`