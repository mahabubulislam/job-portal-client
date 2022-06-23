import React from 'react';
import Category from './Category';

const Categories = () => {
    const categories = [1, 2, 3, 4, 5, 6,7,8]
    return (
        <section>
            <h2 className='text-3xl text-center font-bold '>Jobs Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-20 my-16'>
                {
                    categories.map(catogory => <Category />)
                }
            </div>
        </section>
    );
};

export default Categories;