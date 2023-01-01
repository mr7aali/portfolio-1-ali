import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import DetailsOutlinedIcon from '@mui/icons-material/DetailsOutlined';
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
                   <Link to={`/details/${data?._id}`}> <span className='text-red-600'> Read more</span></Link>

                </p>

                <Box sx={{
                    // border:'1px solid red'
                }} className='project-btn-container'>
                    <Button  variant="outlined" endIcon={<LinkIcon/>} color="success" target="_blank" href={data?.Links[0]?.liveWeb}>Live Link</Button>
                    <Link to={`/details/${data?._id}`}><Button endIcon={<DetailsOutlinedIcon/>} variant="contained"> Details</Button></Link>
                    {/* <a target="_blank" href={data?.Links[0]?.liveWeb} className='Live-preview-btn'>Live view</a> */}
                    {/* <Link to={`/details/${data?._id}`} className='Live-preview-btn'>See Details</Link> */}
                </Box>
            </div>
        </div>
    );
};

export default ProjectCard;