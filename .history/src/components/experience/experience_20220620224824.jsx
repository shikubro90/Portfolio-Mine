import React from 'react';
import './experience.style.css';
import {BsPatchCheckFill} from 'react-icons/bs';


const experience = () => {
    return (
        <section id='experience'>
            <h5>What Experience I've</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">

                <div className="experience__frontend">
                    <h3>Fronted Development</h3>
                    <div className="experience__content">
                        
                        <article className='experience__details'>
                            <BsPatchCheckFill className=''/>
                            <div>
                                <h4>HTML5</h4>
                                <small className='text-light'> Experience 95% </small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                                <h4>CSS3</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experience 95% </small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experience 95% </small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experience 95% </small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experience 95% </small>
                            </div>
                        </article>

                    </div>
                </div>

                {/* END OF FRONT END */}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                        <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                                <h4>Node js</h4>
                                <small className='text-light'>Experience 95% </small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Experience 95% </small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Experience 95% </small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Experience 95% </small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                                <h4>MyS</h4>
                                <small className='text-light'>Experience 95% </small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experience 95% </small>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default experience;