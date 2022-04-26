import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function LoginPage() {
  const navigate = useNavigate()
  const goBack =()=>{
    navigate(-1)
  }
  const goToAdminHome = () => {
    navigate("/AdminHome")
  }
  return (
    <div>
      <h1> login </h1>
      <input placeholder="email" ></input>
      <input placeholder="senha" ></input>
      <button onClick={goBack}>voltar </button>
      <button onClick={goToAdminHome}>entrar</button>
    </div>
  );
}

export default LoginPage;
