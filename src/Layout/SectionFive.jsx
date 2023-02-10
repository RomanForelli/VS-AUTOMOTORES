import React from 'react';
import banner from "../img/banner.png"

const SectionFive = () => {
    return (
        <>
            <section id='SectionFive' className='row imagenbanner'>
                <div className='container text-center align-items-center justify-content-center mx-auto divbanner'>
                <img className='img-fluid' src={banner} alt="Banner1" />
                </div>
            </section>
        </>
    );
}

export default SectionFive;
