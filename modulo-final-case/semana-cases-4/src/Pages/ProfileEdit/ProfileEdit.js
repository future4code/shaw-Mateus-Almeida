//import { AlternateEmail, SettingsSystemDaydreamOutlined } from "@mui/icons-material";
import { Alert, TextField } from "@mui/material";
import axios, { Axios } from "axios";

import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Header from "../../Components/Headers/Headers";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { useRequestData } from "../../Hooks/useRequestData";
import { goToProfile } from "../../Routes/coordinator";


import { Form, Principal, ButtonStyled } from "./styled"


const ProfileEddit = () => {

    const person = useRequestData({}, `${BASE_URL}/profile`)
    //console.log(person[0].user);
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')

    const getPerson = async () => {
        await axios.get(`${BASE_URL}/profile`, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
            .then((res) => {
                //console.log(res.data);
                setName(res.data.user.name)
                setCpf(res.data.user.cpf)
                setEmail(res.data.user.email)
            })
            .catch((err) => {
                console.log(err.response);
            })
    }


    const uptadeProfile = async () => {
        const body = {
            name,
            email,
            cpf
        }
        await axios.put(`${BASE_URL}/profile`, body, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data);
                goToProfile(navigate)

            })
            .catch((err) => {
                console.log(err.response);
            })
    }

    useEffect(() => {
        getPerson()
    }, [])



    // setName(person[0].user && person[0].user.name)
    //setCpf(person[0].user && person[0].user.cpf)
    //setEmail(person[0].user && person[0].user.email)

    const personScren = {
        name,
        email,
        cpf
    }

    const { form, onChange, clean } = useForm({
        "name": "",
        "email": "",
        "cpf": ""

    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        uptadeProfile()
    }
    return (

        <div>
            <Header title={"Editar "} back />
            <br></br><br></br>

            <Principal>



                < Form onSubmit={onSubmitForm}>
                    <TextField
                        id="outlined-basic"
                        name="name"
                        type={"text"}
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    />
                    <br></br>
                    <TextField
                        id="outlined-basic"
                        name="email"
                        type={"email"}
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br></br>
                    <TextField
                        id="outlined-basic"
                        name="cpf"
                        type={"text"}
                        // testar se o patern ira funcionar para o cpf                  
                        variant="outlined"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                    />






                    <br></br>
                    <ButtonStyled
                        type={"submit"}
                    >

                        Salvar
                    </ButtonStyled>







                </Form>
            </Principal>
        </div>
    )
}
export default ProfileEddit