import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import auth from '../../firebase.init';
import Courses from './Courses/Courses';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import ImportantLinks from './ImportantLinks/ImportantLinks';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [userInfo, setUserInfo] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/users/${user?.email}`)
            .then(res => setUserInfo(res.data))
    }, [])

    return (
        <section className='w-full md:w-4/5 mx-auto py-10'>
            <section className='p-8 border rounded-md bg-blue-100 text-primary'>
                <p className="font-medium flex mb-3"><BsFillInfoCircleFill className='mr-2 text-xl' /><span>Applying to Remote JavaScript Developer Job at UpSocial Network</span></p>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <p className='w-full md:w-3/4'>Whenever you apply to an internship or fresher job, this is the resume that the employer will see. Always make sure it is up to date.</p>
                    <button className="btn btn-primary text-white mt-5">Proceed to Application</button>
                </div>
            </section>
            <h4 className="text-3xl font-bold text-center text-secondary my-10">Resume</h4>
            <section className='my-10 p-3 md:p-20 border rounded-md'>
                <PersonalInfo userInfo={userInfo} />
                <div className="divider"></div>
                <Education userInfo={userInfo}/>
                <div className="divider"></div>
                <Experience userInfo={userInfo}/>
                <div className="divider"></div>
                <Skills userInfo={userInfo}/>
                <div className="divider"></div>
                <Courses userInfo={userInfo}/>
                <div className="divider"></div>
                <Projects userInfo={userInfo}/>
                <div className="divider"></div>
                <ImportantLinks userInfo={userInfo}/>
            </section>
        </section>
    );
};

export default MyProfile;