import React from "react";

function Cadastro() {
    return (
      <div>
        <h2> ola, bem vindo ao labeEddit</h2>
        <input placeholder="Nome do Usuario"
        type="text"/>
        <input placeholder="E-mail"
        type="text"/>
        <input placeholder="Senha"
        type="password"/>
        <br></br>
        {/*  tem que ter um termo do usuario aceitar concordar com os termos de uso*/}
        <button onClick={""}>cadastrar</button>
      </div>
     
    
    );
  }
  
  export default Cadastro;
  