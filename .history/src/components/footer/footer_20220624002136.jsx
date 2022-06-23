import React from 'react';
import './footer.style.css';
import {FaFacebookF} from

const footer = () => {
    return (
        <section id='#footer'>
            <footer>
                <a href="#" className='footer__logo'>EGATOR</a>
                <ul className='permalink'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonials">Testimonial</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
                <div className="footer__socials">
                    <a href="https://facebook.com"></a>
                    <a href="https://facebook.com"></a>
                    <a href="https://facebook.com"></a>
                </div>
            </footer>
        </section>
    );
};

export default footer;