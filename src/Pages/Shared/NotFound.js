import React from 'react';
import sleeping from '../../assets/images/sleeping.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Page not found</h2>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;