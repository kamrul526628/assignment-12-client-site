import React, { useEffect, useState } from 'react';
import Review from './Review';




const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect( ()=>{
        fetch('https://intense-cove-02685.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])
    
   
    return (
       <div className='my-28'>
           <div className='text-center'>
                
                <h2 className='text-4xl text-accent'>Our Reviews</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review=><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
       </div>
    );
};

export default Reviews;