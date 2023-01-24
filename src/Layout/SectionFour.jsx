import React from 'react';
import imagendos from "../img/img2.jpg"

const SectionFour = () => {
    return (
        <>  
        <section id='SectionFour'>
            <div className='container'>
                
                    <div className='d-flex columnasVentas col-12'>
                        <ul className='col-6 text-center'>
                            <li>
                                Nosotros le sugerimos el mejor valor de venta para su vehículo, basados en nuestra experiencia y analizando el mercado, pero usted es quien decide tanto el valor de publicación como el valor de venta final.
                            </li>
                            <li>
                                También nos encargamos de responder todas las consultas, llamar a los interesados y coordinar las visitas para mostrarlo.
                            </li>
                            <li>
                                Al momento de la entrega también acompañamos en toda la gestión e incluso vamos con el comprador al registro automotor para presentar la transferencia y darle tranquilidad de que el vehículo fue transferido.
                            </li>
                            <li>
                                Nuestro servicio solo tiene costo en caso de una venta exitosa, de lo contrario no se le cobra nada y la comision de la misma depende del valor del vehiculo.
                            </li>
                        </ul>
                        
                        <img src={imagendos} alt="imagendos"  className='col-6'/>
                        
                    </div>
            </div>
        </section>    
        </>
    );
}

export default SectionFour;
