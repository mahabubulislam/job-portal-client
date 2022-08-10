import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Skills = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent min-w-min'>
            <p className="font-medium uppercase flex-1">Skills</p>
            <div className='flex-[2] mr-0 md:mr-[70px]'>
                <div className='grid  grid-cols-2 gap-x-20 gap-y-2'>
                    <div className='flex items-center justify-between'>
                        <p className='text-secondary font-medium'>React JS</p>
                        <RiDeleteBin6Line className='cursor-pointer'/>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-secondary font-medium'>Node JS</p>
                        <RiDeleteBin6Line/>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-secondary font-medium'>Express JS</p>
                        <RiDeleteBin6Line className='cursor-pointer'/>
                    </div>
                </div>
                <button className='btn btn-sm text-white mt-5'>+ Add Skills</button>
            </div>
        </div>
    );
};

export default Skills;