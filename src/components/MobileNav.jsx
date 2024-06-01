import React from 'react'
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
            <div 
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>
                
                <div className='mobile-menu-container'>
                    <img className='logo' src="./assets/logo2.jpeg" alt="" />

                    <ul>
                        <li><a className="menu-item">Home</a></li>
                        <li><a className="menu-item">Skills</a></li>
                        <li><a className="menu-item">Projects</a></li>
                        <li><a className="menu-item"></a>Work Experience</li>
                        <li><a className="menu-item"></a>Contact Me</li>

                        <button className='contact-btn' id='contact' onClick={() => {}}>Hire Me</button>
                    </ul>
                </div>
            </div>
    </>
  )
}

export default MobileNav;