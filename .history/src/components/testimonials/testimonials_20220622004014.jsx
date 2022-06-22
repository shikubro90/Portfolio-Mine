import React from 'react';
import './testimonial.style.css'
import clientAvater


const testimonials = () => {
    return (
        <section id='testimonial'>
            <h5>Review For Clients</h5>
            <h2>Testimonial</h2>

            <div className="container testimonial__container">
                <article className='testimonial'>
                    <div className="client_avatar">
                        <img src="" alt="" />
                        <h5 className='client__name'>Name</h5>
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae officiis praesentium unde? Velit maiores commodi laboriosam possimus laudantium et distinctio. Quos dignissimos et reiciendis. Quibusdam amet maxime id officiis fugiat?</small>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default testimonials;