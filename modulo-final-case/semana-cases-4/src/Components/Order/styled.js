import styled from 'styled-components'
import {ReactComponent as Clock} from '../../Assets/clock.svg'


export const OrderContainer =styled.nav`
display: grid;
display: flex;
align-items: center;
justify-items: center;
height: 7.375rem ;
margin-left:-2.2%;
position: fixed;
bottom: 3.062rem;
width: 100%;
background-color: red;
z-index: 2;
`
export const OrderContainerSpace = styled.div`


height: 7.375rem ;
`

export const ClockStyled = styled(Clock)`
padding-left: 8%;
`
export const BoxInformacao =styled.div`

`
export const Tittle =styled.h3`
font-family: MontSerrat;
font-size: 1rem;
font-weight:bold;
font-stretch:normal;
font-style: normal;
letter-spacing:-0.39px;
color: #fff;
padding: 0.25rem;

`
export const RestaurantName =styled.p`
font-family: MontSerrat;
font-size: 1rem;
font-weight:bold;
font-stretch:normal;
font-style: normal;
letter-spacing:-0.39px;
color: #000;
padding: 0.25rem;

`
export const TotalPrice =styled.p`
font-family: MontSerrat;
font-size: 1rem;
font-weight:bold;
font-stretch:normal;
font-style: normal;
letter-spacing:-0.39px;
color: #000;
padding: 0.25rem;

`