import React from 'react';



const Review = ({review}) => {
   
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
            <div className="flex items-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img}  alt="Shoes"/>
                    </div>
                </div>
                <div className='px-5'>
                <h2 className="card-title ">{review.name}</h2>
                <p>{review.star} Star</p>
                </div>
            </div>
          
          
          <p>{review.review}</p>
          
        </div>
      </div>
    );
};

export default Review;