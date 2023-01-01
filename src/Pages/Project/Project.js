import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Project.css'
const Project = () => {
    const [projests, setProjects] = useState(null);
    useEffect(() => {
        fetch('https://portfolio-1-server-mr7aali.vercel.app/')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='m-5'>
            <h1 className='text-3xl text-center font-bold'>Projects</h1>
            <div className='projects-container'>
                {/* 
                <div className='project'>
                    <div className="img-container">
                        <img src="https://i.ibb.co/88CCng2/xingye-jiang-i3eek-DPHd-RQ-unsplash.jpg" alt="" />
                    </div>
                    <div className="project-blg">
                        <h2>Astor</h2>
                        <p> Users can buy products as well as sell products if they want...
                            <span className='text-red-600'> Read more</span></p>

                        <div className='project-btn-container'>
                            <a target="_blank" href='https://mellifluous-crisp-9fb9ee.netlify.app/' className='Live-preview-btn'>Live view</a>
                            <Link to='/details'  className='Live-preview-btn'>See Details</Link>
                        </div>
                    </div>
                </div>


                <div className='project'>
                    <div className="img-container">
                        <img src="https://i.ibb.co/hd6SqyF/john-schnobrich-2-FPjl-Ay-MQTA-unsplash.jpg" alt="" />
                    </div>
                    <div className="project-blg">
                        <h2>bestSchool</h2>
                        <p> This website made for online courses &  user can download PDF...
                            <span className='text-red-600'> Read more</span></p>

                        
                        <div className='project-btn-container'>
                            <a target="_blank" href='https://magical-treacle-3300e8.netlify.app/' className='Live-preview-btn'>Live view</a>
                            <Link to='/details'  className='Live-preview-btn'>See Details</Link>
                        </div>
                    </div>
                </div>


                <div className='project'>

                    <div className="img-container">
                        <img src="https://i.ibb.co/b5Kf8PD/gritstrength-1.jpg" alt="" />
                    </div>
                    <div className="project-blg">
                        <h2>GemVast</h2>
                        <p>  User can see all reviews ,also add the reviews and edit theirs reviews
                            ...
                            <span className='text-red-600'> Read more</span></p>

                        
                        <div className='project-btn-container'>
                            <a target="_blank"href='https://flourishing-rolypoly-a9f61b.netlify.app/'className='Live-preview-btn'>Live view</a>
                            <Link to='/details'  className='Live-preview-btn'>See Details</Link>
                        </div>
                    </div>
                </div> */}
                {/* <ProjectCard 
                data={projests}
                ></ProjectCard> */}

                {
                    projests?.map(p => <ProjectCard
                        data={p}
                        key={p._id} 
                    ></ProjectCard>)
                }



            </div>
        </div>
    );
};

export default Project;