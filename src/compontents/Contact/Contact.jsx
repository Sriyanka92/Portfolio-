import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

    emailjs
      .sendForm('service_madm5nc', 'template_zhlbhtg', form.current, {
        publicKey: 'Wh21FBCTdZnpxreo8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email Send')
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section>
        <div id="contact">
           <h1 className='contactPageTitle'>Contact Me</h1>
           <span className='contactDesc'> Please fill out the form below to discuss any work opportumities </span>
           <form action="" className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type="text" className='name'placeholder='  Your Name'name="your_name"/>
              <input type="email" className='email'placeholder=' Your Email' name="your_email" />
              <input type="subject"  className='subject'placeholder='Subject' name="subject"/>
               <textarea name="message" className='msg'rows={5} placeholder=' Message' id=""></textarea>
               <button type='submit' value='send' className='submitBtn'>Send Message</button>
               
           </form>
        </div>
    </section>
  )
}

export default Contact