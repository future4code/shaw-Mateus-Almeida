import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function TripDetailsPage() {
  const navigate = useNavigate()
 
  return (
    <div>
      <button>voltar</button>
      <div>
        <li>
          nome:
          profisao:
          idade:
          pais:
          texto candidatura:
        </li>
        <button>aprovar</button>
        <button>reprovar</button>
      </div>
      <h3> candidatos aprovados</h3>


    </div>
  );
}

export default TripDetailsPage;
