






import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDiaDeSorte, goToHome, goTolotoFacil, goToLotoMania, goToQuina, goToTimeMania } from "../routes/Cordinator";
import { DivPai, LogoStyled, MegaLetra, Numeros, NumeroSorteados, PosicionandoBotao, SelecionandoJogo } from "./styled";



const TimeMania = () => {

    const navigate = useNavigate()

    // --------------------PARTE-RESPOSAVEL-PELA-TROCA-DE-PAGE-------------
    const [pagina, setPagina] = useState("")
    console.log(pagina);
    const selecionadoPage = (event) => {
        setPagina(event.target.value)
    }

    useEffect(() => {
        switch (pagina) {
            case "MegaSena":
                goToHome(navigate);
                break;
            case "Quina":
                goToQuina(navigate);
                break;
            case "LotoFacil":
                goTolotoFacil(navigate);
                break;
            case "LotoMania":
                goToLotoMania(navigate);
                break;
            case "TimeMania":
                goToTimeMania(navigate);
                break;
            case "DiaDeSorte":
                goToDiaDeSorte(navigate);
                break;
            default:
        }
    }, [pagina])

    return (
        < DivPai>

            <div>
                <PosicionandoBotao>
                    <select id="selecionar" onChange={selecionadoPage}>

                        <option value="TimeMania"> TimeMania</option>
                        <option value="Quina" > Quina</option>
                        <option value="MegaSenha" > Mega-sena</option>

                        <option value="LotoFacil"> LotoFacil</option>
                        <option value="LotoMania"> LotoMania</option>
                        <option value="DiaDeSorte" > DiaDeSorte</option>

                    </select>
                </PosicionandoBotao>
            </div>
            <LogoStyled />
            <MegaLetra>TimeMania</MegaLetra>
        </ DivPai>
    )
}
export default TimeMania



