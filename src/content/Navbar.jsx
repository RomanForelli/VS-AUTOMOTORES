import React, {useState} from 'react';
import "../Styles/Navbar.css"
import logo from "../img/Logo2.png"
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [color, setColor] = useState(false);
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor (true)
      } else {
        setColor (false)
      }
    }

    window.addEventListener("scroll", changeColor)

    return (
        <>
      
      <header className={color ? "header header-bg" : "header"} >
        <Link to="/" className="navbar-brand col-6">
        <img className="logo" src={logo} alt="logotipo"/>
        </Link>
          <nav className="navbar navbar-expand-lg col-6 p-0">
            <div className="container-fluid">

                
            <ul className="nav justify-content-center">
              <li className="nav-item ">
                <Link className="nav-link p-1" to="Automotores">Automotores</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-1" to="Servicios">Servicios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-1" to="/Contacto" >Contacto</Link>
              </li>
            </ul>
                
            </div>
          </nav>
        </header>


        </>
    );
}

export default Navbar;
