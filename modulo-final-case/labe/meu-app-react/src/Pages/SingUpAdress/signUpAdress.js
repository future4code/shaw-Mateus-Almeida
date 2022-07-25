
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";

import { useForm } from "../../Hooks/useForm";
import { ButtonStyled, Form, Principal } from "../SingUp/styled";
import { Navigate, navigate, useNavigate } from "react-router-dom";
import { goToFeed } from "../../Routes/coordinator";
import Header from "../../Components/Headers/Headers";
// feito por mateus
export default function Endereco() {
    const navigate = useNavigate()

const {form , onChange,clean}= useForm({

    "street": "",
    "number": "",
    "neighbourhood": "",
    "city": "",
    "state": "",
    "complement": ""
})
// funcional !

    const onSubmitFormAdress = (event) => {
        event.preventDefault()
        // fazer a pagina ir para o novo local pelo goTo
        goEndereco(Navigate)
        console.log(form);
        goToFeed(navigate)
        alert("bem vindo")


    }
    const goEndereco = async()=>{
        await axios.put(`${BASE_URL}/address`,form , {
            headers:{
                auth:localStorage.getItem(`token`)
            }
        })

        .then((res) => {
            console.log(res.data);
            window.localStorage.setItem(`token`,res.data.token)

            alert("Bem vindo")



        })
        .catch((err) => {

          console.log(err.response.data);
        })
    }

    return (
        <Principal>
             <Header back/>
          
            <p> <strong>Meu Endereço</strong></p>
          

            <Form onSubmit={onSubmitFormAdress}>
             
                 <br></br><br></br><br></br><br>
                </br><br></br><br></br><br></br>
                <br></br><br></br><br></br>
                <br></br><br></br><br></br>
                
                <TextField

                    placeholder="Rua/av"
                    value={form.street}
                    onChange={onChange}
                    label="rua/av"
                    name="street"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"
                    required

                />
                <br></br>
                <TextField
                    placeholder="Numero"
                    value={form.number}
                    onChange={onChange}
                    name="number"
                    label="numero"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"
                    required
                />
                <br></br>
                <TextField
                    placeholder="apto/bloco"
                    value={form.neighbourhood}
                    onChange={onChange}
                    name="neighbourhood"
                    label="apto/bloco"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"
                    required

                />
                <br></br>
                <TextField
                    placeholder="bairro"
                    value={form.city}
                    onChange={onChange}
                   name="city"
                    label="bairro"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"
                    required

                />
                <br></br>
                <TextField
                    placeholder="cidade"
                    value={form.complement}
                    onChange={onChange}
                    name="complement"
                    label="cidade"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"
                    required

                />
                <br></br>
                <TextField
                    placeholder="estado"
                    value={form.state}
                    onChange={onChange}
                    name="state"
                    label="estado"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"
                    required

                />
                <br></br>
                <ButtonStyled type={`submit`}>salvar</ButtonStyled>
            </Form>
        </Principal>
    )
}




































/////////////////////////////////////////////////////////////////////////



/*const [street, setStret] = useState("")
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

    */
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