import React from 'react';
import NavBar from './NavBar/NavBar';
import './Land.css'
import { Icon } from '@iconify/react';
import Home from './Home/Home';
import Collection from './collection/Collection';
import Services from './Services/Services';

const Land = () => {
    return (
        <div>
            <header className='app-land-header bg-dark '>
                <p className='text-light text-center'>Now only for ladies</p>
                <div className="app-land-header-icons">
                    <a href="#"><Icon fontSize={20} icon="bxl:whatsapp" className='text-light me-3'/></a>
                    <a href="#"><Icon fontSize={20} icon="ant-design:instagram-outlined" className='text-light me-3'/></a>
                    <a href="#"><Icon fontSize={19} icon="carbon:phone" className='text-light me-3' /></a>
                    
                </div>
            </header>

            <nav className='app-land-navbar'>
                <NavBar/>
            </nav>

            <section className="app-land-home-section" id='home'>
                <Home/>
            </section>


            <section className='app-land-collection-section container-fluid' id='collections'>
                <Collection/>
            </section>

            <section className="app-land-services-section container-fluid" id='services'>
                <Services/>
            </section>
           

            {/* navigator */}
            <div className="navigator-top">
                <a href="#">
                <Icon fontSize={25} icon="akar-icons:arrow-up" color="white" />
                </a>
            </div>

        </div>
    );
}

export default Land;
