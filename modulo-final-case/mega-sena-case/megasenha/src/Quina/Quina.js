import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDiaDeSorte, goToHome, goTolotoFacil, goToLotoMania, goToQuina, goToTimeMania } from "../routes/Cordinator";
import { DivOndeIraOsNumero, DivPai, LetraDeAviso, LogoStyled, MegaLetra, NumeroCads, NumeroConcurso, NumeroD, Numeros, NumeroSorteados, PosicionandoBotao, SelecionandoJogo } from "./styled";



const Quina = () => {

    const navigate = useNavigate()
    // --------------------PARTE-RESPOSAVEL-PELA-TROCA-DE-PAGE-------------
    const [pagina, setPagina] = useState("")
   //console.log(pagina);
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

       //---------------------REQUISIÇOES-------------------------------------------------------------
    // -------------- axios-PARA-PEGAR-OS-NOMES-DO-JOGOS---------------------------------------------

    const [loterias, setLoterias] = useState([])
    const [id, setId] = useState([])
    useEffect(() => {
        axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias')
            .then((res) => {
                setLoterias(res.data[1].nome)
                setId(res.data[1].id)
                //console.log(res.data);


            })
            .catch((err) => {
                console.log(err);
            })
      
    }, [])
    //--------------------------------------------------------------------------------
    //      console.log(loterias);
    //      console.log(id);

    //----------------------------REQUISIÇOES-------------------------------------------------------
    // -------------------ME-RETORNA-O-CONCURSO-E-ID-LOTERIA----------------------------------------
    const [concursoId, setConcursoId] = useState("")
    const [idDoConcurso, setidDoConcurso] = useState([])
    useEffect(() => {
        axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos')
            .then((res) => {
               // console.log(res.data);
                setConcursoId(res.data[1].concursoId)
                setidDoConcurso(res.data[1].loteriaId)
               

            })
            .catch((err) => {
                console.log(err);
            })
      
    }, [])
    //----------------------------------------------------------------------------------   
       // console.log(idDoConcurso);
    
    
  //  console.log(concursoId);



    const [numerosSorteios, setNumerosSorteios] = useState()
    useEffect(() => {
    axios.get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${concursoId}`)
        .then((res) => {
            setNumerosSorteios(res.data.numeros)
            //console.log(res.data);

        })
        .catch((err) => {
            console.log(err);
        })
       
    }, [concursoId])
  //console.log(numerosSorteios);


    return (
        < DivPai>

            <div>
                <PosicionandoBotao>
                    <select id="selecionar" onChange={selecionadoPage}>
                    <option value="Quina">{loterias}</option>
                    <option value="LotoMania"> lotoMania</option>
                    <option value="LotoFacil"> LotoFacil</option>
                        <option value="MegaSena" > MegaSena</option>
                       
                        
                        
                        <option value="TimeMania"> TImeMania</option>
                        <option value="DiaDeSorte" > DiaDeSorte</option>

                    </select>
                </PosicionandoBotao>


            </div>
            <LogoStyled />
            <MegaLetra>{loterias}</MegaLetra>
            <NumeroConcurso>Concurso Nº {concursoId}</NumeroConcurso>
                 

    
                  
            <DivOndeIraOsNumero >
                <NumeroCads>
                {numerosSorteios ?.map((numero)=>{
                    return(
                        <NumeroD>{numero}</NumeroD>
                    )
                })}
                </NumeroCads>
                    
                 
                <LetraDeAviso>
                    Este sorteio é meramente ilustrativo
                    e não possui nenhuma ligação com a CAIXA.
                </LetraDeAviso>
            </DivOndeIraOsNumero>
        </ DivPai>
    )
}
export default Quina







