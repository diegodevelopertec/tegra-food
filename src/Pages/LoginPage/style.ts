import styled from "styled-components";
import {GlobalStyle} from './../../ThemeStyle'



export const Container=styled.div`
    background-color:${'#FFFFFF'};
    display: flex;
    min-height: 100vh;


`

export const ContainerImage=styled.div`
    display: flex;

    img{
        height: auto;
    }

    @media screen and (max-width:950px)  {
        display: none;
    }
`

export const ContainerForm=styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const Form=styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 343px;
height: 497px;
margin: 111px auto;

    h2{
        color: #223263;
        text-align: center;
        width: 122px;
        font-weight: bold;
        height: 30px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 150%;
    /* identical to box height, or 30px */

        text-align: center;
        letter-spacing: 0.5px;
    }

p{
        width: 178px;
    height: 22px;

    /* Body Text/NormalRegular */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 180%;
    /* identical to box height, or 22px */
    margin: 25px 0;
    text-align: center;
    letter-spacing: 0.5px;

    /* Neutral/Grey */

    color: #9098B1;

}



input[type='submit']{
    background-color: #DC9000;
    color: #FFFFFF;
    height: 57px;
    width: 343px;
    padding:16px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
.container-or{
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin: 25px  0;
    .or{
        
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0.005em;
        color: #9098B1;
    }
    .line{
        width:134px;
        margin: 0 25px;
        border-bottom: 1px solid #EBF0FF;

    }
}
.container-google{
    display: flex;
    border: 1px solid #EBF0FF;
    padding: 25px;
    width: 100%;
    margin: 25px;
    align-items: center;
    justify-content: space-around;
        img{
            height: 19px;
            width:16px;
        }
        a{
            width: 277px;
            height: 25px;
            
            /* Button Text */

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 180%;
            /* or 25px */

            text-align: center;
            letter-spacing: 0.5px;

            /* Neutral/Grey */

            color: #9098B1;


        }
    }

    .ultima-line{
        width: 202px;
        height: 18px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
/* identical to box height, or 18px */

text-align: center;
letter-spacing: 0.5px;

/* Neutral/Grey */

color: #9098B1;
        a{
          color: #40BFFF;
          font-size: bold;
        }
    }
`




export const InputForm=styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    width: 343px;
    padding: 13px;
 
input{
  width: 277px;
  height: 22px;
  border: none;
  font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 180%;
    margin-left: 12px;
  

}
input:focus{
    outline: none;
}
border: 1px solid #EBF0FF;
        border-radius: 5px;
        height: 48px;
        width: 343px;
        margin-bottom: 28px;

`