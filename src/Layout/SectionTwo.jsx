import React from 'react';
import auto1 from "../img/auto1.jpg"
import auto2 from "../img/auto2.jpg"
import auto3 from "../img/auto3.jpg"

const SectionTwo = () => {
    return (
        <>
            <section className='row justify-content-center' id='SectionTwo'>
                
                <div className='text-center SectionTwo-titulo'>
                <h1>
                    Automotores
                </h1>
                <p>
                    Nuestro autos Seleccionados:
                </p>
                </div>

                <div className='row col-12 m-3 justify-content-center text-center'>
                    <div className="card p-1 m-3" style={{width: '18rem'}}>
                    <img src={auto1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Chery Tiggo 1.6 3 Luxury</h5>
                        <p className="card-text">- La unidades se entregan el mismo dia que se abona el vehiculo, con la mejor
                        atencion, Confiabilidad, Servicio y Gestoria en la actualidad del mercado.
                        - Solicite su turno para ver tu vehiculo!!</p>
                        <a href="https://auto.mercadolibre.com.ar/MLA-1283545472-chery-tiggo-3-16-4x2-luxury-l17-2018-_JM#position=7&search_layout=grid&type=item&tracking_id=e8f162df-59b3-418b-a9ae-cb6bc759e7df" className="btn btn-primary">Ver Detalles</a>
                    </div>
                    </div>
                    <div className="card p-1 m-3" style={{width: '18rem'}}>
                    <img src={auto3} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Chevrolet Tracker 1.2 Premier Turbo At</h5>
                    <p className="card-text">ANTICIPO Y CUOTAS FIJAS EN PESOS
                    COMPRA TU 0KM SOLO CON ENTREGA INMEDIATA!!
                    VENDEMOS AUTOS FISICOS CON NRO DE MOTOR Y CHASIS!!
                    NO ESPERES MAS POR TU 0KM!!!!!!!!</p>
                    <a href="https://auto.mercadolibre.com.ar/MLA-1308346518-chevrolet-tracker-premier-at-2023-0km7-_JM#position=15&search_layout=grid&type=item&tracking_id=e8f162df-59b3-418b-a9ae-cb6bc759e7df" className="btn btn-primary">Ver Detalles</a>
                    </div>
                    </div>
                    <div className="card p-1 m-3" style={{width: '18rem'}}>
                    <img src={auto2} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Toyota Etios 1.5 X 6mt My19</h5>
                    <p className="card-text">excelente estado, única mano, service oficiales al día, llévalo con anticipos desde $1.000.000 y el saldo en cuotas fijas en pesos</p>
                    <a href="https://auto.mercadolibre.com.ar/MLA-1254980144-toyota-etios-15-4-ptas-xls-4at-l18-2018-_JM#position=12&search_layout=grid&type=item&tracking_id=e8f162df-59b3-418b-a9ae-cb6bc759e7df" className="btn btn-primary">Ver Detalles</a>
                    </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default SectionTwo;
