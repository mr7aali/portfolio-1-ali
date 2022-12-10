import React from 'react';
import Leftside from '../LeftSide/Leftside';
import RightSide from '../RightSide/RightSide';
import './Home.css'
const Home = () => {
    return (
        <div className='full-home-container max-w-screen-xl mx-auto'>
            <div className="left-side-div">
                <Leftside></Leftside>
            </div>
            <div className="right-side-div">
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default Home;