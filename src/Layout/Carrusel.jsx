import React from 'react';
import comentario1 from "../img/comentario1.png"
import comentario2 from "../img/comentario2.png"
import comentario3 from "../img/comentario3.png"
import comentario4 from "../img/comentario4.png"
import comentario5 from "../img/comentario5.png"

const Carrusel = () => {
    return (
        <>
        <section className=' carrusel row justify-content-center align-items-center text-center mx-auto'>
            
            <div>
            <h1> Nuestros Clientes</h1> 
            </div>
        <div id="carouselExampleIndicators" className="carousel carousel-dark slide container" data-bs-ride="carousel">
                <div className="carousel-inner shadow-lg p-3 mb-5 bg-body-tertiary rounde">
                    <div className="carousel-item active">
                    <img src={comentario1} className="d-block w-100" alt="comentarios" />
                    </div>
                    <div className="carousel-item">
                    <img src={comentario2} className="d-block w-100" alt="comentarios" />
                    </div>
                    <div className="carousel-item">
                    <img src={comentario3} className="d-block w-100" alt="comentarios" />
                    </div>
                    <div className="carousel-item">
                    <img src={comentario4} className="d-block w-100" alt="comentarios" />
                    </div>
                    <div className="carousel-item">
                    <img src={comentario5} className="d-block w-100" alt="comentarios" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
                </div>

        </section>
           
        </>
    );
}

export default Carrusel;
