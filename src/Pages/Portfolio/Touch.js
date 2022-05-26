import React from 'react';
import contact from '../../assets/images/showcase.svg'




const Touch = () => {
   
    return (
       <div>
           <div className='text-center'>
                <h3 className='text-primary  text-4xl font-bold uppercase'>Contact me</h3>
                <h2 className='text-xl text-accent'>-Get In Touch-</h2>
            </div>
           <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={contact} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h3>If you have any questions, Feel free to contact me</h3>
                    <h5 className='text-xl'>Name:</h5>
                    <p>Kamruzzaman</p>
                    <h5 className='text-xl'>Address:</h5>
                    <p>Jamalpur, Bangladesh</p>
                    <h5 className='text-xl'>Email:</h5>
                    <p>kamrulhasan526628@gmail.com</p>
                </div>
            </div>
            </div>
       </div>
    );
};

export default Touch;