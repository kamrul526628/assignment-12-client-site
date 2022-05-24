import React from 'react';
import customer from '../../../assets/images/users-solid.svg';
import review from '../../../assets/images/star-solid.svg';
import tools from '../../../assets/images/screwdriver-wrench-solid.svg';



const Summarys = () => {
    
    return (
        <div className='my-28'>
            <div className='text-center my-20'>
                <h3 className='text-primary text-xl font-bold uppercase'>why Trust Us</h3>
                <h2 className='text-4xl text-accent uppercase'>Try to Understand Users Expectation</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={customer} alt="Shoes" className="rounded-xl w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-accent">1000+</h2>
                        <p>customer</p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={review} alt="Shoes" className="rounded-xl w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-accent">50000+</h2>
                        <p>reviews</p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={tools} alt="Shoes" className="rounded-xl w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-accent">2000+</h2>
                        <p>tools</p>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Summarys;