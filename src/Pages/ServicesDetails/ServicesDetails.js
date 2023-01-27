import React from 'react';
import { useNavigate } from 'react-router-dom'

const ServicesDetails = () => {
    const { ServicesId } = useNavigate()
    return (
        <div>
            <h2>Welcome To {ServicesId}</h2>
        </div>
    );
};

export default ServicesDetails;