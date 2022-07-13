import React from 'react';
import { Link } from 'react-router-dom';
import Job from '../Jobs/Job';
import {BsArrowRightShort} from 'react-icons/bs'
const NewJobs = () => {
    const a = [1, 2, 3,]
    return (
        <section className='p-5 md:p-10 lg:px-20'>
            <h1 className='text-4xl text-center font-bold'>New Jobs</h1>
            <p className=' text-center '>Find the best job from Job<span className='text-primary'>Haunt</span></p>
            {
                a.map(b => <Job />)
            }
            <Link to='/jobs' className='btn btn-primary flex items-center  mb-5 w-3/4 md:w-1/3 xl:w-1/6 mx-auto'><span>View more </span><BsArrowRightShort className='text-xl'/></Link>
        </section>
    );
};

export default NewJobs;