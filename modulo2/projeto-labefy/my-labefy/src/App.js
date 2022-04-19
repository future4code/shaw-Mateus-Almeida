import react from 'react';
//import Home from "./components/Home"
import axios from 'axios';
import styled from 'styled-components';








export default class app extends react.Component {
  state = {
    playlist: "",
    userPlaylist:[
    {nomeMusica :"",
  },
    {nomeArtista : "",
  },
    {urlMusica: "" 
  }]


  }
  componentDidMount() {
    this.criarP();
  }
  adcAPlaylist = (event) => {
    this.setState({
      playlist: event.target.value

    })
  }

  criarP = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.playlist
    }
    axios
      .post(url, body, {
        headers: {
          Authorization: "mateus-almeida-shaw"
        }
      }).then((res) => console.log(res))
      .catch((err) => console.log(err.response));

  }
// descobri como pegar o id para poder add a musica a a playslist
/*
addMusicaAPlaylist =() =>{
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
  const body = {

  }
  
   axios
   .post(url, body,{
     headers:{
       Authorization:"mateus-almeida-shaw"
     }
     
   }).then((res) => console.log(res))
   .catch((err) => console.log(err.response));
  }

  */



  render() {
    return (
      <div>
        <h1> ♫♫♫ add  musicas a sua playlist! ♫♫♫ </h1>
        <input placeholder='digite o nome da playlist '
          value={this.state.playlist}
          onChange={this.adcAPlaylist}
        ></input>
        <br></br>
        <button> nome playlist</button>
        <br></br>
        {/*<h2>{this.state.playlist}</h2>*/}
        <input
          placeholder="nome da musica"
        ></input>
        <br></br>
        <input
          placeholder='artista'
        ></input>
        <br></br>
        <input
          placeholder="coloque a url da musica"
        ></input>
        <br></br>

        <button >add playlist</button>
        
      </div>
    )
  }
}







/*  componentDidMount(){
    this.criarplaylist();
  }
  criarplaylist = ()=>{
  const url= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
  const body={
    name: "rock",
  }

  
  axios.post(url,body{
    Headers:{
      Authorization:"mateus-almeida-shaw"
    }
    
  })
  .then((res) => console.log(res.data.activty))
  .catch((err) => console.log(err.response))
  }
  */


















/*
export default class app extends react.Component {
 
  state = {
    nomeMUsica: "",
    urlMusica :"",    
    suaPlaylist:[]

  }
   adcMusica = (event) =>{
     this.setState({nomeMUsica: event.target.value})
   }
   adcUrl =(event)=>{
     this.setState({urlMusica: event.target.value})
   }
   botaoAdd =(musica) =>{
    const novaPlaylist = [...this.state.suaPlaylist,musica ]
    this.setState({suaPlaylist: novaPlaylist})
   }
 
  render() {
    return (
     
     <div>
        <div>
          <h2>bem vindo a labefy !</h2>
          <p> escreva o nome os dados para adicionar a sua playlist</p>
          <input placeholder="digite o nome da musica!"
           value={this.state.nomeMUsica}
           onChange={this.adcMusica}
           ></input>
          <input placeholder="digite a url da musica!"
          value={this.state.urlMusica}
          onChange={this.adcUrl}
          
          ></input>
          <button onClick={()=> this.botaoAdd(this.state.nomeMUsica )}>add a musica!</button>
          
        </div>
          <div>
            
            <h2>suas musicas!</h2>
            <li>{this.state.suaPlaylist}</li>
            <li>{this.state.suaPlaylist}</li>
            
         </div>
      
      </div>
      
    )
  }
}


*/



