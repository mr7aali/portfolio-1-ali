import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contract from '../ContractWithPage/Contract';
import Project from '../Project/Project';

const RightSide = () => {
    return (
        <div>
           <Banner></Banner>
           <Project></Project>
           <Contract></Contract>
           <AboutMe></AboutMe>
        </div>
    );
};

export default RightSide;