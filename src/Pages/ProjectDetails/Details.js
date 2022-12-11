import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Details.css'
const Details = () => {
    const data = useLoaderData();

   

    return (

        <div className='full-details max-w-screen-xl'>
            <h1 className='pt-20 h1-details text-center text-5xl font-bold text-primary pb-20'> Feature Of <span className='text-red-600'>{data.Name} </span></h1>
            {
                data.details.map((p, i) =>

                    <div className='details-blg'>
                        <p key={data.id}  className='text-2xl'>{i + 1}. {" "} {p}</p>
                    </div>


                )
            }
            <div className='link-div'>
                <a target={'_blank'} href={data?.Links[0]?.gitClint}>GitHub Code Link</a>
                <a target={'_blank'} href={data?.Links[0]?.liveWeb}>View live website</a>
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
                    data.photo.map(p =>
                        <div className='single-img'>
                            <img key={data.id} src={p} alt="" />
                        </div>
                    )
                }
            </div>




        </div>


    );
};

export default Details;