import React from 'react';
import wpp from "../img/whatsapp.png"
import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
import linkedin from "../img/linkedin.png"
import logo from "../img/Logo2.png"
import "../Styles/Footer.css"

const Footer = () => {
    return (
        <>
        <footer>
            
        <div class="row justify-content-center align-items-center text-center p-1 footer">
                <div class="d-flex flex-column col-lg-4 col-sm-12 text-center justify-content-center align-items-center">
                    <img src={logo} alt="logotipo" width="160" height="55" className='img-fluid logo'/>
                    <span class="text-center"> Somos una empresa dedicada a gestionar la venta de autos entre particulares</span> 
                </div>
                <div class="d-flex flex-column col-lg-4 col-sm-12">
                    <a href="#inicio" class="foot__menu"> Inicio </a>
                    <a href="pages/servicios.html" class="foot__menu"> Servicios </a>
                    <a href="pages/soluciones.html" class="foot__menu"> Soluciones </a>
                    <a href="pages/nosotros.html" class="foot__menu"> Nosotros </a>
                    <a href="pages/contacto.html" class="foot__menu"> Contacto </a>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div>
                        <p>Leandro Benitez Mombelli</p>
                        <p>VS Gestion Automotor</p>
                        <p>VSautomotores@info.com</p>
                        <p>+54 9 11 4025 2574</p>
                        
                    </div>
                    <div>
                        <a href>
                        <img src={wpp} alt="whatsapp" href="" class="redes"/>
                        </a>
                        <a href>
                        <img src={facebook} alt="facebook" href="" class="redes"/>
                        </a>
                        <a href>
                        <img src={instagram} alt="instagram" href="" class="redes"/>
                        </a>
                        <a href>
                        <img src={linkedin} alt="linkedin" href="pages/contacto.html" class="redes"/>
                        </a>
                    </div>
                </div>    
            </div>  
        </footer>
            
        </>
    );
}

export default Footer;
