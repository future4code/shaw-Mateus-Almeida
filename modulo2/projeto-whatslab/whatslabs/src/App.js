
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';
import styled from "styled-components";

const MainDiv = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;



`
const Borda = styled.div`
width: 600px;
height: 98vh;
border: 4px solid black;
background-color: rgba(104, 184, 157, 0.568);
align-items:  end;
display: flex;

`
/*
const Enviarr = styled.div`
display: flex;
flex-direction: row;
width; 100%;
`
*/

function App(props) {
 
   
  return(
    <MainDiv>
  <Borda >
   
    
 
  <input className="nome"/>
  <input className="a"/>
  <button className="b">enviar </button>




  </Borda>

  </MainDiv>

  )
}

export default App;
