// import React from 'react';
// import './blood-button.scss';
// import { useLocation } from 'react-router-dom';

// interface BloodButtonProps {
//   buttonName: string;
//   type?: 'button' | 'submit' | 'reset';
// }

// const BloodButton: React.FC<BloodButtonProps> = ({ buttonName, type = 'button' }) => {
//     const location = useLocation();
//     const isWhite = location.pathname === '/login' || location.pathname === '/register';
  
//     return (
//       <button className={`blood-btn ${isWhite? 'white-btn' : ''}`} type={type}>
//         {buttonName}
//       </button>
//     );
//   };
  
//   export default BloodButton;


import React from 'react';
import './blood-button.scss';

interface BloodButtonProps {
  buttonName: string;
  type?: 'button' | 'submit' | 'reset';
}

const BloodButton: React.FC<BloodButtonProps> = ({ buttonName, type = 'button' }) => {
  return (
    <button className="blood-btn" type={type}>
      {buttonName}
    </button>
  );
};

export default BloodButton;