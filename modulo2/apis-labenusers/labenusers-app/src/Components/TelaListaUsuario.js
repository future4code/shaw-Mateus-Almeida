
import React from "react";
import axios from "axios";
import styled from "styled-components"

 /* CRIEI E IMPORTEI O STYLED COMPONENTE PARA USAR COMO OS ITENS IRIAM APARECER NA TELA*/ 
const CardUsuario = styled.div`
 border: 1px solid black;
 padding:  10px;
 margin: 10px;
 width: 300PX;
 justify-content: space-between;
 display: flex;
 `
/* USEI NOVAMENTE O CLASS PARA PODER TER O STATE*/  

export default class TelaListaUsuario extends React.Component {
    state = {
        usuarios: []
    }
    /* USEI O COMPONENTEDIDMOUNT PARA PEGAR O USUARIO E GURDA" CONFIMAR ESSA INFO"*/ 
    componentDidMount() {
        this.pegarUsuario()
    }
/* CRIEI UMA FUNÇAO PARA "PEGARUSUARIO" E COLOQUEI AS COISAS PEDIDAS NO API , COMO "URL, HEADERS,AUTORIZATION
E USEI NOVAMENTE O 
THEN PARA SE DER CERTO , E LENBRA QUE THEN E UMA FUNCAO DO AXIOS
E USEI O CATCH NOVAMENTE SE DER ERRADO, LENBRANDO QUE ELE E UMA FUNÇAO DO AXIOS*/ 
    pegarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                authorization: "mateus-almeida-shaw"
            }
            /* USEI O "USUARIO.RES.DATA" PARA ACESSAR E MOSTRAR A MSG DE ERRO MANDANDA PELA API*/ 
        }).then((res) => {
            this.setState({ usuarios: res.data })
        })
            .catch((err) => {
                alert("ocorreu um erro, tente novamente!")

            })



    }
    /* CRIAADA UMA FUNÇAO DE DELETAR O USUARIO 
    COLOQUEI O URL E USEI UM ``CRASE ! PARA PODER CHAMAAR O ID DO QUAL IRIA DELETAR
    PASSEI O URL NOVAMENTE E O AUTORIZATION , IGUAL PEDIA A API*/  
    deletarUsuario =(id) =>{
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
axios.delete(url,{
    headers:{
        authorization: "mateus-almeida-shaw"
    }
})
.then((res) =>{
alert("usuario deletado com sucesso!")
this.pegarUsuario()
})
.catch((err) =>{
    console.log(err.response.data)
})
    }
/*  CRIEI UMA CONST CHAMADA "LISTAUSUARIOS"  E FALEI QUE ELA SERIA . O STATE.USUARIOS.MAP (USER)
CHAMEI O CARDUSUARIO COLOQUEI UMA KEY COMO O PROPIO ID DELE
CRIEI UM BOTAO  E FALEI QUE ELE SERIA UAM FUNÇAO E FALEI QUE ELE SERIA A MSM FUNÇAO DE LA EM CPAAR DELETAR 
O USUARIO  E PASSEI (USER,ID) PARA PODER DELETAR O ITEM CORRETO */ 

    render() {
        // console.log(this.state.usuarios)
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
            <CardUsuario key={user.id}>
                {user.name}
                <button onClick={()=> this.deletarUsuario(user.id)}>x</button>
                </CardUsuario>
            )
        })
        return (
            <div>
                <button onClick={this.props.irParaCadastro}> ir para cadastro</button>
                <h2>lista de usuarios</h2>
                {listaUsuarios}
            </div>
        )
    }
}