import React from 'react';
import './Nav.style.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';

const Nav = () => {
    return (
        <nav>
            <a href="#header"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineHome/></a>
            <a href="#experience"><AiOutlineHome/></a>
            <a href="#services"><AiOutlineHome/></a>
            <a href="#contact"><AiOutlineHome/></a>
        </nav>

    );
};

export default Nav;