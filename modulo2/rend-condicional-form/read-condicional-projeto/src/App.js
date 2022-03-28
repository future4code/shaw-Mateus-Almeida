//import logo from './logo.svg';
//import './App.css';
import styled from "styled-components";
import React from "react";
import Agradecimento from "./componetes/Agradecimento";
import Etapa1 from "./componetes/Etapa1";
import Etapa2 from "./componetes/Etapa2";
import Etapa3 from "./componetes/Etapa3";
const BotaoMain = styled.div`
 display: -ms-inline-grid;
margin-left: 40%;
margin-top: 4%;
 
 `
 class App extends React.Component {

  state = {
    pagina: 1

  }
  irParaProximaEtapa =()=>{
    this.setState({pagina :this.state.pagina +1})
  }
  render() {

    let paginaAtual;
    switch (this.state.pagina) {
      case 1:
        paginaAtual = <Etapa1 />;
        break;
      case 2:
        paginaAtual = <Etapa2 />;
        break;
      case 3:
        paginaAtual = <Etapa3 />;
        break;
      case 4:
        paginaAtual = <Agradecimento />;
        break;


      default:
        paginaAtual = <Agradecimento />;

    }




    return (
      <div>
        {paginaAtual}
        <BotaoMain>
          <button onClick={this.irParaProximaEtapa}>proxima etapa</button>

        </BotaoMain>

      </div>
    );
  }
}
export default App;
