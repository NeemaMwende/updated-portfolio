// import React from 'react';
// import "./Bio.css";
// import angel from '../Images/image1.jpg'

// const Bio = () => {
//   return (
//     <section className='hero-container'>
//       <div className='hero-content'>
//         <h2>Building Digital Experiences That Inspire</h2>
//         <p>Passionate Full Stack Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
//       </div>

//       <div className='hero-img'>
//         <div className='tech-icon'>
//           <img src={angel} alt="" /> {/* Placeholder image */}
//           <FaReact style={{ color: '#61DBFB' }} /> {/* React icon */}
//         </div>

//         <div>
          
        
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Bio;
import React from 'react';
// import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'; // Importing icons from Font Awesome
import "./Bio.css";
import angel from '../Images/image1.jpg';

const Bio = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Building Digital Experiences That Inspire</h2>
        <p>Passionate Full Stack Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
      </div>
      <div className='hero-img'>
        <img src={angel} alt="Profile" className='profile-img' />

      </div>
    </section>
  );
};

export default Bio;
