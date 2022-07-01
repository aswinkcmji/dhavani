import React from 'react';
import brand from '../assets/Dhavani.svg'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light border-bottom">
                <div className="container-fluid">
                    <a to="" className="navbar-brand ps-3" >
                        <img src={brand} alt=""  />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a href='#' className="nav-link" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a href='#collections' className="nav-link" >Collections</a>
                        </li>
                        <li className="nav-item">
                            <a href='#services' className="nav-link" >Services</a>
                        </li>
                        <li className="nav-item">
                            <a href='#home' className="nav-link" >Contact</a>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
