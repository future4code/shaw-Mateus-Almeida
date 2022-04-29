import axios from "axios";
import React, { useEffect, useState ,  } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BaseUrl } from "./baseDaUrl/BaseUrl";

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
 /* useEffect(() => {
    goLogin()
  }, [])
  */

  // funçao para alterar o valor do email 
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  // funçao para alterar o valor da senha
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  console.log(email);
  console.log(password);
  // funçao para tentar chamar a api com o post
  
  const goLogin = () => {
    const body = {

      email: email,
      password: password

    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mateus-shaw/login", body)
      .then((response) => {
        console.log(response.data)
        goToAdminHome()

      })
      .catch((error) => {
        alert(error.data)
      })
  }





  // funçao que envia a pessoa para a proxima pagina
  const goToAdminHome = () => {
    navigate("/AdminHome")
  }
  return (
    <div>
      <h1> login </h1>
      <input placeholder="email"
        value={email}
        onChange={onChangeEmail}
      />
      <input placeholder="senha"
        value={password}
        onChange={onChangePassword}
      />
      <button onClick={goBack}>voltar </button>
      <button onClick={goLogin}>entrar</button>
    </div>
  );
}

export default LoginPage;
