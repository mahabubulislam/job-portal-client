import React from 'react';
import banner from '../../assets/images/banner.png'
import { FiSearch } from 'react-icons/fi'
const Banner = () => {
    return (
        <section className='mb-10 bg-accent bg-opacity-10 py-10 rounded-xl'>
            <div className='flex justify-around items-center flex-col md:flex-row-reverse'>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div className='pl-0 md:pl-40 w-full md:w-1/2 '>
                    <h4 className='text-2xl text-accent font-semibold my-2 uppercase '>We have 15000+ jobs</h4>
                    <h1 className='text-3xl md:text-4xl font-bold my-2 uppercase '>Find your dream jobs with Job<span className='text-primary'>Haunt</span></h1>
                    <p className='text-accent my-2'>Find jobs, create trackable resumes and enrich your applications.Carefully crafted after analyzing the needs of different industries.</p>
                    <div className='flex flex-col md:flex-row rounded-lg'>
                        <input className='bg-white p-3 focus:outline-primary shadow-lg rounded-md' placeholder='Enter job title' type="text" name="" id="" />
                        <button className='flex btn items-center justify-center btn-primary px-2'>Find Job<FiSearch className='text-xl mx-2'></FiSearch></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;