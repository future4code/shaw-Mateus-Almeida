
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PostDetalhe() {
  // TODOS OS ESTADOS QUE IREI USAR PARA GUARDA OS VALORES
  const [pegandoPosts, setPegandoPost] = useState([])
  const [comentarioPost, setComentario] = useState("")
  const[comentarioLista ,setComentarioLista]=useState([])
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
  const onComentarioLista =(event)=>{
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
const postarComentario =(event)=> {
  event.preventDefault()
const body ={
  body:comentarioPost
}
const headers = {
  headers: {
    Authorization:
      localStorage.getItem(`token`)
  }

}
axios.post(`${baseURL}/posts/${params.id}/comments`, body,headers)
  .then(resp => {
   console.log((resp.data));
   alert("seu comentario foi publicado!")
  })
  .catch(error => {
    alert({ error })
  })

}

  //console.log(comentarioPost)input para criar o comentario
  // SEMPRE QUE USAR O FORM DEVE PASSAR ONSUBMIT NOP LUGAR DO ONCLICK  E NO BOTAO PASSAR TYPE ={SUBMIT}

  return (
    <div>
      <button onClick={voltarHome}>lougut</button>
      <button onClick={voltarPage}> voltar page </button>
      <br>
      </br>
      <form onSubmit={postarComentario}>
                <div >
                  <textarea placeholder="deixe seu comentario"
                    value={comentarioPost}
                    onChange={onComentario}
                  />
                  <button type={`submit`}>enviar comentario</button>
                </div>
              </form>
            <div>
              {comentarioLista.map((get)=>{
                return<div>
                 <li>
                   <lu>{get.body}</lu>
                   </li>
                 </div>
              })}
            </div>

      {pegandoPosts.map((post) => {
        if (post.id === params.id) {
          return <div>
            <p>{post.username}</p>
            <p>{post.body} </p>
            <div>
              
              <button>{post.userVote}like</button>
              <button>{post.voteSum}deslike</button>

            </div>
            
            <div>

            </div>
            <br></br>


          </div>
        }



      })}
    </div>

  );
}

export default PostDetalhe;
