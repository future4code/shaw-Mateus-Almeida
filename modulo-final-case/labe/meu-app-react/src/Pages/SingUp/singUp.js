import { AlternateEmail, SettingsSystemDaydreamOutlined } from "@mui/icons-material";
import { Alert, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../Components/Headers/Headers";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { goToSingUpAdress } from "../../Routes/coordinator";
import { Principal, Form, ButtonStyled, ImagemLogo, CliqueAkiDiv } from './styled'

const SingUp = () => {
    const [password, setPassword] = useState('')
    //const [confirmPass , setConfirmPass]=useState('')
    const navigate = useNavigate()
    const { form, onChange, clean } = useForm({
        "name": "",
        "email": "",
        "cpf": "",
        "password": ""
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form);
        signUpPerson()
    }
    const signUpPerson = async () => {
        await axios.post(`${BASE_URL}/signup`, form)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token)
                //Alert(`boas vindas ${res.data.user}`)
                //alert("boas vindas")
                goToSingUpAdress(navigate)


            })
            .catch((err) => {
                console.log(err.response);
                clean()
            })
    }



    return (
        <Principal>
            <Header back/>
            <CliqueAkiDiv>
            <ImagemLogo src={"https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/2420CEFD-BBDE-49C8-91E3-A49B116851E9.svg"}/>
            </CliqueAkiDiv>
            <h4> Cadastrar</h4>
            <br></br><br></br><br></br><br></br>
            
            <Form onSubmit={onSubmitForm}>
                <TextField
                    id="outlined-basic"
                    label={"Nome"}
                    name="name"
                    type={"text"}
                    placeholder={"digite seu nome"}
                    variant="outlined"
                    value={form.name}
                    onChange={onChange}
                   
                />
                 <br></br>
                <TextField
                    id="outlined-basic"
                    label={"Email"}
                    name="email"
                    type={"email"}
                    placeholder={"digite seu email"}
                    variant="outlined"
                    value={form.email}
                    onChange={onChange}
                    required
                />
                 <br></br>
                <TextField
                    id="outlined-basic"
                    label={"CPF"}
                    name="cpf"
                    type={"text"}
                    // testar se o patern ira funcionar para o cpf
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    placeholder={"digite seu cpf"}
                    variant="outlined"
                    value={form.cpf}
                    onChange={onChange}
                    required
                />
                 <br></br>
                <TextField
                    id="outlined-basic"
                    label={"Password"}
                    name="password"
                    type={"password"}
                    placeholder={"digite seu senha"}
                    variant="outlined"
                    value={form.password}
                    onChange={onChange}
                    required


                />
                 <br></br>
                <TextField
                    id="outlined-basic"
                    label={"Confirmar senha "}
                    name="password"
                    type={"password"}
                    placeholder={"digite seu senha"}
                    variant="outlined"
                    value={form.password}
                    onChange={onChange}
                    required


                />
                 <br></br>



                <ButtonStyled
                    type={"submit"}
                >

                    Entrar
                </ButtonStyled>







            </Form>
        </Principal>
    )


}
export default SingUp