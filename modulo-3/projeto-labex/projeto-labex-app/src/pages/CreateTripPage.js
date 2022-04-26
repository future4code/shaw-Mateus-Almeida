import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function CreateTripPage() {
  const navigate = useNavigate()
  const goBack =()=>{
    navigate(-1)
  }
  return (
    <div>
      <h2> criar viagem </h2>
      < input placeholder="nome"></input>
      <input placeholder="escolher planeta"></input>
      <input placeholder="data/ dd/mm/aa"></input>
      <input placeholder="descriçao"></input>
      <input placeholder="duraçao em dias"></input>
      <div>
        <button onClick={goBack}>voltar</button>
        <button>criar</button>
      </div>
    </div>
  );
}

export default CreateTripPage;
