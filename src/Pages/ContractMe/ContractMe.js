import { TextField } from '@mui/material';
import React from 'react';
import './ContractMe.css';
const ContractMe = () => {
    return (
        <div className='contractMe-container'>
            <div className='text-container'></div>
            <div className='form-container'>
                <form >

                    <div className='inputBox' style={{ position: 'relative', margin:'18px 0' }}>
                        <input type="text" required />
                        
                        <span>Name</span>
                    </div>


                    <div className='inputBox' style={{ position: 'relative' , margin:'18px 0' }}>
                        <input type="email"  required />
                        <span>Email</span>

                    </div>

                    <textarea type="text" placeholder='Type your message here' required />

                </form>
            </div>
        </div>
    );
};

export default ContractMe;