import React from "react";
import styled from "styled-components";




const Main3 = styled.div`
display: -ms-inline-grid;
margin-left: 36%;
`


export default class Etapa3 extends React.Component {

    render() {

        return (

            <Main3 >

                <h3> ETAPA2 -3 INFORMAÇOES GERAIS DE ENSINO</h3>
                <div>
                    <p>5 - POR QUE VOCẼ NÃO TERMINOU UM CURSO DE GRADUAÇÃO?</p>
                    <input></input>
                </div>
                <div>
                    <p>6 - VOCE FEZ ALGUM CURSO COMPLEMENTAR?</p>
                    <select>
                        <option> nenhum</option>
                        <option>curso tecnico</option>
                        <option>curso de ingles</option>


                    </select>
                </div>





            </Main3 >



        )
    }

}