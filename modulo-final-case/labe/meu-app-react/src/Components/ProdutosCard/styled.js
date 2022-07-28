import styled from "styled-components";

export const CardProduto = styled.div`
width: 100%;
height:15.2rem ;
margin: 0.5rem 0;
display:flex;
border: 1px solid black;
border-radius: 7px;


`
export const ImageProduct =styled.img`
width: 100%;
height: 7.5rem;
border-radius:  12px 12px 0 0;
width:7.5rem;
height:15.2rem;
border-radius: 7px 7px 0 0;

`

export const QuantityProduct=styled.div`
display:flex;
justify-content:center;
align-items: center;
border: solid 1px red;
width: 2.063rem;
height: 2.063rem;
` 
export const BoxNameQuantity =styled.div`
display: flex;
justify-content: space-between;

`
export const NameProduct =styled.h3`
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: red;
padding-bottom: 0.25rem;


`
export const BoxInform =styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
padding: 0rem 0rem 0 1rem;
flex-grow: 1;
`
export const InformDescription =styled.p`
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: grey;
padding: 0.25rem 0;
flex-grow: 0;
`
export const BoxInformPriceButton = styled.div`
display: flex;
justify-content: space-between;
`
export const InformPrice =styled.p`

`
export const InformAddItemButton =styled.button`
display:flex;
width: 5.625rem;
height: 1.938rem;
border-radius: 8px 0 8px 0;
background-color: white;
outline: 0;
margin-top: 40%;
border-radius:7px;
border: 1px solid grey;
`
export const InformRemoveItemButton = styled(InformAddItemButton)`
border: 1px solid red;
color: red;
`

export const QuantidadeItens = styled.div`
display:flex;
justify-content: center;
align-items: center;
border: solid 1px red;
width: 1.5rem;
height: 1.5rem;
border-radius: 8px 0 8px 0;
color: red;

`