import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'
const Blog = () => {
    return (
        <div className='Blog-page'>
            <h1 className='text-4xl font-bold '>Comming soon....</h1>
            <Link className='text-4xl text-primary font-bold' to='/'>Click </Link>
            
        </div>
    );
};

export default Blog;