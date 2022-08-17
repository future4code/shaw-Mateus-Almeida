import styled from "styled-components";

const ContainerFeed = styled.div`

`
export const CardsRestaurant =styled.div`
padding: 0 0.5rem ;
margin-top: 0.5rem;
`
export const InputSearch =styled.input`
width: 90%;
height: 3.5;
padding: 1rem 0.503rem 1rem 1.063rem;
border-radius: 2px;
border: solid 1px gray;

`

export const Menu =styled.nav`
height: 2.652rem;
display: flex;
align-items: center;
padding: center;
padding: 0 1rem 0 0;
width: 100%;
// overflow usado para deixa a barra ser scrolada para o lado na parte de pesquisa
overflow-x:auto;
`
export const MenuItem =styled.button`
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: ${(p)=> p.select ? "red":"black"};
background-color: transparent;
border: none;
outline: none;
padding: 0 1rem;
`

















export default ContainerFeed