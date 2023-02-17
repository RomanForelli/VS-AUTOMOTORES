import React from 'react';
import "../Styles/Contacto.css"
import wpp from "../img/whatsapp.png"
import instagram from "../img/instagram.png"
import facebook from "../img/facebook.png"
import email from "../img/Gmail.png"

const Contacto = () => {
    return (
        <>
            <section className='row justify-content-center align-items-center text-center mx-auto' id='contacto'>

                <div className='container p-0'>

                    <div className='d-flex flex-column contacto_titulo justify-content-center align-items-center mx-auto text-center'>
                    <h1> VS Gestion Automotor  </h1>
                    <h2>  Trabaje con nosotros! </h2>
                    </div>

                    <div className='row contacto_redes'>
                        
                        <div className='contacto_redes2 row d-flex  justify-content-center align-items-center mx-auto text-center col-8' >
                        <div className='col-md-3 col-xs-6 d-flex flex-column contacto_icono  justify-content-center align-items-center mx-auto text-center '>
                            <img src={wpp} alt="wpp" />
                            <h4> WhatsApp</h4>
                            <p> +54 9 11 4025 2574</p>
                        </div>
                        <div className='col-md-3 col-xs-6 d-flex flex-column contacto_icono justify-content-center align-items-center mx-auto text-center'>
                            <img src={instagram} alt="instagram" />
                            <h4> Instagram</h4>
                            <p> /VSgestionAutomotor</p>
                        </div>
                        <div className='col-md-3 col-xs-6 d-flex flex-column contacto_icono justify-content-center align-items-center mx-auto text-center'>
                            <img src={facebook} alt="Facebook" />
                            <h4> Facebook</h4>
                            <p> VSgestionAutomotor</p>
                        </div>
                        <div className='col-md-3 col-xs-6 d-flex flex-column contacto_icono justify-content-center align-items-center mx-auto text-center'>
                            <img src={email} alt="email" />
                            <h4> Email</h4>
                            <p> VSautomotores@info.com</p>
                        </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    );
}

export default Contacto;
