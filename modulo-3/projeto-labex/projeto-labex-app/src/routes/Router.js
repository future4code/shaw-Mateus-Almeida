import AdminHomePage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="AdminHome" element={<AdminHomePage />} />
        <Route path="ApplicationForm" element={<ApplicationFormPage />} />
        <Route path="CreateTrip" element={<CreateTripPage />} />
        <Route path="ListTripPage" element={<ListTripsPage />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="TripDetails" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}