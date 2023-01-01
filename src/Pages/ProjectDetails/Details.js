import { Button } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Details.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
const Details = () => {
    const data = useLoaderData();

// console.log(data[0]);
// console.log(data[0].details);
data[0].details.map(p=>console.log(p))

    return (

        <div className='full-details max-w-screen-xl'>
            <h1 className='pt-20 h1-details text-center text-5xl font-bold text-primary pb-20'> Feature Of <span className='text-red-600'>{data.Name} </span></h1>
            {
                data[0]?.details.map((p, i) =>

                    <div className='details-blg'>
                        <p key={data._id}  className='text-2xl'>{i + 1}. {" "} {p}</p>
                    </div>


                )
            }
            <div className='link-div'>
                <Button variant="outlined"  color="success" endIcon={ <GitHubIcon/> } target={'_blank'} href={data[0]?.Links[0]?.gitClint}>GitHub Code Link</Button>
                <Button variant="contained" color="success" endIcon={<LanguageIcon/>} target={'_blank'} href={data[0]?.Links[0]?.liveWeb}>View live website</Button>
            </div>
            

            <h1 className='pt-10 h1-details text-center text-5xl font-bold text-primary pb-20'>Some Screenshots From<span className='text-red-600'> {data.Name}'s Page</span></h1>
            {/* <div className='details-blg pt-20'>

                <div className="card w-1/2 mx-auto glass">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>


            </div> */}

            <div className='details-picture pb-20'>
                {
                    data[0]?.photo.map(p =>
                        <div className='single-img'>
                            <img key={data._id} src={p} alt="" />
                        </div>
                    )
                }
            </div>
        </div>


    );
};

export default Details;