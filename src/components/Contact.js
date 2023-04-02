import React from 'react';
import '../CSS/Contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {BsMessenger} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1Elohim3', 'template_l6myfdo', form.current, 'L7jf-XnUpWNrTrBly')
    alert('Message has been sent' )
    e.target.reset()
  };

  return (
    <section id='contact'>
       <div className='title'>
          <p>Get In Touch</p>
          <h4>Contact Me</h4>
        </div>
    
      <div className='container contact_container'>
        <div className='contact_options'>
            <article className='contact_option'>
              <AiOutlineMail className='contact_option-icon'/>
              <p>Email</p>
              <p>allanjaysarino@gmail.com</p>
              <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_black'>Send a message</a>
            </article>
            <article className='contact_option'>
              <BsMessenger className='contact_option-icon'/>
              <p>Messenger</p>
              <p>Allan Jay Sarino</p>
                <a href='https://m.me/' target='_black'>Send a message</a>
              </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email Address' required/>
            <textarea name='message' aria-rowspan='10' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-warning'>Send Message</button>
          </form>

      </div>
    </section>
  )
}

export default Contact