import React from 'react';
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div id='about-me' className=' mt-40'>
            <h1 className='text-4xl text-center m-5 font-bold text-[#F46258]'>About me</h1>
            <div className='about-blg'>
                <div className='about-img'>
                    <img src="https://i.ibb.co/4JBGr3z/img-For-LIke-ID.jpg" alt="" srcset="" />
                </div>
                <h1 className='text-3xl font-bold'>Sheikh Aali</h1>
                <p className='text-lg mt-1'>Web Developer & Student</p>
                <p className='blg'>I am Ali, I am a student in the CSE department. I have completed my web development course from programming Hero and I have a good knowledge of c, c++, and problem-solving</p>
            </div>
        </div>
    );
};

export default AboutMe;