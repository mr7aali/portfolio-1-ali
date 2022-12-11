import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'
import Resume from '../../Assest/Sheikh Aali.pdf'

const Banner = () => {




    


    const handleType = (count: number) => {
        // console.log(count)
    }
    const handleDone = () => {
        // console.log(`Done after 5 loops!`)
    }



    return (
        <div className='  mb-10 mt-10 relative max-w-screen-xl	mx-auto	'>
            <div className="carousel w-full full-banner">



                <div id="item1" className="carousel-item w-full relative">

                    <div className='w-full img-gradient '>
                        <img alt='https://i.ibb.co/ckPPwGw/pexels-kampus-production-7983617.jpg' src='https://i.ibb.co/sKwzzRZ/pexels-enzo-mu-oz-2663853.jpg' className="w-full" />
                    </div>
                    <div className='absolute top-1/4 left-24 banner-h1'>
                        <h1 className=' text-6xl  text-white font-bold '>Discover my Amazing
                            {' '}

                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                          
                                <Typewriter
                                    words={['Art Space!...',]}
                                    loop={100}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                    onType={handleType}
                                />
                            </span>
                        </h1>

                        <p className='i-can-build-website'> I can build webside with {' '}
                            <span style={{ color: 'red' }}>
                               
                                <Typewriter
                                    words={[`Html5, JavaScript, react.js, node.js, firebase`]}
                                    loop={100}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                    onType={handleType}
                                />
                            </span>

                        </p>


                        <div className='banner-btns'>
                        <a href={Resume} tarGet="_blank" onPaste className='banner-btn text-center'>See Resume</a>
                     

                        <label htmlFor="my-modal-3" className='banner-btn text-center'>Contact With me</label>

                        </div>
                    </div>

                </div>






            </div>

         


        </div>
    );
};

export default Banner;