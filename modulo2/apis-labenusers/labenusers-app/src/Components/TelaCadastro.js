
import React from "react";
import axios from "axios"
/*  usei novamente o componente de classe para poder  usar o state*/ 
/*  criei um state com "nome, email " vazio para criar uma funçao que alteraria isso*/ 
 export  default class  TelaCadastro extends React.Component{
     state ={
         nome: "",

         email:""
     }
     /*  a funçao "handNome", usei ela para falar que ela alteraria o "state " nome, e falei que o evento seria ela colocando o valor"*/ 
     handleNome =(event) =>{
         this.setState({nome: event.target.value})
     }
     /* a funçao "handemail" foi com o msm proposito da funçao do nome!*/ 
     handlemail =(event) =>{
        this.setState({email: event.target.value})
    }
    /* usei o cadastro para colocar a " url" do labenusers e coloquei que o nome 
    seria o que o usuario digitasse na funçao que alterasse o nome!
    por isso usei o "nome: this.state.nome"*/ 
    fazerCadastro =()=>{
       const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
       const body={
           name:this.state.nome ,
           email:this.state.email

       }
       axios.post(url , body , {
        headers:{
            authorization:"mateus-almeida-shaw"
        }
       })
       /* "then e uma propiedade do axios que fala o que fizer se der certo , o (res) e usado como boa pratica"*/ 
       .then((res) =>{
           alert("usuario  cadastrado com sucesso")
           this.setState({nome:"", email:""})
       })
       /* "catch e uma propiedade do axios que fala o que fizer se der errado ", usaase o (err) como boa pratica*/ 
       .catch((err) =>{
           alert(err.response.data.message)
            
       })
    }
    /*  no render fiz uma div e dentro da div criei a pagina 
    o button  eu fiz um "onclicl" e falei para ele chamar  FUNÇAO DE IRPARAALISTA
    USEI O PLACEHOLDER PARA DEFINI O NOME DENTRO DO INPUT
    E FALEI QUE O ONCHANGE SERIA A FUNÇAO DE ALTERAR O NOME DO STATE
    FIZ A MSM COISA COM O EMAIL EM BAIXO*/ 
     render(){
         return( 
             <div> 
             <button onClick={this.props.irParaLista}>ir para lista de usuarios</button>
              <h2>cadastro</h2>
              <input placeholder={"nome"}
              value={this.state.nome}
              onChange={this.handleNome}
              />
              <input placeholder={"email"}
              value={this.state.email}
              onChange={this.handlemail}
              />
              <button onClick={this.fazerCadastro}>cadastrar</button>
                 </div>
         )
     }
 }