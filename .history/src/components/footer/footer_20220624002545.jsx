import React from 'react';
import './footer.style.css';
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

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
                    <a href="https://facebook.com"><FaFacebookF/></a>
                    <a href="https://facebook.com"><FiInstagram/></a>
                    <a href="https://facebook.com"><IoLogoTwitter/></a>
                </div>

                <div className="footer__copyright">
                    <small>
                        &copy; My 
                    </small>
                </div>

            </footer>
        </section>
    );
};

export default footer;