import axios from 'axios';
import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AddEducation from './AddEducation';

const Education = ({ userInfo }) => {
    const educations = userInfo.education;
    const deleteSwal = withReactContent(Swal);
    const deleteEducation = degree => {
        deleteSwal.fire({
            icon: 'error',
            title: 'Do you sure want to Delete?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then(result => {
            if (result.isConfirmed) {
                axios.put(`http://localhost:5000/users/education/${userInfo?.email}`, {
                    degree: degree
                })
                    .then(res => {
                        console.log(res)
                        if (res.data.modifiedCount === 1) {
                            toast.success('Successfully Deleted')
                        }
                        else {
                            toast('Something went wrong, Please try again')
                        }
                    })
            }
        })
    }
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Education</p>
            <div className='flex-[2]'>
                {
                    educations && educations.map((education,index) =>
                        <div key={index} className='flex justify-between items-baseline'>
                            <div className='my-3'>
                                <p className="font-semibold text-secondary"><span>{education?.degree}</span>, {education?.subject}</p>
                                <p>{education?.institute}</p>
                                <small className='block'>{education?.year}</small>
                                {education?.result && <small className='block'>CGPA: {education?.result}</small>}
                            </div>
                            <RiDeleteBin6Line onClick={() => deleteEducation(education?.degree)} className='mx-2 text-xl cursor-pointer' />
                        </div>
                    )
                }
                <label htmlFor="education-modal" className="modal-button btn btn-sm text-white">+ Add Education</label>
            </div>
            <div className='hidden lg:flex invisible'>
                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
            </div>
            <AddEducation className="mt-20" user={userInfo} />
        </div>
    );
};

export default Education;