import './App.css';
import Navbar from './content/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './content/Home';
import Automotores from './content/Automotores';
import Contacto from './content/Contacto';
import Servicios from './content/Servicios';
import Nosotros from './content/Nosotros';
import Footer from './content/Footer';


function App() {
  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Automotores" element={<Automotores/>}/>
      <Route path="/Servicios" element={<Servicios/>}/>
      <Route path="/Nosotros" element={<Nosotros/>}/>
      <Route path="/Contacto" element={<Contacto/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
