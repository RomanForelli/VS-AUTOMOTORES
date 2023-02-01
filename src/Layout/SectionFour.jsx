import React from 'react';
import imagendos from "../img/img2.jpg"

const SectionFour = () => {
    return (
        <>  
        <section id='SectionFour' className='row'>
            <div className='container'>
                
                    <div className='row  textoservicios mx-auto align-items-center text-center'>
                        <div className='col-md-6'>
                            <p>
                            Nosotros le sugerimos el mejor valor de venta para su vehículo, basados en nuestra experiencia y analizando el mercado, pero usted es quien decide tanto el valor de publicación como el valor de venta final.
                            </p>
                            <p>
                            También nos encargamos de responder todas las consultas, llamar a los interesados y coordinar las visitas para mostrarlo.
                            </p>
                            <p>
                            Al momento de la entrega también acompañamos en toda la gestión e incluso vamos con el comprador al registro automotor para presentar la transferencia y darle tranquilidad de que el vehículo fue transferido.
                            </p>
                            <p>
                            Nuestro servicio solo tiene costo en caso de una venta exitosa, de lo contrario no se le cobra nada y la comision de la misma depende del valor del vehiculo.
                            </p>
                        </div>
                        <div className='col-md-6 d-flex align-items-center text-center mx-auto justify-content-center'>
                        <img src={imagendos} alt="imagendos"  className='imgservicios  img-fluid'/>
                        </div>
                        
                        
                    </div>
            </div>
        </section>    
        </>
    );
}

export default SectionFour;
