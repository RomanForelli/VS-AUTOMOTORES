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
                            Nos esforzamos por brindarle la mejor valoración de venta para su vehículo, basándonos en nuestra amplia experiencia y análisis del mercado. Sin embargo, la decisión final sobre el valor de publicación y venta es suya.
                            </p>
                            <p>
                            Nos encargamos de atender todas las preguntas y llamados de posibles compradores, coordinamos las visitas para que puedan ver el vehículo y, en el momento de la entrega, estamos a su lado durante todo el proceso, incluso acompañándolo al registro automotor para asegurarnos de una transición sin problemas.                            </p>
                            <p>
                            Nuestro servicio solo tiene un costo en caso de una venta exitosa, en caso contrario, no se le cobrará nada y la comisión depende del valor del vehículo.
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
