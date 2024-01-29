import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import ResolucionesPage from "./pages/ResolucionesPage";
import NovedadesPage from "./pages/NovedadesPage";
import ContactosPage from "./pages/ContactosPage";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contactos" element={<ContactosPage />} />
          <Route path="novedades" element={<NovedadesPage />} />
          <Route path="resoluciones" element={<ResolucionesPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
