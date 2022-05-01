import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
 const ImgSt =styled.img`
 width:100%;
 height: 90vh;
 
 
 `
 const HomeST =styled.div`
 background-color: black;
 border:3px solid white;
 display:block;
 
 
 
 `

 const BottonSt =styled.button`
 margin-left:48%;
 background-color: #A4A19C;
 `

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
    <HomeST>
      
     
      <BottonSt onClick={goToListTripPage}>viagens espaciais</BottonSt>
      <BottonSt onClick={goToLoginPage}>page adimistrador</BottonSt>
      <div>
      <ImgSt src="https://super.abril.com.br/wp-content/uploads/2019/02/astronauta-cerebro.png?quality=90&strip=info&resize=680,453"/>
      </div>
    </HomeST>
  );
}

export default HomePage;
