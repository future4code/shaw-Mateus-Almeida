import React, { useState } from "react";
import { Principal, Form, ButtonStyled, ButtonCliqueAki, CliqueAkiDiv, ImagemLogo } from './styled'
import TextField from '@mui/material/TextField'

import { Navigate, navigate, useNavigate } from "react-router-dom"

import { goToFeed } from "../../Routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import  { goToLogin, goToSingUp } from "../../Routes/coordinator";

const Login = () => {
  // criei o email e password para setar os valores
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errEmail, setErrEmail] = useState('')
  const [errPass, setErrPass] = useState('')
  const navigate = useNavigate()
  const novaNavigate =useNavigate()
  /*
  const onEmail =(event)=>{
   setEmail(event.target.value)
  }
  const onPassword =(event)=>{
   setPassword(event.target.value)
  }
  */
  // const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/login"



  const onSubimitFazendoLogin = (event) => {
    event.preventDefault()
    const userLogin = {
      email,
      password
    }
    loginApi(userLogin)
    // para verificar se quando a pessoa digitar o input ficara controlado !
    //console.log({email,password});
  }
  const loginApi = async (body) => {
    await axios.post(`${BASE_URL}/login`, body)
      .then((res) => {
        setEmail('')
        setPassword('')
        
        console.log(res.data);
        localStorage.setItem('token', res.data.token)
        // mundar depois para mandar para o feed de restaurante
        goToFeed(navigate)
       //goToSingUp(navigate)
        alert("bem vindo")
        

      })
      .catch((err) => {

        console.log(err.response.data);
      })
  }
  return (
    <div>
    <Principal>
      <ImagemLogo src={"https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/2420CEFD-BBDE-49C8-91E3-A49B116851E9.svg"}/>
      <p> Entrar</p>
      <Form onSubmit={onSubimitFazendoLogin}>


        <TextField

          value={email}

          id="outlined-basic"
          label="Email"
          type={"email"}
          variant="outlined"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br></br>
        <TextField
          value={password}

          id="outlined-basic"
          label="Password"
          type={"password"}
          pattern={"^.{6,20}"}
          variant="outlined"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br></br>

        <ButtonStyled
          type={"submit"}
          
        >

          Entrar
        </ButtonStyled>
       
      </Form>


      
    </Principal>
    <CliqueAkiDiv>
    <h4>Não possui cadastro?</h4>
      <ButtonCliqueAki onClick={()=>goToSingUp(navigate)} ><strong>Clique aqui</strong></ButtonCliqueAki>
      
      
 
      </CliqueAkiDiv>
      </div>
  )
}
export default Login
// feito , porém reformulado para ficar melhor
/*
// 
const fazendoLogin = (event) =>{
  event.preventDefault()
  const body ={
    "email": email,
    "password": password

  }
  // axios para entar no login com a senha e email do user
  axios.post(`${baseUrl}`, body)
  .then(resp => {
    console.log(resp.data)
    window.localStorage.setItem("token", resp.data.token)
    alert("bem vindo!")
    goToFeed(navigate)
    
  })
  .catch(error => {
    alert("error ao fazer o login")
    console.log({ error })
})
// estou recebendo os input controlados 
//console.log({email,password});
}
*/