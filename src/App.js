import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Resoluciones from './pages/Resoluciones';
import { BrowserRouter, Routes } from 'react-router-dom';

Import HomePage from './pages/HomePage';
Import Contactos from './pages/Contactos';
Import Novedades from './pages/Novedades';
Import Resoluciones from './pages/Resoluciones';



function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter/>
        <Nav/>
        <Routes/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contactos" element={<Contactos/>}/>
          <Route path="/novedades" element={<Novedades/>}/>
          <Route path="/resoluciones" element={<Resoluciones/>}/>
        <Routes/>
      <BrowserRouter/>

      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
