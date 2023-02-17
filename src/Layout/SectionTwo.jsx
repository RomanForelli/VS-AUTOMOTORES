import React from 'react';
import auto1 from "../img/auto1.jpg"

import "../Styles/Automotores.css"   

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

                <div className='row col-12  justify-content-center text-center'>
                    <div className="card p-0 m-3" style={{width: '20rem', height: '30rem'}}>
                    <div className='inner'>
                    <img src={auto1} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body p-2">
                        <h4 className="card-title m-2">Chery Tiggo 1.6 3 Luxury</h4>
                        <p className="card-text m-2"><span>$2.500.000</span></p>
                        <div className='img_icons d-flex m-2 justify-content-around text-center align-items-center'>
                            <div className='d-flex justify-content-around text-center align-items-center'>
                            <lord-icon
                                src="https://cdn.lordicon.com/qjuahhae.json"
                                trigger="hover"
                                colors="primary:#121331"
                                style={{width: '50px', height: '50px'}}>
                            </lord-icon>
                            <p className='m-0'>  2020 </p>
                            </div>
                            <div className='d-flex justify-content-around text-center align-items-center'>
                            <lord-icon
                                src="https://cdn.lordicon.com/wrvsvaoj.json"
                                trigger="hover"
                                colors="primary:#121331"
                                style={{width: '50px', height: '50px'}}>
                            </lord-icon>
                            <p className='m-0'>135.000 KM</p>
                            </div>
                        </div>
                        <a href="https://auto.mercadolibre.com.ar/MLA-1283545472-chery-tiggo-3-16-4x2-luxury-l17-2018-_JM#position=7&search_layout=grid&type=item&tracking_id=e8f162df-59b3-418b-a9ae-cb6bc759e7df" className="btn btn-primary m-1">Ver Detalles</a>
                    </div>
                    </div>

                    <div className="card p-0 m-3" style={{width: '20rem', height: '30rem'}}>
                    <div className='inner'>
                    <img src={auto1} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body p-2">
                        <h4 className="card-title m-2">Chery Tiggo 1.6 3 Luxury</h4>
                        <p className="card-text m-2"><span>$2.500.000</span></p>
                        <div className='img_icons d-flex m-2 justify-content-around text-center align-items-center'>
                            <div className='d-flex justify-content-around text-center align-items-center'>
                            <lord-icon
                                src="https://cdn.lordicon.com/qjuahhae.json"
                                trigger="hover"
                                colors="primary:#121331"
                                style={{width: '50px', height: '50px'}}>
                            </lord-icon>
                            <p className='m-0'>  2020 </p>
                            </div>
                            <div className='d-flex justify-content-around text-center align-items-center'>
                            <lord-icon
                                src="https://cdn.lordicon.com/wrvsvaoj.json"
                                trigger="hover"
                                colors="primary:#121331"
                                style={{width: '50px', height: '50px'}}>
                            </lord-icon>
                            <p className='m-0'>135.000 KM</p>
                            </div>
                        </div>
                        <a href="https://auto.mercadolibre.com.ar/MLA-1283545472-chery-tiggo-3-16-4x2-luxury-l17-2018-_JM#position=7&search_layout=grid&type=item&tracking_id=e8f162df-59b3-418b-a9ae-cb6bc759e7df" className="btn btn-primary m-1">Ver Detalles</a>
                    </div>
                    </div>

                    <div className="card p-0 m-3" style={{width: '20rem', height: '30rem'}}>
                    <div className='inner'>
                    <img src={auto1} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body p-2">
                        <h4 className="card-title m-2">Chery Tiggo 1.6 3 Luxury</h4>
                        <p className="card-text m-2"><span>$2.500.000</span></p>
                        <div className='img_icons d-flex m-2 justify-content-around text-center align-items-center'>
                            <div className='d-flex justify-content-around text-center align-items-center'>
                            <lord-icon
                                src="https://cdn.lordicon.com/qjuahhae.json"
                                trigger="hover"
                                colors="primary:#121331"
                                style={{width: '50px', height: '50px'}}>
                            </lord-icon>
                            <p className='m-0'>  2020 </p>
                            </div>
                            <div className='d-flex justify-content-around text-center align-items-center'>
                            <lord-icon
                                src="https://cdn.lordicon.com/wrvsvaoj.json"
                                trigger="hover"
                                colors="primary:#121331"
                                style={{width: '50px', height: '50px'}}>
                            </lord-icon>
                            <p className='m-0'>135.000 KM</p>
                            </div>
                        </div>
                        <a href="https://auto.mercadolibre.com.ar/MLA-1283545472-chery-tiggo-3-16-4x2-luxury-l17-2018-_JM#position=7&search_layout=grid&type=item&tracking_id=e8f162df-59b3-418b-a9ae-cb6bc759e7df" className="btn btn-primary m-1">Ver Detalles</a>
                    </div>
                    </div>



                </div>

            </section>
        </>
    );
}

export default SectionTwo;
