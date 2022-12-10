import React from 'react';

const Skills = () => {
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
                    <progress className="progress w-56" value="95" max="100"></progress>
                    <p>CSS</p>
                    <progress className="progress w-56" value="90" max="100"></progress>
                    <p>JavaScript</p>
                    <progress className="progress w-56" value="92" max="100"></progress>
                    <p>React.Js</p>
                    <progress className="progress w-56" value="85" max="100"></progress>
                    <p>Node.Js</p>
                    <progress className="progress w-56" value="80" max="100"></progress>
                    <p>Bootstrap,Tailwind,DaysiUi</p>
                    <progress className="progress w-56" value="100" max="100"></progress>
                    
                    <p>Firebase</p>
                    <progress className="progress w-56" value="90" max="100"></progress>

                </div>
                



            </div>
    );
};

export default Skills;