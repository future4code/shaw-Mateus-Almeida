import styled from "styled-components"
import {Button} from '@mui/material'


export const Principal = styled.div`
padding: 10px;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

P{
    font-size: 1rem;
}
`
export const Form = styled.form`
display:flex;
flex-direction: column;
height: 30%;
width:80%;
justify-content: space-evenly;


`
export const ButtonStyled = styled(Button)`
&&{
    color: #000;
    width:100%;
    background-color:#E8222E;
    }
`