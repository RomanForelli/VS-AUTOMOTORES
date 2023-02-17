import React from 'react';
import imagenuno from "../img/hombrepapeles1.jpg"
import "../Styles/Home.css"

const SectionTree = () => {
    return (
        <>
        <section id='SectionTree' className='row'>
            <div className='container'>
                
                    <div className='row flex-row-reverse textoservicios mx-auto align-items-center text-center justify-content-center'>
                        
                        <div className='col-md-6'>
                            <p>
                            Si está interesado en nuestro servicio, podemos programar una visita a su ubicación para tomar las fotografías necesarias de su vehículo y obtener su autorización de venta. Una vez recibido, en un plazo máximo de 48 horas hábiles, su vehículo estará disponible para su venta en los mejores portales especializados y en nuestras redes sociales, como Facebook, Instagram y Marketplace. También lo recomendaremos a nuestra amplia cartera de clientes para agilizar la venta.
                            </p>

                            <p>
                            Durante el proceso, usted puede seguir utilizando su vehículo normalmente, mientras nosotros nos encargamos de la gestión completa de la venta. Si algún interesado desea ver su vehículo en persona, coordinaremos una visita para su exhibición, y un representante de nuestra empresa estará a su lado para garantizar su seguridad y tranquilidad.
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
