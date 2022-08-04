import axios from "axios";
import React, { useEffect, useState } from "react"
import {  DivGeneros, DivPrincipal } from "./styled"

// CHAVE API 0b7665ca85a18198756afe296597bf9e


const Principal = () => {
    // ------------------------------requisiçao-generos-------------------------------------
    const [generos, setGeneros] = useState()
     useEffect(() => {
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=0b7665ca85a18198756afe296597bf9e&language=pt-BR%22,%7B", {

        })
            .then((res) => {
                setGeneros(res.data)
                
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


const listaDeGeneros = generos && generos.genres && generos.genres.map((genre) => {
    return(
        < DivGeneros>{genre.name}</DivGeneros>
    )
    
  })


    return (
        <DivPrincipal>
            <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
            <br></br>           
             <p>FILTRE POR:</p>
           
        <nav>{listaDeGeneros}</nav> 
         
        </DivPrincipal>
    )
}
export default Principal
/*  {generos && generos.genres && generos.genres.map((genero) => {
                      return(
                        <DivGeneros>{genero}</DivGeneros>
                      )
               })

               } */