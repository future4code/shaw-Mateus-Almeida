import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ApplicationFormPage() {
  const navigate = useNavigate()
  const goBack =()=>{
    navigate(-1)
  }
  return (
    <div>
      <h2> inscreva-se para a viagen </h2>
      <li> escolha a viagem </li>
      <input placeholder="nome"></input>
      <input placeholder="idade"></input>
      <input placeholder="texto de candidatura"></input>
      <input placeholder="profissao"></input>
      <li> escolha o pais</li>
      <div>
        <button onClick={goBack}>voltar</button>
        <button>enviar</button>
      </div>
    </div>
  );
}

export default ApplicationFormPage;
