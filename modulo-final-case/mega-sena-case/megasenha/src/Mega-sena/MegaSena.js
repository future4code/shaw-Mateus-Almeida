import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { goToDiaDeSorte, goToHome, goTolotoFacil, goToLotoMania, goToQuina, goToTimeMania } from "../routes/Cordinator";
import { DivOndeIraOsNumero, DivPai, LetraDeAviso, LogoStyled, MegaLetra, NumeroConcurso, Numeros, NumeroSorteados, PosicionandoBotao, SelecionandoJogo } from "./styled";



const Megasena = () => {
    // --USAR PARA CHAMAR O NOME DO JOGO 

    const [nameSorteio, setNameSorteio] = useState({})
    const navigate = useNavigate()
    // --------------------PArte-RESPOSAVEL-PELA-TROCA-DE-PAGE-------------
    const [pagina, setPagina] = useState("")
   // console.log(pagina);
    const selecionadoPage = (event) => {
        setPagina(event.target.value)
        event.preventDefault()
    }



    useEffect(() => {
        switch (pagina) {
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
    useEffect(() => {
        axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias')
            .then((res) => {
                setLoterias(res.data)
                //console.log(res.data);


            })
            .catch((err) => {
                console.log(err);
            })
        return loterias
    }, [])
          console.log(loterias);

    //----------------------------REQUISIÇOES-------------------------------------------------------
    // -------------------ME-RETORNA-O-CONCURSO-E-ID-LOTERIA----------------------------------------
    const [concurso, setConcurso] = useState([])

    useEffect(() => {
        axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos')
            .then((res) => {
                setConcurso(res.data)
                //console.log(res.data);

            })
            .catch((err) => {
                console.log(err);
            })
        return concurso
    }, [])
             console.log(concurso);


    return (
        < DivPai>

            <div>
                <PosicionandoBotao>
                    <select id="selecionar" onChange={selecionadoPage}>
                        <option value="MegaSenha" > Mega-sena</option>
                        <option value="Quina">Quina</option>
                        <option value="LotoFacil"> LotoFacil</option>
                        <option value="LotoMania"> LotoMania</option>
                        <option value="TimeMania"> TImeMania</option>
                        <option value="DiaDeSorte" > DiaDeSorte</option>

                    </select>
                </PosicionandoBotao>


            </div>
            <LogoStyled />
            <MegaLetra>Mega-sena</MegaLetra>
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
export default Megasena


/*
   ---------------------------
   posivel requisiçao para pegar numero
   const [numeros,setNumeros] = useState([])
    const [informacao,setInformacao] = useState([])
    useEffect (()=>{
        
            axios.get(`'https://brainn-api-loterias.herokuapp.com/api/v1/loterias/concursos/2359`)
                .then((response) => {
                    setInformacao(response.data)
                    setNumeros(response.data.numeros)
                })
                .catch((error) => {
                    console.log("Deu erro", error);
                })   
          
    },[concurso])
    return [numeros,informacao]


          //---------------------REQUISIÇOES---------------------
          // ------------ME-RETORNA-O-CONCURSO-E-ID-LOTERIA------
        axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos')
        .then((res) => {
          
             console.log(res.data);
            
         })
         .catch((err) => {
             console.log(err);
         })


      //---------------------REQUISIÇOES---------------------


         
     
      axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/430")
      .then((res) => {
          
        console.log(res.data);
       
    })
    .catch((err) => {
        console.log(err);
    })



*/







/*


const Megasena = () => {
    const navigate = useNavigate()
    // estado criado para poder chamar as navegaçoes entre as paginas 
    // obs nao esta respondendo ainda
  const [pagina, setPagina] = useState("")
console.log(pagina);
const selecionadoPage=(event)=>{
 setPagina(event.target.value)
}
// tentar entender porque ainda nao esta respondendo 
useEffect(()=>{
    switch(pagina){
      case "Quina":
        goToQuina(navigate);
        break;
      case "Lotofacil":
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
    },[pagina])
   
    
   // -------------- axios-PARA-PEGAR-AS-LOTERIAS---------------------
  // preciso fazer uma requisisao para encontrar os valores das api's
         axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias' )
         .then((res)=>{
        console.log(res.data);
         })
         .catch((err)=>{
            console.log(err);
         })

  // -------------- axios-PARA-PEGAR-OS-NUMEROS-SORTIADOS---------------------

const id = 430
             axios.get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos` , {
               
             })
             .then((res)=>{
                console.log(res.data);
                 })
                 .catch((err)=>{
                    console.log(err.data);
                 })

                 // -------------- axios-PARA-PEGAR-OS-CONCURSOS--------------------

                 axios.get(  'https://brainn-api-loterias.herokuapp.com/api/v1/concursos/430' )
                
                
                 .then((res)=>{
                    console.log(res.data);
                     })
                     .catch((err)=>{
                        console.log(err.data);
                     })

    return (
        <DivPai>
            <img  src="http://www.w3.org/2000/svg"/>
            <SelecionandoJogo>
                <select id="selecionar" onChange={selecionadoPage}>
                    <option value="MegaSenha" selected > Mega-sena</option>
                    <option value=" Quina"> Quina</option>
                    <option value=" LotoFacil"> LotoFacil</option>
                    <option value=" LotoMania"> LotoMania</option>
                    <option value=" TimeMania"> TImeMania</option>
                    <option value=" DiaDeSorte" > DiaDeSorte</option>

                </select>
            </SelecionandoJogo>

            <NumeroSorteados>
                <Numeros>{1}</Numeros>

                <Numeros>{2}</Numeros>

                <Numeros>{3}</Numeros>

                <Numeros>{4}</Numeros>

                <Numeros>{5}</Numeros>

                <Numeros>{6}</Numeros>

            </NumeroSorteados>


        </DivPai>
    )
}

export default Megasena
*/

/*
  const MegaSenaa = ""
    const Quina = ""
    const LotoFacil = ""
    const LotoMania = ""
    const TimeMania = ""
    const DiaDeSorte = ""
    
       if (id.value=== MegaSenaa) {
           goToHome()
       }  else if( value === Quina){
          goToQuina()
       }    else if( value === LotoFacil){
          goTolotoFacil( )
       } else if (value === LotoMania){
          goToLotoMania()
       }  else if(value === TimeMania){
        goToTimeMania()
       } else if(value === DiaDeSorte){
        goToDiaDeSorte()
    }
    */
/*
export const goToHome = (navigate) => {
 navigate(`/`)
}
export const goToQuina = (navigate) => {
 navigate(`/Quina`)
}
export const goTolotoFacil = (navigate) => {
 navigate(`/LotoFacil`)
}
export const goToLotoMania = (navigate) => {
 navigate(`/LotoMania`)
}
export const goToTimeMania = (navigate) => {
 navigate(`/TimeMania)`)
}

export const goToDiaDeSorte =(navigate ) =>{
 navigate(`/DiaDeSorte`)


}*/