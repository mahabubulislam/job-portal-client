import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import { RiMenu3Fill } from 'react-icons/ri'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import LogoutModal from './LogoutModal';
import Loading from '../Loading/Loading';

const Navbar = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    
    if(loading){
        return <Loading/>
    }
    const NavLink =
        <>
            <li><CustomLink to="/">Home</CustomLink></li>
            <li><CustomLink to="/jobs">Jobs</CustomLink></li>
            <li><CustomLink to="/blog">Blog</CustomLink></li>
            <li><CustomLink to="/contact">Contact</CustomLink></li>
            {!user && <li><CustomLink to="/login">Login</CustomLink></li>}
        </>

    return (
        <header>
            <nav className="drawer">
                <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-base-100 px-0 md:px-20 sticky top-0 z-[9999] shadow-md">
                        <div className='navbar-start'>
                            <div className="flex-1 px-2 mx-2 font-bold text-xl from-neutral-content"><span>Job</span><span className='text-primary'>Haunt</span></div>
                        </div>
                        <div className="flex-none hidden md:block navbar-center">
                            <ul className="menu menu-horizontal ">
                                {NavLink}
                            </ul>
                        </div>
                        <div className='navbar-end'>
                            <div className="flex-none md:hidden">
                                <label htmlFor="navbar-drawer" className="btn btn-square btn-ghost">
                                    <RiMenu3Fill className='text-xl text-black'></RiMenu3Fill>
                                </label>
                            </div>
                            {
                                user && <div className="dropdown dropdown-end">
                                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL || "https://api.lorem.space/image/face?hash=33791"} alt='' />
                                        </div>
                                    </label>
                                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                                        <li><Link className='bg-base-100 hover:text-primary hover:translate-x-1 delay-75' to='/my-profile'>My Profile</Link></li>
                                        <li><div className="indicator bg-base-100 hover:text-primary hover:translate-x-1 delay-75">Notifications
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                            <span className="badge badge-xs badge-info py-2 rounded-full indicator-item">5</span>
                                        </div></li>
                                        <li><Link className='bg-base-100 hover:text-primary hover:translate-x-1 delay-75' to='bookmark'>Bookmark Jobs</Link></li>
                                        <li><Link className='bg-base-100 hover:text-primary hover:translate-x-1 delay-75' to='applied-jobs'>Applied Jobs</Link></li>
                                        <li><label htmlFor="logoutModal" className="bg-base-100 hover:text-primary hover:translate-x-1 delay-75">Sign Out</label></li>
                                    </ul>
                                </div>
                            }

                        </div>
                    </div>
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-3/4 bg-base-100">
                        {NavLink}
                    </ul>
                </div>
            </nav>
            <LogoutModal />
        </header>
    );
};

export default Navbar;