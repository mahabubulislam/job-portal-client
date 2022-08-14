import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AddExperience from './AddExperience';

const Experience = ({ userInfo }) => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Experience</p>
            <div className='flex-[2]'>
                <div className='flex justify-between items-baseline'>
                    <div className='my-3'>
                        <p className="font-semibold text-secondary">Web Developer</p>
                        <p>Tangail Polytechnic Institute</p>
                        <small className='block'>2021-2022</small>
                    </div>
                    <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
                </div>
                <label htmlFor="experience-modal" className="modal-button btn btn-sm text-white">+ Add Experience</label>
            </div>
            <div className='lg:flex invisible'>
                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
            </div>
            <AddExperience user={userInfo} />
        </div>
    );
};

export default Experience;