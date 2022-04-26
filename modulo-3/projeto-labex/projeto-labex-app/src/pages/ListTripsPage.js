import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ListTripsPage() {
  const navigate = useNavigate()
  const goBack =()=>{
    navigate(-1)
  }
  const goToApplicationForm = () => {
    navigate("/ApplicationForm")
  }
  
  return (
    <div>

      <button onClick={goBack}>voltar </button>
      <button onClick={goToApplicationForm }>iscreva-se</button>
      <h2> lista de viagens </h2>
      <div>
        mostra as viagens aki
      </div>
    </div>
  );
}

export default ListTripsPage;
