import React from 'react';
import videoauto from "../img/videoauto.mp4"


const SectionOne = () => {
    return (
        <>
        <section id='SectionOne'className='container-fluid m-0 p-0'>
            
            <video src={videoauto} autoPlay loop muted/>

            <div className='titulo mx-auto justifi-content-start align-items-start'>
            <h1> VS </h1>
            <h2> Automotores </h2>
            <h3> Gestoria y asesoramiento</h3>
            <button className='btn'> Saber mas</button>
            </div>

        </section>
        
        </>
    );
}

export default SectionOne;
