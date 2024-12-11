


import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Menu.css";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);
  const [newMenu, setNewMenu] = useState({ name: "", description: "" });
  const [newItem, setNewItem] = useState({ name: "", description: "", price: "" });

  // Fetch menus on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/menus")
      .then((response) => setMenus(response.data))
      .catch((error) => console.error("Error fetching menus:", error));
  }, []);

  const handleAddMenu = () => {
    if (!newMenu.name.trim()) return;
    axios
      .post("http://localhost:5000/api/menus", newMenu)
      .then((response) => {
        setMenus([...menus, response.data]);
        setNewMenu({ name: "", description: "" });
      })
      .catch((error) => console.error("Error adding menu:", error));
  };

  const handleAddItem = () => {
    if (selectedMenuIndex === null || !newItem.name.trim()) return;
    const menuId = menus[selectedMenuIndex]._id;

    axios
      .post(`http://localhost:5000/api/menus/${menuId}/items`, newItem)
      .then((response) => {
        const updatedMenus = [...menus];
        updatedMenus[selectedMenuIndex] = response.data;
        setMenus(updatedMenus);
        setNewItem({ name: "", description: "", price: "" });
      })
      .catch((error) => console.error("Error adding item:", error));
  };

  return (
    <div className="menu">
      <div className="menu-intro">
        <h1>MENU</h1>
        <p>
          Please take a look at our menu featuring food, drinks, and brunch. If you'd like to
          place an order, use the "Order Online" button located below the menu.
        </p>
      </div>
  <div className="menu-add">
  <h2>Add New Menu</h2>
  <input
    type="text"
    placeholder="Menu Name"
    value={newMenu.name}
    onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
  />
  <input
    type="text"
    placeholder="Menu Description"
    value={newMenu.description}
    onChange={(e) => setNewMenu({ ...newMenu, description: e.target.value })}
  />
  <button  onClick={handleAddMenu} ClassName="blue-button">Add Menu</button>
</div>
<div className="menu-list">
  {menus.map((menu, index) => (
    <div
      key={menu._id}
      className={`menu-header ${selectedMenuIndex === index ? "active" : ""}`}
      onClick={() => setSelectedMenuIndex(index)}
    >
      <button className="menu-button">{menu.name}</button>
      <p>{menu.description}</p>
    </div>
  ))}
</div>


      {selectedMenuIndex !== null && (
        <>
          <div className="menu-add-item">
            <h2>Add Item to {menus[selectedMenuIndex].name}</h2>
            <input
              type="text"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Item Description"
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Item Price"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            />
            <button onClick={handleAddItem}>Add Item</button>
          </div>
          <div className="menu-items">
            <h2>{menus[selectedMenuIndex].name} Items</h2>
            {menus[selectedMenuIndex].items.map((item, index) => (
              <div key={index} className="menu-item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
