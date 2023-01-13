import React from 'react';

const SectionFour = () => {
    return (
        <>  
        <section id='SectionFour'>
            <div className='container'>
                <div className='text-center p-3'>
                    <h1 className='p-3'> Nuestros Servicios:</h1>
                    <h2 className='p-3'> Gestion de venta de Vehiculos </h2>
                    <h4 className='p-3'> Somos una empresa especializada en la venta de vehículos de dueño a dueño, cuyo objetivo es que el cliente obtenga el mejor precio por su usado, brindando seguridad al no exponerse en mostrar su auto, con la transparencia que genera una venta entre particulares.</h4>
                    <div className='row col-12 text-start pt-3'>
                        <div className='col-6 columnasVentas'>
                        <ul className=''>
                            <li>
                                Si le interesa nuestro servicio, coordinamos un día y horario para acercarnos a donde se encuentre su vehículo, le tomamos las fotos correspondientes y le solicitamos firmar la autorización de venta, una vez realizado, dentro de las 48hs hábiles estará publicado en todos los medios y portales de venta.
                            </li>
                            <li>
                                Publicamos en todos los portales de venta especializados. También en nuestras redes sociales (Facebook, Instagram y Marketplace) y recomendamos a nuestra cartera de clientes para lograr una venta más pronta.
                            </li>
                            <li>
                                Usted no debe dejar de usar su vehículo durante el proceso, nosotros nos encargamos de gestionar la venta. Al momento de tener un interesado, se coordina una visita para poder mostrarlo, Ademas un representante de la empresa va a estar con usted para una mayor tranquilidad y seguridad.
                            </li>
                        </ul>
                        </div>    
                        <div className='col-6 columnasVentas'>
                        <ul>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>    
        </>
    );
}

export default SectionFour;
