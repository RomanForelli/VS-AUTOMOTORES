import React from 'react';
import imagenuno from "../img/hombrepapeles1.jpg"

const SectionTree = () => {
    return (
        <>
        <section id='SectionTree' className='row'>
            <div className='container'>
                
                    <div className='row flex-row-reverse textoservicios mx-auto align-items-center text-center justify-content-center'>
                        
                        <div className='col-md-6'>
                            <p>
                                Si le interesa nuestro servicio, coordinamos un día y horario para acercarnos a donde se encuentre su vehículo, le tomamos las fotos correspondientes y le solicitamos firmar la autorización de venta, una vez realizado, dentro de las 48hs hábiles estará publicado en todos los medios y portales de venta.
                            </p>
                            <p>
                                Publicamos en todos los portales de venta especializados. También en nuestras redes sociales (Facebook, Instagram y Marketplace) y recomendamos a nuestra cartera de clientes para lograr una venta más pronta.
                            </p>
                            <p>
                                Usted no debe dejar de usar su vehículo durante el proceso, nosotros nos encargamos de gestionar la venta. Al momento de tener un interesado, se coordina una visita para poder mostrarlo, Ademas un representante de la empresa va a estar con usted para una mayor seguridad y tranquilidad.
                            </p>
                        </div>

                        <div className='col-md-6 d-flex align-items-center text-center mx-auto justify-content-center'>
                        <img src={imagenuno} className='imgservicios  img-fluid' alt="imagen1" />
                        </div>
                        
                        </div>    
                        
            </div>
        </section>    
        </>
    );
}

export default SectionTree;
