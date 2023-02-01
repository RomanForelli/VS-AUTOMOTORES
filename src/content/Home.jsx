import React from 'react';
import SectionOne from '../Layout/SectionOne';
import "../Styles/Home.css"
import SectionFive from '../Layout/SectionFive';
import SectionHometwo from '../Layout/SectionHometwo';
import SectionHomeTree from '../Layout/SectionHomeTree';
import Animated from '../Layout/animated';


const Home = () => {
    return (
        <>
        <div className='row'>
        <SectionOne/>
        <SectionHometwo/>
        <Animated/>
        <SectionHomeTree/>
        <SectionFive/>
        </div>
        
        </>
    );
}

export default Home;
