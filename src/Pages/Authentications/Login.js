import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login.png'
const Login = () => {
    return (
        <section className='bg-blue-100'>
            <div class="flex flex-col-reverse lg:flex-row items-center justify-center my-10 p-0 md:p-10 w-full md:w-3/4 mx-auto bg-base-100 shadow-2xl rounded-lg">
                <div className='flex items-center flex-col'>
                    <h3 className='text-2xl font-bold mt-10'><span>Job</span><span className='text-accent'>Haunt</span></h3>
                    <img src={login} alt="Album" />
                </div>
                <div class="w-full">
                    <div className='p-5 text-center'>
                        <h2 class="text-2xl my-3">Welcome back !</h2>
                        <p>Sign in to continue  <span className='font-semibold'>Job</span><span className='text-accent font-semibold'>Haunt</span></p>
                    </div>
                    <form className='flex flex-col p-10'>
                        <label class="block">
                            <span class="block text-sm font-medium my-2">Email</span>
                            <input type="email" name='email' className='outline-none border-b-2 border-primary p-2 w-full lg:w-4/5' placeholder='Your Email' />
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium my-2">Password</span>
                            <input type="password" name='password' className='outline-none border-b-2 border-primary p-2 w-full lg:w-4/5' placeholder='Password' />
                        </label>
                        <label class="block my-2">
                            <Link to='reset-password' className='text-primary'><small>Forgot password?</small></Link>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium my-2">Don't have an account? <Link to='/signup' className='text-primary'>Signup</Link></span>
                        </label>
                        <input type="submit" value="Sign In" className='btn btn-primary my-4 mx-auto hover:-translate-y-2 duration-200' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;