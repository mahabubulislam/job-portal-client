import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../assets/images/signup.png'
const Signup = () => {
    const [agree, setAgree] = useState(false)
    return (
        <section className='bg-blue-100'>
            <div class="flex flex-col-reverse lg:flex-row items-center justify-center my-10 p-0 md:p-10 w-full md:w-3/4 mx-auto bg-base-100 shadow-2xl">
                <div className='flex items-center flex-col'>
                    <h3 className='text-2xl font-bold mt-10'><span>Job</span><span className='text-primary'>Haunt</span></h3>
                    <img src={signup} alt="Album" />
                </div>
                <div class="w-full">
                    <div className='p-5'>
                        <h2 class="text-2xl">Let's Get Started</h2>
                        <p>Sign Up and get access to all the features of <span className='font-semibold'>Job</span><span className='text-primary font-semibold'>Haunt</span></p>
                    </div>
                    <form className='flex flex-col p-10'>
                        <label class="block">
                            <span class="block text-sm font-medium my-2">Username</span>
                            <input type="text" name='name' className='outline-none border-b-2 border-primary p-2 w-full lg:w-4/5' placeholder='Your Name' />
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium my-2">Email</span>
                            <input type="email" name='email' className='outline-none border-b-2 border-primary p-2 w-full lg:w-4/5' placeholder='Your Email' />
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium my-2">Password</span>
                            <input type="password" name='password' className='outline-none border-b-2 border-primary p-2 w-full lg:w-4/5' placeholder='Password' />
                        </label>
                        <label class="block my-2">
                            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" className='mr-auto my-2' />
                            <span className='ml-2'>I agree to the Terms and conditions</span>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium my-2">Already have an account? <Link to='/login' className='text-primary'>Login</Link></span>
                        </label>
                        <input disabled={!agree} type="submit" value="Signup" className='btn btn-primary my-4 mx-auto hover:-translate-y-2 duration-200' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Signup;