import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { BsGoogle, BsGithub } from 'react-icons/bs'
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    return (
        <>
            <div className='divider'>OR</div>
            <div className='flex flex-col md:flex-row justify-center'>
                <button className='btn btn-accent my-2 mr-0 md:mr-2 flex items-center hover:-translate-y-2 duration-200' onClick={() => signInWithGoogle()}><span className='mr-2'>Continue with Google</span><BsGoogle /></button>
                <button className='btn btn-accent my-2 ml-0 md:ml-2 flex items-center hover:-translate-y-2 duration-200' onClick={() => signInWithGithub()}><span className='mr-2'>Continue with Github</span><BsGithub /></button>
            </div>
        </>
    );
};

export default SocialLogin;