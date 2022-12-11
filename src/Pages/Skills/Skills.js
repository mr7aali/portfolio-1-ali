import React, { useState } from 'react';

const Skills = () => {

const [value,setValue]=useState(null);
const [value2,setValue2]=useState(null);
const [value3,setValue3]=useState(null);
const [value4,setValue4]=useState(null);
const [value5,setValue5]=useState(null);
const [value6,setValue6]=useState(null);
const [value7,setValue7]=useState(null);



setTimeout(()=>{
    setValue(100);
    setValue2(98);
    setValue3(95);
    setValue4(85);
    setValue5(80);
    setValue6(100);
    setValue7(95);
},1400)

    return (
       <div className='skills-part'>
                <div className='p-container'>
                    <p>Residence:</p>
                    <p>Bangladesh</p>
                </div>
                <div className='p-container'>
                    <p>City:</p>
                    <p>Dhaka</p>
                </div>
                <div className='p-container'>
                    <p>Age:</p>
                    <p>21</p>
                </div>

                <div className="divider"></div>

                <div className='language'>
                    <div className='single-language-div'>
                        <div className="radial-progress" style={{ "--value": 99, "--size": "60px", "--thickness": "5px" }}>99%</div>
                        <h2>Bangla</h2>
                    </div>
                    <div className='single-language-div'>
                        <div className="radial-progress" style={{ "--value": 80, "--size": "60px", "--thickness": "5px" }}>80%</div>
                        <h2>English</h2>
                    </div>
                    <div className='single-language-div'>
                        <div className="radial-progress" style={{ "--value": 90, "--size": "60px", "--thickness": "5px" }}>90%</div>
                        <h2>Hindi</h2>
                    </div>

                </div>

                <div className="divider"></div>

                <div className='development-skills'>
                    <p>Html</p>
                    <progress className="progress w-full" value={value} max="100"></progress>
                    <p>CSS</p>
                    <progress className="progress w-full" value={value2} max="100"></progress>
                    <p>JavaScript</p>
                    <progress className="progress w-full" value={value3} max="100"></progress>
                    <p>React.Js</p>
                    <progress className="progress w-full" value={value4} max="100"></progress>
                    <p>Node.Js</p>
                    <progress className="progress w-full" value={value5} max="100"></progress>
                    <p>Bootstrap,Tailwind,DaysiUi</p>
                    <progress className="progress w-full" value={value6} max="100"></progress>
                    
                    <p>Firebase</p>
                    <progress className="progress w-full" value={value7} max="100"></progress>

                </div>
                



            </div>
    );
};

export default Skills;