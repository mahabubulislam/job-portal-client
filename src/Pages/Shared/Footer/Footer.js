import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section class="footer p-10 bg-secondary text-white">
                <div className='pl-10'>
                    <div className="flex-1 font-bold text-xl from-neutral-content"><span>Job</span><span className='text-primary'>Haunt</span></div>
                    <p>No. 1 Job Portal website in Bangladesh</p>
                    <p>15000+ Jobs</p>
                    <p>Trusted by 100K peoples</p>
                    <p>Verified Jobs</p>
                    <div class="grid grid-flow-col gap-4">
                        <p className='footer-title'>Follow us on</p>
                        <Link to='/' className='hover:text-accent'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                        <Link to='/' className='hover:text-accent'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                        <Link to='/' className='hover:text-accent'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                    </div>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <Link to='/about' class="link link-hover hover:scale-105 duration-300">About us</Link>
                    <Link to='/contact' class="link link-hover hover:scale-105 duration-300">Contact us</Link>
                    <Link to='/services' class="link link-hover hover:scale-105 duration-300">Services</Link>
                    <Link to='/blog' class="link link-hover hover:scale-105 duration-300">Blog</Link>
                </div>
                <div>
                    <span class="footer-title">Support</span>
                    <Link to='/' class="link link-hover hover:scale-105 duration-300">Help Center</Link>
                    <Link to='/' class="link link-hover hover:scale-105 duration-300">FAQ'S</Link>
                    <Link to='/' class="link link-hover hover:scale-105 duration-300">Privacy Policy</Link>
                </div>
            </section>
            <section class="footer footer-center p-4 text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved by JobHaunt</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;