import React from 'react';
import './testimonial.style.css'
import TestimonialCard from './TestimonialCard';
import clientAvatar from '../../assets/testimonial.json'




const testimonials = () => {
    return (
        <section id='testimonial'>
            <h5>Review For Clients</h5>
            <h2>Testimonial</h2>

            <div className="container testimonial__container">
                {clientAvatar.map(({id,name,img,review})=>{
                    return(
                       <TestimonialCard key={id} clientData={{id,name,img,review}} />
                    )
                })}
            </div>
        </section>
    );
};

export default testimonials;