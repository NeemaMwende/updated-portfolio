import React from 'react';
import "./ContactMe.css";
import ContactMeCard from "./ContactMeCard";
import email from "../Images/email1.png";
import github from "../Images/github1.png";
import linkedIn from "../Images/linkedin1.png";
import twitter from "../Images/twitter2.png";
import ContactForm from './ContactForm';

const ContactMe = () => {
  return (
    <section className='contact-container' id='contact-section'>
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <a href="mailto:neemamwende009@gmail.com" target="_blank" rel="noopener noreferrer">
            <ContactMeCard
              iconUrl={email}
              text="neemamwende009@gmail.com"
            />
          </a>
          <a href="https://github.com/NeemaMwende" target="_blank" rel="noopener noreferrer">
            <ContactMeCard
              iconUrl={github}
              text="https://github.com/NeemaMwende"
            />
          </a>
          <a href="https://www.linkedin.com/in/neema-mwende-2089a8273" target="_blank" rel="noopener noreferrer">
            <ContactMeCard
              iconUrl={linkedIn}
              text="https://www.linkedin.com/in/neema-mwende-2089a8273"
            />
          </a>
          <a href="https://x.com/GracePeter1212" target="_blank" rel="noopener noreferrer">
            <ContactMeCard
              iconUrl={twitter}
              text="https://x.com/GracePeter1212"
            />
          </a>
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
      <div className='copywrite'>
        <h3>Neema Mwende</h3>
        <p>Thank you for visiting my portfolio, Feel free to contact me</p>
      </div>
    </section>
  );
};

export default ContactMe;
