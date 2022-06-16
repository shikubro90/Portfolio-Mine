import React from 'react';
import CTA from './CTA';
import './Header.style.css';
import myImage from '../../assets/me.jpg';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Rakibul Islam Shiku</h1>
                <h5 className='text-light'>I'm a Fullstack Web Developer</h5>
                <CTA/>

                <div className="me">
                    <img src={myImage} alt="" />
                </div>

                <div  className="scroll_down">
                    <a href="#contact">Scroll Down</a>
                </div>
            </div>
        </header>
        
    );
};

export default Header;