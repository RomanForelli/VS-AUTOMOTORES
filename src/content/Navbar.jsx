import React, {useState} from 'react';
import "../Styles/Navbar.css"
import logo from "../img/Logo2.png"



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
        <header className={color ? "header header-bg" : "header"}>
        <a href="/" className="navbar-brand">
        <img className="logo" src={logo} alt="logotipo"/>
        </a>
          <nav className="navbar navbar-expand-lg">
            <div className="container navegacion">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      <a className="nav-link active" href="">Automotores</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">Servicios</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">Nosotros</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="" >Contacto</a>
                    </li>
                  </ul>
                </div>
              </div>
          </nav>
        </header>  
        </>
    );
}

export default Navbar;
