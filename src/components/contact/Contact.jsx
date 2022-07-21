import React from 'react';
import './contact.css'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xazmyf1', 'template_1mykibe', form.current, 'DpVfovdohNr8qQrrS')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me </h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>himiknainwalofficial@gmail.com</h5>
          <a href="mailto:himiknainwalofficial@gmail.com"target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <AiFillInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>DM me in Nature Feel Heaven</h5>
          <a href="https://www.instagram.com/nature_feel_heaven/" target="_blank">I love photography too.</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+91 9557143501 </h5>
          <a href="https://wa.me/+919557143501"target="_blank">Whatsapp me Here </a>
        </article>
        </div>
        {/* End OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name ' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact