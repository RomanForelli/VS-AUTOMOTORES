import React from 'react';
import img10 from "../img/man-buying-car.jpg"
import "../Styles/Home.css"

const SectionHomeTree = () => {
    return (
        <>
            <section id='HomeTree' className='row justify-content-center align-items-center text-center mx-auto'>
                <div className='container'>

                    <div className='row mx-auto textoservicios justify-content-center align-items-center text-center p-4'>
                    
                    <div className="col-md-6">
                        <h2>   Venda su coche con facilidad. </h2>
                        <p> Confía en nosotros y deja que Vs Automotores se encargue del proceso por ti. Publicaremos tu coche en nuestra web y redes sociales, te acompañaremos a enseñarlo a posibles compradores, y te ayudaremos con todo el papeleo y trámites de matriculación a la hora de transferirlo. Aprovecha nuestra experiencia para vender tu coche con facilidad.</p>
                    </div>

                    <div className="col-md-6 d-flex align-items-center text-center mx-auto justify-content-center p-4">
                    <img className='imgservicios img-fluid' src={img10} alt="img2" />
                    </div>
                    
                    </div>

                </div>
            </section>
        </>
    );
}

export default SectionHomeTree;
