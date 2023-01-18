import React from 'react';
import videoauto from "../img/videoauto.mp4"


const SectionOne = () => {
    return (
        <>
        <section id='SectionOne'className='container-fluid m-0 p-0'>
            
            <video src={videoauto} autoPlay loop muted/>

            <div className='titulo'>
            <h1> VS </h1>
            <h2>  Automotores </h2>
            <h3> Gestoria y asesoramiento</h3>
            </div>

        </section>
        
        </>
    );
}

export default SectionOne;
