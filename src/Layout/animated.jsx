import React from 'react';
import "../Styles/Home.css"

const Animated = () => {
    return (
        <>
            <section className='row justify-content-center align-items-center text-center mx-auto' id='animated1'>
                <div className='container animated'>
                    <div className='row justify-content-center align-items-center text-center mx-auto'>

                    <div className='col-md-4 icono'>
                    <lord-icon src="https://cdn.lordicon.com/mxddzdmt.json" trigger="hover" colors="outline:#121331,primary:#3a3347,secondary:#646e78,quaternary:#1663c7,quinary:#ffc738,senary:#ebe6ef" style={{width: '150px', height: '150px'}}>
                    </lord-icon>
                        <h3> Tomamos las Fotos </h3>
                        <p> Realizamos las mejores fotos para la publicación de su vehículo en toda nuestra red de trabajo. Ademas respondemos todas las consultas de las personas interesadas en el vehiculo</p>
                    </div>
                    <div className='col-md-4 icono'>
                    <lord-icon src="https://cdn.lordicon.com/pqxdilfs.json" trigger="hover" colors="outline:#131432,primary:#606874,secondary:#3080e8,tertiary:#ebe6ef" style={{width: '150px', height: '150px'}}>
                    </lord-icon>
                        <h3> Gestionamos la documentación </h3>
                        <p> Nos encargamos de generar, controlar y gestionar todos los documentos requeridos por las autoridades competentes para la correcta transferencia e inscripción de un automotor.</p>
                    </div>
                    <div className='col-md-4 icono'>
                    <lord-icon src="https://cdn.lordicon.com/hbwqfgcf.json" trigger="hover" colors="outline:#121331,primary:#e83a30,secondary:#ffc738,tertiary:#30e849" style={{width: '150px', height: '150px'}}>
                    </lord-icon>
                        <h3> Mejoramos su venta</h3>
                        <p> Lo asesoramos con toda nuestra experiencia y red de trabajo para que pueda potenciar el valor de su vehiculo y asi obtener un mejor precio por él</p>
                    </div>
                    </div>
                </div>
                <div className="custom-shape-divider-top-1675202250">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
                    </svg>
                    </div>

            </section>
            
        </>
    );
}

export default Animated;
