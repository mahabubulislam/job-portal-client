import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddCourses = ({user}) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        axios.patch(`http://localhost:5000/users/courses/${user?.email}`, {
            courses: data
        })
            .then(res => {
                console.log(res);
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
            <input type="checkbox" id="course-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-2xl text-secondary text-center font-medium">Courses / Trainings</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Course / Training Name</span>
                            <input type="text" className='input input-bordered w-full' {...register("name")} placeholder='Your Course / Training Name' required/>
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Institution Name</span>
                            <input type="text" className='input input-bordered w-full' {...register("institute")} placeholder="Your Institute Name" required/>
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Duration</span>
                            <input type="text" className='input input-bordered w-full' {...register("duration")} placeholder="From - To" />
                        </label>
                        <button type='submit' className='btn mt-5 text-white'>Add</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="course-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AddCourses;