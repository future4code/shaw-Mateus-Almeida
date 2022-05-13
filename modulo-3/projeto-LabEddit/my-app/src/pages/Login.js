import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoImg from "../imagens/1.png"

const Paizao = styled.div`
display:flex;
flex-direction:column;

height:100vh;

margin-left:-2%;


`
const ImgLogo = styled.img`
display:flex;
margin-top:40%;
margin-left:0%;
max-width:100%;
max-height:100%;


`
const InputsCaixa = styled.div`
display: flex;
justify-content:center;
align-items: center;
height: 100%;
background-color:#8539EA ;

input{
  display:flex;

}
`
const BotaoCriar = styled.button`
margin-left:10%;
background-color: #8539EA ; /* Green */
    border: none;
    border-radius:80%;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    
`

const BotaoContinuar = styled.button`
margin-left:20%;
background-color: #9370DB; /* Green */
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;


`




function Login() {
  const navigate = useNavigate()
  // FUNCAO QUE ME LEVA PARA UMA PAGINA ESPECIFICA
  const irParaCadastro = () => {
    navigate("/Cadastro")
  }
  // FUNÇAO QUE ME LEVA PARA UMA PAGINA ESPECIFICA
  const irParaFeed = () => {
    navigate("/feed")
  }

  // fazendo o input controlado usado o useState
  const [loginUser, setLoginUser] = useState("")
  const [senhaUser, setSenhaUser] = useState("")
  // funçao para fazer o input controlado 
  const onLogin = (event) => {
    setLoginUser(event.target.value)
  }
  // console.log(loginUser) //,para saber se o input esta indo
  // funçao para fazer o input controlado 
  const onSenha = (event) => {
    setSenhaUser(event.target.value)
  }
  //console.log(senhaUser)//,para saber se o input esta indo
  // chamei  o event.preventDefault() para o o form nao ter o seu comportamento padrão , para nao recaregar a pagina!
  const baseURL = "https://labeddit.herokuapp.com"
  const postLogin = (event) => {
    event.preventDefault()
    const body = {
      "email": loginUser,
      "password": senhaUser

    }
    //console.log(body)
    //   window.localStorage.setItem("token", resp.data.token) PARA GUARDA O TOKEN NO LOCALSTORAGE
    axios.post(`${baseURL}/users/login`, body)
      .then(resp => {
        console.log(resp.data);
        window.localStorage.setItem("token", resp.data.token)
        irParaFeed()
      })
      .catch(error => {
        alert("senha ou email incorreto!")
        console.log({ error })
      })

  }






  /*
  sera usado dentro do input para falar que o minimo sera de 8 caracteres , o nome e regex , usa a propiedade pattern
   pattern={"^.{8,}" }
         title={"usa um txt dentro para aoparecer para o usuario!"}
         */
  // criei o onSubmit e passei a funçao junto com o form 
  return (

    <Paizao>

      <div>
        <ImgLogo src={logoImg} />
      </div>
      <InputsCaixa >

        <form onSubmit={postLogin}>
          <input
            placeholder="Nome"
            type="text"
            value={loginUser}
            onChange={onLogin}
          />
          <br></br>
          <input
            placeholder="Senha"
            type="password"
            value={senhaUser}
            onChange={onSenha}
            pattern={"^.{8,30}"}
            title={"sua senha deve ter no minimo 8 caracteres é no maximo 30"}

          />


          <br></br>
          <BotaoContinuar type={`submit`}><strong>Continuar</strong></BotaoContinuar>

          <div>
            <BotaoCriar onClick={irParaCadastro}><strong>Crie uma conta!</strong></BotaoCriar>
          </div>
        </form>
        <br></br>

      </InputsCaixa >

    </Paizao>

  );
}

export default Login;
