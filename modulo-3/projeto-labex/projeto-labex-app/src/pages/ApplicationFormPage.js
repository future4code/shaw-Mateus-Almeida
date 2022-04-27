import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "./baseDaUrl/BaseUrl";

function ApplicationFormPage() {
  const navigate = useNavigate()
  const goBack =()=>{
    navigate(-1)
  }
  const [goToAplicationTrip ,setgoToAplicationTrip] = useState()
  useEffect(() => {
    postToAppTrip()
    // por a funçao para renderizar
  }, [])
  const body={
    "name": "Astrodev",
    "age": 20,
    "applicationText": "Quero muuuuuuito ir!!!",
    "profession": "Chefe",
    "country": "Brasil"
}
  const postToAppTrip =()=>{
    axios.post(` ${body} ${BaseUrl}/trips`)
    .then(response => {
      console.log(response.data)
      goToAplicationTrip(response.data)
    })
    .catch(error => {
      console.log(error.data)
    })
    
  }

  return (
    <div>
     
      <h2> inscreva-se para a viagen </h2>
      <li> escolha a viagem </li>
      <input placeholder="nome" ></input>
      <input placeholder="idade"></input>
      <input placeholder="texto de candidatura"></input>
      <input placeholder="profissao"></input>
      <li> escolha o pais</li>
      <div>
        <button onClick={goBack}>voltar</button>
        <button onClick={postToAppTrip}>enviar</button>
      </div>
    </div>
  );
}

export default ApplicationFormPage;
/*
essa api tava errada
const [AplicantionForm , setAplicantionForm ] = useState()
useEffect(() => {
  // funcao que ur criar pra por pra atualizar()
  postAplication()
}, [])
const body = [
  {
    "email": "astrodev@gmail.com.br",
    "password": "123456"
  }
]
const postAplication = () => {
  Axios.post(`body ,${BaseUrl}/signup`)
  .then(response => {
    console.log(response.data)
    setAplicantionForm(response.data)
  })
  .catch(error => {
    console.log(error.data)
  })
  }
  // descobri o que tenho que fazer para essa api funcionar para enviar os dados!
  */
