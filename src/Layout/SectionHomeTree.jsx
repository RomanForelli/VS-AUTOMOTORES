import React from 'react';
import img10 from "../img/man-buying-car.jpg"
import "../Styles/Home.css"

const SectionHomeTree = () => {
    return (
        <>
            <section id='HomeTree'>
                <div className='container'>

                    <div className='d-flex col-12 justify-content-center align-items-center text-center mb-5'>
                        <div classname="col-lg-6">
                            <h2>   Venda su coche con facilidad. </h2>
                            <p> Confía en nosotros y deja que Vs Automotores se encargue del proceso por ti. Publicaremos tu coche en nuestra web y redes sociales, te acompañaremos a enseñarlo a posibles compradores, y te ayudaremos con todo el papeleo y trámites de matriculación a la hora de transferirlo. Aprovecha nuestra experiencia para vender tu coche con facilidad.</p>
                        </div>
                        <div className="col-lg-6">
                        <img className='img10' src={img10} alt="img2" />
                        </div>
                        
                    </div>

                </div>
            </section>
        </>
    );
}

export default SectionHomeTree;
