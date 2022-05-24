import React from 'react';



const Blogs = () => {
    
   
    return (
       <section className='px-12'>
           <div className='pt-12'>
               <h4 className='text-3xl'>1. How will you improve the performance of a React Application?</h4>
               <p>
                <span className='text-xl'><u>Answer:</u> </span>
                A. Keeping component state local where necessary.<br/>
                B. Memoizing React components to prevent unnecessary re-renders.<br/>
                C. Code-splitting in React using dynamic import()<br/>
                D. Windowing or list virtualization in React.<br/>
                E. Lazy loading images in React
               </p>
           </div>
           <div className='pt-12'>
               <h4 className='text-3xl'>2. What are the different ways to manage a state in a React application?</h4>
               <p>
                <span className='text-xl'><u>Answer:</u>  </span>
                There are four main types of state you need to properly manage in your React apps:<br/>
                A. Local state.<br/>
                b. Global state.<br/>
                C. Server state.<br/>
                D. URL state.
               </p>
           </div>
           <div className='pt-12'>
               <h4 className='text-3xl'>3. How does prototypical inheritance work?</h4>
               <p>
                <span className='text-xl'><u>Answer:</u>  </span>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
               </p>
           </div>
           <div className='pt-12'>
               <h4 className='text-3xl'>4. Why you do not set the state directly in React?</h4>
               <p>
                <span className='text-xl'><u>Answer:</u>  </span>
                One should never update the state directly because of the following reasons:<br/>
                A. If you update it directly, calling the setState() afterward may just replace the update you made.<br/>
                B. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.<br/>
                C. You will lose control of the state across all components.
               </p>
           </div>
           <div className='pt-12'>
               <h4 className='text-3xl'>5. What is a unit test? Why should write unit tests?</h4>
               <p>
                <span className='text-xl'><u>Answer:</u>  </span>
                The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
               </p>
           </div>
       </section>
    );
};

export default Blogs;