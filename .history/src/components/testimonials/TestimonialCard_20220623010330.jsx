import React from 'react';


const TestimonialCard = ({id,name,img,review}) => {
    console.log(img);
    return (
        <div>
             <article className='testimonial'>
                <div className="client_avatar">
                    <img src={img} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </article>
        </div>
    );
};

export default TestimonialCard;