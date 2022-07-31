import React from "react";
import { useNavigate } from "react-router-dom";
import { goToQuina } from "../routes/Cordinator";
import { DivPai, Numeros, NumeroSorteados, SelecionandoJogo } from "./styled";



 const Megasena =() =>{
    const navigate = useNavigate()
    return (
        <DivPai>
            
            <SelecionandoJogo>
            <select>
                <option >Mega-sena</option>
                <option >Quina</option>
                <option>LotoFacil</option>
                <option>LotoMania</option>
                <option>TImeMania</option>
                <option>DiaDeSorte</option>
                
            </select>
            </SelecionandoJogo>

            <NumeroSorteados>
               <Numeros>1</Numeros>
             
               <Numeros>2</Numeros>

               <Numeros>3</Numeros>

               <Numeros>4</Numeros>

               <Numeros>5</Numeros>

               <Numeros>6</Numeros>

            </NumeroSorteados>


        </DivPai>
    )
}

export default Megasena