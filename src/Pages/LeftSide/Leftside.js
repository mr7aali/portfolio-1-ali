import { Button } from '@mui/material';
import React from 'react';
import Skills from '../Skills/Skills';
import './LeftSide.css'

const Leftside = () => {
    return (
        <div className='left-side-div-positon'>
            <div className='left-side-container'>
                <div className='auth-details'>

                    <div className='img-Container'>
                        <img src="https://i.ibb.co/4JBGr3z/img-For-LIke-ID.jpg" alt="" />
                    </div>
                    <div className='name-container'>
                        <h1 className='text-lg font-bold text-[#091728]'>Sheikh Aali</h1>
                        <p className='text-[#1565C0]'>  Front-end Deweloper <br />
                            Ui/UX Designer</p>
                    </div>

                </div>


                <div className='aliiii'>
                    <Skills></Skills>
                </div>



                <div className='auth-footer'>
                    <Button size="small"  color="error" variant="outlined" target={'_blank'} href="https://github.com/mr7aali">gitHub</Button>
                    <Button size="small" color="info" sx={{}} variant="outlined" target={'_blank'} href="https://www.linkedin.com/in/mr7aali/">LinkedIn</Button>
                    <Button size="small"  color="secondary"  variant="outlined" target={'_blank'} href="https://www.facebook.com/mr07aali">Facebook</Button>
                </div>
            </div>
        </div>
    );
};

export default Leftside;