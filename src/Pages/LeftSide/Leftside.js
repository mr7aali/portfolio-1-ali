import React from 'react';
import Skills from '../Skills/Skills';
import './LeftSide.css'

const Leftside = () => {
    return (
        <div className='left-side-div-positon'>
            <div className='left-side-container'>
                <div className='auth-details'>

                    <div className='img-Container'>
                        <img src="https://i.ibb.co/4JBGr3z/img-For-LIke-ID.jpg" alt="" />
                    </div>
                    <div className='name-container'>
                        <h1 className='text-lg font-bold '>Sheikh Aali</h1>
                        <p>Front-end Deweloper <br />
                            Ui/UX Designer</p>
                    </div>

                </div>


                <div className='aliiii'>
                    <Skills></Skills>
                </div>



                <div className='auth-footer'>
                    <p>Footer</p>
                </div>
            </div>
        </div>
    );
};

export default Leftside;