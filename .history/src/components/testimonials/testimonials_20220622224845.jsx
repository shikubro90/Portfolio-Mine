import React from 'react';
import './testimonial.style.css'
import clientAvatar from '../../assets/testimonial.json'


const testimonials = () => {
    return (
        <section id='testimonial'>
            <h5>Review For Clients</h5>
            <h2>Testimonial</h2>

            <div className="container testimonial__container">
                {clientAvatar.map(({id,name,img,review})=>{
                    return(
                        <article className='testimonial'>
                            <div className="client_avatar">
                                <img src={img} alt="" />
                                <h5 className='client__name'>{name}</h5>
                            </div>
                            <small>{review}</small>
                        </article>
                    )
                })}
            </div>
        </section>
    );
};

export default testimonials;