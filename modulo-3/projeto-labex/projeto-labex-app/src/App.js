import React from "react";
import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import { Router } from "./routes/Router";





/*  usei um componente chamado react-router 
dentro dele o browserROuter e o pai 
o router e pai da route
e passo o camingo de cada pagina pelo router
criei uma pasta chamada routes e um novo arquivo coloquei a logica la e chamei somente o 
componente no app js
*/
function App() {
  return (
    <div>
      <Router/>
     
    </div>
  );
}

export default App;
