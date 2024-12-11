// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [menus, setMenus] = useState([]);
//   const [selectedMenu, setSelectedMenu] = useState(null);
//   const [form, setForm] = useState({ name: '', description: '', items: [] });
//   const [newItem, setNewItem] = useState({ name: '', description: '', price: '' });

//   useEffect(() => {
//     fetchMenus();
//   }, []);

//   const fetchMenus = async () => {
//     const response = await axios.get('http://localhost:5000/api/menus');
//     setMenus(response.data);
//   };

//   const handleFormChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleItemChange = (e) => {
//     setNewItem({ ...newItem, [e.target.name]: e.target.value });
//   };

//   const addItem = () => {
//     setForm({ ...form, items: [...form.items, newItem] });
//     setNewItem({ name: '', description: '', price: '' });
//   };

//   const createMenu = async () => {
//     await axios.post('http://localhost:5000/api/menus', form);
//     setForm({ name: '', description: '', items: [] });
//     fetchMenus();
//   };

//   return (
//     <div className="app">
//       <header className="header">
//         <h1>Dynamic Menu</h1>
//       </header>

//       <div className="content">
//         <aside className="menu-list">
//           <h2>Menus</h2>
//           {menus.map((menu) => (
//             <button key={menu._id} onClick={() => setSelectedMenu(menu)}>
//               {menu.name}
//             </button>
//           ))}
//         </aside>

//         <main className="menu-details">
//           {selectedMenu ? (
//             <>
//               <h2>{selectedMenu.name}</h2>
//               <p>{selectedMenu.description}</p>
//               <ul>
//                 {selectedMenu.items.map((item, index) => (
//                   <li key={index}>
//                     <strong>{item.name}</strong> - {item.description} (${item.price})
//                   </li>
//                 ))}
//               </ul>
//             </>
//           ) : (
//             <p>Select a menu to view details</p>
//           )}
//         </main>

//         <section className="create-menu">
//           <h2>Create Menu</h2>
//           <input
//             type="text"
//             name="name"
//             placeholder="Menu Name"
//             value={form.name}
//             onChange={handleFormChange}
//           />
//           <textarea
//             name="description"
//             placeholder="Menu Description"
//             value={form.description}
//             onChange={handleFormChange}
//           />
//           <div className="add-item">
//             <input
//               type="text"
//               name="name"
//               placeholder="Item Name"
//               value={newItem.name}
//               onChange={handleItemChange}
//             />
//             <input
//               type="text"
//               name="description"
//               placeholder="Item Description"
//               value={newItem.description}
//               onChange={handleItemChange}
//             />
//             <input
//               type="number"
//               name="price"
//               placeholder="Price"
//               value={newItem.price}
//               onChange={handleItemChange}
//             />
//             <button onClick={addItem}>Add Item</button>
//           </div>
//           <button onClick={createMenu}>Create Menu</button>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default App;




// import React from 'react';
// import Navbar from './assets/components/Navbar';
// import Menu from './assets/components/Menu';
// import Footer from './assets/components/Footer';
// import './App.css';

// const App = () => {
//   return (
//     <div>
//      <Navbar />
//       <Menu />
//       <Footer/>
//     </div>
//   );
// };

// export default App;





// // App.jsx
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './assets/components/Navbar';
// import Menu from './assets/components/Menu';
// import Footer from './assets/components/Footer';
// import AddMenu from './assets/components/AddMenu';
//  // Ensure this line is added

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
       
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/reservation" element={<div>Reservation Page</div>} />
//         <Route path="/contact" element={<div>Contact Page</div>} />
//         <Route path="/add-menu" element={<AddMenu />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;





// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './assets/components/Navbar';
// import Menu from './assets/components/Menu';
// import Footer from './assets/components/Footer';
// // import AddMenu from './assets/components/AddMenu';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/menu" element={<Menu/>} />
//         <Route path="/reservation" element={<div id="reservation-section">Reservation Page</div>} />
//         <Route path="/contact" element={<div id="contact-section">Contact Page</div>} />
//         {/* <Route path="/add-menu" element={<AddMenu />} /> */}
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Menu from './assets/components/Menu';
import Footer from './assets/components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="menu-section">
        <Routes>
          {/* Add a default route for the home page */}
          <Route path="/" element={<Menu />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </section>

      <section id="reservation-section">
        <Routes>
          <Route path="/reservation" element={<div>Make a Reservation</div>} />
        </Routes>
      </section>

      <section id="contact-section">
        <Routes>
          <Route path="/contact" element={<div>Contact Details</div>} />
        </Routes>
      </section>

      <Footer />
    </div>
  );
};

export default App;
