import React from 'react';
import { useState } from 'react';
import './Nav.style.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceFill} from 'react-icons/ri';
import {BiMessageDetail} from 'react-icons/bi';


const Nav = () => {

    const [activeNav, setaActiveNav] = useState("");

    return (
        <nav>
            <a href="#header" onClick={()=>setaActiveNav("#")} className={activeNav === "#" ? 'active': ""}><AiOutlineHome/></a>
            <a href="#about" onClick={()=>setActiveNav("#about")} ><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#service"><RiServiceFill/></a>
            <a href="#contact"><BiMessageDetail/></a>
        </nav>

    );
};

export default Nav;