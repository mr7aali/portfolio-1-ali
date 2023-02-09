import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ContractMe from '../ContractMe/ContractMe';
import Contract from '../ContractWithPage/Contract';
import { Footer } from '../Footer/Footer';
import Project from '../Project/Project';

const RightSide = () => {
    return (
        <div>
           <Banner></Banner>
           <Project></Project>
           <Contract></Contract>
           <AboutMe></AboutMe>
           {/* <ContractMe/> */}
           <Footer/>
        </div>
    );
};

export default RightSide;