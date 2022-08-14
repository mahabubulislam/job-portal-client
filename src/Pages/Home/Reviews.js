import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import Review from './Review';
const Reviews = () => {
    const reviews = [1,2,3,4,5,6,7]
    return (
        <section>
            <h3 className='text-3xl text-secondary font-bold text-center'>Happy Candidates</h3>
            <p className='text-slate-500 mt-3 text-center'>Our happy candidates got their dream jobs from JobHaunt</p>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews?.map((review,index) =>
                        <SwiperSlide key={index}>
                            <Review  />
                        </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Reviews;