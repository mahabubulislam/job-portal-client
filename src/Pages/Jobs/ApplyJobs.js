import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import MyProfile from '../MyProfile/MyProfile';
import Loading from '../Shared/Loading/Loading';

const ApplyJobs = () => {
    const [user, loading] = useAuthState(auth)
    const { id } = useParams()
    const { data, isLoading } = useQuery(['job'], () => axios(`http://localhost:5000/jobs/${id}`))
  
    if (isLoading || loading) {
        return <Loading />
    }
    const { title, company } = data?.data
    const handleApplyJob = () => {
        if (user?.email) {
            axios.patch(`http://localhost:5000/jobs/${company}`, {
                user: user?.email
            })
                .then(res => {
                    if (res.data.message === 'exists') {
                       toast.error('Already Applied')
                    }
                    if(res.data.modifiedCount>0){
                        toast.success('Successfully Applied')
                    }
                })

        }
    }
    return (
        <section>
            <section className='p-8 border rounded-md bg-blue-100 text-primary'>
                <p className="font-medium flex mb-3"><BsFillInfoCircleFill className='mr-2 text-xl' /><span>Applying to {title} Job at {company}</span></p>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <p className='w-full md:w-3/4'>Whenever you apply to an internship or fresher job, this is the resume that the employer will see. Always make sure it is up to date.</p>
                    <button onClick={handleApplyJob} className="btn btn-primary text-white mt-5">Proceed to Application</button>
                </div>
            </section>
            <MyProfile />
        </section>
    );
};

export default ApplyJobs;