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
                            <BsPatchCheckFill/>
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
                            <h5>React</h5>
                            <small className='text-light'>Experience</small>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h5>HTML5</h5>
                            <small className='text-light'>Experience 95% </small>
                        </article>

                    </div>
                </div>

                {/* END OF FRONT END */}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                        <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>Node Js</h4>
                            <small className='text-light'> Experience 95% </small>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>MongoDB</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>MySqL</h4>
                            <small className='text-light'>Experience 95% </small>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>Python</h4>
                            <small className='text-light'>Experience 95% </small>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h5>Bootstrap</h5>
                            <small className='text-light'>Experience</small>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h5>React Native</h5>
                            <small className='text-light'>Experience 95% </small>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default experience;