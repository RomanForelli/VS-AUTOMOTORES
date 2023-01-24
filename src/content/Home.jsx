import React from 'react';
import SectionOne from '../Layout/SectionOne';
import "../Styles/Home.css"
import SectionFive from '../Layout/SectionFive';
import SectionHometwo from '../Layout/SectionHometwo';
import SectionHomeTree from '../Layout/SectionHomeTree';


const Home = () => {
    return (
        <>
        <div className='row'>
        <SectionOne/>
        <SectionHometwo/>
        <SectionHomeTree/>
        <SectionFive/>
        </div>
        
        </>
    );
}

export default Home;
