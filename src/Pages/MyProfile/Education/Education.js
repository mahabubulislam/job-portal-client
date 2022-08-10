import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Education = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Education</p>
            <div className='flex-[2]'>
                <div className='flex justify-between items-baseline'>
                    <div className='my-3'>
                        <p className="font-semibold text-secondary">Diploma, Computer Science and Technology</p>
                        <p>Tangail Polytechnic Institute</p>
                        <small className='block'>2017-2021</small>
                        <small className='block'>CGPA: 3.46/4</small>
                    </div>
                    <div className='flex lg:hidden'>
                        <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                        <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
                    </div>
                </div>
                <button className='btn btn-sm text-white'>+ Add Education</button>
            </div>
            <div className='hidden lg:flex'>
                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
            </div>
        </div>
    );
};

export default Education;