import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const TextoLogo = styled.div`

background-color:#8539EA ;
margin-top:-6%;
h3{
  margin-left:10%
}
`
const PrincipalConteudo = styled.div`
background-color:#8539EA ;
input{
  margin-top:28%;
  margin-left:14%;
}p{
  
  margin-left: 8%;
}

`
const ButtonCadastra = styled.button`
margin-top:18%;
margin-left:30%;
background-color: #9370DB; /* Green */
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;

`




function Cadastro() {
  // USENAVIGATE PARA NAVEGAR ENTRE AS ROTAS 
  const navigate = useNavigate()
  // MEU ESTADO QUE  IREI GUARDA AS INFORMAÇOES 
  const [userName, setUserName] = useState("")
  const [loginUser, setLoginUser] = useState("")
  const [senhaUser, setSenhaUser] = useState("")
  const irParaFeed = () => {
    navigate("/feed")
  }
  const onUserName = (event) => {
    setUserName(event.target.value)
  }
  const onLogin = (event) => {
    setLoginUser(event.target.value)
  }
  const onSenha = (event) => {
    setSenhaUser(event.target.value)
  }
  // componentes funçoes ou clases sao passados com inicial maiusculo , componente que renderiza na pagina e maiusculo, funcao e variaveis o camel case 
  /*  criei o metodo post para fazer a autorizaçao da pessoa se cadastrar
  passei a mesma base da url que pedia no postman 
  usei o window.localStorage para guarda o token nele 
  passei o body com input controlado para a pessoa saber digitar sua senha de cadastro 
  */
  // event.preventDefault() PARA NAO DEIXAR A PAGINA TER SEU COMPORTAMENTO PADRAO , E NAO ATUALIZAR A CADA COISA DIGITADA
  const baseURL = "https://labeddit.herokuapp.com"
  const postCadastro = (event) => {
    event.preventDefault()
    const body = {
      "username": userName,
      "email": loginUser,
      "password": senhaUser
    }
    //console.log(body);

    axios.post(`${baseURL}/users/signup`, body)
      .then(resp => {
        console.log(resp.data)
        window.localStorage.setItem("token", resp.data.token)
        alert("voce foi cadastrado com sucesso!")
        irParaFeed()

      })
      .catch(error => {
        alert("error ao cadastrar")
        console.log({ error })
      })
  }
  /* usei a tag form para falar que era um formulario
  em vez de usar o onClick , usa o onSubmit para ligar ele ao metodo post
  e no button fala que que o e type={`submit`} */
  return (
    < PrincipalConteudo>
      <TextoLogo>
        <h2> Olá, bem vindo ao labeEddit</h2>
      </TextoLogo>
      <div>
        <form onSubmit={postCadastro}>

          <input placeholder="Nome do Usuario"
            type="text"
            value={userName}
            onChange={onUserName}
          />

          <input placeholder="E-mail"
            type="text"
            value={loginUser}
            onChange={onLogin} />

          <input placeholder="Senha"
            type="password"
            value={senhaUser}
            onChange={onSenha}
            pattern={"^.{8,30}"}
            title={"sua senha deve ter no minimo 8 caracteres é no maximo 30"}
          />

          <br></br>
          <input type="checkbox" />
          <p> <u> Ao continuar ,vocẽ concorda com o nosso contrato de usuário e nossa política de privacidade</u></p>

          <br></br>
          <ButtonCadastra type={`submit`}><strong>cadastrar</strong></ButtonCadastra >
        </form>
        <a href="https://www.linkedin.com/in/mateus-vinicius-42290022a/">
        <img  src="https://img.icons8.com/nolan/80/linkedin-circled.png"
        />
        
        </a>
       
      </div>
    </ PrincipalConteudo>


  );
}

export default Cadastro;
