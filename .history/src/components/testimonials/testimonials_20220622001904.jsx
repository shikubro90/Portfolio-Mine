import React from 'react';
import './testimonial.style.css'


const testimonials = () => {
    return (
        <section id='testimonial'>
            <h5>Review For Clients</h5>
            <h2>Testimonial</h2>

            <div className="container testimonial__container">
                <article className='testimonial'>
                    <div className="client_avatar">
                        <img src="" alt="" />
                        <h5>Name</h5>
                        
                    </div>
                </article>
            </div>
        </section>
    );
};

export default testimonials;