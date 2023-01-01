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
            <h1 className='text-4xl text-[#1565C0] text-center font-bold'>Projects</h1>
            <div className='projects-container'>
                

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