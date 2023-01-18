import React from 'react';
import "../Styles/Navbar.css"
import logo from "../img/Logo2.png"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg m-0 p-0">
              <div className="container navegacion">
                <a to="/" className="navbar-brand">
                <img className="logo" src={logo} alt="logotipo" width="140" height="65"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      <a className="nav-link active" to="#sectionOne">Automotores</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" to="/Servicios">Servicios</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" to="/Nosotros">Nosotros</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" to="/Contacto">Contacto</a>
                    </li>
                  </ul>
                </div>
              </div>
          </nav>
        </>
    );
}

export default Navbar;
