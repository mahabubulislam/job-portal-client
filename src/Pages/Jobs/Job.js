import React from 'react';
import { AiFillStar, AiOutlineDoubleRight } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'

const Job = () => {

  return (
    <div class="card my-10 card-compact bg-base-100 hover:shadow-xl rounded-md after:content-['Hello'] after:h-20 after:w-20 after:bg-primary after:absolute after:-m-10 after:-rotate-45 border hover:border-primary hover:-translate-y-2 ease-in-out duration-300">
      <h1 className='absolute text-xl top-2 left-2 text-white z-10'><AiFillStar /></h1>
      <div class="card-body">
        <div className='flex flex-col md:flex-row items-center justify-around'>
          <figure className='mt-8'>
            <img className='w-20 rounded-lg' src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div>
            <h2 class="card-title">Frontend Developer</h2>
            <p className='text-xl'>XYZ Limited</p>
          </div>
          <div className='flex items-center'>
            <MdLocationPin className='text-primary' />
            <p className='flex items-center'>Mirpur 10, Dhaka</p>
          </div>
          <div>
            <p>25000-40000/m BDT</p>
          </div>
          <div>
            <p className='py-px px-2 rounded-sm bg-violet-400 my-1 text-primary text-center'>Full time</p>
            <p className='py-px px-2 rounded-sm bg-accent my-1 text-center'>Urgent</p>
          </div>
        </div>
        <div class="card-actions px-10">
          <p>Experience: <small className='text-slate-700'>0-1 years</small></p>
          <button className='hover:text-primary flex items-center'><span className='mr-2'>Apply Now </span><AiOutlineDoubleRight /></button>
        </div>
      </div>
    </div>
  );
};

export default Job;