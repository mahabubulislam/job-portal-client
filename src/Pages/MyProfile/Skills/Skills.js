import axios from 'axios';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AddSkill from './AddSkill';

const Skills = ({ userInfo, refetch }) => {
    const skills = userInfo?.skills
    const deleteSwal = withReactContent(Swal);
    const deleteSkill = name => {
        deleteSwal.fire({
            icon: 'error',
            title: 'Do you sure want to Delete?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then(result => {
            if (result.isConfirmed) {
                axios.put(`http://localhost:5000/users/skills/${userInfo?.email}`, {
                    skill: name
                })
                    .then(res => {
                        if (res.data.modifiedCount === 1) {
                            refetch()
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
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent min-w-min'>
            <p className="font-medium uppercase flex-1">Skills</p>
            <div className='flex-[2] mr-0 md:mr-[70px]'>
                <div className='grid  grid-cols-2 gap-x-20 gap-y-2'>
                    {
                        skills && skills.map((skill,index) =>
                            <div key={index} className='flex items-center justify-between'>
                                <p className='text-secondary font-medium'>{skill?.name}</p>
                                <RiDeleteBin6Line onClick={()=>deleteSkill(skill?.name)} className='cursor-pointer' />
                            </div>
                        )
                    }
                </div>
                <label htmlFor="skill-modal" className="modal-button btn btn-sm mt-2 text-white">+ Add Skills</label>
            </div>
            <AddSkill user={userInfo} refetch={refetch}/>
        </div>
    );
};

export default Skills;