import React from 'react';
import './service.style.css'
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
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                    </ul>

                </article>
                {/* End of UI/UX Design */}
                <article className='services'>
                    
                    <div className="services__head">
                        <h3>Web Application</h3>
                    </div>

                    <ul>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                    </ul>

                </article>
                {/* End of UI/UX Design */}
                <article className='services'>
                    <div className="services__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p></p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default services;