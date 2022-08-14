import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AddImportantLinks from './AddImportantLinks';

const ImportantLinks = ({userInfo}) => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Links</p>
            <div className='flex-[2]'>
                <div className='flex justify-between items-baseline'>
                    <div className='my-3'>
                        <p className="font-semibold text-secondary">Github</p>
                        <small className='text-primary'><a href="github.com/mahabubulislam/" target="_blank" rel='noreferrer'>github.com/mahabubulislam/</a></small>
                    </div>
                    <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
                </div>
                <label htmlFor="link-modal" className="modal-button btn btn-sm text-white">+ Add Link</label>
            </div>
            <div className='invisible lg:flex'>
                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
            </div>
            <AddImportantLinks user={userInfo}/>
        </div>
    );
};

export default ImportantLinks;