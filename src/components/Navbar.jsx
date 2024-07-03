import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav';
import angel from "../Images/angel3.png";
// import { Link } from 'react-router-dom';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
            <>
                <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

                <nav className='nav-wrapper'>
                    <div className='nav-content'>
                        <img className='logo' src={angel} alt='' />

                        <ul>
                            <li id='#home-section'><a className="menu-item" href='#home-section'>Home</a></li>
                            <li id='#skills-section'><a className="menu-item" href='#skills-section'>Skills</a></li>
                            <li id='#work-section'><a className="menu-item" href='#work-section'>Work Experience</a></li>
                            <li id='#projects-section'><a className="menu-item" href='#projects-section'>Projects</a></li>
                            <li id='#resume'><a className="menu-item" href='#resume'>Resume</a></li>
                            <li id='#contact-section'><a className="menu-item" href='#contact-section'>Contact Me</a></li>

                         <div className='btns'>
                            <button className='contact-btn' onClick={scrollToContact}>Hire Me</button>
                            <a href="./Neema_Mwende_Resume.pdf" download>
                            <button className='contact-btnn' onClick={() => {}}>Download Resume</button>
                            </a>
                        </div>  
                        
                        </ul>

                        <button className='menu-btn' onClick={toggleMenu}>
                            <span 
                                className={"material-symbols-outlined"} 
                                style={{ fontSize:"1.8rem" }}>
                                    {openMenu ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </nav>
            </>
    );
};

export default Navbar;