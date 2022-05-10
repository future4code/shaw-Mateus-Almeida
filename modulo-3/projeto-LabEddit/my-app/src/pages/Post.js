import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";




function Post() {
  const Navigate = useNavigate()
  const voltarHome = () => {
    localStorage.removeItem("tokenAutorizacao")
    Navigate("/")
  }
  // criei o estado e suas funçoes para deixar eles como input controlado 
  const [criarPost, setCriarPost] = useState("")
  const [criarTitulo, setCriarTitulo] = useState("")
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
          localStorage.getItem(`tokenAutorizacao`)
      }
    }

    console.log(body);// chamado para ver se o body estava certo 
    axios.post(`${baseURL}/posts`, body, headers)
      .then(resp => {
        console.log(resp.data);
        alert("post criado com sucesso")
      })
      .catch(error => {
        alert({ error })
      })
  }
  // criei um form e suas funçoes para poder enviar as atualizaçoes 
  return (
    <div>
      <form onSubmit={criandoPost}>
        <input placeholder="digite seu titulo"
          value={criarTitulo}
          onChange={onTitulo}
        />
        <textarea placeholder="escreva seu texto"
          value={criarPost}
          onChange={onPost}
        />
        <button type={`submit`}>  postar</button>
        <br></br>
        <button onClick={voltarHome} >lougut</button>
      </form>
    </div>

  );
}

export default Post;