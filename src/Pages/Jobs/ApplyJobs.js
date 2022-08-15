import React from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import MyProfile from '../MyProfile/MyProfile';

const ApplyJobs = () => {
    const {details} = useParams()
    console.log(details);
    return (
        <section>
            <section className='p-8 border rounded-md bg-blue-100 text-primary'>
                <p className="font-medium flex mb-3"><BsFillInfoCircleFill className='mr-2 text-xl' /><span>Applying to Remote JavaScript Developer Job at UpSocial Network</span></p>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <p className='w-full md:w-3/4'>Whenever you apply to an internship or fresher job, this is the resume that the employer will see. Always make sure it is up to date.</p>
                    <button className="btn btn-primary text-white mt-5">Proceed to Application</button>
                </div>
            </section>
            <MyProfile/>
        </section>
    );
};

export default ApplyJobs;