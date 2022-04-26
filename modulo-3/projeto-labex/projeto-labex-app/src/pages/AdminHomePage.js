import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/* 
chamei o usenavigate que e um hook
criei uma nova funçao falando que a pagina e o msm path que passei no router.js*/
function AdminHomePage() {
  const navigate = useNavigate()
  const goBack =()=>{
    navigate(-1)
  }
  const goToCreateTrip = () => {
    navigate("/CreateTrip")
  }
const goToHome =()=>{
  navigate(-2)
}

  return (
    <div>
      < h1> painel adiministrativo</h1>
      <button onClick={goToHome}>voltar</button>
      <button onClick={goToCreateTrip}>criar-viagem</button>
      <button onClick={goBack}>lougout</button>
      <div>
        <li>
          nome viagem / botao escluir
        </li>
        <li>
          nome viagem 2 / botao escluir
        </li>

      </div>
    </div>

  );
}

export default AdminHomePage;
