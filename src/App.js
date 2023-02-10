import './App.css';
import Navbar from './content/Navbar';
import Home from './content/Home';
import Footer from './content/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Automotores from './content/Automotores';
import Nosotros from "./content/Nosotros"
import Servicios from "./content/Servicios"
import Contacto from './content/Contacto';

function App() {
  return (
    <>

    <BrowserRouter>

      <Navbar/>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Automotores" element={<Automotores/>} />
      <Route path="/Servicios" element={<Servicios/>} />
      <Route path="/Contacto" element={<Contacto/>} />
      </Routes>

      <Footer/>
    
    </BrowserRouter>  
    </>
  );
}

export default App;
