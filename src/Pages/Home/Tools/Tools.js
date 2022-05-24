import React from 'react';
import Tool from './Tool';



const Tools = () => {

    const tools = [
        {
            _id: 1,
            name: 'Electric Circular',
            orderQuantity: 20,
            availableQuantity: 2000,
            price: 100,
            description: '7 Inch Electric Circular Saw Household Aluminum Body Portable Woodworking Electric Saw ',
            img: "https://i.ibb.co/3YwFJjp/tools1.png"
        },
        {
            _id: 2,
            name: 'Power Saws',
            orderQuantity: 30,
            availableQuantity: 1500,
            price: 150,
            description: 'Circular Saw, with Electric Brake - Power Circular Saws',
            img: 'https://i.ibb.co/J28FgpG/tools2.png'
        },
        {
            _id: 3,
            name: 'Circular Saw',
            orderQuantity: 40,
            availableQuantity: 3000,
            price: 20,
            description: 'Table Saw Electric Saw Machine Flip Power Disk Saws',
            img: 'https://i.ibb.co/wsG129H/tools3.png'
        },
        {
            _id: 4,
            name: 'PRIME Electric Saw',
            orderQuantity: 50,
            availableQuantity: 3000,
            price: 100,
            description: 'Circular Saw, with Electric Brake - Power Circular Saws',
            img: 'https://i.ibb.co/LYwHXvk/tools4.png'
        },
        {
            _id: 5,
            name: 'Electric Metal Saw',
            orderQuantity: 50,
            availableQuantity: 1000,
            price: 300,
            description: 'Circular Saw, with Electric Brake - Power Circular Saws',
            img: 'https://i.ibb.co/b2tkhZb/tools5.png'
        },
        {
            _id: 6,
            name: 'Cordless Circular Saw',
            orderQuantity: 55,
            availableQuantity: 2000,
            price: 100,
            description: 'Circular Saw, with Electric Brake - Power Circular Saws',
            img: 'https://i.ibb.co/hyKXLj0/tools6.png'
        },
    ];
   
    return (
       <div className='my-28'>
           <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Tools</h3>
                <h2 className='text-4xl text-accent'>The tools that are available</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool=><Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
       </div>
    );
};

export default Tools;