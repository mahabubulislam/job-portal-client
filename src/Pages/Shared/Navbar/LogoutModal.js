import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../../firebase.init';

const LogoutModal = () => {
    return (
        <div>
            <input type="checkbox" id="logoutModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box relative">
                    <h3 class="font-bold text-lg">Sign out?</h3>
                    <p class="py-4">Are you sure you want to sign out?</p>
                    <div class="flex justify-around items-center">
                        <label onClick={()=>signOut(auth)} htmlFor="logoutModal" class="btn btn-ghost">Yes</label>
                        <label htmlFor="logoutModal" class="btn btn-ghost"><span className='text-primary'>Cancel</span></label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LogoutModal;