import { AlternateEmail, SettingsSystemDaydreamOutlined } from "@mui/icons-material";
import { Alert, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { goToSingUpAdress } from "../../Routes/coordinator";
import { Principal, Form, ButtonStyled } from './styled'

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
            <p> Cadastrar</p>
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
                <TextField
                    id="outlined-basic"
                    label={"email"}
                    name="email"
                    type={"email"}
                    placeholder={"digite seu email"}
                    variant="outlined"
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <TextField
                    id="outlined-basic"
                    label={"cpf"}
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
                <TextField
                    id="outlined-basic"
                    label={"password"}
                    name="password"
                    type={"password"}
                    placeholder={"digite seu senha"}
                    variant="outlined"
                    value={form.password}
                    onChange={onChange}
                    required


                />
                <TextField
                    id="outlined-basic"
                    label={"confirmar senha "}
                    name="password"
                    type={"password"}
                    placeholder={"digite seu senha"}
                    variant="outlined"
                    value={form.password}
                    onChange={onChange}
                    required


                />



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