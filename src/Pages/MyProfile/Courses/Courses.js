import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AddCourses from './AddCourses';

const Courses = ({ userInfo }) => {
    const courses = userInfo?.courses
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Trainings / Courses</p>
            <div className='flex-[2]'>
                {
                    courses && courses.map((course,index) =>
                        <div key={index} className='flex justify-between items-baseline'>
                            <div className='my-3'>
                                <p className="font-semibold text-secondary">{course.name}</p>
                                <p>{course?.institute}</p>
                                <small className='block'>{course?.duration}</small>
                            </div>
                            <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
                        </div>
                    )
                }
                <label htmlFor="course-modal" className="modal-button btn btn-sm text-white">+ Add Courses/Trainings</label>
            </div>
            <div className='hidden lg:flex invisible'>
                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
            </div>
            <AddCourses user={userInfo} />
        </div>
    );
};

export default Courses;