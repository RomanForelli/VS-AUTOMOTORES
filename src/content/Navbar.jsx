import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"
import logo from "../img/Logo2.png"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
              <div className="container navegacion">
                <Link to="/" className="navbar-brand">
                <img className="logo" src={logo} alt="logotipo" width="140" height="65"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      <Link className="nav-link active" to="#sectionOne">Automotores</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Servicios">Servicios</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Nosotros">Nosotros</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Contacto">Contacto</Link>
                    </li>
                  </ul>
                </div>
              </div>
          </nav>
        </>
    );
}

export default Navbar;
