import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { BsGoogle, BsGithub } from 'react-icons/bs'
import { Navigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user,, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, , gitError] = useSignInWithGithub(auth);
    
    if (user || gitUser) {
        return <Navigate to='/' />
    }
    return (
        <>
            <div className='divider'>OR</div>
            {gitError && <small className='text-red-600 block'>{error?.message?.slice(10)}</small>}
            {error && <small className='text-red-600 block'>{error?.message?.slice(10)}</small>}
            <div className='flex flex-col md:flex-row justify-center'>
                <button className='btn btn-accent my-2 mr-0 md:mr-2 flex items-center hover:-translate-y-2 duration-200' onClick={() => signInWithGoogle()}><span className='mr-2'>Continue with Google</span><BsGoogle /></button>
                <button className='btn btn-accent my-2 ml-0 md:ml-2 flex items-center hover:-translate-y-2 duration-200' onClick={() => signInWithGithub()}><span className='mr-2'>Continue with Github</span><BsGithub /></button>
            </div>
        </>
    );
};

export default SocialLogin;