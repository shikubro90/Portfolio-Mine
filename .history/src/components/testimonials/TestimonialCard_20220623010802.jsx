import React from 'react';
import './testimonial.style.css'

const TestimonialCard = ({clientData}) => {
    const {id,name,img,rei} = clientData;
    return (
        <div>
             <article className='testimonial'>
                <div className="client_avatar">
                    {/* <img src={img} alt="" /> */}
                </div>
                {/* <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small> */}
            </article>
        </div>
    );
};

export default TestimonialCard;