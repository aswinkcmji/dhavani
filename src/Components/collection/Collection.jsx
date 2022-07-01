import React from 'react';
import shawl from '../assets/jeans.jpg'
import churidhar from '../assets/churidhar.jpg'
import leggins from '../assets/leggins.jpg'
import tops from '../assets/tops.jpg'
import './Collection.css'

const Collection = () => {
    return (
        <div>
            <div className="container-fluid collection  mb-5 pb-5">
                <h1 className='text-center  '>collections</h1>
                <div className="collection-card " >
                    <div className="card-div">
                        <div className="card-content">
                            <img className='' src={tops} alt="" />
                        </div>
                        <h3 className='ms-3'>Tops</h3>
                        <button className='btn btn-dark ms-3'>Show More</button>
                    </div>
                    <div className="card-div">
                        <div className="card-content">
                            <img className='' src={churidhar} alt="" />
                        </div>
                        <h3 className='ms-3'>Churidhar</h3>
                        <button className='btn btn-dark ms-3'>Show More</button>
                    </div>
                    <div className="card-div">
                        <div className="card-content">
                            <img className='' src={leggins} alt="" />
                        </div>
                        <h3 className='ms-3'>Leggins</h3>
                        <button className='btn btn-dark ms-3'>Show More</button>
                    </div>
                    <div className="card-div">
                        <div className="card-content">
                            <img className='' src={shawl} alt="" />
                        </div>
                        <h3 className='ms-3'>Tops</h3>
                        <button className='btn btn-dark ms-3'>Show More</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Collection;
