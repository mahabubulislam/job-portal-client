import React from 'react';

const Category = () => {
    return (
        <div class="card card-compact hover:text-accent hover:-translate-y-3 duration-300 ease-in-out cursor-pointer">
            <figure><img className='w-20' src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body text-center">
                <h2 class="text-xl">Technology</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default Category;