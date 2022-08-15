import React from 'react';
import { AiOutlineHome, AiOutlinePlayCircle } from 'react-icons/ai';
import { BsBoxArrowUpRight, BsFillInfoCircleFill } from 'react-icons/bs';
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { GiSandsOfTime } from 'react-icons/gi'
import { Link, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { details } = useParams()
    console.log(details);
    return (
        <section className='w-4/5 mx-auto py-10'>
            <h4 className="text-3xl font-bold text-center">Frontend Developer at XYZ Limited</h4>
            <section className='my-10 p-5 border rounded-md'>
                <h6 className='text-xl font-semibold'>Frontend Developer</h6>
                <p className='font-semibold text-accent my-2'>XYZ Limited</p>
                <p className='flex items-center my-3'><AiOutlineHome /> <span className='mx-2'>Work From Home</span></p>
                <div className='flex flex-col md:flex-row justify-between w-1/2'>
                    <div>
                        <p className='flex items-center uppercase text-accent font-medium'><AiOutlinePlayCircle /><span className='mx-2'>Start Date</span></p>
                        <p>Immediately</p>
                    </div>
                    <div>
                        <p className='flex items-center uppercase text-accent font-medium'><FaMoneyCheckAlt /><span className='mx-2'>Salary</span></p>
                        <p>$ 400</p>
                    </div>
                    <div>
                        <p className='flex items-center uppercase text-accent font-medium'><GiSandsOfTime /><span className='mx-2'>Apply By</span></p>
                        <p>20 August</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div>
                    <p className="font-medium">About XYZ</p>
                    <small className='text-primary flex items-center'> <a href="#" target="_blank">Website</a><BsBoxArrowUpRight className='ml-2' /></small>
                    <p className='my-2'>UpSocial brings the creators and their community closer through a secured, decentralized, and scalable version of Web 3.0 on the blockchain, while rewarding the community with exclusive content, private chat rooms, and presales of limited-edition merchandise.</p>
                </div>
                <div className='mt-5'>
                    <p className="font-semibold my-2">About the Job</p>
                    <p className='text-accent'>Key Responsibilities</p>
                    <ol className='list-decimal p-4'>
                        <li>Identifying web-based user interactions</li>
                        <li>Identifying web-based user interactions</li>
                        <li>Identifying web-based user interactions</li>
                        <li>Identifying web-based user interactions</li>
                        <li>Identifying web-based user interactions</li>
                    </ol>
                </div>
                <div className='mt-5'>
                    <p className="font-semibold my-2">Required Skills</p>
                    <div className="btn btn-sm mr-2">React</div>
                    <div className="btn btn-sm mr-2">Node JS</div>
                    <div className="btn btn-sm mr-2">MongoDB</div>
                    <div className="btn btn-sm mr-2">Express JS</div>
                </div>
                <div className='mt-5'>
                    <p className="font-semibold">Who can apply</p>
                    <ol className='list-decimal px-4'>
                        <li> Experience implementing applications using React.js</li>
                        <li> Experience implementing applications using React.js</li>
                        <li> Experience implementing applications using React.js</li>
                        <li> Experience implementing applications using React.js</li>
                        <li> Experience implementing applications using React.js</li>
                        <li> Experience implementing applications using React.js</li>
                    </ol>
                </div>
                <div className='mt-5'>
                    <p className="font-medium">Vacancy</p>
                    <p>3</p>
                </div>
                <button className="btn btn-primary block mt-5 mx-auto"><Link to={`/jobs/${details}/apply`}>Apply Now</Link></button>
            </section>
            <section className='p-8 border rounded-md bg-yellow-100'>
                <p className="font-medium flex items-center mb-3"><BsFillInfoCircleFill className='mr-2'/>Save yourself from fraud!</p>
                <p>If an employer asks you to pay any security deposit, registration fee, laptop fee, etc., do not pay and notify us immediately. Remember, JobHaunt doesn't charge a fee from the students to apply to a job or an internship & we don't allow other companies to do so either.</p>
            </section>
        </section>
    );
};

export default JobDetails;