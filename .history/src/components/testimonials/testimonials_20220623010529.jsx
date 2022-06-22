import React from 'react';
import './testimonial.style.css'
import TestimonialCard from './TestimonialCard';
import clientAvatar from '../../assets/testimonial.json'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const testimonials = () => {
    return (
        <section id='testimonial'>
            <h5>Review For Clients</h5>
            <h2>Testimonial</h2>

            <Swiper className="container testimonial__container"/>
                {clientAvatar.map(({id,name,img,review})=>{
                    console.log(img)
                    return(
                        <SwiperSlide key={id}>
                            <TestimonialCard clientData={{id,name,img,review}} />
                        </SwiperSlide>
                    )
                })}
            <Swiper/>
        </section>
    );
};

export default testimonials;