import React from 'react';
import { useState } from 'react';
import './Nav.style.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceFill} from 'react-icons/ri';
import {BiMessageDetail} from 'react-icons/bi';


const Nav = () => {

    const [activeNav, setaActiveNav] = useState("#");

    return (
        <nav>
            <a href="#header" onClick={()=>setaActiveNav("#")} className={activeNav === "#" ? 'active': ""}><AiOutlineHome/></a>
            <a href="#about" onClick={()=>setaActiveNav("#about")} className={ activeNav === "#about" ? "active": ""} ><AiOutlineUser/></a>
            <a href="#experience" onClick={()=>setaActiveNav("#experience")} className={ activeNav === "#experience" ? "active": ""}><BiBook/></a>
            <a href="#service" onClick={()=>setaActiveNav("#service")} className={ activeNav === "#service" ? "active": ""}><RiServiceFill/></a>
            <a href="#contact" onClick={()=>setaActiveNav("#service")} className={ activeNav === "#" ? "active": ""}><BiMessageDetail/></a>
        </nav>

    );
};

export default Nav;