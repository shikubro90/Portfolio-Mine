import React from 'react';
import './Nav.style.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceFill} from 'react-icons/ri';

const Nav = () => {
    return (
        <nav>
            <a href="#header"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#services"><RiServiceFill/></a>
            <a href="#contact"><AiOutlineHome/></a>
        </nav>

    );
};

export default Nav;