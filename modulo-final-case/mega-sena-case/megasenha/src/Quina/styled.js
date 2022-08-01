import styled from "styled-components";
import {ReactComponent as Logo} from '../Imagens/Sena.svg'
//background-color: rgb(136, 110, 239);
export const LogoStyled =styled(Logo)`
background-color: rgb(136, 110, 239);
margin-left:40%;
margin-top: 6%

`

export const MegaLetra =styled.h1`
background-color: rgb(136, 110, 239);
margin-left:24%;
margin-top: 1%;
margin-bottom: 5%;
font-family: Montserrat;
font-weight: 700;
size: 30px;
color: white;
`

 export const DivPai =styled.div`
 width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
background-color: rgb(136, 110, 239);
position: fixed; top: 0; left: 0;


`
export const PosicionandoBotao =styled.div`

display: flex;
margin-left: 34%;
margin-top: 12%;

background-color: rgb(136, 110, 239);

`
export const NumeroConcurso =styled.p`
background-color: rgb(136, 110, 239);
font-family: Montserrat;
font-weight: 100;

margin-bottom: 5%;
size: 20px;
color: white;
margin-left: 23%;
margin-top:-3%

`
export const DivOndeIraOsNumero =styled.div`
background-color: rgb(239, 239, 239);
width: 100vw;
flex-grow: 1;
padding: 1rem;
flex-direction: column;
border-radius: 15% 15% 0%  0%;

display: flex;
`

export const LetraDeAviso =styled.p`
background-color: rgb(239, 239, 239);
font-weight: 40;
display: flex;
flex-direction: column;
flex-grow: 1;
justify-content: end;
//margin-top: 90%;
//margin-left: -76%;



`
export const NumeroD =styled.div`
background-color: rgb(239, 239, 239);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
    height: 8vh;
    width: 8vh;
    border: 1px solid grey;
    background-color: white;
 

`
export const NumeroCads =styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;

`