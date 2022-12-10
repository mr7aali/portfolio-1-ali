import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'


const Banner = () => {




    let code = '<code>'



    const handleType = (count: number) => {
        console.log(count)
    }
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }



    return (
        <div className='  mb-10 mt-10 relative max-w-screen-xl	mx-auto	'>
            <div className="carousel w-full full-banner">



                <div id="item1" className="carousel-item w-full relative">

                    <div className='w-full img-gradient '>
                        <img alt='https://i.ibb.co/ckPPwGw/pexels-kampus-production-7983617.jpg' src='https://i.ibb.co/sKwzzRZ/pexels-enzo-mu-oz-2663853.jpg' className="w-full" />
                    </div>
                    <div className='absolute top-1/4 left-24 banner-h1'>
                        <h1 className='sm:text-xl lg:text-6xl  text-white font-bold '>Discover my Amazing
                            {' '}

                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
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
                                {/* Style will be inherited from the parent element */}
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


                        {/* <div className='banner-btn'>
                            <Link to='/course' className="btn btn-primary text-center mt-16 mx-auto ">Get Course</Link>
                        </div> */}
                        <button className="btn btn-outline btn-error banner-btn">Download Resume</button>
                    </div>

                </div>


                {/* <div id="item2" className="carousel-item w-full relative">

                    <div className='w-full img-gradient h-4/5 rounded-lg'>
                        <img alt='https://i.ibb.co/P54wjFC/gym-equipment-accessories-on-stone-260nw-1644136534.webp ' src='https://i.ibb.co/tQWYpgG/pexels-tranmautritam-68761.jpg' className="w-full" />
                    </div>
                    <div className='absolute top-1/4 left-24 banner-h1'>
                        <h1 className='text-6xl text-center text-white font-bold '> Transform <br /> <span className='text-red-700'>your life</span> through education</h1>
                        <p className='text-white text-center mt-20  text-2xl'>Better education opens up a new wave of opportunities and it is now more relevant than ever <br /> in the times we live in where technology and education ensure that opportunities are no longer limited by geography.</p>

                        <div className='banner-btn'>
                        <Link to='/course' className="btn btn-primary text-center mt-16 mx-auto ">Get Course</Link>
                        </div>
                    </div>

                </div>


                <div id="item3" className="carousel-item w-full relative">

                    <div className='w-full img-gradient h-4/5 rounded-lg'>
                        <img alt='https://i.ibb.co/P54wjFC/gym-equipment-accessories-on-stone-260nw-1644136534.webp ' src='https://i.ibb.co/Y20y2R9/pexels-pixabay-247819.jpg' className="w-full" />
                    </div>
                    <div className='absolute top-1/4  banner-h1'>
                        <h1 className='text-6xl text-center text-white font-bold '>Learn without <br /> <span className='text-red-700'>limits</span></h1>
                        <p className='text-white text-center mt-20  text-2xl'>Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.

                            .</p><div className='banner-btn'>
                            <Link to='/course' className="btn btn-primary text-center mt-16 mx-auto ">Get Course</Link>
                        </div>
                    </div>

                </div> */}





            </div>

            {/* 
            <div className="flex justify-center w-full py-2 gap-2 absolute bottom-5  banner-Button">
                <a href="#item1" >
                    <button onClick={handleBtnClass1} className={`btn btn-outline btn-circle ${btnClass1 ? 'bg-success' : ''}`}>1</button>
                </a>
                <a href="#item2" >
                    <button onClick={handleBtnClass2} className={`btn btn-outline btn-circle ${btnClass2 ? 'bg-success' : ''}`}>2</button>
                </a>
                <a href="#item3" >
                    <button onClick={handleBtnClass3} className={`btn btn-outline btn-circle ${btnClass3 ? 'bg-success' : ''}`}>3</button>
                </a>

            </div> */}



        </div>
    );
};

export default Banner;