import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Project.css'
const Project = () => {
    const [projests, setProjects] = useState(null);
    const [Loding, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://portfolio-1-server-mr7aali.vercel.app/')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false)
            }

            )
    }, [])


    return (

        <div className='m-5'>
            <h1 className='text-4xl text-[#1565C0] text-center font-bold'>Projects</h1>
            {
                Loding &&
                <div className='w-1/4 mx-auto mt-20'>
                    <LinearProgress />
                </div>
            }
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