import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import DetailsOutlinedIcon from '@mui/icons-material/DetailsOutlined';
const ProjectCard = ({ data }) => {
console.log(data)
    return (
        <div className='project'>
            <div className="img-container">
                <img src={data.photo[0]} alt="" />
            </div>
            <div className="project-blg">
                <h2 className='text-[#1B5E20] text-center text-3xl'>{data?.Name}</h2>
                <p className='text-[#000] mt-5'> {data.details[0]}...
                   <Link to={`/details/${data?._id}`}> <span className='text-red-600'> Read more</span></Link>

                </p>

                <Box sx={{
                
                }} className='project-btn-container'>
                    <Button  variant="outlined" endIcon={<LinkIcon/>} color="success" target="_blank" href={data?.Links[0]?.liveWeb}>Live Link</Button>
                    <Link to={`/details/${data?._id}`}><Button endIcon={<DetailsOutlinedIcon/>} variant="contained"> Details</Button></Link>
                    
                </Box>
            </div>
        </div>
    );
};

export default ProjectCard;