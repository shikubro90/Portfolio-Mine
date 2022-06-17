import React from 'react';
import './about.style.css';
import about_me from "../../assets/about_me.jpg";

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
                    .bout
                </div>
            </div>

        </section>
    );
};

export default about;   