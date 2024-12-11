// import React from 'react';
// import '../styles/Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="logo">DEEP NET SOFT</div>
//       <div className="links">
//       <a href="#menu">Home</a>
//         <a href="#menu">MENU</a>
//         <a href="#reservation">MAKE A RESERVATION</a>
//         <a href="#contact">CONTACT US</a>
//         <a href="#contact">Add Menu</a>

//       </div>
//     </div>
//   );
// };

// export default Navbar;





import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">DEEP NET SOFT</div>
      <div className="links">
        <Link to="/menu">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Make a Reservation</Link>
        <Link to="/contact">Contact Us</Link>
        
      </div>
    </div>
  );
};

export default Navbar;



