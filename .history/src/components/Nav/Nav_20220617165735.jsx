import React from 'react';
import { useState } from 'react';
import './Nav.style.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceFill} from 'react-icons/ri';
import {BiMessageDetail} from 'react-icons/bi';


const Nav = () => {

    const [activeNav, SetactiveNav] = useState("#");

    return (
        <nav>
            <a href="#header" {activeNav === "#"}><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#service"><RiServiceFill/></a>
            <a href="#contact"><BiMessageDetail/></a>
        </nav>

    );
};

export default Nav;