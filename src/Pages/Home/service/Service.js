import React from 'react';
import './Service.css'

const service = ({ service }) => {
    const { name, img, description, price } = service;

    return (
        <div className='service-container'>
            <img className='w-100' src={img} alt="" />
            <h2>{name} </h2>
            <p>price : {price} </p>
            <p><small>{description}</small></p>
            <button>Book {name} </button>
        </div>
    );
};

export default service;