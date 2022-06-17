import React from 'react';
import './about.style.css';
import about_me from "../../assets/about_me.jpg";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vcs'


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
                        <FaAward  className="about__card__icon"/>
                        <article className='about__card'>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                    </div>

                    <div className="about__cards">
                        <FiUsers  className="about__card__icon"/>
                        <article className='about__card'>
                            <h5>Clients</h5>
                            <small>200+ World Wide</small>
                        </article>
                    </div>

                    <div className="about__cards">
                        <VcsFolderLibrary  className="about__card__icon"/>
                        <article className='about__card'>
                            <h5>Projects</h5>
                            <small>80+ Complete</small>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default about;   