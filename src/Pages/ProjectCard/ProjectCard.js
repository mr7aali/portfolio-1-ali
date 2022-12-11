import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({data}) => {

    return (
        <div className='project'>
        <div className="img-container">
            <img src={data.photo[0]} alt="" />
        </div>
        <div className="project-blg">
            <h2>{data?.Name}</h2>
            <p> {data.details[0]}...
                <span className='text-red-600'> Read more</span></p>

            <div className='project-btn-container'>
                <a tarGet="_blank" href='https://mellifluous-crisp-9fb9ee.netlify.app/' className='Live-preview-btn'>Live view</a>
                <Link to={`/details/${data?.id}`}  className='Live-preview-btn'>See Details</Link>
            </div>
        </div>
    </div>
    );
};

export default ProjectCard;