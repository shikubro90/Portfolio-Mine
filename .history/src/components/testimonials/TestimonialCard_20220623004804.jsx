import React from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TestimonialCard = ({id,name,img,review}) => {

    return (
        <div>
             <SwiperSlide className='testimonial'>
                <div className="client_avatar">
                    <img src={img} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
        </div>
    );
};

export default TestimonialCard;