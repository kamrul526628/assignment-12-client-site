import React from 'react';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Summarys from '../Summary/Summarys';
import Tools from '../Tools/Tools';


const Home = () => {
   
    return (
       <div>
           <Banner></Banner>
           <Tools></Tools>
           <Summarys></Summarys>
           <Reviews></Reviews>
           <Contact></Contact>
           <Address></Address>
       </div>
    );
};

export default Home;