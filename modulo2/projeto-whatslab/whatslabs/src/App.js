
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';
import styled from "styled-components";
import styledComponents from 'styled-components';
   
const Paizao = styled.div`
display: flex;
align-itens: center;
justify-content: center;
box-sizing:border-box;
text-align:center;

`





const MainDiv = styled.div`
display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:flex-start;
  margin:0px;
  width: 600px;
  height:100vh;
  border: 6px solid black;
 


`
// set state e o que eu crio ,setstate e para auterar o estado
const Borda = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
width: 580px;
height: 100vh;
padding: 20px;

`
/*
const Enviarr = styled.div`
display: flex;
flex-direction: row;
width; 100%;
`
*/
const Mensagen = styledComponents.div`

display: flex;
flex-direction: column;
justify-content:center;
margin-bottom: 28px;



`
 const  Nomeu = styledComponents.input`
 width: 12%;
  border: 4%;
  border: 3px solid black;
  
  margin-bottom: -16px;
  font-weight:bold;
 `
const Mens = styledComponents.input`
width: 60%;
    border: 20%;
    border: 3px solid black;
    left:  0px;
    margin-bottom: -16px;
   
  
`
const Enviarr = styledComponents.button`
border: 8%;
border: 3px solid black;
left:  0px;
margin-bottom: -16px;

`
const BoxInput = styledComponents.div`
display:flex;
margin:0px;
backgroundcolor: rgb(153, 2, 2);

`


/*function App(props) { */
class App extends React.Component {
 state ={
    controleMensagem:"",
    controleNomeu:""

 }
 onChangeNomeu=(event)=>{
   this.setState({controleNomeu: event.target.value})
   console.log(this.state.controleNomeu)
 }
   onChangeMensagem =(event)=>{
    this.setState({controleMensagem: event.target.value})
    console.log(this.state.controleMensagem)
  
  
  } 
  onClikButton =()=>{
    this.setState({controleNomeu:""})
    this.setState({controleMensagem:""})
  }

 



render(){






  return(
    <Paizao>
    <MainDiv>
       
  <Borda >
  <Mensagen> DSFASDFADSFASD</Mensagen>
  <BoxInput>
  <Nomeu onChange={this.onChangeNomeu}
  value={this.state.controleNomeu}  
  placeholder='nome'/>
  <Mens onChange={this.onChangeMensagem}
  value={this.state.controleMensagem}  placeholder='mensagem'/>
  <Enviarr  onClick={this.onClikButton} type='submit'>enviar </Enviarr>
  </BoxInput>
  </Borda>
  </MainDiv>
  </Paizao>
  )
  }
}



export default App;
