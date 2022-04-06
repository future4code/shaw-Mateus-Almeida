import React from "react"
import TelaCadastro from "./Components/TelaCadastro"
import TelaListaUsuario from "./Components/TelaListaUsuario"

/*  LINK SOBRE ESSE CODIGO CRIADO 
:"https://labenu.notion.site/Aula-async-await-cb8829fe15f34713a00ecf1cde883107"*/ 

/*  ENTENDER MELHOR : PROPS, STATE,E QUANDO USAR O THIS E ENTENDER MELHOR A FORMA QYUE SE COMPORTA O REACT */

/*  APAGUEI TODOS OS ITENS QUE VIERAM NO REACT EXCETO O  APP E O INDEX.JS DENTRO DA PASTA SRC
E NO INDEX TIVE APAAGR ALGUNS INTENS QUE ESTAVAM SENDO INPORTADOS */



/*  usei o class para poder usar estados !*/ 
export default class App extends React.Component {

  state = {
    telaAtual: "cadastro"
  }
  /* criei uma funçao chamada "escolhetela" w usei o "swittch casa para alterar as paginas!*/ 
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro}/>
      default:
        return <div> error! pagina nao encontrada!</div>

    }
  }
  /*  usei a "irparacadastro" e falei que o estado dele teria que ser "cadastro ou lista para poder alterar*/ 
  irParaCadastro = ()=>{
this.setState({telaAtual: "cadastro"})  }
  irParaLista = ()=>{
    this.setState({telaAtual: "lista"}) 
  }
/*  usei somente  {this.escolhetela} para poder chamar somente na tela o que foi chamada pelo switch case la em cima */ 
  render() {
    return (
      <div>
        {this.escolheTela()}

      </div>
    )
  }
}