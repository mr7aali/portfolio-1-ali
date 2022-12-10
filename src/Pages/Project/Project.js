import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'
const Project = () => {
    return (
        <div className='m-5'>
            <h1 className='text-3xl font-bold'>Projects</h1>
            <div className='projects-container'>

                <div className='project'>
                    <div className="img-container">
                        <img src="https://i.ibb.co/88CCng2/xingye-jiang-i3eek-DPHd-RQ-unsplash.jpg" alt="" />
                    </div>
                    <div className="project-blg">
                        <h2>Astor</h2>
                        <p> Users can buy products as well as sell products if they want...
                             <span className='text-red-600'> Read more</span></p>

                    <Link className='Live-preview-btn'>Live Preview</Link>
                    </div>
                </div>
                <div className='project'>
                    <div className="img-container">
                        <img src="https://i.ibb.co/88CCng2/xingye-jiang-i3eek-DPHd-RQ-unsplash.jpg" alt="" />
                    </div>
                    <div className="project-blg">
                        <h2>Astor</h2>
                        <p> Users can buy products as well as sell products if they want...
                             <span className='text-red-600'> Read more</span></p>

                    <Link className='Live-preview-btn'>Live Preview</Link>
                    </div>
                </div>
                <div className='project'>
                    
                    <div className="img-container">
                        <img src="https://i.ibb.co/88CCng2/xingye-jiang-i3eek-DPHd-RQ-unsplash.jpg" alt="" />
                    </div>
                    <div className="project-blg">
                        <h2>Astor</h2>
                        <p> Users can buy products as well as sell products if they want...
                             <span className='text-red-600'> Read more</span></p>

                    <Link className='Live-preview-btn'>Live Preview</Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Project;