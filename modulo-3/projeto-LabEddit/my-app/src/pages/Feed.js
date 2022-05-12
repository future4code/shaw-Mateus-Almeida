import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";




function Feed() {

  const Navigate = useNavigate()
  const voltarHome = () => {
    localStorage.removeItem("token")
    Navigate("/")
  }
  // criei o estado e suas funçoes para deixar eles como input controlado 
  const [criarPost, setCriarPost] = useState("")
  const [criarTitulo, setCriarTitulo] = useState("")
  const [pegandoPosts, setPegandoPost] = useState([])
  const onPost = (event) => {
    setCriarPost(event.target.value)
  }
  const onTitulo = (event) => {
    setCriarTitulo(event.target.value)
  }
  //  criei a funçao para poder criar o post 
  // pasei o body e o header 
  // e tanbem chamei o  meu token que estava no local storage
  const baseURL = " https://labeddit.herokuapp.com"

  const criandoPost = (event) => {
    event.preventDefault()
    const body = {
      "title": criarTitulo,
      "body": criarPost
    }
    const headers = {
      headers: {
        Authorization:
          localStorage.getItem(`token`)
      }
    }

    //console.log(body);// chamado para ver se o body estava certo 
    axios.post(`${baseURL}/posts`, body, headers)
      .then(resp => {
        console.log(resp.data);
        alert("post criado com sucesso")
      })
      .catch(error => {
        alert({ error })
      })
  }
  // tentar fazer um funçao que puxe a api que ira me retorna os post agora !
  // essa api usa somente a autorizaçao como requerimento , estou tentando pegar a get post

  const pegandoPost = () => {
    const headers = {
      headers: {
        Authorization:
          localStorage.getItem(`token`)
      }
    }
    axios.get(`${baseURL}/posts`, headers)
      .then(resp => {
        // console.log(resp.data);
        setPegandoPost(resp.data)
      })
      .catch(error => {
        alert({ error })
      })
  }
  useEffect(() => {
    pegandoPost()
  }, [])
  const irParaDetalhes = (id) => {
    Navigate(`/post/${id}`)
  }





  // criei um form e suas funçoes para poder enviar as atualizaçoes 
  // fazer agora os botoes para like e para ir para o post funcionar 
  // quando passo um argumento para a funçao ele precisa ser uma array function
  // form sempre se fecha depois do botao que finaliza a requisiçao

const botaoLike =(userVote,postId)=>{
  if (userVote === 1) {
    likeEDeslikeEdelete(postId)
  }else {
    likeEDeslikeEdelete(postId,1)
  }
}
const botaoDeslike =(userVote,postId)=>{
  if (userVote === -1) {
    likeEDeslikeEdelete(postId)
  }else {
    likeEDeslikeEdelete(postId,-1)
  }
}

   const likeEDeslikeEdelete =(postId,direction)=> {
    const headers = {
      headers: {
        Authorization:
          localStorage.getItem(`token`)
      }
    }
    const body={
      "direction":direction
    }
    if (direction === 1) {
      axios.post(`${baseURL}/posts/${postId}/votes`,body ,headers)
      .then(resp => {
        pegandoPost()
        console.log(resp)
      })
      .catch(error => {
        alert({ error })
      })
    }else if (direction === -1){
      axios.put(`${baseURL}/posts/${postId}/votes`,body ,headers)
      .then(resp => {
        pegandoPost()
        console.log(resp)
      })
      .catch(error => {
        alert({ error })
      })
    }else {
      axios.delete(`${baseURL}/posts/${postId}/votes`,headers)
      .then(resp => {
        pegandoPost()
        console.log(resp)
      })
      .catch(error => {
        alert({ error })
      })
    }
    


   }
  return (
    <div>
      <form onSubmit={criandoPost} >
        <input placeholder="digite seu titulo"
          value={criarTitulo}
          onChange={onTitulo}
        />
        <textarea placeholder="escreva seu texto"
          value={criarPost}
          onChange={onPost}
        />
        <button type={`submit`}>  postar</button>
      </form>
      <br></br>
      <button onClick={voltarHome} >lougut</button>
      <div>
        {pegandoPosts.map((post) => {
          return <div>
            <p>{post.username}</p>
            <p>{post.body} </p>
            <div>
              <button onClick={()=>botaoLike(post.userVote,post.id)}>like</button>
              <button onClick={()=>botaoDeslike(post.userVote,post.id)}>deslike</button>
            {post.voteSum}
            </div>
            <div>
              <button onClick={() => irParaDetalhes(post.id)}>{post.commentCount}ver post</button>
            </div>
            <br></br>


          </div>


        })}
      </div>

    </div>

  );
}

export default Feed;