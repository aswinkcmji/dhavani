import React from 'react';
import img1 from '../assets/excited-ginger-lady-hat-holding-straw-bag-ecstatic-long-haired-girl-summer-outfit-enjoying-good-day.jpg'
import img2 from '../assets/full-length-shot-glad-curly-woman-striped-pants-jumping-purple-wall-indoor-portrait-wonderful-girl-sunglasses-fooling-around.jpg'
import img3 from '../assets/perky-girl-stylish-glasses-stares-amazement-walking-pink-wall-brunette-culottes-orange-blouse-posing-with-red-handbag.jpg'
import img4 from '../assets/young-woman-beautiful-red-dress.jpg'
import brandbig from '../assets/Dhavanibig.svg'
import brandmedium from '../assets/Dhavanimedium.svg'
import brandsmall from '../assets/Dhavanismall.svg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active text-light" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={img4} className="d-block w-100 img-fluid carousel-item-img" alt="..."/>
                        <div className="carousel-content text-light">
                            <img className='img-fluid carousel-content-img1' src={brandbig} alt="" />
                            <img className='img-fluid carousel-content-img2'  src={brandmedium} alt="" />
                            <img className='img-fluid carousel-content-img3'  src={brandsmall} alt="" />
                            <p>
                                We stitch your Fasion
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={img1} className="d-block w-100 img-fluid carousel-item-img" alt="..."/>                   
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100 img-fluid carousel-item-img" alt="..."/>                    
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <marquee loop="true" behavior="" direction="left"><h1>WE STITCH YOUR FASION</h1></marquee>
        </div>
    );
}

export default Home;
