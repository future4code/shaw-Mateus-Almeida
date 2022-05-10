import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Cadastro() {
  const navigate=useNavigate()
  const[ userName ,setUserName]=useState("")
  const [loginUser, setLoginUser] = useState("")
  const [senhaUser, setSenhaUser] = useState("")
  const onUserName =(event)=>{
    setUserName(event.target.value)
  }
  const onLogin = (event) => {
    setLoginUser(event.target.value)
  }
  const onSenha = (event) => {
    setSenhaUser(event.target.value)
  }
  /*  criei o metodo post para fazer a autorizaçao da pessoa se cadastrar
  passei a mesma base da url que pedia no postman 
  usei o window.localStorage para guarda o token nele 
  passei o body com input controlado para a pessoa saber digitar sua senha de cadastro 
  */
  const baseURL="https://labeddit.herokuapp.com"
const postCadastro=(event)=>{
  event.preventDefault()
  const body ={
    "username":userName ,
	"email": loginUser,
	"password": senhaUser
}
//console.log(body);

axios.post(`${baseURL}/users/signup`, body)
.then(resp =>{
  console.log(resp.data)
  window.localStorage.setItem("tokenAutorizacaoCadastro", resp.data.token)
  alert("voce foi cadastrado com sucesso!")
  
})
.catch(error =>{
  alert("error ao cadastrar")
  console.log({ error })
})
}
/* usei a tag form para falar que era um formulario
em vez de usar o onClick , usa o onSubmit para ligar ele ao metodo post
e no button fala que que o e type={`submit`} */
  return (
    <div>
      <h2> ola, bem vindo ao labeEddit</h2>
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

      <p> Ao continaur ,vocẽ concorda com o nosso contrato de usuário e nossa política de privacidade</p>
      <input type="checkbox" />
      <br></br>
      <button type={`submit`}>cadastrar</button>
      </form>
    </div>


  );
}

export default Cadastro;
