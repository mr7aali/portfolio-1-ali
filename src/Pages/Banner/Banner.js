import React from 'react';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'
import Resume from '../../Assest/Sheikh Aali.pdf'
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner = () => {

    const handleType = (count) => {
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
                        <Box className='banner-btns'>
                            <Button sx={{margin:'5px', cursor:'pointer' }} size="large" variant="contained" color="success" ><label style={{cursor:'pointer'}} variant="contained" htmlFor="my-modal-3" className='b anner-btn text-center '>Contact</label></Button>
                            <Button sx={{margin:'5px'}} size="large" variant="contained" color="error" href={Resume} target="_blank" onPaste className=' b anner-btn text-center'>Resume</Button>
                            <Button sx={{margin:'5px'}} size="large" variant="contained" href={"#about-me"} className='b anner-btn text-center'>About Me</Button>
                            <Button sx={{margin:'5px'}} size="large"  variant="contained" color="secondary" href='/blog' className='b anner-btn text-center'>Blogs</Button>
                        </Box>
                    </div>

                </div>






            </div>




        </div>
    );
};

export default Banner;