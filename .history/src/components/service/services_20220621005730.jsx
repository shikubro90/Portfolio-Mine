import React from 'react';
import {BiCheck} from 'react-icons/bi'

const services = () => {
    return (
        <section id='service'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container container__services">
                <article className='services'>
                    <div className="services__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul>
                        <BiCheck className='service__list-icon'/>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, esse.
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default services;