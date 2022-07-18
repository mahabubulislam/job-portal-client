import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import Rating from 'react-rating';

const Review = () => {
    return (
        <div className="py-8 px-8 mt-20 flex-col justify-center items w-4/5 md:w-1/3 mx-auto rounded-md">
            <img className=" mx-auto h-16 w-16 rounded-full -mt-16 " src='https://api.lorem.space/image/face?hash=92310' alt="Customer" />
            <div className="text-center">
                <div>
                    <h6 className="text-lg text-black font-semibold mt-2">
                        Mahabubul Islam
                    </h6>
                    <p>Frontend Developer</p>
                    <div className='my-3'>
                        <Rating
                            initialRating={5}
                            emptySymbol={<BsStarFill></BsStarFill>}
                            fullSymbol={<BsStarFill style={{ color: '#facc15' }} />}
                            readonly
                        ></Rating>
                    </div>
                    <p className="font-medium ">
                        " Very well thought out and articulate communication.Clear milestones, deadlines and fast work. Patience. Infinite patience. Noshortcuts. Even if the client is being careless."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;