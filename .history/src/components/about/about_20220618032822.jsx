import React from 'react';
import './about.style.css';
import about_me from "../../assets/about_me.png";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about_me_image">
                        <img src={about_me} alt="" />
                    </div>
                </div>

                <div className="about_me_content">
                    <div className="about__cards">
                        
                        <article className='about__card'>
                            <FaAward  className="about__card__icon"/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                    
                        <article className='about__card'>
                            <FiUsers  className="about__card__icon"/>
                            <h5>Clients</h5>
                            <small>200+ World Wide</small>
                        </article>
                    
                        <article className='about__card'>
                            <VscFolderLibrary  className="about__card__icon"/>
                            <h5>Projects</h5>
                            <small>80+ Complete</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsam atque praesentium repellat nulla quis tempore quasi sequi, perspiciatis modi eligendi reiciendis maiores expedita consectetur eum hic maxime provident ab.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>

        </section>
    );
};

export default about;   