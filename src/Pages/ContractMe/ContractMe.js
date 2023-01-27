import { TextField } from '@mui/material';
import React from 'react';
import './ContractMe.css';
const ContractMe = () => {
    return (
        <div className='contractMe-container'>
            <div className='text-container'></div>
            <div className='form-container'>
                <form >


                    <input style={{
                      
                        height: "50px",

                    }} type="text" placeholder='Name' />
                   



                    <input
                        style={{
                            
                            height: "50px",

                        }}
                        type="email" placeholder='Email' />
                    <input
                        style={{
                            
                            height: "255px"
                        }}
                        type="text" placeholder='Type your message here' />
                </form>
            </div>
        </div>
    );
};

export default ContractMe;