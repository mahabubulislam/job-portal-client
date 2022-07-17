import React from 'react';
import { RiComputerLine } from 'react-icons/ri';

const Category = () => {
    return (
        <div class="card card-compact hover:text-accent hover:-translate-y-3 duration-300 ease-in-out cursor-pointer">
            <div className='bg-indigo-100 w-1/3 mx-auto p-4 rounded-md'>
                <RiComputerLine className='text-5xl mx-auto'/>
            </div>
            <div class="card-body text-center">
                <h2 class="text-xl font-semibold">IT/Software</h2>
                <p>100+ Jobs</p>
            </div>
        </div>
    );
};

export default Category;