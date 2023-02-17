import React from 'react';
import SectionFour from '../Layout/SectionFour';
import SectionServicios from '../Layout/SectionServicios';
import SectionTree from '../Layout/SectionTree';
import "../Styles/Home.css"

const Servicios = () => {
    return (
        <>  
            <div id='Servicios'>
            <SectionServicios/>
            <SectionTree/>
            <SectionFour/>
            </div>

        </>
    );
}

export default Servicios;
