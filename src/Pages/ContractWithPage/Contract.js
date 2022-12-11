import React from 'react';
import './Contract.css'
const Contract = () => {
    return (
        <div>



            <div>

                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold text-center m-5">Get in touch</h3>

                        {/* https://formsubmit.co/el/lecigo */}
                        <form action="https://formsubmit.co/6a2d25528b9b977f755217b9cf4a32a0" method="POST">

                            <div className='nameFild'>
                                <input type="text" name="name" required placeholder='Type your name' className="input input-bordered w-5/12 font-bold " />
                                <input type="email" name="email" required placeholder='Type your email' className="input input-bordered w-1/2  font-bold " />
                            </div>

                            {/* <div className='nameFild mt-5'>
                                <input type="text" className="input input-bordered mr-5 w-1/3" />
                                <input type="text" placeholder="Type here your  number" className="input input-bordered w-full " required />
                            </div> */}

                            <input type="text" placeholder=" Type your massege" className="input input-bordered w-full mt-5" required />


                            <div className='mt-5 text-center w-full'>
                                <button type="submit" className="btn btn-outline w-1/2 ">Click For send</button>
                            </div>


                        </form>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contract;