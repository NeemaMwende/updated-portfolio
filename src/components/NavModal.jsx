// import React from 'react'
// import { useState } from 'react';


// const NavModal = ({ isOpen, onClose }) => {
//     if (!isOpen) return null;
//     const [isModalOPen, setIsModalOpen] = useState (false);

//     const closeModal = () => {
//         setIsModalOpen(false);
//     }

//     const handleResumeClick = () => {
//         setIsModalOpen(true);
//     }

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <h2>Thank you for downloading my resume!</h2>
//                 {/* <button className="close-btn" onClick={onClose}>Close</button> */}
//             </div>
//             <Modal isOpen={isModalOpen} onClose={closeModal} />
//         </div>
//     );
// };

// export default NavModal;