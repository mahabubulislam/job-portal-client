import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddEducation = ({ user }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        axios.patch(`http://localhost:5000/users/education/${user?.email}`, {
            education: data
        })
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    toast.success('Successfully Added')
                }
                else {
                    toast('Something went wrong, Please try again')
                }
            })
    };
    return (
        <section>
            <input type="checkbox" id="education-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-2xl text-secondary text-center font-medium">Add Education</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Degree Title</span>
                            <input type="text" className='input input-bordered w-full' {...register("degree")} placeholder='Your Exam Name'/>
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Field of Study</span>
                            <input type="text" className='input input-bordered w-full' {...register("subject")} placeholder='Your Subject'/>
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Institution Name</span>
                            <input type="text" className='input input-bordered w-full' {...register("institute")} placeholder="Your Institute Name" />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Result</span>
                            <input type="number" className='input input-bordered w-full' {...register("result")} placeholder="Your CGPA" />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Year</span>
                            <input type="text" className='input input-bordered w-full' {...register("year")} placeholder="From - To" />
                        </label>
                        <button type='submit' className='btn mt-5 text-white'>Add</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="education-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AddEducation;