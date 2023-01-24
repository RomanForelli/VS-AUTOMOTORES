import React from 'react';
import imagenuno from "../img/hombrepapeles1.jpg"

const SectionTree = () => {
    return (
        <>
<section id='SectionTree'>
            <div className='container'>
                
                        <div className='d-flex columnasVentas col-12'>
                        <ul className='col-6 text-center'>
                            <li>
                                Si le interesa nuestro servicio, coordinamos un día y horario para acercarnos a donde se encuentre su vehículo, le tomamos las fotos correspondientes y le solicitamos firmar la autorización de venta, una vez realizado, dentro de las 48hs hábiles estará publicado en todos los medios y portales de venta.
                            </li>
                            <li>
                                Publicamos en todos los portales de venta especializados. También en nuestras redes sociales (Facebook, Instagram y Marketplace) y recomendamos a nuestra cartera de clientes para lograr una venta más pronta.
                            </li>
                            <li>
                                Usted no debe dejar de usar su vehículo durante el proceso, nosotros nos encargamos de gestionar la venta. Al momento de tener un interesado, se coordina una visita para poder mostrarlo, Ademas un representante de la empresa va a estar con usted para una mayor seguridad y tranquilidad.
                            </li>
                        </ul>
                        <img src={imagenuno} className="col-6" alt="imagen1" />
                        
                        </div>    
                        
            </div>
        </section>    
        </>
    );
}

export default SectionTree;
