import React from 'react';
import SectionFour from '../Layout/SectionFour';
import SectionOne from '../Layout/SectionOne';
import SectionTree from '../Layout/SectionTree';
import SectionTwo from '../Layout/SectionTwo';
import "../Styles/Home.css"
import SectionFive from '../Layout/SectionFive';

const Home = () => {
    return (
        <>
        <div className='row'>
        <SectionOne/>
        <SectionTwo/>
        <SectionFour/>
        <SectionFive/>
        </div>
        
        </>
    );
}

export default Home;
