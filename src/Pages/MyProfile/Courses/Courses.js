import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Courses = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Trainings / Courses</p>
            <div className='flex-[2]'>
                <div className='flex justify-between items-baseline'>
                    <div className='my-3'>
                        <p className="font-semibold text-secondary">Complete Web Development with Jhankar Mahbub</p>
                        <p>Programming Hero</p>
                        <small className='block'>2021-2022</small>
                    </div>
                    <div className='flex lg:hidden'>
                        <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                        <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
                    </div>
                </div>
                <button className='btn btn-sm text-white'>+ Add Trainings/Projects</button>
            </div>
            <div className='hidden lg:flex'>
                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
            </div>
        </div>
    );
};

export default Courses;