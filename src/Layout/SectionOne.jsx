import React from 'react';
import videoauto from "../img/videoauto.mp4"
import { Link } from 'react-router-dom';


const SectionOne = () => {
    return (
        <>
        <section id='SectionOne'className='container-fluid m-0 p-0'>
            
            <video src={videoauto} autoPlay loop muted/>

            <div className='titulo mx-auto justifi-content-start align-items-start'>
            <h1 className='animate__animated animate__backInUp'> VS </h1>
            <h2 className='animate__animated animate__fadeInUp animate__delay-1s'> Automotores </h2>
            <h3 className='animate__animated animate__fadeInUp animate__delay-1s'> Gestoria y asesoramiento</h3>
            <Link to="Servicios"> <button className='btn neon animate__animated animate__bounceIn animate__delay-2s'> Saber mas 
            <div className='background'></div>
            </button></Link>
            </div>

        </section>
        
        </>
    );
}

export default SectionOne;
