import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()
  const goToListTripPage = () => {
    navigate("/ListTripPage")
  }
 
  
 
  const goToLoginPage = () => {
    navigate("/LoginPage")
  }
  const goToTripDetails = () => {
    navigate("/TripDetails")
  }

  return (
    <div>
      <h1> labex</h1>
      <button onClick={goToListTripPage}>ver viagens </button>
      <button onClick={goToLoginPage}>area do adim</button>
    </div>
  );
}

export default HomePage;
