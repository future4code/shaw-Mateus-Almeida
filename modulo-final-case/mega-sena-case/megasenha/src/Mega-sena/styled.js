import styled from "styled-components";
import {ReactComponent as Logo} from '../Imagens/Sena.svg'

export const LogoStyled =styled(Logo)`
background-color: rgb(107, 239, 163);
margin-left:40%;
margin-top: 6%

`

export const MegaLetra =styled.h1`
background-color: rgb(107, 239, 163);
margin-left:24%;
margin-top: 1%;
font-family: Montserrat;
font-weight: 700;
size: 30px;
color: white;
`

 export const DivPai =styled.div`
 width: 99.9vw;
height: 99.9vh;
background-color: rgb(107, 239, 163);
position: fixed; top: 0; left: 0;
`
export const PosicionandoBotao =styled.div`

display: flex;
margin-left: 34%;
margin-top: 12%;

background-color: rgb(107, 239, 163);

`
export const NumeroConcurso =styled.p`
background-color: rgb(107, 239, 163);
font-family: Montserrat;
font-weight: 100;
size: 20px;
color: white;
margin-left: 23%;
margin-top:-3%

`
export const DivOndeIraOsNumero =styled.div`
background-color: rgb(239, 239, 239);
width: 100vw;
height: 80vh;
border-radius: 8%;
display: flex;
`

export const LetraDeAviso =styled.p`
font-weight: 40;
display: flex;
margin-top: 94%;
margin-left: 3%

`