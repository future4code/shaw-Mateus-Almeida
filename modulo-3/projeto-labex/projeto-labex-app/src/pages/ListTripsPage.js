import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BaseUrl } from "./baseDaUrl/BaseUrl";

import axios from "axios";
function ListTripsPage() {
  const navigate = useNavigate()
  // TRIP GUARDA MEU ESTADO 
  const [trips, setTrips] = useState([])
  // USEEFECT PARA ATUALIZAR NA TELA
  useEffect(() => {
    getTrips()
  }, [])
  const getTrips = () => {
    axios.get(`${BaseUrl}/trips`)
      .then(response => {
        console.log(response.data.trips)
        setTrips(response.data.trips)
      })
      .catch(error => {
       alert(error.data.trips)
      })
  }
  const listaTrips = trips.map((trip) =>{
    return(
      <div key={trip.id}>
        <li>Nome:{trip.name}</li>
        <li>Planeta:{trip.planet}</li>
        <li>Duração:{trip.durationInDays}</li>
        <li>Data:{trip.date}</li>
        <li>Descrição:{trip.description}</li>
        <br></br>
        <br></br>
      </div>

    )
  })



  // FAZ A FUNÇAO DE TROCAR DE PAGINA
  const goBack = () => {
    navigate(-1)
  }
  const goToApplicationForm = () => {
    navigate("/ApplicationForm")
  }

  return (
    <div>

      <button onClick={goBack}>voltar </button>
      <button onClick={goToApplicationForm}>iscreva-se</button>
      <h2> lista de viagens </h2>
      <div>
      {listaTrips}
      </div>
    </div>
  );
}

export default ListTripsPage;
