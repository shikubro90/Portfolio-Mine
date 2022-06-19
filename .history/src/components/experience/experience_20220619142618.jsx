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
                            <h5>HTML5</h5>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                
                </div>

                <div className="experience__design">

                </div>

                <div className="experience_cms">

                </div>
            </div>
        </section>
    );
};

export default experience;