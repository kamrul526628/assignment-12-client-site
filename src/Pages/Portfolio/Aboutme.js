import React from 'react';




const Aboutme = () => {
   
    return (
       <div className='my-28'>
           <div className='text-center'>
                <h3 className='text-primary  text-4xl font-bold uppercase'>About me</h3>
                <h2 className='text-xl text-accent'>-Who I am-</h2>
            </div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/H7HRDwz/kamruzzaman.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 class="text-4xl font-bold">I'm Kamruzzaman and I'm a web developer</h1>
                    <p class="py-6">I am a Programmer having years of experience in full stack web development, WordPress development and graphic designing. We are team of highly skilled full stack web developers as well. I can design branding for your startup and also re-design your branding.</p>
                    <button class="btn btn-primary">Download CV</button>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Aboutme;