import { useRef } from 'react';
import './contact.style.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();

    const formSubmit=(e)=>{
        e.preventDefault();

        e.sendForm('service_0f82hia', 'template_7i8h16j', form.current, "xvAaL5syUfyf0SnBv" );

        e.target.reset();

    }

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact__options">
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact__option_icon'/>
                        <h4>Facebook</h4>
                        <h5>shikubro90@gmail.com</h5>
                        <a href='mailto:shikubro90@gmail.com'target="_blank">Send Email</a>
                    </article>
                    <article className='contact_option'>
                        <RiMessengerLine className='contact__option_icon'/>
                        <h4>Email</h4>
                        <h5>Rakibul Islam Shiku</h5>
                        <a href='https://www.facebook.com/rakibpaholn.achiever' target="_blank">Inbox</a>
                    </article>
                    <article className='contact_option'>
                        <BsWhatsapp className='contact__option_icon'/>
                        <h4>WhatsApp</h4>
                        <h5>01720608590</h5>
                        <a href='https://api.whatsapp.com/send?phone+8801720608590' target="_blank">Chat List</a>
                    </article>
                </div>
                {/* End of Contact Option */}
                <form ref={form} onSubmit={formSubmit}>
                    <input type="text" name="name" placeholder="Your Full Name " required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="7"  placeholder="Your Message"></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;