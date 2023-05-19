import styled from "styled-components";

type Props={
    active:boolean;
}

export const Container=styled.header<Props>`
    background-color: #6A0000;


    @media screen and (max-width:950px){
        display:${Props=>Props.active  ? 'flex':'hidden'};
        width: ${Props=>Props.active  ? '255px':'0'};
        transition: all ease .6s;
        flex-direction: column;
        left:${Props=>Props.active  ? '0':'-999px'};
        height: 100vh;
        position: fixed;
    }
`




export const LogoContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 42px;
    width: 100%;

    img{
        width: 170px;
        height: 140px;
    }

    
`

export const Nav=styled.nav`
    display: flex;
    flex-direction: column;

    .td{
        background-color:#E5A11F;
        border-top:1px solid  #FFFFFF;
    }
    a{
        height: 45px;
        width: 255px;
        filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
        //background-color:#E5A11F;
        color: #FFFFFF;
        border-bottom:1px solid  #FFFFFF;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
       text-align: center;
       letter-spacing: 0.5px;
        color: #FFFFFF;
        padding: 11px;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    }
`
