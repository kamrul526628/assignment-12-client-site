import React from 'react';
import pimg1 from '../../assets/images/p1.jpg';
import pimg2 from '../../assets/images/p2.jpg';
import pimg3 from '../../assets/images/p3.jpg';




const Project = () => {
   
    return (
      <div className='my-28 mx-12'>
          <h3 className='text-primary  text-4xl font-bold uppercase text-center my-20'>My Project</h3>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div>
                <a href="https://assignment-10-79d65.web.app/">
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={pimg1} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="text-center text-2xl">Photography website</h2>
                    
                </div>
                </div>
                </a>
            </div>
            <div>
                <a href="https://epic-dubinsky-6df329.netlify.app/">
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={pimg2} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="text-center text-2xl">Convention Hall</h2>
                    
                </div>
                </div>
                </a>
            </div>
            <div>
                <a href="https://kamrul526628.github.io/assignment-2/">
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={pimg3} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="text-center text-2xl">Influencer products</h2>
                    
                </div>
                </div>
                </a>
            </div>
          </div>
         

      </div>
    );
};

export default Project;