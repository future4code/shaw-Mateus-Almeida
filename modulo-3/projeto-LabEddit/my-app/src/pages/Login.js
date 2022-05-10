import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const irParaCadastro = () => {
    navigate("/Cadastro")
  }
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
    axios.post(`${baseURL}/users/login`, body)
      .then(resp => {
        console.log(resp.data);
        window.localStorage.setItem("tokenAutorizacao", resp.data.token)
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

    <div>
      <form onSubmit={postLogin}>
        <input
          placeholder="Nome"
          type="text"
          value={loginUser}
          onChange={onLogin}
        />

        <input
          placeholder="Senha"
          type="password"
          value={senhaUser}
          onChange={onSenha}
          pattern={"^.{8,30}"}
          title={"sua senha deve ter no minimo 8 caracteres é no maximo 30"}

        />

        <br></br>
        <button type={`submit`}>Continuar</button>
        <br></br>
        <button onClick={irParaCadastro}>Crie uma Conta!</button>
      </form>
    </div>

  );
}

export default Login;
