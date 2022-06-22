import React from 'react';
import './contact.style.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs';

const contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact__options">
                    <article className='contact_option'>
                        <MdOutlineEmail/>
                        <h4>Facebook</h4>
                        <h5>shikubro90@gmail.com</h5>
                        <a href='mailto:shikubro90@gmail.com'>Send Email</a>
                    </article>
                    <article className='contact_option'>
                        <RiMessengerLine/>
                        <h4>Email</h4>
                        <h5>Rakibul Islam Shiku</h5>
                        <a href='https://www.facebook.com/rakibpaholn'>Inbox</a>
                    </article>
                    <article className='contact_option'>
                        <BsWhatsapp/>
                        <h4>WhatsApp</h4>
                        <h5>01720608590</h5>
                        <a href='https://api.whatsapp.com/send?phone+8801720608590' target={}>Chat List</a>
                    </article>
                </div>
                {/* End of Contact Option */}
                <form action="">

                </form>
            </div>
        </section>
    );
};

export default contact;