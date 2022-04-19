import React from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"
import react, { useState } from 'react'
import IconeComContador from './components/IconeComContador/IconeComContador';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  const [curtido, setCurtido] = useState(false)
  const [NumeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useState()           // queria usar um []
  const [numeroComentario, setNumeroComentario] = useState(0)
  const [comentarios, setcomentarios] = useState()         // queria usar um []
  
  onClickCurtida = () => {
  if(setCurtido = false ){
    return (IconeComContador -1)
  } else 
  return ( IconeComContador +1)
  }



  return (
    <AppContainer>
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
    </AppContainer>
  );
}


export default App;
