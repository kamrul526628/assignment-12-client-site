import React from 'react';



const Skills = () => {
   
    return (
       <div className='my-28'>
           <div className='text-center'>
                <h3 className='text-primary  text-4xl font-bold uppercase'>My skills</h3>
                <h2 className='text-xl text-accent'>-What I Know-</h2>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className='flex justify-between'>
                            <h4>HTML</h4>
                            <h4>90%</h4>
                        </div>
                        <progress className="progress progress-secondary w-96" value="90" max="100"></progress><br/>
                        <div className='flex justify-between'>
                            <h4>CSS</h4>
                            <h4>80%</h4>
                        </div>
                        <progress className="progress progress-secondary w-96" value="80" max="100"></progress><br/>
                        <div className='flex justify-between'>
                            <h4>JS</h4>
                            <h4>80%</h4>
                        </div>
                        <progress className="progress progress-secondary w-96" value="80" max="100"></progress><br/>
                        <div className='flex justify-between'>
                            <h4>React</h4>
                            <h4>70%</h4>
                        </div>
                        <progress className="progress progress-secondary w-96" value="70" max="100"></progress><br/>
                        <div className='flex justify-between'>
                            <h4>Node Js</h4>
                            <h4>60%</h4>
                        </div>
                        <progress className="progress progress-secondary w-96" value="60" max="100"></progress><br/>
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">My creative skills & experiences.</h1>
                        <p className="py-6">I am a Programmer having years of experience in full stack web development, WordPress development and graphic designing. We are team of highly skilled full stack web developers as well. I can design branding for your startup and also re-design your branding.</p>
                    </div>
                    
                </div>
            </div>
       </div>
    );
};

export default Skills;