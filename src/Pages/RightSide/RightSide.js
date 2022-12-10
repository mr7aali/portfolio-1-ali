import React from 'react';
import Banner from '../Banner/Banner';
import Contract from '../ContractWithPage/Contract';
import Project from '../Project/Project';

const RightSide = () => {
    return (
        <div>
           <Banner></Banner>
           <Project></Project>
           <Contract></Contract>
        </div>
    );
};

export default RightSide;