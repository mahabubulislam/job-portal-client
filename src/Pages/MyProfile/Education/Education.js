import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AddEducation from './AddEducation';

const Education = ({ userInfo }) => {
    const educations = userInfo.education;
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Education</p>
            <div className='flex-[2]'>
                {
                    educations && educations.map(education =>
                        <div className='flex justify-between items-baseline'>
                            <div className='my-3'>
                                <p className="font-semibold text-secondary"><span>{education?.degree}</span>, {education?.subject}</p>
                                <p>{education?.institute}</p>
                                <small className='block'>{education?.year}</small>
                                {education?.result && <small className='block'>CGPA: {education?.result}</small>}
                            </div>
                            <div className='flex'>
                                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
                            </div>
                        </div>
                    )

                }
                <label htmlFor="education-modal" className="modal-button btn btn-sm text-white">+ Add Education</label>
            </div>
            <div className='hidden lg:flex invisible'>
                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
            </div>
            <AddEducation user={userInfo} />
        </div>
    );
};

export default Education;