import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDiaDeSorte, goToHome, goTolotoFacil, goToLotoMania, goToQuina, goToTimeMania } from "../routes/Cordinator";
import { DivOndeIraOsNumero, DivPai, LetraDeAviso, LogoStyled, MegaLetra, NumeroConcurso, Numeros, NumeroSorteados, PosicionandoBotao, SelecionandoJogo } from "./styled";



const DiaDeSorte = () => {

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
                        <option value="DiaDeSorte" > DiaDeSorte</option>

                        <option value="MegaSena" > Mega-sena</option>
                        <option value="Quina"> Quina</option>
                        <option value="LotoFacil"> LotoFacil</option>
                        <option value="LotoMania"> LotoMania</option>
                        <option value="TimeMania"> TImeMania</option>

                    </select>
                </PosicionandoBotao>

            </div>
            <LogoStyled />
            <MegaLetra>DiaDeSorte</MegaLetra>
            <NumeroConcurso>Concurso Nº{}</NumeroConcurso>
            <DivOndeIraOsNumero >
            <LetraDeAviso>
                Este sorteio é meramente ilustrativo
                e não possui nenhuma ligação com a CAIXA.
            </LetraDeAviso>
            </DivOndeIraOsNumero>
        </ DivPai>
    )
}
export default DiaDeSorte



