import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ data }) => {
console.log(data?.Links[0]?.liveWeb)
    return (
        <div className='project'>
            <div className="img-container">
                <img src={data.photo[0]} alt="" />
            </div>
            <div className="project-blg">
                <h2>{data?.Name}</h2>
                <p> {data.details[0]}...
                   <Link to={`/details/${data?.id}`}> <span className='text-red-600'> Read more</span></Link>

                </p>

                <div className='project-btn-container'>
                    <a target="_blank" href={data?.Links[0]?.liveWeb} className='Live-preview-btn'>Live view</a>
                    <Link to={`/details/${data?.id}`} className='Live-preview-btn'>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;