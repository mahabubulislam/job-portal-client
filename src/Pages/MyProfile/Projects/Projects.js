import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AddProject from './AddProject';

const Projects = ({userInfo}) => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Projects</p>
            <div className='flex-[2]'>
                <div className='flex justify-between items-baseline'>
                    <div className='my-3'>
                        <p className="font-semibold text-secondary">Elite Manufacturer</p>
                        <small className='block'>2021-2022</small>
                        <small className='text-primary'><a href="https://bicycle-manufacturer.web.app/" rel="noreferrer" target="_blank">https://bicycle-manufacturer.web.app/</a></small>
                        <ul className='list-disc px-5'>
                            <li>lorem10</li>
                            <li>lorem10</li>
                            <li>lorem10</li>
                        </ul>
                    </div>
                        <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
                </div>
                <label htmlFor="project-modal" className="modal-button btn btn-sm text-white">+ Add Project</label>
            </div>
            <div className='invisible lg:flex'>
                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
            </div>
            <AddProject user={userInfo}/>
        </div>
    );
};

export default Projects;