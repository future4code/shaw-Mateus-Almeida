import { TextField } from "@mui/material";
import React, { useState } from "react";
import { goToLogin } from "../../Routes/coordinator";
//import { useForm } from "../../Hooks/useForm";
import { ButtonStyled, Form, Principal } from "../SingUp/styled";
// feito por mateus
export default function Endereco() {
    //const navigate = useNavigate("")
    const [street, setStret] = useState("")
    const [number, setNumber] = useState("")
    const [neighbourhood, setNeighbourhood] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [complement, setComplement] = useState("")

    const nomeStreet = (event) => {
        setStret(event.target.value)
    }
    const nomeNumber = (event) => {
        setNumber(event.target.value)
    }
    const nomeNeighbourhood = (event) => {
        setNeighbourhood(event.target.value)
    }
    const nomeCity = (event) => {
        setCity(event.target.value)
    }
    const nomeState = (event) => {
        setState(event.target.value)
    }
    const nomeComplement = (event) => {
        setComplement(event.target.value)
    }

     


    const onSubmitFormAdress = (event) => {
        event.prevetDefault()
    }
    
    /*
    const voltandoParaHome =(event)=>{
        goToLogin(navigate)
     }
     */
    //onClick={voltandoParaHome }
    return (
        <Principal>
            <button > Voltar </button>
            <p> meu endereco</p>
            <br></br><br></br><br></br><br></br>

            <Form onSubmit={onSubmitFormAdress}>
                <TextField

                    placeholder="Rua/av"
                    value={street}
                    onChange={nomeStreet}
                    label="rua/av"
                    name="Rua/av."
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"

                />
                <TextField
                    placeholder="Numero"
                    value={number}
                    onChange={nomeNumber}
                    name="Numero"
                    label="numero"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"
                />
                <TextField
                    placeholder="apto/bloco"
                    value={neighbourhood}
                    onChange={nomeNeighbourhood}
                    name="apto/bloco"
                    label="apto/bloco"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"

                />
                <TextField
                    placeholder="bairro"
                    value={city}
                    onChange={nomeCity}
                    name="bairro"
                    label="bairro"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"

                />
                <TextField
                    placeholder="cidade"
                    value={complement}
                    onChange={nomeComplement}
                    name="cidade"
                    label="cidade"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"

                />
                <TextField
                    placeholder="estado"
                    value={state}
                    onChange={nomeState}
                    name="estado"
                    label="estado"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"

                />
                <ButtonStyled type={`submit`}>salvar</ButtonStyled>
            </Form>
        </Principal>
    )
}


/*import React from "react";
import { useForm } from "../../Hooks/useForm";
import { Principal } from "./styled";
import { Form } from "./styled";
import { TextField } from "@mui/material";




const SingUpAdress = () => {

    const [Form,onChange,clean] = useForm({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
        })

    const onSubmitFormAdress =(event)=>{
        event.preventDefault()
    }

    return (
        <Principal>
            <Form  onSubmit={onSubmitFormAdress}> 
                <TextField
                id="outlined-basic"
                label={"rua/av."}
                name="rua/av"
                type={"text"}
                placeholder="rua/av"
                variant="outlined"
                onChange={""}
                value={""}
                />
            
            </Form>
        </Principal>
    )
}
export default SingUpAdress
*/