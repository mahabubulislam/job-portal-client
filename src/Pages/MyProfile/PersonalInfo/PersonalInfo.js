import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';

const PersonalInfo = () => {
    return (
        <div>
            <h6 className='text-xl font-semibold flex'>Mahabubul Islam <BsFillPencilFill className='ml-3 text-xl cursor-pointer' /></h6>
            <p className='text-accent'>mahabub2k1@gmail.com</p>
            <p className='text-accent'>+8801612737388</p>
            <p className='text-accent'>Dhaka, Bangladesh</p>
        </div>
    );
};

export default PersonalInfo;