import React from 'react';
import img1 from '../assets/10193.jpg'
import img2 from '../assets/13291.jpg'
import './Services.css'

const Services = () => {
    return (
        <div className='container-fluid mt-5 pt-5'>
            <h1 className='text-center'>Services</h1>
            <div className="services1 row">
                <div className="service-card col-12 col-md-6">
                    <img className='img-fluid' src={img1} alt="" />
                </div>
                <div className=" service-card col-12 col-md-6" >
                    <h2>Stitching</h2>
                    <p>We Stitch what your fasion</p>
                </div>
                
            </div>
            <div className="services row">
                    
                <div className=" service-card col-12 col-md-6" >
                    <h2>Readymades</h2>
                    <p>We provide you the best quality readymade ladies cloths</p>
                </div>
                <div className="service-card col-12 col-md-6">
                    <img className='img-fluid' src={img2} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Services;
