import styled from "styled-components"
import {Button} from '@mui/material'


export const Principal = styled.div`
padding: 10px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
P{
    font-size: 2rem;
}
`
export const Form = styled.form`
display:flex;
flex-direction: column;
height: 30%;
width:90%;
justify-content: space-evenly;


`
export const ButtonStyled = styled(Button)`
&&{
    color: #000;
    width:100%;
    background-color:#E8222E;
    }
`