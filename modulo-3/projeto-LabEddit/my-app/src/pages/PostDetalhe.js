
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
const Paizao = styled.div`
background-color: #8539EA ;
height: 100vh;

p{
  margin-left:20%;
  color: white;
}
`
const Botao1 = styled.button`
  background-color: #9370DB; /* Green */
    border: none;
    color: black;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
   margin-left: 14%;


`
const Pt2 = styled.div`
margin-left: 20%;
button{
  background-color: #9370DB; 
    border: none;
    color: black;
    padding: 15px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
  margin-left:6%;

}

`
const Botao2 = styled.button`
  background-color: #9370DB; /* Green */
    border: none;
    color: black;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
   margin-left: 14%;
   margin-top:10%;
`



function PostDetalhe() {
  // TODOS OS ESTADOS QUE IREI USAR PARA GUARDA OS VALORES
  const [pegandoPosts, setPegandoPost] = useState([])
  const [comentarioPost, setComentario] = useState("")
  const [comentarioLista, setComentarioLista] = useState([])
  const Navigate = useNavigate()
  // FUNÇAO PARA VOLTAR PARA A HOME 
  const voltarHome = () => {
    localStorage.removeItem("token")
    Navigate("/")
  }
  // FUNAÇO DE VOLTAR A PAGINA 
  const voltarPage = () => {
    Navigate(-1)
  }

  // o useParams so se usa quando e o msm layout mais so renderiza determinadas informaçoes desse itens 
  const params = useParams()
  //console.log(params.id);// usei para ver ele retornando o id especifico

  // MINHA BASE URL QUE PEDE NA API , POSSO PASSAR ELA EM OUTRA PAGINA E SO CHAMAR SE QUISER TBM!
  const baseURL = " https://labeddit.herokuapp.com"
  const pegandoPost = () => {
    const headers = {
      headers: {
        Authorization:
          localStorage.getItem(`token`)
      }
    }
    axios.get(`${baseURL}/posts`, headers)
      .then(resp => {
        //console.log(resp.data);
        setPegandoPost(resp.data)
      })
      .catch(error => {
        alert({ error })
      })
  }
  useEffect(() => {
    pegandoPost()
    comentarios()
  }, [])

  // funçao para enviar o comentario
  //CRIEI A REQUISIÇAO , O INPUT CONTROLADO O EVENTO E PASSEI PARA O BOTAO 


  // FUNÇAO PARA FALAR QUE IREI AUTERAR O VALOR DO ESTADO
  const onComentario = (event) => {
    setComentario(event.target.value)
  }
  const onComentarioLista = (event) => {
    setComentarioLista(event.target.value)
  }
  const comentarios = (id) => {

    const headers = {
      headers: {
        Authorization:
          localStorage.getItem(`token`)
      }

    }
    axios.get(`${baseURL}/posts/${params.id}/comments`, headers)
      .then(resp => {
        setComentarioLista(resp.data)
      })
      .catch(error => {
        alert({ error })
      })
  }
  // CRIEI UMA REQUISIÇAO PARA PODER POSTAR O COMENTARIO 
  // passei body que foi o que A PESSOA PASSA DE COMENTARIO PELO INPUT CONTROLADO 
  // E TBM PASSEI O BODY COM A AUTHORIZAÇAO SENDO ELA MEU TOKEN GUARDADO NO LOCAL STORAGE 
  const postarComentario = (event) => {
    event.preventDefault()
    const body = {
      body: comentarioPost
    }
    const headers = {
      headers: {
        Authorization:
          localStorage.getItem(`token`)
      }

    }
    axios.post(`${baseURL}/posts/${params.id}/comments`, body, headers)
      .then(resp => {
        console.log((resp.data));
        alert("seu comentario foi publicado!")
      })
      .catch(error => {
        alert({ error })
      })

  }


  const botaoLike = (userVote, postId) => {
    if (userVote === 1) {
      likeEDeslikeEdelete(postId)
    } else {
      likeEDeslikeEdelete(postId, 1)
    }
  }
  const botaoDeslike = (userVote, postId) => {
    if (userVote === -1) {
      likeEDeslikeEdelete(postId)
    } else {
      likeEDeslikeEdelete(postId, -1)
    }
  }

  const likeEDeslikeEdelete = (postId, direction) => {

    const headers = {
      headers: {
        Authorization:
          localStorage.getItem(`token`)
      }
    }
    const body = {
      "direction": direction
    }
    if (direction === 1) {
      axios.post(`${baseURL}/comments/${postId}/votes`, body, headers)
        .then(resp => {
          comentarios()
          console.log(resp)

        })
        .catch(error => {
          console.log(error.response);
          alert({ error })
        })
    } else if (direction === -1) {
      axios.put(`${baseURL}/comments/${postId}/votes`, body, headers)
        .then(resp => {
          comentarios()
          console.log(resp)
        })
        .catch(error => {
          alert({ error })
        })
    } else {
      axios.delete(`${baseURL}/comments/${postId}/votes`, headers)
        .then(resp => {
          comentarios()
          console.log(resp)
        })
        .catch(error => {
          alert({ error })
        })
    }
  }


  //console.log(comentarioPost)input para criar o comentario
  // SEMPRE QUE USAR O FORM DEVE PASSAR ONSUBMIT NOP LUGAR DO ONCLICK  E NO BOTAO PASSAR TYPE ={SUBMIT}

  return (
    <Paizao >
      <Botao1 onClick={voltarHome}>lougut</Botao1>
      <Botao1 onClick={voltarPage}> voltar page </Botao1>
      <br>

      </br>
      {pegandoPosts.map((post) => {
        if (post.id === params.id) {
          return <div>
            <p><u>{post.username}</u></p>
            <p>{post.body} </p>
            <div>




            </div>

            <div>

            </div>
            <br></br>


          </div>
        }



      })}
      <form onSubmit={postarComentario}>
        <Pt2 >
          <textarea placeholder="deixe seu comentario"
            value={comentarioPost}
            onChange={onComentario}
          />
          <br></br>
          <button type={`submit`}>enviar comentario</button>
        </ Pt2>
      </form>
      <div>
        {comentarioLista.map((get) => {
          return <div>
            <li>
              <lu>{get.body}</lu>
            </li>

            <Botao2 onClick={() => botaoLike(get.userVote, get.id)}>{get.voteSum}-like</Botao2 >
            <Botao2 onClick={() => botaoDeslike(get.userVote, get.id)}>{get.voteSum}-deslike</Botao2 >

          </div>
        })}
      </div>


    </Paizao >

  );
}

export default PostDetalhe;
