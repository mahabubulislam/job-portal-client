import React from 'react';
import { BsFillInfoCircleFill, BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Courses from './Courses/Courses';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import ImportantLinks from './ImportantLinks/ImportantLinks';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const MyProfile = () => {
    return (
        <section className='w-full md:w-4/5 mx-auto py-10'>
            <section className='p-8 border rounded-md bg-blue-100 text-primary'>
                <p className="font-medium flex mb-3"><BsFillInfoCircleFill className='mr-2 text-xl' /><span>Applying to Remote JavaScript Developer Job at UpSocial Network</span></p>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <p className='w-full md:w-3/4'>This is the resume that the employer will see. Make sure it is up to date. You can add or edit details below.</p>
                    <button className="btn btn-primary text-white mt-5">Proceed to Application</button>
                </div>
            </section>
            <h4 className="text-3xl font-bold text-center text-secondary my-10">Resume</h4>
            <section className='my-10 p-3 md:p-20 border rounded-md'>
                <PersonalInfo/>
                <div className="divider"></div>
                <Education />
                <div className="divider"></div>
                <Experience/>
                <div className="divider"></div>
                <Skills />
                <div className="divider"></div>
                <Courses/>
                <div className="divider"></div>
                <Projects/>
                <div className="divider"></div>
                <ImportantLinks/>
            </section>
        </section>
    );
};

export default MyProfile;