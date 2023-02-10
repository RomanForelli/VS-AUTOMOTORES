import React from 'react';
import wpp from "../img/whatsapp.png"
import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
import linkedin from "../img/linkedin.png"
import logo from "../img/Logo2.png"
import "../Styles/Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer id='footer' className='row'>
        <div className='container'>
        <div className="row justify-content-center align-items-center text-center col-12 mx-auto">
                
                <div className="row col-md-4 col-sm-6 text-center justify-content-center align-items-center mx-auto">
                    <img src={logo} alt="logotipo" width="160" height="55" className='img-fluid logo2'/>
                    <p className="text-center text-white font-weight-bold"> Somos una empresa dedicada a gestionar la venta de autos entre particulares</p> 
                </div>

                <div className="d-flex flex-column col-md-4 col-sm-6 text-center justify-content-center align-items-center">
                    <Link to="/" className="foot__menu"> Inicio </Link>
                    <Link to="/Automotores" className="foot__menu"> Automotores </Link>
                    <Link to="/Servicios" className="foot__menu"> Servicios </Link>
                    <Link to="/Nosotros" className="foot__menu"> Nosotros </Link>
                    <Link to="/Contacto" className="foot__menu"> Contacto </Link>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className='d-flex flex-column'>
                        <p>Leandro Benitez Mombelli</p>
                        <p>VS Gestion Automotor</p>
                        <p>VSautomotores@info.com</p>
                        <p>+54 9 11 4025 2574</p>
                        
                    </div>

                    <div>
                        <Link href>
                        <img src={wpp} alt="whatsapp" href="" className="redes"/>
                        </Link>
                        <Link href>
                        <img src={facebook} alt="facebook" href="" className="redes"/>
                        </Link>
                        <Link href>
                        <img src={instagram} alt="instagram" href="" className="redes"/>
                        </Link>
                        <Link href>
                        <img src={linkedin} alt="linkedin" href="pages/contacto.html" className="redes"/>
                        </Link>
                    </div>
                </div>    
            </div> 
            </div>  
        </footer>
            
        </>
    );
}

export default Footer;
