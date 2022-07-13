import React from 'react';
import Job from './Job';

const Jobs = () => {
    const a = [1,2,3,4]
    return (
        <section className='p-5 md:p-10 lg:px-20'>
            {
                a.map(b=><Job/>)
            }
        </section>
    );
};

export default Jobs;