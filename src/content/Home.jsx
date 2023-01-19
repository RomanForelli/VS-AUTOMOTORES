import React from 'react';
import SectionFour from '../Layout/SectionFour';
import SectionOne from '../Layout/SectionOne';
import SectionTwo from '../Layout/SectionTwo';
import "../Styles/Home.css"
import SectionFive from '../Layout/SectionFive';
import SectionTree from '../Layout/SectionTree';
import SectionServicios from '../Layout/SectionServicios';

const Home = () => {
    return (
        <>
        <div className='row'>
        <SectionOne/>
        <SectionTwo/>
        <SectionServicios/>
        <SectionTree/>
        <SectionFour/>
        <SectionFive/>
        </div>
        
        </>
    );
}

export default Home;
