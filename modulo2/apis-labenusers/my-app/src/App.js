import React from "react";
import axios from "axios"




/*
const headers = {
  headers: {
    Authorization: "mateus-almeida-shaw"
  }
};
const criacaoUser =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

*/
export default class App extends React.Component {
  state = {
     body: [],
     nameUser: "",
     userEmail: ""
  }
   
   componentDidMount() {
    this.receberUsuario()
   }



   receberUsuario = () =>{
    const request = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', /*body,*/ {
      headers: {
        "content-type": 'application.json',
        "authorization": 'mateus-almeida-shaw'
      }
    
    })
    request.then((Response) => {
      console.log(Response.data)
    }).catch((error) => {
      console.log(error.message)
    })
    
   }
 
 creatUser =() =>{
   const body= {
     name: this.state.nameUser,
     email: this.state.userEmail
   }
 }
 



  render() {
    return (<div>
      <div>
        <button>trocar de tela</button>
        <br></br>
        <input placeholder="nome"></input>
        <input placeholder="email"></input>
        <button>enviar</button>


      </div>


      {/*<div>
  
  <h3> procurar usuario</h3>
  <input></input>
  <button>salvar edição</button>
</div>
    */}



    </div>
    );
  }
}

