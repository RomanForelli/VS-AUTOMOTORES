import React from 'react';
import SectionOne from '../Layout/SectionOne';
import "../Styles/Home.css"
import SectionFive from '../Layout/SectionFive';
import SectionHometwo from '../Layout/SectionHometwo';
import SectionHomeTree from '../Layout/SectionHomeTree';
import Animated from '../Layout/animated';
import Carrusel from '../Layout/Carrusel';


const Home = () => {
    return (
        <>
        <div className='row'>
        <SectionOne/>
        <SectionHometwo/>
        <SectionFive/>
        <SectionHomeTree/>
        <Animated/>
        <Carrusel/>
        
        </div>
        
        </>
    );
}

export default Home;
