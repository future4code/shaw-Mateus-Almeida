import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
const Paizao = styled.div`
background-color:#8539EA;
`
const Post = styled.div`
display:center;
margin-left:20%;

height: 91vh;
button{
  margin-left: 26%;

  background-color: #9370DB; /* Green */
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin-left: 12%;
  
}
`
const Main = styled.div`
margin-left:2%;
margin-top:-160%;

button{
 
    background-color: #9370DB; /* Green */
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left: 12%;

}
p{
  margin-left:8%;
  color: white;
}

`
const Button2 = styled.div`  
margin-left:18%;
margin-top: 2%;



`
const BotaoVoltar = styled.button`
background-color: #9370DB; /* Green */
    border: none;
    color: black;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin-left: 34%;
    
    
`




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
      axios.post(`${baseURL}/posts/${postId}/votes`, body, headers)
        .then(resp => {
          pegandoPost()
          console.log(resp)
        })
        .catch(error => {
          alert({ error })
        })
    } else if (direction === -1) {
      axios.put(`${baseURL}/posts/${postId}/votes`, body, headers)
        .then(resp => {
          pegandoPost()
          console.log(resp)
        })
        .catch(error => {
          alert({ error })
        })
    } else {
      axios.delete(`${baseURL}/posts/${postId}/votes`, headers)
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
    <Paizao >
      <div>
        
        <Post>
          <form onSubmit={criandoPost} >
            <input placeholder="digite seu titulo"
              value={criarTitulo}
              onChange={onTitulo}
            />
            <textarea placeholder="escreva seu texto"
              value={criarPost}
              onChange={onPost}
            />
            <br></br>
            <button type={`submit`}>  postar</button>
          </form>
        </Post>

        <Main>
          {pegandoPosts.map((post) => {
            return <div>
              <p><u>{post.username}</u></p>
              <p>{post.body} </p>
              <div>
                <button onClick={() => botaoLike(post.userVote, post.id)}><strong>- like</strong></button>
                <button onClick={() => botaoDeslike(post.userVote, post.id)}><strong>{post.commentCount} - deslike</strong></button>

              </div>
              <Button2>
                <button onClick={() => irParaDetalhes(post.id)}><strong>{post.commentCount}ver post</strong></button>
              </Button2>
              <br></br>


            </div>


          })}
        </Main>
        <br></br>
    

        <BotaoVoltar onClick={voltarHome} >lougut</BotaoVoltar>
        
      </div>
    </Paizao >

  );
}

export default Feed;