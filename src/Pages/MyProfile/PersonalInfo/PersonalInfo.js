import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsFillPencilFill } from 'react-icons/bs';
import auth from '../../../firebase.init';
import EditPersonalInfo from './EditPersonalInfo';

const PersonalInfo = ({userInfo}) => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h6 className='text-xl font-semibold flex'>{user?.displayName}  <label htmlFor="personal-inf-modal" className="modal-button"><BsFillPencilFill className='ml-3 text-xl cursor-pointer' /></label></h6>
            <p className='text-accent'>{user?.email}</p>
            <p className='text-accent'>{userInfo?.phoneNumber && `+${userInfo?.phoneNumber}`}</p>
            <p className='text-accent'>{userInfo?.address}</p>
            <EditPersonalInfo user={userInfo}/>
        </div>
    );
};

export default PersonalInfo;