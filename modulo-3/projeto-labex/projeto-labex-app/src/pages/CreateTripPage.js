import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

 function CreateTripPage() {
  const navigate = useNavigate()
  const[name,setName]=useState("")
  const[planet,setPlanet]=useState("")
  const[date,setDate]=useState("")
  const[description,setDescription]=useState("")
  const[time,setTime]=useState("")
  const[]=useState("")
  const goBack =()=>{
    navigate(-1)
  }
  // FUNÇOES PARA ALTERAR OS VALORES DO ESTADO 
const changeName =(event)=>{
setName(event.target.value)
}
const changePlanet =(event)=>{
  setPlanet(event.target.value)
  }
  const changeDate =(event)=>{
    setDate(event.target.value)
  }
  const changeDescription =(event)=>{
    setDescription(event.target.value)
  }
  const changeTime =(event)=>{
    setTime(event.target.value)
  }
  // falta fazer essa api funcionar 
  const createTrip = () => {
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: time
      }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mateus-shaw/trips", body)
      .then((response) => {
        console.log(response.data)

      })
      .catch((error )=> {
        alert(error.data)
      })

}




  

// VALORES DO INPUT E ONCHANGE COMA FUNÇAO 
  return (
    <div>
      <h2> criar viagem </h2>
      < input placeholder="nome"
      value={name}
      onChange={changeName}
      />
      <br></br><br></br>
      <input placeholder="escolher planeta"
      value={planet}
      onChange={changePlanet}
      />
       <br></br><br></br>
      <input placeholder="data/ dd/mm/aa"
      value={date}
      onChange={changeDate}
      />
       <br></br><br></br>
      <input placeholder="descriçao"
      value={description}
      onChange={changeDescription}
      />
       <br></br><br></br>
      <input placeholder="duraçao em dias"
      value={time}
      onChange={changeTime }
      />
      <div>
        <button onClick={goBack}>voltar</button>
        <button onClick={createTrip} >criar</button>
      </div>
    </div>
  );
}

export default CreateTripPage;
