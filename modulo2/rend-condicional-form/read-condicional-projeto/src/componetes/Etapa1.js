import React from "react";
import styled from "styled-components";


const Main1 = styled.div`
display: -ms-inline-grid;
margin-left: 36%;




`





export default class Etapa1 extends React.Component {

   
    render(){


        return (

            <Main1>
                <div>
                    <h3> ETAPA 1- DADOS GERAIS</h3>
                    <p>1 -qual o seu nome?</p>
                    <input></input>
                </div>
                <div>
                    <p>2 -qual a sua idade?</p>
                    <input></input>
                </div>
                <div>
                    <p>3 -qual o seu email?</p>
                    <input></input>
                </div>
                <div>
                    <p>4 -qual a sua escolaridade?</p>
                    <select>
                        <option>ensino medio imcompleto</option>
                        <option> ensino medio completo</option>
                        <option>ensino  superior imcompleto</option>
                        <option>ensino  superior completo</option>
                    </select>
                </div>









            </Main1>



        )
    
}
}