import React from 'react';
import { Link } from 'react-router-dom';
import forgotpassword from '../../assets/images/forgotpassword.png'
const ForgotPassword = () => {
    return (
        <section className='bg-blue-100'>
            <div class="flex flex-col-reverse lg:flex-row items-center justify-center my-10 p-0 md:p-10 w-full md:w-3/4 mx-auto bg-base-100 shadow-2xl rounded-lg">
                <div className='flex items-center flex-col'>
                    <h3 className='text-2xl font-bold mt-10'><span>Job</span><span className='text-accent'>Haunt</span></h3>
                    <img src={forgotpassword} alt="Album" />
                </div>
                <div class="w-full">
                    <div className='p-5 text-center'>
                        <h2 class="text-2xl my-3">Forgot password ?</h2>
                        <p>Reset your password with <span className='font-semibold'>Job</span><span className='text-accent font-semibold'>Haunt</span></p>
                    </div>
                    <div className='p-3 text-center bg-accent w-3/5 mx-auto rounded-lg'>
                        <p>Enter your Email and instructions will be sent to you!</p>
                    </div>
                    <form className='flex flex-col p-10'>
                        <label class="block mx-auto">
                            <span class="block text-sm font-medium my-2">Email</span>
                            <input type="email" name='email' className='outline-none border-b-2 border-primary p-2 w-full' placeholder='Your Email' />
                        </label>
                        <button className='btn mt-4 mx-auto'>Send mail</button>
                        <label class="block mx-auto">
                            <span class="block text-sm font-medium my-2">Remembered it? Go to <Link className='text-primary' to='/login'>Login</Link></span>
                        </label>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;