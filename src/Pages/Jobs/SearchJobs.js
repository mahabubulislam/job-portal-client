import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import Job from './Job';
const SearchJobs = () => {
    const {title} = useParams()
    const search= title.split('=');
    const { data, isLoading } = useQuery(['jobs'], () => axios(`http://localhost:5000/jobs/search?title=${search[1]}`))
    if(isLoading){
        return <Loading/>
    }
    const jobs =data?.data;
    return (
        <div className='w-4/5 mx-auto py-10'>
            <h1 className='text-3xl text-center font-semibold text-secondary'>Search Result for <span className='capitalize'>{search[1]}</span></h1>
            {
                jobs?.map(job=><Job key={job._id} job={job}/>)
            }
        </div>
    );
};

export default SearchJobs;